import type { StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: any = {
  title: "Components/Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

const children = "Header";

export const Standard: Story = {
  args: {
    children: children,
    headerLinks: [
      {
        url: "#",
        text: "Home",
        attributes: {
          onClick: () => {
            alert("Home");
          },
          href: "",
        },
      },
    ],
  },
};

// export const Primary: Story = {
//   args: {
//     children: children,
//     type: "text",
//     UI: "primary",
//     className: "text",
//     noDarkMode: false,
//   },
// };
