import * as TooltipRadix from "@radix-ui/react-tooltip";
import { TooltipArrow, TooltipContent } from "./styles";
import { Button } from "../Button";

export interface TooltipProps {
  content: string;
}

export function Tooltip({ content }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>
          <Button variant="primary" disabled>
            Verificar
          </Button>
        </TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipContent sideOffset={5}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
}
