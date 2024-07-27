export interface LinkToProps {
  children: string;
  to: string;
  type?:
    | "standard"
    | "primary"
    | "button"
    | "button--primary"
    | "button--red"
    | "button--blue";
  active?: boolean;
}
