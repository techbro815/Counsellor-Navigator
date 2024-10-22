import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

// Renders Navbar as General Component
const Navbar = ({ item1, item2, item3, item4 }) => {
  const pathname = usePathname();
  return (
    <div className="bg-[#893ae9] text-xl w-full h-16 flex items-center justify-between text-white px-20">
      <div className="flex justify-center items-center gap-4">
        <img
          src="/logo.png"
          alt="Counsellor Navigator"
          width={72}
          className="object-contain"
        />
        <h1 className="text-white">Counsellor Navigator</h1>
      </div>

      <div className="flex gap-4">
        <div className="flex text-white text-lg gap-10">
          <Link
            href="/"
            className={`link ${
              pathname === "/" ? "font-bold" : "hover:underline cursor-pointer"
            }`}
          >
            Home
          </Link>
          <Link
            href="/College-Predictor"
            className={`link ${
              pathname === "/College-Predictor" ? "font-bold" : "hover:underline cursor-pointer"
            }`}
          >
            {item1}
          </Link>
          <Link
            href="/scholarships"
            className={`link ${
              pathname === "/scholarships"
                ? "font-bold"
                : "hover:underline cursor-pointer"
            }`}
          >
            {item2}
          </Link>
          <Link
            href="/contact"
            className={`link ${
              pathname === "/contact"
                ? "font-bold"
                : "hover:underline cursor-pointer"
            }`}
          >
            {item3}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
