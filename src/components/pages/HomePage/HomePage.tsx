import { data } from '../../../data/data';
import { Card } from '../../elements/Card';
import { Content } from '../../elements/Content';
import { SocialLinks } from '../../elements/SocialLinks';

export const HomePage = () => {
    const { content, links } = data;

    return (
        <Card>
            <Content content={content} />
            <SocialLinks links={links} />
        </Card>
    );
};
