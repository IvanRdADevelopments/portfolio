import Image from "next/image";

export default function RightHeroBox() {
  return (
    <div className="w-[100%] h-[80%] bg-gradient-to-br from-greyCorp-100 to-greyCorp-300 p-24 relative">
      <Image
        src="/img/picture-nobg.png"
        alt="Iván Rodríguez"
        width={700}
        height={700}
        className="main-big-pic"
      />
    </div>
  );
}
