import { notFound } from "next/navigation";

const PAGES: Record<string, { title: string; description: string }> = {
  about: {
    title: "À propos de RideMind",
    description:
      "RideMind est une plateforme d'accompagnement AI pour les sports de glisse.",
  },
  contact: {
    title: "Contactez RideMind",
    description: "Envoyez-nous un message pour en savoir plus sur RideMind.",
  },
  kiteboarding: {
    title: "Kiteboarding Coaching",
    description:
      "Améliorez vos sessions de kiteboarding avec des conseils personnalisés.",
  },
  surf: {
    title: "Surf Coaching",
    description:
      "Recevez des recommandations pour progresser plus vite en surf.",
  },
  wingfoil: {
    title: "Wingfoil Coaching",
    description:
      "Optimisez votre entraînement wingfoil grâce à l'IA RideMind.",
  },
  snowboard: {
    title: "Snowboard Coaching",
    description:
      "Préparez vos sessions snowboard avec un suivi intelligent.",
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const page = PAGES[params.slug];

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          {page.title}
        </h1>
        <p className="mt-6 text-lg text-gray-300">{page.description}</p>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 text-gray-200">
          <p>
            Bienvenue sur la page <strong>{params.slug}</strong>. RideMind vous aide à
            progresser plus vite avec des conseils concrets, des analyses de sessions
            et des suggestions personnalisées.
          </p>
          <p className="mt-4 text-sm text-gray-400">
            Toutes les pages sont intégrées au même site Next.js, ce qui garantit que
            le site en ligne correspond exactement à votre version locale.
          </p>
        </div>
      </div>
    </main>
  );
}
