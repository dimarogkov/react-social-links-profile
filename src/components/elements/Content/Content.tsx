import { Content as ContentType } from '../../../types/content';
import { Label } from '../../ui/Label';
import { Text } from '../../ui/Text';
import { Title } from '../../ui/Title';
import { UserImg } from '../UserImg';

type Props = {
    content: ContentType;
};

export const Content: React.FC<Props> = ({ content }) => {
    const { fullName, position, location, img } = content;

    return (
        <div className='w-full mb-[24px] last:mb-0'>
            <UserImg src={img.src} alt={img.alt} className='mb-[20px] last:mb-0' />

            <div className='mb-[20px] sm:mb-[24px] last:mb-0'>
                <Title className='mb-[4px] last:mb-0'>{fullName}</Title>
                <Label>{`${location.city}, ${location.country}`}</Label>
            </div>

            <Text>{position}</Text>
        </div>
    );
};
