export type Page = 'home' | 'rgb' | 'hex';

export type HeaderProps = {
  setCurrentPage: (page: Page) => void;
};

export type HeaderContent = {
    title: string
}