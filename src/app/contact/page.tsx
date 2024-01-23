"use client";

import SomeList from "@/components/SomeList";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    console.log("Contact page rendered");

    return () => {
      console.log("Contact page is unmounted");
    };
  }, []);

  return (
    <div>
      Contact page
      <SomeList />
    </div>
  );
}
