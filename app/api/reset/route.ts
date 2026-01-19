import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase';

export async function GET() {
    try {
        console.log("🚀 Starting DB Cleanup...");

        // Delete all records from tables. 
        // Note: Assuming 'id' is not null for all records, which is true for primary keys.
        // 'neq' with a dummy value is a common trick if 'delete()' without filters implies 'delete all' but client library requires a filter for safety (often true in Supabase client).
        // Actually, Supabase JS client prevents delete without filter by default.
        // So we use .not('id', 'is', null) which covers all rows.

        const { error: pError } = await supabase.from('projects').delete().not('id', 'is', null);
        if (pError) throw pError;
        console.log("✅ Projects Cleared");

        const { error: asError } = await supabase.from('ad_stories').delete().not('id', 'is', null);
        if (asError) throw asError;
        console.log("✅ Ad Stories Cleared");

        const { error: lError } = await supabase.from('lab_notes').delete().not('id', 'is', null);
        if (lError) throw lError;
        console.log("✅ Lab Notes Cleared");

        return NextResponse.json({ message: "✅ DB Reset Completed Successfully! All tables are empty." });

    } catch (error: any) {
        console.error("❌ Reset Failed:", error);
        return NextResponse.json({
            error: error.message,
            hint: "If this failed due to RLS, please run the SQL TRUNCATE commands in your Supabase Dashboard SQL Editor."
        }, { status: 500 });
    }
}
