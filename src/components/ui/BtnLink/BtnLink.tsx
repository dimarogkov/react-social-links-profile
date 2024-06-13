import { Link } from 'react-router-dom';

type Props = {
    children: React.ReactNode;
    href: string;
    className?: string;
};

export const BtnLink: React.FC<Props> = ({ children, href, className = '' }) => {
    return (
        <Link
            to={href}
            className={`flex items-center justify-center w-full h-[44px] font-medium text-[15px] sm:text-[14px] px-[16px] rounded-[8px] text-[#fff] bg-[#333] transition-color duration-300 hover:text-[#141414] hover:bg-[#c5f82a] ${className}`}
        >
            {children}
        </Link>
    );
};
