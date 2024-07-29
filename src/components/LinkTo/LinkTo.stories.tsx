import type { StoryObj } from "@storybook/react";
import { LinkTo } from "./LinkTo";
import { LinkToProps } from "./LinkTo.types";

const meta: any = {
  title: "Components/LinkTo",
  component: LinkTo,
};

export default meta;

type Story = StoryObj<typeof LinkTo>;

const children = "LinkTo";

export const Standard: LinkToProps = {
  args: {
    children: children,
    to: "/",
    UI: "standard",
    noDarkMode: false,
    active: false,
    className: "className",
  },
};

export const Primary: Story = {
  args: {
    children: children,
    to: "/",
    UI: "primary",
    noDarkMode: false,
    active: false,
    className: "className",
  },
};

export const Button: Story = {
  args: {
    children: children,
    to: "/",
    UI: "button",
    noDarkMode: false,
    active: false,
    className: "className",
  },
};

export const ButtonPrimary: Story = {
  args: {
    children: children,
    to: "/",
    UI: "button--primary",
    noDarkMode: false,
    active: false,
    className: "className",
  },
};

export const ButtonRed: Story = {
  args: {
    children: children,
    to: "/",
    UI: "button--red",
    noDarkMode: false,
    active: false,
    className: "className",
  },
};

export const ButtonBlue: Story = {
  args: {
    children: children,
    to: "/",
    UI: "button--blue",
    noDarkMode: false,
    active: false,
    className: "className",
  },
};
