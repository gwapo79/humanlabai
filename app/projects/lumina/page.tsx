"use client";

import LuminaHero from "@/components/projects/lumina/lumina-hero";
import LuminaFoundation from "@/components/projects/lumina/lumina-foundation";
import LuminaConstruction from "@/components/projects/lumina/lumina-construction";
import LuminaForm from "@/components/projects/lumina/lumina-form";
import LuminaExpression from "@/components/projects/lumina/lumina-expression";
import LuminaLivingSystem from "@/components/projects/lumina/lumina-living-system";
import LuminaCollaboration from "@/components/projects/lumina/lumina-collaboration";
import LuminaCoreLogic from "@/components/projects/lumina/lumina-core-logic";

export default function LuminaPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white">
            <LuminaHero />
            <LuminaFoundation />
            <LuminaConstruction />
            <LuminaForm />
            <LuminaExpression />
            <LuminaLivingSystem />
            <LuminaCoreLogic />
        </main>
    );
}
