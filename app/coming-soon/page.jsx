export const metadata = {
  title: "Hier entsteht eine Website – Maik Bock",
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 bg-primary text-white">
      <h1 className="text-4xl font-semibold mb-4">
        Maik<span className="text-accent">.</span>
      </h1>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Hier entsteht eine Website</h2>
      <p className="text-white/60 max-w-[480px] mb-2">
        Wir bereiten gerade die letzten rechtlichen Angaben vor. Schau bald wieder vorbei.
      </p>
      <p className="text-white/40 text-sm max-w-[480px]">
        We&apos;re putting the final legal details in place — check back soon.
      </p>
    </main>
  );
}
