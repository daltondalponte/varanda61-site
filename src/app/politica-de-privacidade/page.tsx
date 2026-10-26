import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Varanda 61 Negócios",
  description:
    "Política de Privacidade da Varanda 61 Negócios - Como coletamos, usamos e protegemos seus dados pessoais conforme a LGPD.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-[color:var(--foreground)]">
      <div className="hero-sunrise absolute inset-0" />
      <div className="paper-grid pointer-events-none absolute inset-0" />

      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10">
        <a
          href="/"
          className="font-display text-xl tracking-wide text-[color:var(--foreground)] transition hover:text-[color:var(--accent)]"
        >
          ← Varanda 61 Negócios
        </a>
      </header>

      <main className="relative z-10 mx-auto max-w-4xl px-6 pb-20 sm:px-10">
        <article className="rounded-3xl border border-white/10 bg-[color:var(--surface)]/90 p-8 shadow-sm backdrop-blur sm:p-12">
          <header className="mb-8 space-y-4 border-b border-white/10 pb-8">
            <h1 className="font-display text-4xl text-[color:var(--foreground)] sm:text-5xl">
              Política de Privacidade
            </h1>
            <p className="text-sm text-[color:var(--muted)]">
              Última atualização: 26 de outubro de 2026
            </p>
          </header>

          <div className="prose-privacy space-y-8 text-[color:var(--foreground)]">
            <section>
              <h2 className="mb-4 font-display text-2xl text-[color:var(--foreground)]">
                1. Introdução
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                A <strong className="text-[color:var(--foreground)]">Varanda 61 Negócios</strong>,
                pessoa jurídica de direito privado, inscrita no CNPJ sob o nº{" "}
                <strong className="text-[color:var(--foreground)]">13.272.116/0001-85</strong>,
                com sede em São Paulo - SP, Brasil, é a controladora dos dados
                pessoais coletados e tratados através de nossos produtos
                digitais e integrações com plataformas Meta (Facebook,
                Instagram e WhatsApp).
              </p>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)]">
                Esta Política de Privacidade descreve como coletamos, usamos,
                armazenamos e protegemos seus dados pessoais, em conformidade
                com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº
                13.709/2018) e demais normas aplicáveis.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[color:var(--foreground)]">
                2. Dados Coletados
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                Podemos coletar e processar as seguintes categorias de dados
                pessoais:
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl border border-[color:var(--accent)]/20 bg-[color:var(--background)] p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[color:var(--foreground)]">
                    2.1. Dados de Contato
                  </h3>
                  <p className="text-sm text-[color:var(--muted)]">
                    Nome, endereço de e-mail, número de telefone e WhatsApp
                    fornecidos voluntariamente através de formulários de contato
                    ou comunicações diretas.
                  </p>
                </div>

                <div className="rounded-2xl border border-[color:var(--accent)]/20 bg-[color:var(--background)] p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[color:var(--foreground)]">
                    2.2. Dados de Conta e Autenticação
                  </h3>
                  <p className="text-sm text-[color:var(--muted)]">
                    Quando você cria uma conta em nossos produtos ou conecta
                    serviços da Meta Platforms (Facebook, Instagram, WhatsApp),
                    coletamos dados de identificação, credenciais de acesso e
                    informações de perfil autorizadas por você.
                  </p>
                </div>

                <div className="rounded-2xl border border-[color:var(--accent)]/20 bg-[color:var(--background)] p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[color:var(--foreground)]">
                    2.3. Dados de Plataformas Meta
                  </h3>
                  <p className="text-sm text-[color:var(--muted)]">
                    Quando você autoriza a conexão de suas contas Meta
                    (Facebook, Instagram, WhatsApp Business), coletamos e
                    processamos dados disponibilizados através das APIs da Meta
                    Platforms, incluindo:
                  </p>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-[color:var(--muted)]">
                    <li>
                      Informações de conta publicitária (campanhas, anúncios,
                      orçamentos, métricas de desempenho)
                    </li>
                    <li>
                      Dados de páginas e perfis conectados (nome, ID, seguidores)
                    </li>
                    <li>
                      Mensagens e interações via WhatsApp Business API (quando
                      aplicável ao atendimento ao cliente)
                    </li>
                    <li>
                      Dados de insights e análise de desempenho de anúncios
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-[color:var(--accent)]/20 bg-[color:var(--background)] p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[color:var(--foreground)]">
                    2.4. Dados de Navegação e Uso
                  </h3>
                  <p className="text-sm text-[color:var(--muted)]">
                    Informações técnicas sobre seu dispositivo, navegador,
                    endereço IP, páginas visitadas, data e hora de acesso, e
                    cookies (conforme seção específica).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[color:var(--foreground)]">
                3. Finalidades do Tratamento
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                Utilizamos seus dados pessoais para as seguintes finalidades:
              </p>
              <ul className="mt-4 space-y-3 text-base text-[color:var(--muted)]">
                <li className="flex gap-3">
                  <span className="text-[color:var(--accent)]">•</span>
                  <span>
                    <strong className="text-[color:var(--foreground)]">
                      Operação de produtos e serviços:
                    </strong>{" "}
                    Prover acesso e funcionalidades de nossos produtos digitais,
                    incluindo autenticação, personalização e suporte técnico.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--accent)]">•</span>
                  <span>
                    <strong className="text-[color:var(--foreground)]">
                      Gestão de campanhas publicitárias:
                    </strong>{" "}
                    Facilitar a criação, gestão, otimização e análise de
                    campanhas publicitárias através de integrações com Meta Ads
                    (Facebook Ads, Instagram Ads) e outras plataformas de
                    marketing digital.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--accent)]">•</span>
                  <span>
                    <strong className="text-[color:var(--foreground)]">
                      Atendimento ao cliente:
                    </strong>{" "}
                    Responder a solicitações, prestar suporte via e-mail,
                    WhatsApp ou outros canais de comunicação.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--accent)]">•</span>
                  <span>
                    <strong className="text-[color:var(--foreground)]">
                      Cumprimento de obrigações legais:
                    </strong>{" "}
                    Atender exigências legais, regulatórias, processos
                    judiciais ou solicitações de autoridades competentes.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--accent)]">•</span>
                  <span>
                    <strong className="text-[color:var(--foreground)]">
                      Melhoria contínua:
                    </strong>{" "}
                    Analisar o uso de nossos serviços para aprimorar
                    funcionalidades, desenvolver novos recursos e melhorar a
                    experiência do usuário.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--accent)]">•</span>
                  <span>
                    <strong className="text-[color:var(--foreground)]">
                      Segurança e prevenção de fraudes:
                    </strong>{" "}
                    Proteger nossos sistemas, detectar e prevenir atividades
                    fraudulentas ou abusivas.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[color:var(--foreground)]">
                4. Bases Legais (LGPD)
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                O tratamento de seus dados pessoais é fundamentado nas seguintes
                bases legais previstas na LGPD:
              </p>
              <ul className="mt-4 space-y-3 text-base text-[color:var(--muted)]">
                <li className="flex gap-3">
                  <span className="text-[color:var(--accent)]">•</span>
                  <span>
                    <strong className="text-[color:var(--foreground)]">
                      Consentimento (Art. 7º, I):
                    </strong>{" "}
                    Quando você fornece consentimento expresso para finalidades
                    específicas, como ao criar uma conta ou conectar serviços de
                    terceiros.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--accent)]">•</span>
                  <span>
                    <strong className="text-[color:var(--foreground)]">
                      Execução de contrato (Art. 7º, V):
                    </strong>{" "}
                    Para cumprir obrigações contratuais ou executar
                    procedimentos preliminares relacionados a contrato do qual
                    você é parte.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--accent)]">•</span>
                  <span>
                    <strong className="text-[color:var(--foreground)]">
                      Obrigação legal (Art. 7º, II):
                    </strong>{" "}
                    Para cumprimento de obrigação legal ou regulatória pelo
                    controlador.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--accent)]">•</span>
                  <span>
                    <strong className="text-[color:var(--foreground)]">
                      Legítimo interesse (Art. 7º, IX):
                    </strong>{" "}
                    Para atender interesses legítimos do controlador ou de
                    terceiros, respeitados os direitos e liberdades fundamentais
                    do titular.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[color:var(--foreground)]">
                5. Compartilhamento de Dados
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                Podemos compartilhar seus dados pessoais nas seguintes situações:
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl border border-[color:var(--accent)]/20 bg-[color:var(--background)] p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[color:var(--foreground)]">
                    5.1. Meta Platforms Inc.
                  </h3>
                  <p className="text-sm text-[color:var(--muted)]">
                    Quando você utiliza funcionalidades que integram serviços
                    Meta (Facebook, Instagram, WhatsApp), seus dados são
                    compartilhados com a Meta Platforms Inc. como operadora
                    e/ou plataforma, conforme os Termos de Uso e Políticas de
                    Privacidade da Meta, disponíveis em{" "}
                    <a
                      href="https://www.facebook.com/privacy/policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[color:var(--accent)] underline hover:text-[color:var(--accent-strong)]"
                    >
                      facebook.com/privacy/policy
                    </a>
                    .
                  </p>
                </div>

                <div className="rounded-2xl border border-[color:var(--accent)]/20 bg-[color:var(--background)] p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[color:var(--foreground)]">
                    5.2. Prestadores de Serviços
                  </h3>
                  <p className="text-sm text-[color:var(--muted)]">
                    Podemos compartilhar dados com fornecedores de hospedagem,
                    infraestrutura de nuvem, ferramentas de análise e outros
                    prestadores de serviços que atuam como operadores sob nosso
                    controle e instruções.
                  </p>
                </div>

                <div className="rounded-2xl border border-[color:var(--accent)]/20 bg-[color:var(--background)] p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[color:var(--foreground)]">
                    5.3. Obrigações Legais
                  </h3>
                  <p className="text-sm text-[color:var(--muted)]">
                    Quando necessário para cumprir ordem judicial, requisição de
                    autoridades competentes ou obrigação legal.
                  </p>
                </div>

                <div className="rounded-2xl border border-[color:var(--accent)]/20 bg-[color:var(--background)] p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[color:var(--foreground)]">
                    5.4. Proteção de Direitos
                  </h3>
                  <p className="text-sm text-[color:var(--muted)]">
                    Para proteger direitos, propriedade ou segurança da Varanda
                    61 Negócios, de nossos usuários ou do público, conforme
                    permitido ou exigido por lei.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)]">
                <strong className="text-[color:var(--foreground)]">
                  Importante:
                </strong>{" "}
                Não vendemos, alugamos ou comercializamos seus dados pessoais
                para terceiros para fins de marketing sem o seu consentimento
                expresso.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[color:var(--foreground)]">
                6. Transferência Internacional de Dados
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                Alguns de nossos prestadores de serviços e parceiros (incluindo
                a Meta Platforms Inc.) podem estar localizados em outros países.
                Quando realizamos transferência internacional de dados, adotamos
                medidas de segurança adequadas e garantias contratuais para
                proteger seus dados, em conformidade com a LGPD e normas
                aplicáveis, incluindo cláusulas-padrão contratuais e mecanismos
                de certificação reconhecidos.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[color:var(--foreground)]">
                7. Segurança dos Dados
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                Implementamos medidas técnicas e organizacionais apropriadas
                para proteger seus dados pessoais contra acesso não autorizado,
                perda, destruição, alteração, divulgação ou uso inadequado,
                incluindo:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-base text-[color:var(--muted)]">
                <li>Criptografia de dados em trânsito e em repouso</li>
                <li>Controles de acesso baseados em função e privilégio mínimo</li>
                <li>Monitoramento e auditoria de sistemas</li>
                <li>Treinamento de colaboradores em segurança da informação</li>
                <li>
                  Políticas de resposta a incidentes de segurança e notificação
                </li>
              </ul>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)]">
                Embora nos esforcemos para proteger seus dados, nenhum sistema
                de transmissão ou armazenamento de dados é 100% seguro. Em caso
                de incidente de segurança que possa acarretar risco ou dano
                relevante aos titulares, comunicaremos a Autoridade Nacional de
                Proteção de Dados (ANPD) e os titulares afetados conforme
                exigido pela LGPD.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[color:var(--foreground)]">
                8. Retenção de Dados
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                Mantemos seus dados pessoais pelo tempo necessário para cumprir
                as finalidades para as quais foram coletados, incluindo:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-base text-[color:var(--muted)]">
                <li>
                  Enquanto sua conta estiver ativa ou você utilizar nossos
                  serviços
                </li>
                <li>
                  Para cumprir obrigações legais, regulatórias, fiscais ou
                  contábeis
                </li>
                <li>
                  Para resolver disputas, fazer cumprir acordos ou proteger
                  direitos legais
                </li>
              </ul>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)]">
                Após o término do período de retenção, seus dados serão
                excluídos ou anonimizados de forma segura, salvo quando a
                manutenção for exigida por lei.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[color:var(--foreground)]">
                9. Direitos dos Titulares de Dados
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                De acordo com a LGPD (Art. 18), você possui os seguintes
                direitos em relação aos seus dados pessoais:
              </p>
              <ul className="mt-4 space-y-3 text-base text-[color:var(--muted)]">
                <li className="flex gap-3">
                  <span className="text-[color:var(--accent)]">•</span>
                  <span>
                    <strong className="text-[color:var(--foreground)]">
                      Confirmação e acesso:
                    </strong>{" "}
                    Confirmar a existência de tratamento e acessar seus dados
                    pessoais
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--accent)]">•</span>
                  <span>
                    <strong className="text-[color:var(--foreground)]">
                      Correção:
                    </strong>{" "}
                    Solicitar a correção de dados incompletos, inexatos ou
                    desatualizados
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--accent)]">•</span>
                  <span>
                    <strong className="text-[color:var(--foreground)]">
                      Anonimização, bloqueio ou eliminação:
                    </strong>{" "}
                    Solicitar a anonimização, bloqueio ou eliminação de dados
                    desnecessários, excessivos ou tratados em desconformidade
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--accent)]">•</span>
                  <span>
                    <strong className="text-[color:var(--foreground)]">
                      Portabilidade:
                    </strong>{" "}
                    Solicitar a portabilidade de seus dados a outro fornecedor
                    de serviço ou produto, mediante requisição expressa
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--accent)]">•</span>
                  <span>
                    <strong className="text-[color:var(--foreground)]">
                      Eliminação de dados tratados com consentimento:
                    </strong>{" "}
                    Solicitar a eliminação de dados pessoais tratados com base
                    no seu consentimento
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--accent)]">•</span>
                  <span>
                    <strong className="text-[color:var(--foreground)]">
                      Informação sobre compartilhamento:
                    </strong>{" "}
                    Obter informação sobre entidades públicas e privadas com as
                    quais compartilhamos seus dados
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--accent)]">•</span>
                  <span>
                    <strong className="text-[color:var(--foreground)]">
                      Informação sobre a possibilidade de não fornecer
                      consentimento:
                    </strong>{" "}
                    Ser informado sobre as consequências da negativa em
                    fornecer consentimento
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--accent)]">•</span>
                  <span>
                    <strong className="text-[color:var(--foreground)]">
                      Revogação do consentimento:
                    </strong>{" "}
                    Revogar o consentimento a qualquer momento
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--accent)]">•</span>
                  <span>
                    <strong className="text-[color:var(--foreground)]">
                      Oposição:
                    </strong>{" "}
                    Opor-se a tratamento realizado com base em hipótese de
                    dispensa de consentimento
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--accent)]">•</span>
                  <span>
                    <strong className="text-[color:var(--foreground)]">
                      Revisão de decisões automatizadas:
                    </strong>{" "}
                    Solicitar revisão de decisões tomadas unicamente com base em
                    tratamento automatizado de dados pessoais
                  </span>
                </li>
              </ul>
              <p className="mt-6 text-base leading-relaxed text-[color:var(--muted)]">
                Para exercer qualquer um desses direitos, entre em contato
                conosco através dos canais indicados na seção de Contato.
                Responderemos à sua solicitação dentro do prazo legal.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[color:var(--foreground)]">
                10. Cookies e Tecnologias Similares
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                Nosso site pode utilizar cookies e tecnologias similares para
                melhorar sua experiência de navegação, analisar o uso do site e
                auxiliar em funcionalidades. Cookies são pequenos arquivos de
                texto armazenados em seu dispositivo.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)]">
                Você pode configurar seu navegador para recusar todos ou alguns
                cookies, ou para alertá-lo quando cookies estiverem sendo
                enviados. No entanto, algumas funcionalidades do site podem não
                operar corretamente sem cookies.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[color:var(--foreground)]">
                11. Menores de Idade
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                Nossos serviços não são direcionados a menores de 18 anos. Não
                coletamos intencionalmente dados pessoais de menores sem o
                consentimento dos pais ou responsáveis legais. Caso identifique
                que coletamos dados de menor de idade sem autorização apropriada,
                entre em contato imediatamente para que possamos tomar as
                medidas cabíveis.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[color:var(--foreground)]">
                12. Alterações a Esta Política
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                Podemos atualizar esta Política de Privacidade periodicamente
                para refletir mudanças em nossas práticas, tecnologias, requisitos
                legais ou por outros motivos operacionais. Quando realizarmos
                alterações materiais, notificaremos você através de aviso em
                nosso site ou por outros meios apropriados. A data da última
                atualização será sempre indicada no topo deste documento.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)]">
                Recomendamos que você revise esta Política periodicamente para
                se manter informado sobre como protegemos seus dados.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[color:var(--foreground)]">
                13. Contato e Encarregado de Dados (DPO)
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                Para exercer seus direitos, esclarecer dúvidas sobre esta
                Política de Privacidade ou entrar em contato com nosso
                Encarregado de Proteção de Dados (Data Protection Officer - DPO),
                utilize os canais abaixo:
              </p>
              <div className="mt-6 space-y-4 rounded-2xl border border-[color:var(--accent)]/30 bg-[color:var(--background)] p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--muted)]">
                    Razão Social
                  </p>
                  <p className="text-base font-semibold text-[color:var(--foreground)]">
                    Varanda 61 Negócios
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--muted)]">
                    CNPJ
                  </p>
                  <p className="text-base font-semibold text-[color:var(--foreground)]">
                    13.272.116/0001-85
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--muted)]">
                    Email para Privacidade
                  </p>
                  <a
                    href="mailto:contato@letsgo.app.br"
                    className="text-base font-semibold text-[color:var(--accent)] transition hover:text-[color:var(--accent-strong)]"
                  >
                    contato@letsgo.app.br
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--muted)]">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/5516992338970"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-[color:var(--accent)] transition hover:text-[color:var(--accent-strong)]"
                  >
                    (16) 99233-8970
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--muted)]">
                    Localização
                  </p>
                  <p className="text-base font-semibold text-[color:var(--foreground)]">
                    São Paulo - SP, Brasil
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[color:var(--foreground)]">
                14. Autoridade Nacional de Proteção de Dados (ANPD)
              </h2>
              <p className="text-base leading-relaxed text-[color:var(--muted)]">
                Sem prejuízo de qualquer recurso administrativo ou judicial, se
                você acredita que o tratamento de seus dados pessoais não está
                em conformidade com a LGPD, você tem o direito de apresentar
                reclamação à Autoridade Nacional de Proteção de Dados (ANPD):
              </p>
              <div className="mt-4 rounded-2xl border border-[color:var(--accent)]/20 bg-[color:var(--background)] p-5">
                <p className="text-sm text-[color:var(--muted)]">
                  <strong className="text-[color:var(--foreground)]">
                    ANPD - Autoridade Nacional de Proteção de Dados
                  </strong>
                  <br />
                  Website:{" "}
                  <a
                    href="https://www.gov.br/anpd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[color:var(--accent)] underline hover:text-[color:var(--accent-strong)]"
                  >
                    gov.br/anpd
                  </a>
                </p>
              </div>
            </section>

            <section className="mt-12 border-t border-white/10 pt-8">
              <p className="text-center text-sm text-[color:var(--muted)]">
                Esta Política de Privacidade é regida pelas leis da República
                Federativa do Brasil.
              </p>
              <p className="mt-4 text-center text-sm text-[color:var(--muted)]">
                <strong className="text-[color:var(--foreground)]">
                  Última atualização:
                </strong>{" "}
                26 de outubro de 2026
              </p>
            </section>
          </div>
        </article>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)] transition hover:text-[color:var(--accent-strong)]"
          >
            ← Voltar para a página inicial
          </a>
        </div>
      </main>
    </div>
  );
}
