"use client";

import AtelierHero from "@/components/projects/atelier-26/atelier-hero";
import AtelierFoundation from "@/components/projects/atelier-26/atelier-foundation";
import AtelierForm from "@/components/projects/atelier-26/atelier-form";
import AtelierCoreLogic from "@/components/projects/atelier-26/atelier-core-logic";
import { AtelierShowcase } from "@/components/projects/atelier-showcase";

export default function AtelierProjectPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white">
            <AtelierHero />
            <AtelierFoundation />
            <AtelierForm />
            <AtelierShowcase />
            <AtelierCoreLogic />
        </main>
    );
}

