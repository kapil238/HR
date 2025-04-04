"use client";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

export default function InputField({ type, placeholder, id }) {
  return (
    <div className="relative">
      {/* Icon based on input type */}
      {type === "email" && (
        <AiOutlineMail
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
          style={{ width: "24px", height: "19px" }}
        />
      )}
      {type === "password" && (
        <AiOutlineLock
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
          style={{ width: "24px", height: "19px" }}
        />
      )}

      {/* Input field */}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className="w-full px-4 py-3 pl-10 pr-4 border border-white rounded-full focus:outline-none focus:ring-2 focus:border-transparent placeholder-white"
      />
    </div>
  );
}
