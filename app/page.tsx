"use client";

import { useState } from "react";

type IconProps = {
  className?: string;
};

const strengths = [
  {
    title: "Culture de la sécurité",
    text: "Habitué à évoluer dans un environnement ferroviaire alimenté en 750 V courant continu, où le strict respect des procédures de sécurité et des consignations est indispensable.",
    icon: ShieldIcon
  },
  {
    title: "Rigueur et respect des procédures",
    text: "Une grande rigueur dans l'application des protocoles d'exploitation et des règles de sécurité afin de garantir la protection des personnes et des installations.",
    icon: ClockIcon
  },
  {
    title: "Réactivité face aux incidents",
    text: "Une capacité à analyser rapidement les situations, à appliquer les procédures adaptées et à intervenir avec sang-froid en cas d'aléa d'exploitation.",
    icon: UsersIcon
  },
  {
    title: "Esprit d'équipe",
    text: "Une collaboration quotidienne avec les équipes de maintenance, de régulation et d'exploitation afin d'assurer la continuité du service.",
    icon: AlertIcon
  },
  {
    title: "Sens des responsabilités",
    text: "Une expérience acquise dans un environnement technique exigeant, où chaque décision a un impact direct sur la sécurité des voyageurs et du réseau.",
    icon: TeamIcon
  },
  {
    title: "Motivation",
    text: "Désireux de mettre mon expérience du milieu ferroviaire au service de la SNCF, de développer mes compétences en électricité basse tension et de construire une carrière durable au sein de l'entreprise.",
    icon: SparkIcon
  }
];

const photoSources = [
  "/image/photo-soulaiman.png",
  "/photo-soulaiman.png",
  "/photo-soulaiman/photo-soulaiman.png",
  "/photo-soulaiman.png/photo-soulaiman.png"
];

const reasons = [
  {
    title: "Environnement ferroviaire",
    text: "Mon expérience à la RTM m'a permis d'évoluer au sein d'un réseau ferroviaire exigeant, où la sécurité, la rigueur et le respect des procédures sont indispensables au bon fonctionnement des installations et de l'exploitation."
  },
  {
    title: "Culture de la sécurité",
    text: "En tant que conducteur de métro évoluant quotidiennement au contact d'installations alimentées en 750 V courant continu, j'ai développé une véritable culture de la sécurité ainsi qu'un profond respect des règles et des procédures techniques."
  },
  {
    title: "Rigueur et réactivité",
    text: "La conduite du métro durant la transition vers l'automatisation m'a appris à analyser rapidement les situations, à appliquer les procédures adaptées et à garder mon sang-froid dans un environnement technique exigeant."
  },
  {
    title: "Engagement durable",
    text: "Je souhaite rejoindre la SNCF afin de mettre à profit mon expérience du milieu ferroviaire, développer mes compétences en électricité basse tension et construire une carrière durable au sein de votre entreprise."
  }
];

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden text-mbc-graphite">
      <section className="premium-grid relative px-5 pb-20 pt-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <nav className="reveal flex items-center justify-between rounded-full border border-white/70 bg-white/75 px-4 py-3 shadow-soft backdrop-blur-xl sm:px-6">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-mbc-blue text-sm font-black text-white shadow-soft">
                SM
              </span>
              <span className="hidden text-sm font-semibold text-mbc-navy sm:block">
                Portfolio candidature SNCF
              </span>
            </div>
            <a
              href="#apports"
              className="rounded-full border border-mbc-blue/15 px-4 py-2 text-sm font-bold text-mbc-blue transition hover:border-mbc-green/40 hover:bg-mbc-green/10"
            >
              Voir mon profil
            </a>
          </nav>

          <div className="grid items-center gap-12 pb-8 pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:pt-24">
            <div className="reveal max-w-4xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-mbc-blue/15 bg-white/70 px-4 py-2 text-sm font-semibold text-mbc-blue shadow-soft backdrop-blur">
                <span className="size-2 rounded-full bg-mbc-green shadow-[0_0_0_6px_rgba(54,162,105,0.14)]" />
                Disponible immédiatement
              </div>
              <h1 className="max-w-5xl text-6xl font-black leading-[0.92] tracking-normal text-mbc-navy sm:text-7xl lg:text-8xl">
                Soulaiman Messaya
              </h1>
              <p className="mt-7 max-w-2xl text-xl font-medium leading-8 text-slate-600 sm:text-2xl">
                Candidature au poste d&apos;électricien basse tension à la SNCF. 
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-mbc-blue px-7 py-4 text-base font-extrabold text-white shadow-premium transition duration-300 hover:-translate-y-1 hover:bg-mbc-navy"
                >
                  <PhoneIcon className="size-5" />
                  Me contacter
                </button>
                <a
                  href="/Soulaiman_Messaya_CV_SNCF.pdf"
                  download
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-mbc-blue/20 bg-white px-7 py-4 text-base font-extrabold text-mbc-blue shadow-soft transition duration-300 hover:-translate-y-1 hover:border-mbc-green/40 hover:bg-mbc-green/10"
                >
                  <DownloadIcon className="size-5" />
                  Télécharger mon CV
                </a>
              </div>
            </div>

            <div className="reveal float-soft relative mx-auto w-full max-w-md lg:max-w-lg">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-mbc-blue/15 via-white/40 to-mbc-green/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-3 shadow-premium">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-mbc-sky">
                  <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-mbc-blue to-mbc-green text-7xl font-black text-white">
                    SM
                  </div>
                  <img
                    src={photoSources[photoIndex]}
                    alt="Portrait de Soulaiman Messaya"
                    className="relative h-[34rem] w-full object-cover object-center"
                    onError={(event) => {
                      if (photoIndex < photoSources.length - 1) {
                        setPhotoIndex((current) => current + 1);
                        return;
                      }
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-mbc-green">
              À propos de moi
            </p>
            <h2 className="mt-4 text-4xl font-black text-mbc-navy sm:text-5xl">
              Un profil de terrain, rigoureux et orienté sécurité.
            </h2>
          </div>
          <div className="route-line space-y-6">
            {[
              "Mon expérience au sein de la RTM m'a permis d'acquérir une connaissance concrète de l'environnement ferroviaire et des exigences liées à l'exploitation d'un réseau de transport. Évoluer quotidiennement au contact d'installations alimentées en 750 V courant continu m'a sensibilisé à l'importance du respect des procédures et de la sécurité.",
              "J'ai exercé en tant que conducteur de métro à Marseille durant la phase de transition vers l'automatisation du réseau, dans un contexte où la vigilance, la réactivité et la rigueur étaient indispensables pour garantir la sécurité des voyageurs et la continuité de l'exploitation.",
              "Aujourd'hui, je souhaite mettre cette expérience au service de la SNCF en intégrant un poste d'électricien basse tension. Sérieux, motivé et désireux d'apprendre, je souhaite développer mes compétences techniques, contribuer à la fiabilité des installations ferroviaires et construire une carrière durable au sein de votre entreprise."
            ].map((item) => (
              <div
                key={item}
                className="relative ml-10 rounded-3xl border border-white bg-white/80 p-6 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-premium"
              >
                <span className="absolute -left-[2.48rem] top-7 size-5 rounded-full border-4 border-white bg-mbc-blue shadow-soft" />
                <p className="text-lg leading-8 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apports" className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-mbc-green">
                Ce que je peux apporter à la SNCF
              </p>
              <h2 className="mt-4 text-4xl font-black text-mbc-navy sm:text-5xl">
                Des qualités utiles dès le premier service.
              </h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="group rounded-3xl border border-white bg-white/80 p-6 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-mbc-green/30 hover:shadow-premium"
              >
                <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-mbc-sky text-mbc-blue transition group-hover:bg-mbc-green group-hover:text-white">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-xl font-black text-mbc-navy">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-mbc-navy p-6 shadow-premium sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-mbc-green">
                Pourquoi me choisir ?
              </p>
              <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                Une candidature construite sur l'expérience, la fiabilité et l'envie.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <article
                  key={reason.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.08] p-6 text-white shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.13]"
                >
                  <span className="mb-5 grid size-10 place-items-center rounded-full bg-mbc-green text-sm font-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-black">{reason.title}</h3>
                  <p className="mt-3 leading-7 text-white/75">{reason.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white bg-white/85 p-8 shadow-premium backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-mbc-green">
              Disponible immédiatement
            </p>
            <div className="mt-7 grid gap-4">
              {["Disponible immédiatement.", "Véhiculé.", "Disponible pour travailler en horaires irréguliers."].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-mbc-sky/70 p-4 text-lg font-bold text-mbc-navy"
                  >
                    <CheckIcon className="size-6 shrink-0 text-mbc-green" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="rounded-[2rem] border border-mbc-blue/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-mbc-blue">
              Merci
            </p>
            <h2 className="mt-4 text-4xl font-black text-mbc-navy">
              Merci pour le temps consacré à ma candidature.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Je serais heureux d'échanger avec vous afin de vous présenter plus en détail mon parcours, ma motivation et la manière dont je pourrais contribuer à la fiabilité, à la sécurité et à la maintenance des installations électriques de la SNCF.
            </p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-mbc-green px-7 py-4 text-base font-extrabold text-white shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-mbc-blue"
            >
              <PhoneIcon className="size-5" />
              Ouvrir le contact
            </button>
          </div>
        </div>
      </section>

      {isContactOpen && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-mbc-navy/55 px-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
          onClick={() => setIsContactOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-[2rem] border border-white/70 bg-white p-7 shadow-premium"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-mbc-green">
                  Contact
                </p>
                <h2 id="contact-title" className="mt-2 text-3xl font-black text-mbc-navy">
                  Me contacter
                </h2>
              </div>
              <button
                onClick={() => setIsContactOpen(false)}
                className="grid size-11 place-items-center rounded-full bg-slate-100 text-mbc-navy transition hover:bg-mbc-blue hover:text-white"
                aria-label="Fermer la fenêtre de contact"
              >
                <CloseIcon className="size-5" />
              </button>
            </div>
            <div className="mt-7 space-y-4">
              <a
                href="tel:+33783425979"
                className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-mbc-blue/30 hover:bg-mbc-sky"
              >
                <PhoneIcon className="size-6 text-mbc-blue" />
                <span>
                  <span className="block text-sm font-bold text-slate-500">Téléphone</span>
                  <span className="text-lg font-black text-mbc-navy">+33 7 83 42 59 79</span>
                </span>
              </a>
              <a
                href="mailto:soulaiman.messaya@hotmail.com"
                className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-mbc-blue/30 hover:bg-mbc-sky"
              >
                <MailIcon className="size-6 text-mbc-blue" />
                <span>
                  <span className="block text-sm font-bold text-slate-500">Email</span>
                  <span className="text-lg font-black text-mbc-navy">soulaiman.messaya@hotmail.com</span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-mbc-green/20 bg-mbc-green/10 p-4">
                <CheckIcon className="size-6 text-mbc-green" />
                <span className="text-lg font-black text-mbc-navy">
                  Disponible immédiatement
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function SvgIcon({ children, className }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function ShieldIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-5" />
    </SvgIcon>
  );
}

function ClockIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </SvgIcon>
  );
}

function UsersIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </SvgIcon>
  );
}

function AlertIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </SvgIcon>
  );
}

function TeamIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M17 11h1a3 3 0 0 1 3 3v4" />
      <path d="M3 18v-4a3 3 0 0 1 3-3h1" />
      <circle cx="12" cy="7" r="4" />
      <path d="M8 21v-2a4 4 0 0 1 8 0v2" />
    </SvgIcon>
  );
}

function SparkIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M13 2 9 14l-7 2 7 2 4 4 2-8 7-4-7-1-2-7Z" />
    </SvgIcon>
  );
}

function PhoneIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.57 2.61a2 2 0 0 1-.45 2.11L8 9.67a16 16 0 0 0 6.33 6.33l1.23-1.23a2 2 0 0 1 2.11-.45c.84.25 1.71.45 2.61.57A2 2 0 0 1 22 16.92Z" />
    </SvgIcon>
  );
}

function DownloadIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </SvgIcon>
  );
}

function CheckIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M20 6 9 17l-5-5" />
    </SvgIcon>
  );
}

function CloseIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </SvgIcon>
  );
}

function MailIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </SvgIcon>
  );
}
