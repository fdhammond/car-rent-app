'use client';
import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

interface AccordionProps {
    order: string;
    title: string;
    content: string;
}

export default function Accordion({ order, title, content }: AccordionProps) {
    const [open, setOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            if (open) {
                setHeight(contentRef.current.scrollHeight);
            } else {
                setHeight(0);
            }
        }
    }, [open]);

    return (
        <div className="md:max-w-[736px] mb-[15px]">
            <div onClick={() => setOpen(!open)} className={`flex p-[30px] transition-colors duration-500 ${open ? 'bg-yellow-general rounded-t-[20px] rounded-b-none' : 'bg-[#333333] rounded-[20px]'}`}>
                <h1 className={`text-[16px] font-bold ${open ? 'text-[#1b1b1b]' : 'text-white'} `}>
                    <span className={`${open ? 'text-[#1b1b1b]' : 'text-yellow-general'} font-bold mr-4`}>{order}.</span>{title}
                </h1>
                <div className={`ml-auto ${open ? 'text-[#1b1b1b]' : 'text-yellow-general'} `}>
                    {open ? <MdKeyboardArrowDown className="w-6 h-6" /> : <MdKeyboardArrowRight className="w-6 h-6" />}
                </div>
            </div>
            <div
                ref={contentRef}
                className={`overflow-hidden transition-all duration-500 ${open ? 'opacity-100' : 'opacity-0'}`}
                style={{ height: `${height}px` }}
            >
                <div className="p-[30px] bg-[#333333] rounded-b-[20px]">
                    <p className="text-[14px] text-[#999]">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    );
}
