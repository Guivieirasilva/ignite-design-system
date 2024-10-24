import type { StoryObj, Meta } from "@storybook/react";
import { AvatarProps, Avatar } from "@first-ignite-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/guivieirasilva.png",
    alt: "Imagem de Avatar",
  },
  argTypes: {
    src: {
      constrol: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
