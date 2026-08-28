import Link from "next/link";
import Image from "next/image";
import { NAVBAR_LOGO, NAVBAR_LOGO_HEIGHT, NAVBAR_LOGO_WIDTH, SITE_LOGO_ALT } from "./config";

const NOT_FOUND_LOGO_WIDTH = 320;

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#111111] flex items-center justify-center p-6">
      <div className="max-w-lg text-center">
        <Image
          src={NAVBAR_LOGO}
          alt={SITE_LOGO_ALT}
          width={NAVBAR_LOGO_WIDTH}
          height={NAVBAR_LOGO_HEIGHT}
          sizes={`${NOT_FOUND_LOGO_WIDTH}px`}
          className="mx-auto"
          style={{ width: NOT_FOUND_LOGO_WIDTH, height: "auto", maxWidth: "100%" }}
        />
        <h1 className="font-black text-5xl mt-4">Page not found</h1>
        <p className="text-[#444444] mt-4">The page may have moved or is not available yet.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
          <Link href="/" className="rounded-xl bg-[#ffbd59] px-6 py-3 font-bold">Back to home</Link>
          <Link href="/help" className="rounded-xl border border-[#dedbd2] bg-white px-6 py-3 font-bold">Visit Help Center</Link>
        </div>
      </div>
    </main>
  );
}

