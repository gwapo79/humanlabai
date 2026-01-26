// lib/supabase/server.ts
// Supabase Server Client for Next.js App Router
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createClient() {
    const cookieStore = await cookies();

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll();
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options)
                        );
                    } catch {
                        // The `setAll` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing user sessions.
                    }
                },
            },
        }
    );
}

// Admin 화이트리스트 검증 함수 (CEO 지침: bizgguya@gmail.com만 허용)
const ADMIN_WHITELIST = (process.env.ADMIN_WHITELIST_EMAILS || '').split(',').map(e => e.trim().toLowerCase());

export function isAdminEmail(email: string | undefined | null): boolean {
    if (!email) return false;
    return ADMIN_WHITELIST.includes(email.toLowerCase().trim());
}
