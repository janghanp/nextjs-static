import { useEffect } from "react";

export default function SomeList() {
  useEffect(() => {
    console.log("SomeList rendered");

    return () => {
      console.log("SomeList is unmounted");
    };
  }, []);

  return <div>Some List</div>;
}
