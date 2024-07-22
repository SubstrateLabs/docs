import Link from "next/link";
import FullLogo from "./full-logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LayersIcon } from "@radix-ui/react-icons";
import { cn } from "@/components/lib/utils";

export function HeaderLogo() {
  return (
    <div className="logo flex items-center px-2">
      <Link
        href="https://substrate.run"
        className="rounded px-2 group p-1.5 space-x-2 hover:bg-[#292B33] flex items-center"
      >
        <div className="invert-0 group-hover:invert">
          <FullLogo height={28} />
        </div>
      </Link>
      <div className="hidden lg:flex">
        <Link
          href="/"
          className="ml-8 px-3 py-2 hover:bg-[#292B33] hover:text-white bg-grid-small-white/[0.3] rounded"
        >
          Docs
        </Link>
      </div>
      <div className="hidden lg:flex">
        <Link
          href="https://substrate.run/nodes"
          className="px-3 py-2 hover:bg-[#292B33] hover:text-white bg-grid-small-white/[0.3] rounded"
        >
          Nodes
        </Link>
      </div>
      <div className="hidden lg:flex">
        <Link
          href="https://substrate.run/pricing"
          className="px-3 py-2 hover:bg-[#292B33] hover:text-white bg-grid-small-white/[0.3] rounded"
        >
          Pricing
        </Link>
      </div>
      <div className="hidden lg:flex">
        <Link
          href="https://substrate.run/company"
          className="px-3 py-2 hover:bg-[#292B33] hover:text-white bg-grid-small-white/[0.3] rounded"
        >
          Company
        </Link>
      </div>
      <div className="hidden lg:flex">
        <Link
          href="https://blog.substrate.run"
          className="px-3 py-2 hover:bg-[#292B33] hover:text-white bg-grid-small-white/[0.3] rounded"
        >
          Blog
        </Link>
      </div>
      <Sheet>
        <SheetTrigger className="ml-4 inline lg:hidden text-2xl font-bold tracking-widest">
          ...
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <Link
            href="https://docs.substrate.run"
            className="px-3 py-2 hover:bg-[#292B33] hover:text-white bg-grid-small-white/[0.3] rounded"
          >
            Docs
          </Link>
          <Link
            href="https://www.substrate.run/nodes"
            className="px-3 py-2 hover:bg-[#292B33] hover:text-white bg-grid-small-white/[0.3] rounded"
          >
            Nodes
          </Link>
          <Link
            href="/pricing"
            className={cn(
              "px-3 py-2 hover:bg-[#292B33] hover:text-white bg-grid-small-white/[0.3] rounded",
            )}
          >
            Pricing
          </Link>
          <Link
            href="/company"
            className={cn(
              "px-3 py-2 hover:bg-[#292B33] hover:text-white bg-grid-small-white/[0.3] rounded",
            )}
          >
            Company
          </Link>
          <Link
            href="https://blog.substrate.run"
            className="px-3 py-2 hover:bg-[#292B33] hover:text-white bg-grid-small-white/[0.3] rounded"
          >
            Blog
          </Link>
        </SheetContent>
      </Sheet>
    </div>
  );
}
