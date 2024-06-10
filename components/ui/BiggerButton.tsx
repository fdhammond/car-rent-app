import { BsArrowUpRight } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

interface BiggerButtonProps {
    text?: string,
    textColor?: string,
    backgroundColor?: string,
    showArrowIcon?: boolean,
    showWhatsappIcon?: boolean,
    bgColorOnHover?: string,
    textColorOnHover?: string,
    iconSize?: string
}

export default function BiggerButton({ text, textColor, backgroundColor, showArrowIcon, showWhatsappIcon, bgColorOnHover, textColorOnHover, iconSize }: BiggerButtonProps) {
    const baseClasses = `flex items-center py-[14px] px-[42px] border-[1px] rounded-[30px] border-solid text-center text-[14px]`;
    const bgColorClass = backgroundColor ? `${backgroundColor} border-none` : '';
    const hoverClasses = `${bgColorOnHover ? `${bgColorOnHover}` : ''} ${textColorOnHover ? `hover:${textColorOnHover}` : ''}`;

    return (
        <button className={`${baseClasses} ${textColor} ${bgColorClass} ${hoverClasses}`}>
            {showWhatsappIcon && <FaWhatsapp className={`mr-2 ${iconSize}`} />}
            {text}
            {showArrowIcon && <BsArrowUpRight className={`ml-2 ${iconSize}`} />}
        </button>
    );
}
