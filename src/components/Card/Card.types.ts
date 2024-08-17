export interface CardProps {
  // children: string;
  // to: string;
  // UI?:
  //   | "standard"
  //   | "primary"
  //   | "button"
  //   | "button--primary"
  //   | "button--red"
  //   | "button--blue";
  // noDarkMode?: boolean;
  // active?: boolean;
  // className?: string;

  id: string;
  headImage: string;
  altImage: string;
  themeName: string[];
  price: string,
  conciseContent: string[];
  datePublish: string;
  tags: string[];
  button: {
    text: string
    link: string
    UI: "button" | "standard" | "primary" | "button--primary" | "button--red" | "button--blue"
  }
}
