import { ReactNode } from "react";

export interface ICardSkills {
    icon: ReactNode;
    title: string;
    desc?: string;
    color?: ColorIcon;
}

export type ColorIcon = keyof typeof EnumColorx;
export enum EnumColorx {
    html = 'text-[#e34f26]',
    css = 'text-[#002561]',
    tailwind = 'text-[#38BDF8]',
    antDesgin = 'text-[#107BFF]',
    javascript = 'text-[#002561]',
    nextJs = 'text-[#000000]',
}
