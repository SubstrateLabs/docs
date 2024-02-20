import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

export function HeaderLogo() {
  const path = usePathname();

  return (
    <div className="flex mr-12 logo">
      <a href="/" className="group -m-3 p-1.5 flex space-x-2 items-center">
        <svg
          version="1.0"
          className="ml-4 mr-1"
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          viewBox="0 0 358.000000 358.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,358.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M0 3435 l0 -145 1640 0 1640 0 0 -1500 0 -1500 -1350 0 -1350 0 0
1200 0 1200 1050 0 1050 0 0 -900 0 -900 -750 0 -750 0 0 600 0 600 450 0 450
0 0 -300 0 -300 -150 0 -150 0 0 150 0 150 -150 0 -150 0 0 -300 0 -300 450 0
450 0 0 600 0 600 -750 0 -750 0 0 -900 0 -900 1050 0 1050 0 0 1200 0 1200
-1350 0 -1350 0 0 -1495 0 -1495 1650 0 1650 0 0 1790 0 1790 -1790 0 -1790 0
0 -145z"
            />
          </g>
        </svg>
        <span className="font-bold sm:inline-block text-2xl tracking-tighter">
          Substrate
        </span>
      </a>
      <div className="align-middle ml-12 space-x-2">
        <Link
          key="API"
          href="https://www.substrate.run/api-ref"
          className={clsx(
            "nav-link transition px-3 py-1 text-lg font-semibold leading-6 hover:text-white hover:bg-black"
          )}
        >
          API
        </Link>
        <Link
          key="Docs"
          href="/"
          className={clsx(
            "nav-link transition px-3 py-1 text-lg font-semibold leading-6 hover:text-white hover:bg-black",
            "border border-black border-solid border-l-4"
          )}
        >
          Docs
        </Link>
      </div>
    </div>
  );
}
