import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@ignite-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In maxime suscipit rerum voluptatibus harum porro, explicabo fuga quam corporis velit ratione! Nam itaque pariatur placeat corporis voluptas! Aliquid, nulla error?",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: 'strong'
  },
};
