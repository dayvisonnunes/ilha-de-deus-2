import { useMemo, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, CheckCircle2, Clock, Droplets, GraduationCap, Handshake, Landmark, Lock, MapPin, Recycle, Users, Waves } from "lucide-react";
import { IMG } from "@/lib/images";
import { useData } from "@/components/data-provider";
import { computeStats } from "@/lib/stats";
import { fmtShort } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
function Eyebrow({
  children
}: {
  children: ReactNode;
}) {
  return <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-lagoon">
      <span className="h-px w-6 bg-lagoon/50" />
      {children}
    </p>;
}
export default function Home() {
  const {
    db
  } = useData();
  const stats = useMemo(() => computeStats(db), [db]);
  const numbers = [{
    icon: MapPin,
    value: stats.totalDenuncias,
    label: "denúncias mapeadas",
    note: "pontos verificados e publicados",
    iconBg: "bg-leaf text-white"
  }, {
    icon: Landmark,
    value: stats.encaminhadas,
    label: "encaminhadas a órgãos públicos",
    note: "cada uma com órgão, data e protocolo",
    iconBg: "bg-lagoon text-white"
  }, {
    icon: Clock,
    value: stats.diasDeSilencio,
    label: "dias de espera acumulados",
    note: `${stats.semRetorno} casos sem resposta até agora`,
    iconBg: "bg-destructive text-white"
  }, {
    icon: CheckCircle2,
    value: stats.resolvidas,
    label: "resolvidas",
    note: `${stats.resolvidasComunidade} em mutirão · ${stats.resolvidasOrgao} pelo órgão público`,
    iconBg: "bg-primary text-white"
  }, {
    icon: Recycle,
    value: stats.mutiroes,
    label: "mutirões e ações",
    note: "limpeza, plantio e educação ambiental",
    iconBg: "bg-leaf text-white"
  }, {
    icon: Users,
    value: stats.voluntarios,
    label: "voluntários mobilizados",
    note: "moradores, estudantes e parceiros",
    iconBg: "bg-lagoon text-white"
  }];
  return <div>
      {/* HERO */}
      <section className="bg-gradient-to-b from-foam to-background">
        <div className="mx-auto w-full max-w-7xl px-4 pt-16 text-center sm:px-6 lg:pt-24">
          <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-primary shadow-sm">
            <Droplets className="h-3.5 w-3.5 text-lagoon" />
            Ilha de Deus, Recife (PE)
          </span>
          <h1 className="animate-rise animate-rise-1 mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl">
            MANGUETOWN VIVA
            <span className="mt-1 block text-lagoon">Mangue &amp; Comunidade.</span>
          </h1>
          <p className="animate-rise animate-rise-2 mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{"Um projeto comunit\xE1rio que une os moradores da Ilha de Deus na integra\xE7\xE3o dos seus saberes culturais, resgate territorial e da fiscaliza\xE7\xE3o ambiental em uma plataforma integrada e colaborativa."}</p>
          <div className="animate-rise animate-rise-3 mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="leaf" size="lg">
              <Link to="/mapa">
                <MapPin className="h-4 w-4" />
                Acesse o mapa!
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/voluntariado">Quero ser voluntário</Link>
            </Button>
          </div>
        </div>
        <div className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:pb-20">
          <div className="animate-rise animate-rise-4 relative mt-12 overflow-hidden rounded-[2rem] border border-border/60 shadow-soft">
            <img src={IMG.hero} alt="Vista aérea da Ilha de Deus cercada de mangue e rios" className="h-[280px] w-full object-cover sm:h-[400px]" crossOrigin="anonymous" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
            <p className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur">{"Vista a\xE9rea da Ilha de Deus "}</p>
          </div>
        </div>
      </section>

      {/* DECLARAÇÃO DE VALOR */}
      <section className="border-b border-border/60 bg-foam">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-16 text-center sm:px-6 lg:py-20">
          <Waves className="h-8 w-8 text-primary/20" />
          <p className="mt-6 text-balance font-display text-2xl font-semibold leading-snug text-primary sm:text-3xl">{"A Ilha de Deus \xE9 parte do patrim\xF4nio natural do Recife: mangue, rio e gente que se sustentam juntos. Proteger esse territ\xF3rio \xE9 proteger a cidade inteira."}</p>
        </div>
      </section>

      {/* O PROJETO */}
      <section className="bg-background">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div>
            <h2 className="text-balance font-display text-3xl font-semibold leading-tight text-primary sm:text-4xl">
              Um projeto piloto de fiscalização e gestão comunitária que quer inspirar o Recife
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                A Ilha de Deus é território de cultura, sabor e saber. Berço do
                Manguebeat, terra de pescadores, marisqueiras e catadores de
                sururu, de um dos maiores manguezais urbanos do país e de uma
                culinária que nasce do rio.
              </p>
              <p>
                O Somos Ilha de Deus é uma plataforma digital da comunidade para
                mostrar tudo isso em um só lugar.
              </p>
              <p>
                Aqui você encontra a Ilha de verdade: sua história, sua
                culinária, seu artesanato, sua música, seu turismo de base
                comunitária — e também sua força para cuidar do território, com
                fiscalização comunitária, mapa de pontos críticos, mutirões e
                educação ambiental.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-gradient-to-br from-ocean-soft to-foam" />
            <img src="/images/projeto-piloto.jpg" alt="Registro da comunidade da Ilha de Deus" className="relative aspect-[4/3] w-full rounded-[2rem] border-4 border-white object-cover shadow-soft" crossOrigin="anonymous" />
            <div className="absolute -bottom-8 -left-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-white shadow-card sm:block">
              <img src={IMG.mangue} alt="Manguezal da Ilha de Deus" className="h-36 w-full object-cover" crossOrigin="anonymous" />
              <div className="bg-white px-3 py-2 text-xs font-medium text-primary">
                O mangue que nos cerca
              </div>
            </div>
            <div className="absolute -top-4 right-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary shadow-card sm:right-8">
              Ilha de Deus · Bacia do Pina
            </div>
          </div>
        </div>
      </section>

      {/* DADOS DA COMUNIDADE */}
      <section className="bg-foam">
        
      </section>

      {/* NOTÍCIAS */}
      <section className="bg-foam">
        
      </section>

      {/* IMPORTANTE — PRIVACIDADE */}
      <section className="bg-sand">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary text-white shadow-soft">
            <Lock className="h-6 w-6" />
          </span>
          <div>
            <p className="font-display text-xl font-semibold text-primary">
              IMPORTANTE: quem denuncia está protegido.
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground/80">
              Não publicamos nem compartilhamos o nome ou qualquer informação de
              contato de quem registra uma ocorrência. O contato, quando
              informado, é usado apenas internamente — e cada ponto publicado no
              mapa foi verificado antes, garantindo a veracidade das
              informações.
            </p>
          </div>
        </div>
      </section>

      {/* REALIZAÇÃO */}
      <section className="bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 text-center sm:px-6">
          <Eyebrow>Realização</Eyebrow>
          <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-semibold text-primary sm:text-4xl">
            Quem constrói esse caminho
          </h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[{
            icon: Users,
            title: "Comunidade da Ilha de Deus",
            text: "Olhar cotidiano e memória do território: quem alimenta o mapa com o que vive."
          }, {
            icon: GraduationCap,
            title: "Disciplina de extensão universitária",
            text: "Pesquisa, tecnologia e compromisso social trabalhando com a comunidade."
          }, {
            icon: Handshake,
            title: "Voluntários e parceiros",
            text: "Estudantes, coletivos e apoiadores que chegam para somar. Quer se somar?"
          }].map(c => <div key={c.title} className="rounded-2xl border border-border/70 bg-card p-6 text-left shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ocean-soft text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
              </div>)}
          </div>
          <p className="mt-12 text-sm text-muted-foreground">
            Projeto em construção — um piloto que mostra como a fiscalização
            comunitária pode proteger os sistemas costeiros do Recife.
          </p>
        </div>
      </section>
    </div>;
}