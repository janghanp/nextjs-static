"use client";

import { useEffect } from "react";

export default function DashboardPage() {
  useEffect(() => {
    console.log("Dashboard page rendered on the client side");
  }, []);

  return <div>Dashboard page</div>;
}
