import type { StoryObj } from "@storybook/react";
import { Title } from "./Title";

const meta: any = {
  title: "Components/Title",
  component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

const children = "Title";

export const Standard: Story = {
  args: {
    children: children,
    UI: "standard",
    Level: "h1",
    className: "className",
    noDarkMode: false,
  },
};

export const Primary: Story = {
  args: {
    children: children,
    UI: "primary",
    Level: "h1",
    className: "className",
    noDarkMode: false,
  },
};
