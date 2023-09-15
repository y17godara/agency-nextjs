import { cn } from "@/lib";

interface Props {
  color?: string;
  height?: string;
}

export function VerticalLine({ color = "gray-400", height = "4" }: Props) {

  return <span className={cn("border-r", `border-${color}`, `h-${height}`)}></span>;
}
