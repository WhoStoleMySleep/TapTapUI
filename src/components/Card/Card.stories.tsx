import type { StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: any = {
  title: "Components/Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

const children = "Card";

export const Primary: Story = {
  args: {
    id: '1',
    headImage: '',
    altImage: '',
    themeName: ["name", 'asd'],
    price: "200 руб",
    conciseContent: ['asd', 'dsa'],
    datePublish: 'asd',
    tags: ['asd', 'dsa'],
  },
};