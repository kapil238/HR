import Image from "next/image";
import LogoSrc from "../../public/Images/Logo-wight.png";

export default function Logo() {
  return (
    <Image
      src={LogoSrc}
      alt="TECHSOUL Logo"
      className="w-[276px] h-[63px] mb-5 sm:w-[220px] sm:h-[50px]"
    />
  );
}
