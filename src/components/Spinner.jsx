import Logo from "@/components/Logo";

export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Spinner Animation */}
      <div className="w-20 h-20 border-4 border-white/30 border-t-white rounded-full animate-spin mb-8 pb-4"></div>

      <div className="text-center text-white font-bold mb-8 pb-4">
        Loading...
      </div>

      {/* Optional Logo */}
      <Logo className="w-24 h-24 opacity-80" />
    </div>
  );
}
