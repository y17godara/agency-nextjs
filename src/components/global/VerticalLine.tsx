import { cn } from "@/lib";

interface Props {
  color?: string;
  height?: string;
}

export default function VerticalLine({ color, height }: Props) {
  return (
    <span className={cn("border-r", `border-${color}`, `h-${height}`)}></span>
  );
}
