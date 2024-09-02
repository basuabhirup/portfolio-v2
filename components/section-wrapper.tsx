import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface IProps {
  id: string;
  className?: string;
  heading?: string;
}

export const SectionWrapper: React.FC<PropsWithChildren<IProps>> = ({
  id,
  className,
  heading,
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
      <div className="w-full mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
        {!!heading && (
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl 2xl:text-6xl mb-8">
            {heading}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};
