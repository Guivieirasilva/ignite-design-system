import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps } from "@first-ignite-ui/react";

export default {
  title: "Form/Text Input",
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{display: 'flex', flexDirection: 'column', gap: '$2'}} >
          <Text size='sm' >Email adress</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name'
  }
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  }
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args:{
    prefix: 'call.co/',
    placeholder: 'your-username'
  }
};


