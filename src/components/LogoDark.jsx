import Image from "next/image";
import LogoSrc from "../../public/Images/Logo-Dark.png";

export default function Logo() {
  return (
    <div className="flex justify-center sm:justify-start">
      <Image
        src={LogoSrc}
        alt="TECHSOUL Logo"
        className="w-[150px] h-auto sm:w-[200px] sm:h-auto md:w-[190px] md:h-auto"
        priority
      />
    </div>
  );
}
