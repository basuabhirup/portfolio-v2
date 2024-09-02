import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface IProps {
  id: string;
  className?: string;
}

export const SectionWrapper: React.FC<PropsWithChildren<IProps>> = ({
  id,
  className,
  children,
}) => {
  return (
    <section
      id={id}
      className={cn(
        "w-full py-12 md:py-24 lg:py-32 xl:py-48",
        !!className && `${className}`
      )}
    >
      <div className="container px-4 md:px-6 lg:px-8 xl:px-10">{children}</div>
    </section>
  );
};
