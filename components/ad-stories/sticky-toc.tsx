"use client";

import { cn } from "@/lib/utils";
import { Link as ScrollLink } from "react-scroll";

const sections = ["Problem", "Concept", "Production", "Operation", "Outcome"];

export function StickyTOC() {
    return (
        <div className="hidden lg:block sticky top-32 space-y-4">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Story Index</h4>
            <ul className="space-y-4 border-l border-white/10">
                {sections.map(section => (
                    <li key={section} className="pl-4">
                        <ScrollLink
                            to={section.toLowerCase()}
                            smooth={true}
                            offset={-100}
                            spy={true}
                            activeClass="text-white border-l-2 border-white pl-[14px] -ml-[17px]"
                            className="text-gray-500 hover:text-gray-300 cursor-pointer text-sm font-medium block transition-all"
                        >
                            {section}
                        </ScrollLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}
