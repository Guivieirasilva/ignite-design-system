import * as TooltipRadix from "@radix-ui/react-tooltip";
import { styled } from "../../styles";

export const TooltipContent = styled(TooltipRadix.Content, {
  width: "fit-content",
  height: "$10",
  backgroundColor: "$gray900",
  fontSize: "$md",
  padding: "$3 $4",

  color: "$gray100",
  fontFamily: "$default",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "$sm",
});

export const TooltipArrow = styled(TooltipRadix.Arrow, {
  fill: "$gray900",
});