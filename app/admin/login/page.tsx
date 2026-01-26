"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, AlertCircle } from "lucide-react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
    const router = useRouter();
    const searchParams = useSearchParams();
    const error = searchParams.get('error');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);

        const supabase = createClient();

        // CEO 지침: bizgguya@gmail.com 외 차단 (클라이언트 사전 검증)
        const WHITELIST = ['bizgguya@gmail.com'];
        if (!WHITELIST.includes(email.toLowerCase().trim())) {
            setMessage({ type: 'error', text: '접근 권한이 없는 이메일입니다.' });
            setIsLoading(false);
            return;
        }

        // Magic Link 전송
        const { error } = await supabase.auth.signInWithOtp({
            email: email,
            options: {
                emailRedirectTo: `${window.location.origin}/admin`,
            },
        });

        if (error) {
            setMessage({ type: 'error', text: error.message });
        } else {
            setMessage({ type: 'success', text: '인증 링크가 이메일로 전송되었습니다. 메일함을 확인하세요.' });
        }

        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-zinc-900 border border-white/10 p-8 rounded-2xl space-y-8">
                <div className="text-center space-y-2">
                    <Lock className="w-12 h-12 text-white mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-white">HUMANLAB ADMIN</h1>
                    <p className="text-gray-400 text-sm">Authorized Personnel Only</p>
                </div>

                {/* 에러 메시지 (URL 파라미터) */}
                {error === 'unauthorized' && (
                    <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>접근 권한이 없습니다. 승인된 계정으로 로그인하세요.</span>
                    </div>
                )}

                {/* 메시지 표시 */}
                {message && (
                    <div className={`flex items-center gap-2 p-3 rounded-lg text-sm ${message.type === 'success'
                            ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                            : 'bg-red-500/10 border border-red-500/30 text-red-400'
                        }`}>
                        {message.type === 'error' && <AlertCircle className="w-4 h-4 flex-shrink-0" />}
                        <span>{message.text}</span>
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <Input
                                type="email"
                                placeholder="Enter Admin Email"
                                className="bg-black border-white/10 pl-10"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={isLoading}
                            />
                        </div>
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-white text-black hover:bg-gray-200 font-bold"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Send Magic Link'}
                    </Button>
                </form>

                <p className="text-center text-gray-500 text-xs">
                    승인된 이메일로만 로그인이 가능합니다.
                </p>
            </div>
        </div>
    );
}

export default function AdminLogin() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="animate-pulse text-gray-500">Loading...</div>
            </div>
        }>
            <LoginForm />
        </Suspense>
    );
}
