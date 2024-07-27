import type { StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: any = {
  title: "Components/Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

const children = "Input";

export const Standard: Story = {
  args: {
    children: children,
    type: "text",
    UI: "standard",
    className: "text",
  },
};

export const Primary: Story = {
  args: {
    children: children,
    type: "text",
    UI: "primary",
    className: "text",
    noDarkMode: false,
  },
};
