import React from "react";
import Link from "next/link";

type Props = {
  name: string;
  link: string;
};

export default function NavBarItem({ name, link }: Props) {
  return (
    <>
      <div className="block hover:border-green-400 cursor-pointer">
        <Link href={link}>{name}</Link>
      </div>
    </>
  );
}
