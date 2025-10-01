export type Page = 'home' | 'rgb' | 'hex';

export type HeaderProps = {
  setCurrentPage: (page: Page) => void;
};

export type NavLink = {
    name: string;
    page: Page;
}

export type AppTitle = {
    title: string;
}

export type Image = {
    src: string;
    alt: string;
}

export type ColourSystemContent = {
    title: string;
    description: string;
    points: string[];
}

export type PixelContent = {
    title: string;
    description: string[];
}

export type RGBHexContent = {
    title: string;
}

export type MainContent = {
    title: string;
    subtitle: string;
    image: Image;
    colourSystems: ColourSystemContent;
    pixel: PixelContent;
    rgbHex: RGBHexContent;
}