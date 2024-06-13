export interface Content {
    fullName: string;
    position: string;
    location: {
        city: string;
        country: string;
    };
    img: {
        src: string;
        alt: string;
    };
}
