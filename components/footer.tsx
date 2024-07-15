import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => (
  <footer className="bg-black text-white">
    <div className="min-h-min flex pt-10 gap-8 items-center justify-center p-8">
      <Link legacyBehavior href="/terms">
        <a className="hover:underline">Terms</a>
      </Link>
      <Link legacyBehavior href="/privacy">
        <a className="hover:underline">Privacy</a>
      </Link>
      <Link legacyBehavior href="/github">
        <a className="hover:underline">Github</a>
      </Link>
      <Link legacyBehavior href="/twitter">
        <a className="hover:underline">Twitter</a>
      </Link>
    </div>
    <div className="flex flex-col pb-10 justify-center items-center">
      <Image src="/secrethorse.png" width={35} height={30} alt="logo"></Image>
    </div>
  </footer>
);

export default Footer;
