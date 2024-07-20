import type { StoryObj } from "@storybook/react";
import { Test } from "./Test";

const meta: any = {
  title: "Components/Test",
  component: Test,
};

export default meta;

type Story = StoryObj<typeof Test>;

export const Primary: Story = {
  args: {
    title: "123",
  },
};
