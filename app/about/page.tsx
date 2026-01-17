import { Section1Chaos } from "@/components/about/section-1-chaos";
import { Section2Barrier } from "@/components/about/section-2-barrier";
import { Section3Solution } from "@/components/about/section-3-solution";
import { Section4Promise } from "@/components/about/section-4-promise";

export default function AboutPage() {
    return (
        <main className="bg-black text-white selection:bg-purple-500/30">
            <Section1Chaos />
            <Section2Barrier />
            <Section3Solution />
            <Section4Promise />
        </main>
    );
}
