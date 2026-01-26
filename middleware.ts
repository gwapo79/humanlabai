// middleware.ts
// CEO 지침: Admin 경로 보호 + 화이트리스트 강제 적용
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

// 화이트리스트 (환경변수에서 로드하지 못할 경우 기본값)
const ADMIN_WHITELIST = ['bizgguya@gmail.com'];

export async function middleware(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        request.cookies.set(name, value)
                    );
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    // Refresh session if expired
    const { data: { user } } = await supabase.auth.getUser();

    // Admin 경로 보호 (/admin/* 단, /admin/login 제외)
    if (request.nextUrl.pathname.startsWith('/admin')) {
        // 로그인 페이지는 통과
        if (request.nextUrl.pathname === '/admin/login') {
            // 이미 로그인된 화이트리스트 사용자는 대시보드로 리다이렉트
            if (user && ADMIN_WHITELIST.includes(user.email?.toLowerCase() || '')) {
                return NextResponse.redirect(new URL('/admin', request.url));
            }
            return response;
        }

        // 미인증 사용자 → 로그인 페이지로
        if (!user) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }

        // 화이트리스트 검증 (CEO 지침: bizgguya@gmail.com만 허용)
        const userEmail = user.email?.toLowerCase() || '';
        if (!ADMIN_WHITELIST.includes(userEmail)) {
            // 권한 없는 사용자 → 강제 로그아웃 후 로그인 페이지로
            await supabase.auth.signOut();
            const redirectResponse = NextResponse.redirect(new URL('/admin/login?error=unauthorized', request.url));
            // 세션 쿠키 삭제
            redirectResponse.cookies.delete('sb-oqtdlitetexshtrsadrk-auth-token');
            return redirectResponse;
        }
    }

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
