import type { StoryObj } from "@storybook/react";
import { Title } from "./Title";

const meta: any = {
  title: "Components/Title",
  component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

const children = "Title";

export const Primary: Story = {
  args: {
    children: children,
  },
};
