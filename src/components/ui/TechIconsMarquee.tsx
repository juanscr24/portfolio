"use client";

import { icons } from "@/constants/icons";
import Reveal from "./Reveal";

export default function TechIconsMarquee() {
    return (
        <div className="relative overflow-hidden py-20">
            <div className="flex items-center gap-20 animate-icons-marquee">
                {[...icons, ...icons].map(({ id, Icon }, index) => (
                    <div
                        key={`${id}-${index}`}
                        className="text-(--text-2) hover:text-(--text-1) transition-colors duration-200 text-5xl max-md:text-4xl"
                    >
                        <Reveal delay={0.1 * index}>
                            <Icon />
                        </Reveal>
                    </div>
                ))}
            </div>
        </div>
    );
}
