import { IconType } from 'react-icons';

interface FooterSocialButtonProps {
    icon: IconType;
}

export default function FooterSocialButton({ icon: Icon }: FooterSocialButtonProps) {
    return (
        <button className="flex justify-center items-center w-[50px] h-[50px] border-[1px] border-yellow-general rounded-[50%] p-4 hover:bg-yellow-general group">
            <Icon className="w-6 h-6 text-white group-hover:text-black" />
        </button>
    )
}
