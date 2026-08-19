import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#111111] flex items-center justify-center p-6">
      <div className="max-w-lg text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-[#6b6b6b]">ShopiDeck</p>
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

