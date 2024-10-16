import * as ToastRadix from "@radix-ui/react-toast";
// import "./styles.css";
import { ToastContainer, ToastDescription, ToastTitle } from "./styles";
import { X } from "phosphor-react";
import { ComponentProps } from "react";

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string;
  description?: string;
}

export function Toast({
  title,
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  ...rest
}: ToastProps) {
  return (
    <ToastRadix.Provider swipeDirection="right">
      <ToastContainer open={true} {...rest}>
        <div>
          <ToastTitle>{title}</ToastTitle>
          {!!description && <ToastDescription>{description}</ToastDescription>}
        </div>
        <ToastRadix.Close asChild>
          <X weight="bold" />
        </ToastRadix.Close>
      </ToastContainer>
      <ToastRadix.Viewport />
    </ToastRadix.Provider>
  );
}


Toast.displayName = "Toast";