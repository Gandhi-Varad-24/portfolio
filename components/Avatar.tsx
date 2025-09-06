// components/Avatar.tsx
import Image from "next/image";

export default function Avatar() {
  return (
    <div className="relative w-40 h-40 rounded-2xl overflow-hidden border border-white/10 shadow-glow">
      {/* Replace with your file name in /public */}
      <Image
        src="/yourphoto.jpg"
        alt="Varad Gandhi"
        fill
        className="object-cover"
        priority
        sizes="160px"
      />
    </div>
  );
}
