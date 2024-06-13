type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Card: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <div
            className={`w-full max-w-[500px] p-[24px] md:p-[40px] rounded-[12px] text-center bg-[#1f1f1f] ${className}`}
        >
            {children}
        </div>
    );
};
