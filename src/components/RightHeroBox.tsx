import Image from "next/image";

export default function RightHeroBox() {
  return (
    <div className="w-[100%] h-[80%] bg-gradient-to-br from-mineShaft-100 to-mineShaft-300 p-24 relative">
      <Image
        src="/img/picture-nobg.png"
        alt="Iván Rodríguez"
        width={400}
        height={400}
        className="main-big-pic"
      />
    </div>
  );
}
