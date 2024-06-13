type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Title: React.FC<Props> = ({ children, className = '' }) => {
    return <h1 className={`w-full text-[28px] font-medium text-[#fff] ${className}`}>{children}</h1>;
};
