export interface InputProps {
  /** Содержимое **/
  children: string;
  type?: "text";
  UI?: "standard" | "primary";
  className?: string
  [key: string]: any;
}
