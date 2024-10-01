import Image from "next/image";

export default function RightHeroBox() {
  return (
    <div className="w-[100%] h-[100%] bg-gradient-to-br from-mineShaft-300 to-mineShaft-500 p-24">
      <Image
        src="/img/picture-nobg.png"
        alt="Iván Rodríguez"
        width={500}
        height={500}
      />
    </div>
  );
}
