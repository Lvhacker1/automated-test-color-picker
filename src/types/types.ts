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