import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      id={id}
      className={cn("mx-auto w-full min-h-screen max-w-screen-xl", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
