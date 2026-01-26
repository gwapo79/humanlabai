// middleware.ts
// CEO 지침: Admin 경로 보호 + 화이트리스트 강제 적용
import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

// 화이트리스트 (CEO 지침: bizgguya@gmail.com만 허용)
const ADMIN_WHITELIST = ['bizgguya@gmail.com'];

export async function middleware(request: NextRequest) {
    // Admin 경로가 아니면 바로 통과
    if (!request.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.next();
    }

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
                    cookiesToSet.forEach(({ name, value }) =>
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
        // 권한 없는 사용자 → 로그인 페이지로
        const redirectResponse = NextResponse.redirect(new URL('/admin/login?error=unauthorized', request.url));
        return redirectResponse;
    }

    return response;
}

export const config = {
    matcher: [
        // Admin 경로만 매칭
        '/admin/:path*',
    ],
};
