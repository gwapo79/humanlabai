// utils/supabase.ts
import { createClient } from '@supabase/supabase-js';

// 환경변수 로드 확인 (디버깅용 안전장치)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("⚠️ Supabase 환경변수가 설정되지 않았습니다. .env.local 파일을 확인하세요.");
    throw new Error("Supabase Env Missing");
}
console.log("✅ Supabase Client Initialized with URL:", supabaseUrl);

// 클라이언트 객체 생성 및 내보내기
export const supabase = createClient(supabaseUrl, supabaseKey);
