import type { StoryObj, Meta } from "@storybook/react";
import { Toast, ToastProps } from "@first-ignite-ui/react";

export default {
  title: "Notification/Toast",
  component: Toast,
  args: {
    title: "Lorem ipsum",
    variant: 'primary'
  },
  argTypes:{

    variant: {
      options: ["primary", "success", "error"],
      control: "inline-radio",
    },
  }
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {
  args: {},
};

export const Success: StoryObj<ToastProps> = {
  args: {
    variant: "success",
    title: "Realizado com sucesso",
    description: "Seu agendamento foi realizado com sucesso!",
  },
};

export const Error: StoryObj<ToastProps> = {
  args: {
    variant: "error",
    title: "Erro ao realizar seu cadastro",
    description:
      "Ocorreu um erro ao realizar seu cadastro. Por favor, verifique se os dados informados estão corretos.",
  },
};
