import type { StoryObj, Meta } from "@storybook/react";
import { Tooltip } from "@first-ignite-ui/react";

export default {
  title: "Notification/Tooltip",
  component: Tooltip,
  args: {
    content:
      "Certifique-se de que todos os campos estão preenchidos corretamente.",
  },
} as Meta;

export const Primary: StoryObj = {};
