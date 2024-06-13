import { Data } from '../types/data';

export const data: Data = {
    content: {
        fullName: 'Jessica Randall',
        position: '"Front-end developer and avid reader."',
        location: {
            city: 'London',
            country: 'United Kingdom',
        },
        img: {
            src: 'user.jpeg',
            alt: 'user_img',
        },
    },
    links: [
        {
            id: 0,
            href: '/',
            text: 'GitHub',
        },
        {
            id: 1,
            href: '/',
            text: 'Frontend Mentor',
        },
        {
            id: 2,
            href: '/',
            text: 'LinkedIn',
        },
        {
            id: 3,
            href: '/',
            text: 'Twitter',
        },
        {
            id: 4,
            href: '/',
            text: 'Instagram',
        },
    ],
};
