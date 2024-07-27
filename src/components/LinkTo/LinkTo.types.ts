export interface LinkToProps {
  children: string;
  to: string;
  UI?:
    | "standard"
    | "primary"
    | "button"
    | "button--primary"
    | "button--red"
    | "button--blue";
  noDarkMode?: boolean;
  active?: boolean;
  className?: string;
}
