"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";

export default function AdminLogin() {
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple Mock Auth: Check against a hardcoded "secret" for MVP
        if (password === "humanlab1234") {
            // Set a mock cookie or local storage
            localStorage.setItem("admin_auth", "true");
            router.push("/admin");
        } else {
            alert("비밀번호가 일치하지 않습니다.");
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-zinc-900 border border-white/10 p-8 rounded-2xl space-y-8">
                <div className="text-center space-y-2">
                    <Lock className="w-12 h-12 text-white mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-white">HUMANLAB ADMIN</h1>
                    <p className="text-gray-400 text-sm">Authorized Personnel Only</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                        <Input
                            type="password"
                            placeholder="Enter Access Key"
                            className="bg-black border-white/10 text-center tracking-widest"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 font-bold">
                        Access Dashboard
                    </Button>
                </form>
            </div>
        </div>
    );
}
