import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.png"
            width={64}
            height={32}
            alt="Eventify Hub Logo"
          />
        </Link>

        <div className="flex w-32 justify-end gap-3"></div>
      </div>
    </header>
  );
};

export default Header;
