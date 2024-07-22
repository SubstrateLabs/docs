import cn from "clsx";
import NextLink from "next/link";
import type { ComponentProps, CSSProperties, ReactNode } from "react";

const classes = {
  cards: cn(
    "nextra-cards nx-mt-4 nx-gap-4 grid lg:grid-cols-2 grid-cols-1",
    "nx-not-prose", // for nextra-theme-docs
  ),
  card: cn(
    // "bg-grid-small-black/[0.2]",
    "bg-white",
    "nextra-card nx-group nx-flex nx-flex-col nx-justify-start nx-overflow-hidden nx-rounded nx-border nx-border-gray-200",
    "nx-text-current nx-no-underline",
    "nx-transition-all nx-duration-200 hover:nx-border-gray-300",
  ),
  title: cn(
    "text-[#4F0F6A] font-sans nx-flex text-sm nx-font-semibold nx-items-start nx-gap-2 nx-p-4 nx-text-gray-700",
  ),
  description: cn(
    "text-[#6A6360] text-xs nx-flex nx-items-start nx-gap-2 nx-px-4 nx-pb-4 nx-text-gray-700",
  ),
  destination: cn(
    "text-[#6B7280] text-[14px] align-right nx-flex nx-items-start nx-gap-2 nx-px-4 nx-pb-4 nx-text-gray-700",
  ),
};

const arrowEl = (
  <span className="nx-transition-transform nx-duration-75 group-hover:nx-translate-x-[2px]">
    →
  </span>
);

export function SmallCard({
  children,
  title,
  arrow,
  href,
  ...props
}: {
  children: ReactNode;
  title: string;
  arrow?: boolean;
  href: string;
}) {
  // const animatedArrow = arrow ? arrowEl : null;
  // const animatedArrow = arrowEl;
  const animatedArrow = null;

  return (
    <NextLink
      href={href}
      className={cn(
        classes.card,
        "border-1 border-[#DEDEDE] hover:bg-[#f6f6f6]",
      )}
      {...props}
    >
      <span className={cn(classes.title, "", "nx-flex nx-items-center")}>
        {title}
        {animatedArrow}
      </span>
      <span className={cn(classes.destination, "", "nx-flex nx-items-center")}>
        {href.replace("https://", "")}
      </span>
    </NextLink>
  );
}

function _Cards({
  children,
  num = 3,
  className,
  style,
  ...props
}: { num?: number } & ComponentProps<"div">) {
  return (
    <div
      className={cn(classes.cards, className)}
      {...props}
      style={
        {
          ...style,
          "--rows": num,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

export const SmallCards = Object.assign(_Cards, {
  displayName: "Cards",
  SmallCard,
});
