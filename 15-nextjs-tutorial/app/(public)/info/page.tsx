import Link from "next/link";
import React from "react";

export default function InfoPage() {
  return (
    <Link
      href="info/contact"
      className="text-xl text-blue-500 inline-block mt-8"
    >
      go to contact page
    </Link>
  );
}
