type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Text: React.FC<Props> = ({ children, className = '' }) => {
    return <p className={`w-full text-[15px] sm:text-[14px] text-[#fff] ${className}`}>{children}</p>;
};
