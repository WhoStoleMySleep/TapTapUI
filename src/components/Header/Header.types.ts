export interface HeaderProps {
  children: string;
  className?: {
    header?: string;
    headerWrapper?: string;
    headerLogo?: string;
    headerLogoImage?: string;
    headerNavigation?: string;
    headerNavigationList?: string;
    headerNavigationElement?: string;
    headerLightMode?: string;
  };
  logo?: {
    url?: "";
    alt?: "";
    text?: "";
  };
  headerLinks?: {
    text: string;
    url: string;
    attributes?: {
      [key: string]: any;
    };
  }[];

  // UI?: "standard" | "primary";
  // noDarkMode?: boolean;
}
