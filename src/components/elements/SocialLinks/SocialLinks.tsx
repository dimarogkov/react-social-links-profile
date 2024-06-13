import { Link } from '../../../types/link';
import { BtnLink } from '../../ui/BtnLink';

type Props = {
    links: Link[];
};

export const SocialLinks: React.FC<Props> = ({ links }) => {
    return (
        <>
            {links.map(({ id, href, text }) => (
                <BtnLink href={href} key={id} className='mb-[16px] last:mb-0'>
                    {text}
                </BtnLink>
            ))}
        </>
    );
};
