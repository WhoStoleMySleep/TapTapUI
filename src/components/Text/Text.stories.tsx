import type { StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: any = {
  title: "Components/Text",
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

const children =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const Standard: Story = {
  args: {
    children: children,
    UI: "standard",
    className: "className",
    noDarkMode: false,
  },
};

export const Primary: Story = {
  args: {
    children: children,
    UI: "primary",
    className: "className",
    noDarkMode: false,
  },
};
