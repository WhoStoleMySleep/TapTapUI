import type { StoryObj } from "@storybook/react";
import { LinkTo } from "./LinkTo";

const meta: any = {
  title: "Components/LinkTo",
  component: LinkTo,
};

export default meta;

type Story = StoryObj<typeof LinkTo>;

const children = "LinkTo";

export const Standard: Story = {
  args: {
    children: children,
    to: "/",
    type: "standard",
    active: false,
  },
};

export const Primary: Story = {
  args: {
    children: children,
    to: "/",
    type: "primary",
    active: false,
  },
};

export const Button: Story = {
  args: {
    children: children,
    to: "/",
    type: "button",
    active: false,
  },
};

export const ButtonPrimary: Story = {
  args: {
    children: children,
    to: "/",
    type: "button--primary",
    active: false,
  },
};

export const ButtonRed: Story = {
  args: {
    children: children,
    to: "/",
    type: "button--red",
    active: false,
  },
};

export const ButtonBlue: Story = {
  args: {
    children: children,
    to: "/",
    type: "button--blue",
    active: false,
  },
};
