type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Label: React.FC<Props> = ({ children, className = '' }) => {
    return <p className={`w-full font-medium text-[15px] sm:text-[14px] text-[#c5f82a] ${className}`}>{children}</p>;
};
