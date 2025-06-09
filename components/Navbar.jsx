import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white w-[80vw] fixed top-12 right-[10vw] rounded-full p-5 px-6 flex justify-between z-50">
      <div className="logo flex gap-20 items-center">
        <Link href={"/"}>
          <img
            className="h-7"
            src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
            alt=""
          />
        </Link>
        <ul className="flex gap-9 text-lg items-center">
          <Link href={"/products"}>
            <li>Products</li>
          </Link>
          <Link href={"/products"}>
            <li>Templates</li>
          </Link>
          <Link href={"/products"}>
            <li>Marketplace</li>
          </Link>
          <Link href={"/products"}>
            <li>Learn</li>
          </Link>
          <Link href={"/products"}>
            <li>Pricing</li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-4 text-xl">
        <button className="login font-semibold bg-[#E9E9E9] rounded-xl p-5">
          Log in
        </button>
        <button className="singup font-semibold bg-black rounded-full p-5 text-white">
          Sign up free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
