import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">Page introuvable</p>
        <h1 className="mt-6 text-4xl font-bold">404 — Rien à voir ici</h1>
        <p className="mt-4 text-gray-400">
          La page que vous cherchez n'existe pas encore ou a été déplacée.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
        >
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
