import Image from "next/image";
import ValueComponent from "./components/ValueComponent";

// using custom hooks will enhance app performance

export default function Home() {
  return (
    <div className="grid">
        <ValueComponent />
    </div>
  );
}
