type Props = {
    src: string;
    alt?: string;
    className?: string;
};

export const UserImg: React.FC<Props> = ({ src, alt, className = '' }) => {
    return (
        <div className={`relative w-[120px] h-[120px] rounded-[50%] overflow-hidden m-auto bg-[#333] ${className}`}>
            <img src={src} alt={alt} className='absolute top-0 left-0 w-full h-full object-cover object-center' />
        </div>
    );
};
