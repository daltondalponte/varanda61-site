export default function Home() {
  const services = [
    {
      title: "Discovery e produto",
      description:
        "Entendemos o problema, validamos a ideia e definimos o escopo ideal do MVP.",
    },
    {
      title: "Design e experiência",
      description:
        "Criamos fluxos simples e interfaces bonitas que facilitam o uso diário.",
    },
    {
      title: "Engenharia e lançamento",
      description:
        "Desenvolvemos, testamos e colocamos no ar com qualidade e velocidade.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-[color:var(--foreground)]">
      <div className="hero-sunrise absolute inset-0" />
      <div className="paper-grid pointer-events-none absolute inset-0" />

      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10">
        <div className="font-display text-xl tracking-wide text-[color:var(--foreground)]">
          Varanda 61 Negócios
        </div>
        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)] md:flex">
          <a className="transition hover:text-[color:var(--foreground)]" href="#sobre">
            Sobre
          </a>
          <a className="transition hover:text-[color:var(--foreground)]" href="#servicos">
            Serviços
          </a>
          <a className="transition hover:text-[color:var(--foreground)]" href="#contato">
            Contato
          </a>
        </nav>
          <a
            className="rounded-full border border-[color:var(--accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)] transition hover:bg-[color:var(--accent)] hover:text-[color:var(--background)]"
            href="#contato"
          >
            Falar agora
          </a>
      </header>

      <main className="relative z-10 px-6 pb-20 sm:px-10">
        <section className="grid gap-10 pb-20 pt-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="fade-up text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-strong)]">
              Varanda 61 Negócios
            </p>
            <h1 className="fade-up fade-delay-1 font-display text-4xl leading-tight text-[color:var(--foreground)] sm:text-5xl lg:text-6xl">
              Software pensado para inovar com simplicidade e foco no usuário.
            </h1>
            <p className="fade-up fade-delay-2 max-w-xl text-lg text-[color:var(--muted)]">
              Somos uma startup de desenvolvimento de software, focada em
              inovação e praticidade para entregar produtos que resolvem o dia a
              dia de quem usa.
            </p>
            <div className="fade-up fade-delay-3 flex flex-wrap gap-4">
              <a
                className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--background)] transition hover:translate-y-[-1px]"
                href="#contato"
              >
                Agendar conversa
              </a>
              <a
                className="rounded-full border border-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--accent)] transition hover:bg-[color:var(--accent)] hover:text-[color:var(--background)]"
                href="#servicos"
              >
                Ver serviços
              </a>
            </div>
          </div>

          <div className="float-slow soft-shadow rounded-3xl border border-white/10 bg-[color:var(--surface)]/90 p-8 backdrop-blur">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--muted)]">
                  Diagnóstico rápido
                </p>
                <h2 className="font-display text-2xl text-[color:var(--foreground)]">
                  Um mapa simples para decidir o próximo passo.
                </h2>
              </div>
              <div className="rounded-2xl border border-[color:var(--accent)]/30 bg-[color:var(--background)] px-5 py-4">
                <p className="text-sm text-[color:var(--muted)]">
                  Em 10 dias, entregamos prioridades, metas e um plano de ação
                  claro para sua equipe.
                </p>
              </div>
              <div className="grid gap-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[color:var(--muted)]">Setup</span>
                  <span className="font-semibold">Kickoff estratégico</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[color:var(--muted)]">Entrega</span>
                  <span className="font-semibold">Plano + Roadmap</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[color:var(--muted)]">Impacto</span>
                  <span className="font-semibold">Prioridades alinhadas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="sobre"
          className="grid gap-8 rounded-3xl border border-white/10 bg-[color:var(--surface)]/90 p-10 shadow-sm backdrop-blur lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-strong)]">
              Sobre a Varanda 61
            </p>
            <h2 className="font-display text-3xl text-[color:var(--foreground)]">
              Estratégia, execução e proximidade com quem decide.
            </h2>
            <p className="text-base text-[color:var(--muted)]">
              Somos uma startup de software que une estratégia, design e
              desenvolvimento para entregar soluções práticas e inovadoras.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border border-[color:var(--accent)]/30 bg-[color:var(--background)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--teal)]">
              Foco imediato
            </p>
            <p className="text-sm text-[color:var(--muted)]">
              Projetos de 30 a 90 dias com acompanhamentos semanais e entregas
              práticas focadas no usuário final.
            </p>
            <div className="grid gap-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-[color:var(--muted)]">Clareza</span>
                <span className="font-semibold">Metas e indicadores</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[color:var(--muted)]">Agilidade</span>
                <span className="font-semibold">Decisão rápida</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[color:var(--muted)]">Alinhamento</span>
                <span className="font-semibold">Times conectados</span>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-strong)]">
                Serviços
              </p>
              <h2 className="font-display text-3xl text-[color:var(--foreground)]">
                Pacotes sob medida para o seu momento.
              </h2>
            </div>
            <p className="max-w-xl text-base text-[color:var(--muted)]">
              Atuamos com método, conversas objetivas e entregas visíveis. Cada
              etapa é pensada para gerar impacto rápido e sustentável.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-[color:var(--surface)]/90 p-8 shadow-sm transition hover:-translate-y-1"
              >
                <h3 className="font-display text-2xl text-[color:var(--foreground)]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm text-[color:var(--muted)]">
                  {service.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent-strong)]">
                  Saiba mais
                  <span aria-hidden>→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contato"
          className="grid gap-8 rounded-3xl border border-white/10 bg-[color:var(--surface)]/90 p-10 shadow-sm backdrop-blur lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-strong)]">
              Contato
            </p>
            <h2 className="font-display text-3xl text-[color:var(--foreground)]">
              Vamos conversar sobre o seu momento atual.
            </h2>
            <p className="text-base text-[color:var(--muted)]">
              Envie uma mensagem e respondemos em até 24h com uma proposta de
              próximo passo.
            </p>
            <div className="text-sm text-[color:var(--muted)]">
              Operado por: Varanda 61 Negócios
              <br />
              CNPJ: 13.272.116/0001-85
            </div>
          </div>
          <div className="rounded-2xl border border-[color:var(--accent)]/20 bg-[color:var(--background)] p-6">
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--muted)]">
                  Email
                </p>
                <p className="font-semibold">contato@letsgo.app.br</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--muted)]">
                  WhatsApp
                </p>
                <a
                  className="font-semibold text-[color:var(--foreground)] transition hover:text-[color:var(--accent-strong)]"
                  href="https://wa.me/5516996265698"
                  target="_blank"
                  rel="noreferrer"
                >
                  (16) 99626-5698
                </a>
                <p className="text-xs text-[color:var(--muted)]">Apenas WhatsApp</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--muted)]">
                  Endereço
                </p>
                <p className="font-semibold">São Paulo - SP</p>
              </div>
              <a
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-[color:var(--background)] transition hover:bg-[color:var(--accent-strong)]"
                href="mailto:contato@letsgo.app.br"
              >
                Enviar email
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
