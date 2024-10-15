import * as Toast from "@radix-ui/react-toast";
import { styled } from "../../styles";

export const ToastContainer = styled(Toast.Root, {
  width: "fit-content",
  height: "82px",
  fontFamily: "$default",

  borderRadius: "$sm",
  padding: "$3 $6",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "$4",

  div: {
    display: "flex",
    flexDirection: "column",
    gap: "$2",
  },

  svg: {
    width: "20px",
    height: "20px",
    marginTop: "$2",
    alignSelf: "flex-start",
    color: "$gray200",
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: "$gray800",
      },
      success: {
        backgroundColor: "$ignite700",
      },
      error: {
        backgroundColor: "$red500",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const ToastTitle = styled(Toast.Title, {
  color: "$white",
  fontSize: "$xl",
});

export const ToastDescription = styled(Toast.Description, {
  color: "$gray100",
  fontSize: "$sm",
});
