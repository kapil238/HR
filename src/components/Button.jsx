"use client";
import { useRouter } from "next/navigation";

export default function Button({ type = "button", text, onClick, className }) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick(); 
    }
    router.push("/loading"); 
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`w-full py-3 px-4 bg-black text-white font-medium rounded-full transition-colors ${className}`}
    >
      {text}
    </button>
  );
}
