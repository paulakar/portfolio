export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <section className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400 mb-4">
          Portfolio
        </p>

        <h1 className="text-5xl font-bold mb-4">Paula Karlen</h1>

        <h2 className="text-2xl text-zinc-300 mb-6">
          Automation & Infrastructure Engineer
        </h2>

        <p className="text-lg text-zinc-400 max-w-2xl mb-10">
          Systems engineer with 10+ years of experience in infrastructure,
          production environments, backend development and AI-powered
          automation.
        </p>

        <div className="flex flex-wrap gap-3 mb-14">
          {[
            "Node.js",
            "Express",
            "PostgreSQL",
            "n8n",
            "APIs",
            "Azure",
            "Linux",
            "Automation",
          ].map((item) => (
            <span
              key={item}
              className="border border-zinc-700 rounded-full px-4 py-2 text-sm text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>

        <section className="mb-14">
          <h3 className="text-2xl font-semibold mb-6">Featured Projects</h3>

          <div className="grid gap-6">
            <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950">
              <h4 className="text-xl font-semibold mb-3">
                Reservalo — SaaS Booking Platform
              </h4>

              <p className="text-zinc-400 mb-4">
                Reservation management platform with authentication, backend
                APIs and PostgreSQL database.
              </p>

              <div className="flex gap-4 mb-4">
                <a
                  href="https://mireserva.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  Live App
                </a>

                <a
                  href="https://github.com/paulakar/reservalo-saas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  View on GitHub
                </a>
              </div>

              <p className="text-sm text-zinc-500">
                Node.js · Express · PostgreSQL · Google Auth
              </p>
            </div>

            <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950">
              <h4 className="text-xl font-semibold mb-3">
                AI WhatsApp Automation Agent
              </h4>

              <p className="text-zinc-400 mb-4">
                Automated conversational workflow using n8n, APIs, webhooks and
                AI-generated responses.
              </p>

              <div className="flex gap-4 mb-4">
                <a
                  href="https://github.com/paulakar/ai-whatsapp-agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  View on GitHub
                </a>
              </div>

              <p className="text-sm text-zinc-500">
                n8n · APIs · Webhooks · AI Integration
              </p>
            </div>

            <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950">
              <h4 className="text-xl font-semibold mb-3">
                Backend API Platform
              </h4>

              <p className="text-zinc-400 mb-4">
                REST API with authentication, business logic and PostgreSQL
                integration.
              </p>

              <p className="text-sm text-zinc-500">
                Node.js · Express · REST API · PostgreSQL
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p className="text-zinc-400">GitHub · LinkedIn · Email</p>
        </section>
      </section>
    </main>
  );
}