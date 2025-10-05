export type Page = 'home' | 'rgb' | 'hex';

export type HeaderProps = {
  setCurrentPage: (page: Page) => void;
  currentPage: string;
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
    descriptions: string[];
}

export type RGBHexContent = {
    title: string;
    points: string[];
}

export type MainContent = {
    title: string;
    subtitle: string;
    image: Image;
    colourSystems: ColourSystemContent;
    pixel: PixelContent;
    rgbHex: RGBHexContent;
}

export type ColorPickProps = {
    color: string;
    colorHeading: string;
    onClick: () => void;
}