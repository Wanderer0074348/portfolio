import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

const HERO_IMG =
  "/hero.png";

const year = new Date().getFullYear();

export default function Footer() {
  const { contact } = siteConfig;
  return (
    <footer className="bg-black border-t-[6px] border-black pt-[6px] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <PixelatedCanvas
          src={HERO_IMG}
          width={1920}
          height={200}
          cellSize={4}
          dotScale={0.9}
          shape="square"
          backgroundColor="#000000"
          dropoutStrength={0.1}
          interactive={false}
          sampleAverage
          fill
        />
      </div>
      <div className="max-w-[1440px] mx-auto px-8 py-10 flex items-center justify-between relative z-10">
        <span className="font-[family-name:var(--font-code)] text-white text-xs tracking-[1.2px] uppercase">
          ©{year} {siteConfig.name.toUpperCase().replace(" ", "_")}. ALL_RIGHTS_RESERVED.
        </span>
        <div className="flex gap-8 items-center">
          <Link href={contact.githubUrl} target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-code)] text-[#a3a3a3] text-xs tracking-[1.2px] uppercase hover:text-white transition-colors">
            GITHUB
          </Link>
          {contact.twitter && (
            <Link href={contact.twitter} target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-code)] text-[#a3a3a3] text-xs tracking-[1.2px] uppercase hover:text-white transition-colors">
              TWITTER
            </Link>
          )}
          <Link href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-code)] text-[#a3a3a3] text-xs tracking-[1.2px] uppercase hover:text-white transition-colors">
            LINKEDIN
          </Link>
          <span className="font-[family-name:var(--font-code)] font-bold text-[#034694] text-xs tracking-[1.2px] uppercase">
            STATUS: ACTIVE
          </span>
        </div>
      </div>
    </footer>
  );
}
