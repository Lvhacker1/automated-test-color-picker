import { MainContent, NavLink } from "@/types/types";

export const navLinks: NavLink[] = [
    {name: 'HOME', page: 'home'},
    {name: 'RGB', page: 'rgb'},
    {name: 'HEX', page: 'hex'},
]

export const appTitle = {
    title: 'Color Picker'
}

export const mainContent: MainContent = {
    title: 'Color Picker!',
    subtitle: 'This is where some subtitle is supposed to be',
    image: {
        src: '/additive-subtractive.png',
        alt: 'subtractive-color-image'
    },
    colourSystems: {
        title: 'Color Systems',
        description: 'A structured method for creating different colors using a set of primary colors and rules for mixing them.',
        points: [
            'Start with white and apply colored pigments that absorb light.',
            'White when red, blue and green are combined in their maximum intensities',
        ]
    },
    pixel: {
        title: 'Pixel',
        descriptions: [
            "It's made of red, green and blue lights with adjustable intensities (a pixels has 3 panels of light)",
            'RGB values range from 0 (minimum intensity) - 255 (maximum intensity)'
        ]
    },
    rgbHex: {
        title: 'RGB and Hexadecimal notation',
        points: [
            'rgb(152, 116, 249) (RGB)',
            '#9874F9 (HEX)'
        ]
    }
    
}