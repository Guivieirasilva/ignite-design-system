import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@first-ignite-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In maxime suscipit rerum voluptatibus harum porro, explicabo fuga quam corporis velit ratione! Nam itaque pariatur placeat corporis voluptas! Aliquid, nulla error?",
      size: 'md'
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: "inline-radio",
    },
  },
} as Meta<TextProps>;



export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: 'strong'
  },
};
