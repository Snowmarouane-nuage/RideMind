import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col px-6 py-8">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 py-6 text-sm text-gray-300">
          <Link href="/" className="font-semibold text-white hover:text-blue-400">
            RideMind
          </Link>

          <nav className="flex items-center gap-4">
            <Link href="/about" className="hover:text-white">
              À propos
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </nav>
        </header>

        <section className="mx-auto flex flex-1 max-w-4xl flex-col items-center justify-center text-center">
          <div className="mb-6 rounded-full border border-blue-500/40 px-4 py-2 text-sm text-blue-400">
            AI Coach for Action Sports
          </div>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Ride smarter. <span className="text-blue-500">Progress faster.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
            RideMind helps riders improve faster with personalized AI coaching,
            smart session advice and progress tracking.
          </p>

          <form
            className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            action="https://formspree.io/f/mzdwvgyg"
            method="POST"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-gray-700 bg-black px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
            />

            <button
              type="submit"
              className="rounded-full bg-blue-500 px-8 py-4 font-semibold text-white hover:bg-blue-600"
            >
              Join Waitlist
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-500">
            Early access for riders, coaches and schools.
          </p>

          <div className="mt-16 grid w-full gap-4 text-sm text-gray-300 sm:grid-cols-4">
            <Link
              href="/kiteboarding"
              className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-blue-400 hover:text-white"
            >
              Kiteboarding
            </Link>
            <Link
              href="/surf"
              className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-blue-400 hover:text-white"
            >
              Surf
            </Link>
            <Link
              href="/wingfoil"
              className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-blue-400 hover:text-white"
            >
              Wingfoil
            </Link>
            <Link
              href="/snowboard"
              className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-blue-400 hover:text-white"
            >
              Snowboard
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
