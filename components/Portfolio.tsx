"use client";

import React, { useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BarChart3,
  Bell,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  CreditCard,
  Download,
  Eye,
  EyeOff,
  FileText,
  Home,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Package,
  Plus,
  Search,
  Send,
  Settings,
  ShoppingBag,
  User,
  Users,
  Wallet,
  X,
} from "lucide-react";

type ProjectProps = {
  number: string;
  category: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

/* =========================================================
   PORTFOLIO
========================================================= */

export default function Portfolio() {
  const portfolioRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: "left" | "right") => {
    if (!portfolioRef.current) return;

    portfolioRef.current.scrollBy({
      left: direction === "right" ? window.innerWidth * 0.9 : -window.innerWidth * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      {/* HEADER */}

      <div className="mx-auto max-w-[1500px] px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-44">
        <div className="flex items-end justify-between gap-10">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
              Selected work / 05
            </div>

            <h2 className="mt-7 max-w-[950px] text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.82] tracking-[-0.08em]">
              Things
              <br />
              we build.
            </h2>

            <p className="mt-10 max-w-xl text-sm leading-7 text-white/40 md:text-base">
              Digital products, interfaces and experiences designed from
              strategy to execution.
            </p>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => scrollProjects("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition hover:bg-white/10"
            >
              <ArrowLeft size={15} />
            </button>

            <button
              onClick={() => scrollProjects("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition hover:bg-white/10"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* HORIZONTAL PROJECTS */}

      <div
        ref={portfolioRef}
        className="flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-32 scrollbar-none md:px-10"
      >
        {/* =====================================================
            01 — BLOCX PAY
        ===================================================== */}

        <Project
          number="01"
          category="FINTECH / MOBILE PRODUCT"
          title="BLOCX Pay"
          description="Mobile financial experience designed around balance, transfers and control of personal finances."
        >
          <BLOCXPay />
        </Project>

        {/* =====================================================
            02 — AGENDA
        ===================================================== */}

        <Project
          number="02"
          category="SAAS / PRODUCT DESIGN"
          title="Agenda"
          description="Appointment, sales and business-management platform for service businesses."
        >
          <Agenda />
        </Project>

        {/* =====================================================
            03 — UP
        ===================================================== */}

        <Project
          number="03"
          category="EDTECH / UX UI"
          title="Universidad Panamericana"
          description="UX/UI improvements for the university credit-management platform."
        >
          <UPCredits />
        </Project>

        {/* =====================================================
            04 — DISPERSIONES
        ===================================================== */}

        <Project
          number="04"
          category="FINTECH / WEB APP"
          title="Portal de dispersiones"
          description="Enterprise financial platform for managing batches, transactions, users and available balance."
        >
          <DisbursementPortal />
        </Project>

        {/* =====================================================
            05 — 500 LATAM
        ===================================================== */}

        <Project
          number="05"
          category="WEB / BRAND EXPERIENCE"
          title="500 LATAM"
          description="Digital experience designed to communicate the brand and its ecosystem."
        >
          <LatamWebsite />
        </Project>
      </div>
    </section>
  );
}

/* =========================================================
   PROJECT WRAPPER
========================================================= */

function Project({
  number,
  category,
  title,
  description,
  children,
}: ProjectProps) {
  return (
    <article className="w-[92vw] min-w-[92vw] snap-center md:w-[88vw] md:min-w-[88vw]">
      <div className="mb-5 flex items-center justify-between px-1">
        <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
          {number}
        </span>

        <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
          {category}
        </span>
      </div>

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#090909]">
        {children}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 bg-gradient-to-t from-black via-black/90 to-transparent p-6 pt-40 md:p-10 md:pt-48">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 font-mono text-[8px] uppercase tracking-[0.25em] text-white/30">
                {category}
              </div>

              <h3 className="text-4xl font-medium tracking-[-0.06em] md:text-7xl">
                {title}
              </h3>
            </div>

            <p className="max-w-md text-xs leading-6 text-white/40 md:text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   BLOCX PAY
========================================================= */

function BLOCXPay() {
  const [active, setActive] = useState<"home" | "transfer" | "menu">("home");
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="relative min-h-[720px] overflow-hidden bg-[#07152e] py-16 md:min-h-[820px] md:py-20">
      <div className="absolute left-6 top-6 z-40 font-mono text-[8px] uppercase tracking-[0.25em] text-white/30">
        BLOCX PAY / MOBILE PRODUCT
      </div>

      {/* DESKTOP: 3 PHONES */}

      <div className="relative z-10 mx-auto flex min-h-[650px] items-center justify-center gap-5 px-5 md:gap-8">
        {/* PHONE 1 */}

        <div className="hidden w-[270px] shrink-0 rotate-[-2deg] md:block">
          <BLOCXPhone>
            <BLOCXHome
              showBalance={showBalance}
              setShowBalance={setShowBalance}
              onMenu={() => setActive("menu")}
              onTransfer={() => setActive("transfer")}
            />
          </BLOCXPhone>
        </div>

        {/* PHONE 2 */}

        <div className="w-[285px] shrink-0 md:w-[300px]">
          <BLOCXPhone>
            <BLOCXTransfer
              onBack={() => setActive("home")}
            />
          </BLOCXPhone>
        </div>

        {/* PHONE 3 */}

        <div className="hidden w-[270px] shrink-0 rotate-[2deg] md:block">
          <BLOCXPhone>
            <div className="relative h-full overflow-hidden">
              <BLOCXHome
                showBalance={showBalance}
                setShowBalance={setShowBalance}
                onMenu={() => setActive("menu")}
                onTransfer={() => setActive("transfer")}
              />

              {/* MENU OVERLAY */}

              <div className="absolute inset-0 z-30 bg-[#06152f]/45 backdrop-blur-[14px]" />

              <div className="absolute inset-x-4 top-4 bottom-4 z-40 rounded-[28px] border border-white/15 bg-white/[0.10] p-5 shadow-2xl backdrop-blur-2xl">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">
                    BLOCX
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                    <X size={14} />
                  </div>
                </div>

                <div className="mt-10 space-y-2">
                  <BLOCXMenuItem
                    icon={Home}
                    label="Inicio"
                    active
                  />

                  <BLOCXMenuItem
                    icon={Send}
                    label="Transferencias"
                  />

                  <BLOCXMenuItem
                    icon={CreditCard}
                    label="Mis tarjetas"
                  />

                  <BLOCXMenuItem
                    icon={Wallet}
                    label="Mi cuenta"
                  />

                  <BLOCXMenuItem
                    icon={Settings}
                    label="Configuración"
                  />
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                        <CircleUserRound size={16} />
                      </div>

                      <div>
                        <div className="text-xs font-medium">
                          Ignacio Morfin
                        </div>

                        <div className="mt-1 text-[9px] text-white/40">
                          Cuenta personal
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BLOCXPhone>
        </div>
      </div>

      {/* MOBILE SWITCHER */}

      <div className="absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-black/30 p-1 backdrop-blur-xl md:hidden">
        <button
          onClick={() => setActive("home")}
          className={`rounded-full px-4 py-2 text-[9px] ${
            active === "home"
              ? "bg-white text-black"
              : "text-white/50"
          }`}
        >
          Home
        </button>

        <button
          onClick={() => setActive("transfer")}
          className={`rounded-full px-4 py-2 text-[9px] ${
            active === "transfer"
              ? "bg-white text-black"
              : "text-white/50"
          }`}
        >
          Transferir
        </button>

        <button
          onClick={() => setActive("menu")}
          className={`rounded-full px-4 py-2 text-[9px] ${
            active === "menu"
              ? "bg-white text-black"
              : "text-white/50"
          }`}
        >
          Menú
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   BLOCX PHONE
========================================================= */

function BLOCXPhone({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative mx-auto aspect-[9/18.5] w-full max-w-[300px] overflow-hidden rounded-[40px] border border-white/20 bg-[#06162f] shadow-[0_35px_100px_rgba(0,0,0,.45)]">
      <div className="absolute left-1/2 top-2 z-50 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/backapp.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <div className="relative h-full">{children}</div>
    </div>
  );
}

/* =========================================================
   BLOCX HOME
========================================================= */

function BLOCXHome({
  showBalance,
  setShowBalance,
  onMenu,
  onTransfer,
}: {
  showBalance: boolean;
  setShowBalance: React.Dispatch<React.SetStateAction<boolean>>;
  onMenu: () => void;
  onTransfer: () => void;
}) {
  return (
    <div className="flex h-full flex-col px-5 pb-5 pt-11 text-white">
      <div className="flex items-center justify-between">
        <button
          onClick={onMenu}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl"
        >
          <Menu size={17} />
        </button>

        <div className="text-[11px] font-semibold tracking-wide">
          BLOCX
        </div>

        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
          <Bell size={15} />
        </button>
      </div>

      <div className="mt-8">
        <div className="text-[11px] text-white/55">
          Bienvenido Ignacio Morfin
        </div>

        <div className="mt-1 text-[9px] text-white/35">
          Este es el resumen de tu cuenta
        </div>
      </div>

      <div className="mt-5 rounded-[24px] border border-white/15 bg-white/[0.11] p-5 shadow-xl backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="text-[9px] uppercase tracking-[0.15em] text-white/45">
            Balance disponible
          </div>

          <button
            onClick={() => setShowBalance((value) => !value)}
            className="text-white/55"
          >
            {showBalance ? <EyeOff size={14} /> : <Eye size={14} />}
          </button>
        </div>

        <div className="mt-3 text-[29px] font-medium tracking-[-0.05em]">
          {showBalance ? "$32,000.00" : "••••••••"}
        </div>

        <div className="mt-1 text-[9px] text-white/40">
          USD
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="h-7 w-11 rounded-md bg-gradient-to-br from-white/80 to-white/20" />

          <div>
            <div className="text-[8px] text-white/35">
              Visa Débito
            </div>

            <div className="mt-1 text-[9px]">
              **** 1234
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        <BLOCXAction
          icon={Send}
          label="Transferir"
          onClick={onTransfer}
        />

        <BLOCXAction
          icon={ArrowDown}
          label="Recibir"
        />

        <BLOCXAction
          icon={CreditCard}
          label="Cuenta"
        />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-[11px] font-medium">
          Envío internacional
        </div>

        <ChevronRight
          size={14}
          className="text-white/40"
        />
      </div>

      <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[9px] text-white/45">
              Próximo envío
            </div>

            <div className="mt-1 text-xs">
              México → Colombia
            </div>
          </div>

          <ArrowUpRight
            size={16}
            className="text-white/40"
          />
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium">
            Actividad
          </span>

          <span className="text-[8px] text-white/35">
            Ver todo
          </span>
        </div>

        <div className="mt-3 space-y-2">
          <BLOCXTransaction
            title="Transferencia recibida"
            subtitle="Hoy, 10:32"
            amount="+$2,500.00"
            positive
          />

          <BLOCXTransaction
            title="Envío internacional"
            subtitle="Ayer, 16:20"
            amount="-$850.00"
          />
        </div>
      </div>
    </div>
  );
}

function BLOCXAction({
  icon: Icon,
  label,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.08] px-2 py-3 backdrop-blur-xl transition hover:bg-white/[0.14]"
    >
      <Icon size={15} />

      <span className="text-[8px] text-white/70">
        {label}
      </span>
    </button>
  );
}

function BLOCXTransaction({
  title,
  subtitle,
  amount,
  positive,
}: {
  title: string;
  subtitle: string;
  amount: string;
  positive?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.05] px-3 py-2.5">
      <div className="flex items-center gap-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
          {positive ? (
            <ArrowDown size={12} />
          ) : (
            <ArrowUp size={12} />
          )}
        </div>

        <div>
          <div className="text-[8px]">
            {title}
          </div>

          <div className="mt-1 text-[7px] text-white/30">
            {subtitle}
          </div>
        </div>
      </div>

      <div
        className={`text-[8px] ${
          positive ? "text-emerald-300" : "text-white/70"
        }`}
      >
        {amount}
      </div>
    </div>
  );
}

/* =========================================================
   BLOCX TRANSFER
========================================================= */

function BLOCXTransfer({
  onBack,
}: {
  onBack: () => void;
}) {
  const countries = [
    "Colombia",
    "México",
    "Argentina",
    "Bolivia",
    "Ecuador",
    "Costa Rica",
    "Cuba",
    "Francia",
    "España",
  ];

  const [search, setSearch] = useState("");

  const filtered = countries.filter((country) =>
    country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-full flex-col px-5 pb-5 pt-11 text-white">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10"
        >
          <ChevronLeft size={17} />
        </button>

        <div className="text-[10px] font-medium">
          Transferencia internacional
        </div>

        <div className="w-9" />
      </div>

      <div className="mt-8">
        <div className="text-[20px] font-medium tracking-[-0.04em]">
          ¿A dónde quieres
          <br />
          enviar dinero?
        </div>

        <div className="mt-2 text-[9px] leading-4 text-white/40">
          Selecciona el país donde se encuentra el destinatario.
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.08] px-3 py-3">
        <Search
          size={14}
          className="text-white/35"
        />

        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Buscar país"
          className="w-full bg-transparent text-[9px] outline-none placeholder:text-white/30"
        />
      </div>

      <div className="mt-6 text-[8px] uppercase tracking-[0.2em] text-white/30">
        Recientes
      </div>

      <div className="mt-3">
        <CountryRow
          country="Colombia"
          flag="🇨🇴"
          recent
        />
      </div>

      <div className="mt-6 text-[8px] uppercase tracking-[0.2em] text-white/30">
        Todos los países
      </div>

      <div className="mt-2 flex-1 overflow-auto">
        {filtered.map((country) => (
          <CountryRow
            key={country}
            country={country}
            flag={
              country === "México"
                ? "🇲🇽"
                : country === "Argentina"
                  ? "🇦🇷"
                  : country === "Francia"
                    ? "🇫🇷"
                    : country === "España"
                      ? "🇪🇸"
                      : "🌎"
            }
          />
        ))}
      </div>
    </div>
  );
}

function CountryRow({
  country,
  flag,
  recent,
}: {
  country: string;
  flag: string;
  recent?: boolean;
}) {
  return (
    <button className="flex w-full items-center justify-between border-b border-white/5 py-3 text-left">
      <div className="flex items-center gap-3">
        <span className="text-[18px]">
          {flag}
        </span>

        <span className="text-[10px]">
          {country}
        </span>
      </div>

      {recent ? (
        <span className="text-[7px] text-white/30">
          Reciente
        </span>
      ) : (
        <ChevronRight
          size={12}
          className="text-white/25"
        />
      )}
    </button>
  );
}

function BLOCXMenuItem({
  icon: Icon,
  label,
  active,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left ${
        active
          ? "bg-white text-black"
          : "text-white/70 hover:bg-white/10"
      }`}
    >
      <Icon size={15} />

      <span className="text-[10px]">
        {label}
      </span>
    </button>
  );
}

/* =========================================================
   AGENDA
========================================================= */

function Agenda() {
  const [screen, setScreen] = useState<
    "calendar" | "new" | "sales" | "reports"
  >("calendar");

  return (
    <div className="relative min-h-[720px] overflow-hidden bg-[#f5f5f7] text-[#222] md:min-h-[820px]">
      <div className="flex h-full min-h-[720px] md:min-h-[820px]">
        {/* SIDEBAR */}

        <aside className="hidden w-[220px] shrink-0 border-r border-[#e5e5e8] bg-white md:flex md:flex-col">
          <div className="flex h-[74px] items-center border-b border-[#ededee] px-6">
            <div>
              <div className="text-[17px] font-semibold tracking-[-0.04em]">
                Agenda
              </div>

              <div className="mt-1 text-[8px] text-[#999]">
                Gestión de negocio
              </div>
            </div>
          </div>

          <div className="flex-1 p-4">
            <AgendaNav
              icon={Calendar}
              label="Citas"
              active={screen === "calendar" || screen === "new"}
              onClick={() => setScreen("calendar")}
            />

            <AgendaNav
              icon={ShoppingBag}
              label="Ventas"
              active={screen === "sales"}
              onClick={() => setScreen("sales")}
            />

            <AgendaNav
              icon={Users}
              label="Clientes"
            />

            <AgendaNav
              icon={Package}
              label="Productos"
            />

            <AgendaNav
              icon={BarChart3}
              label="Reportes"
              active={screen === "reports"}
              onClick={() => setScreen("reports")}
            />

            <AgendaNav
              icon={User}
              label="Empleados"
            />

            <div className="my-5 h-px bg-[#ededee]" />

            <AgendaNav
              icon={Settings}
              label="Configuración"
            />
          </div>

          <div className="border-t border-[#ededee] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ececf0]">
                <CircleUserRound size={14} />
              </div>

              <div>
                <div className="text-[9px] font-medium">
                  Adrian Morfin
                </div>

                <div className="mt-1 text-[7px] text-[#999]">
                  Administrador
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN */}

        <main className="min-w-0 flex-1">
          <div className="flex h-[74px] items-center justify-between border-b border-[#e7e7e9] bg-white px-5 md:px-8">
            <div className="flex items-center gap-3">
              <Menu
                size={17}
                className="text-[#888] md:hidden"
              />

              <div>
                <div className="text-[8px] uppercase tracking-[0.18em] text-[#aaa]">
                  Agenda
                </div>

                <div className="mt-1 text-[13px] font-medium">
                  {screen === "reports"
                    ? "Estadísticas e informes"
                    : screen === "sales"
                      ? "Ventas"
                      : "Citas"}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Search
                size={15}
                className="text-[#999]"
              />

              <Bell
                size={15}
                className="text-[#999]"
              />

              <button
                onClick={() => setScreen("new")}
                className="hidden items-center gap-2 rounded-lg bg-[#222] px-4 py-2.5 text-[9px] font-medium text-white md:flex"
              >
                <Plus size={13} />
                Nueva cita
              </button>
            </div>
          </div>

          <div className="p-5 md:p-8">
            {screen === "calendar" && (
              <AgendaCalendar
                onNew={() => setScreen("new")}
              />
            )}

            {screen === "new" && (
              <AgendaNewAppointment
                onBack={() => setScreen("calendar")}
              />
            )}

            {screen === "sales" && (
              <AgendaSales />
            )}

            {screen === "reports" && (
              <AgendaReports />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function AgendaNav({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[9px] transition ${
        active
          ? "bg-[#f0f0f3] font-medium text-[#222]"
          : "text-[#777] hover:bg-[#f6f6f7]"
      }`}
    >
      <Icon size={14} />

      {label}
    </button>
  );
}

function AgendaCalendar({
  onNew,
}: {
  onNew: () => void;
}) {
  const days = [
    ["Lun", "06"],
    ["Mar", "07"],
    ["Mié", "08"],
    ["Jue", "09"],
    ["Vie", "10"],
    ["Sáb", "11"],
    ["Dom", "12"],
  ];

  return (
    <div>
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <div className="text-[22px] font-semibold tracking-[-0.05em]">
            Agenda
          </div>

          <div className="mt-1 text-[9px] text-[#999]">
            Consulta y administra las citas de tu negocio.
          </div>
        </div>

        <div className="flex gap-2">
          <button className="rounded-lg border border-[#dedee2] bg-white px-3 py-2 text-[9px]">
            Hoy
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-[#222] px-3 py-2 text-[9px] text-white">
            <Plus size={12} />
            Nueva cita
          </button>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-2">
        <button className="rounded-lg border border-[#dedee2] bg-white px-3 py-2 text-[9px]">
          Todos los empleados
          <ChevronDown
            size={11}
            className="ml-2 inline"
          />
        </button>

        <button className="rounded-lg border border-[#dedee2] bg-white px-3 py-2 text-[9px]">
          Todos los servicios
          <ChevronDown
            size={11}
            className="ml-2 inline"
          />
        </button>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2e2e5] bg-white">
        <div className="grid grid-cols-7 border-b border-[#ededee]">
          {days.map(([day, date]) => (
            <div
              key={date}
              className="border-r border-[#ededee] px-2 py-4 text-center last:border-r-0"
            >
              <div className="text-[7px] uppercase text-[#aaa]">
                {day}
              </div>

              <div
                className={`mt-1 text-[13px] font-medium ${
                  date === "08"
                    ? "mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#222] text-white"
                    : ""
                }`}
              >
                {date}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7">
          {days.map((_, index) => (
            <div
              key={index}
              className="relative min-h-[410px] border-r border-[#ededee] p-2 last:border-r-0"
            >
              {index === 1 && (
                <AgendaAppointment
                  top="55px"
                  title="Corte de cabello"
                  client="Carlos Ramírez"
                  time="10:00"
                />
              )}

              {index === 2 && (
                <>
                  <AgendaAppointment
                    top="105px"
                    title="Corte de barba"
                    client="Juan Pérez"
                    time="11:00"
                  />

                  <AgendaAppointment
                    top="235px"
                    title="Corte de cabello"
                    client="Miguel Ángel"
                    time="14:00"
                  />
                </>
              )}

              {index === 4 && (
                <AgendaAppointment
                  top="165px"
                  title="Greca"
                  client="Fernando Soto"
                  time="13:00"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-end">
        <button
          onClick={onNew}
          className="text-[9px] text-[#777] underline underline-offset-4"
        >
          Abrir nueva cita
        </button>
      </div>
    </div>
  );
}

function AgendaAppointment({
  top,
  title,
  client,
  time,
}: {
  top: string;
  title: string;
  client: string;
  time: string;
}) {
  return (
    <div
      className="absolute left-2 right-2 rounded-lg border border-[#d8d8dc] bg-[#f4f4f6] p-2"
      style={{ top }}
    >
      <div className="text-[7px] font-semibold">
        {time}
      </div>

      <div className="mt-1 text-[8px] font-medium">
        {title}
      </div>

      <div className="mt-1 text-[7px] text-[#999]">
        {client}
      </div>
    </div>
  );
}

function AgendaNewAppointment({
  onBack,
}: {
  onBack: () => void;
}) {
  return (
    <div className="mx-auto max-w-[850px]">
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-[9px] text-[#777]"
      >
        <ChevronLeft size={13} />
        Volver a citas
      </button>

      <div className="rounded-2xl border border-[#e2e2e5] bg-white">
        <div className="border-b border-[#ededee] p-6">
          <div className="text-[18px] font-semibold tracking-[-0.04em]">
            Cita nueva
          </div>

          <div className="mt-1 text-[9px] text-[#999]">
            Programa una nueva cita para un cliente.
          </div>
        </div>

        <div className="grid gap-6 p-6 md:grid-cols-2">
          <AgendaField
            label="Cliente"
            value="Selecciona un cliente"
          />

          <AgendaField
            label="Servicio"
            value="Selecciona un servicio"
          />

          <AgendaField
            label="Inicio"
            value="08/07/2026 — 10:00"
          />

          <AgendaField
            label="Fin"
            value="08/07/2026 — 11:00"
          />

          <AgendaField
            label="Empleado"
            value="Selecciona un empleado"
          />

          <AgendaField
            label="Precio"
            value="$450.00"
          />
        </div>

        <div className="border-t border-[#ededee] p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[9px] text-[#999]">
                Total
              </div>

              <div className="mt-1 text-[20px] font-semibold">
                $450.00
              </div>
            </div>

            <button className="rounded-lg bg-[#222] px-5 py-3 text-[9px] text-white">
              Guardar cita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AgendaField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <label className="text-[8px] font-medium text-[#777]">
        {label}
      </label>

      <button className="mt-2 flex w-full items-center justify-between rounded-lg border border-[#dedee2] bg-white px-3 py-3 text-left text-[9px]">
        {value}

        <ChevronDown
          size={11}
          className="text-[#aaa]"
        />
      </button>
    </div>
  );
}

function AgendaSales() {
  return (
    <div>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-[22px] font-semibold tracking-[-0.05em]">
            Ventas
          </div>

          <div className="mt-1 text-[9px] text-[#999]">
            Nueva venta y transacciones.
          </div>
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-[#222] px-4 py-2.5 text-[9px] text-white">
          <Plus size={12} />
          Nueva venta
        </button>
      </div>

      <div className="mt-7 grid gap-5 lg:grid-cols-[1fr_330px]">
        <div className="rounded-2xl border border-[#e2e2e5] bg-white">
          <div className="border-b border-[#ededee] p-5">
            <div className="text-[11px] font-medium">
              Nueva venta
            </div>
          </div>

          <div className="grid gap-2 p-5 sm:grid-cols-2">
            {[
              "Corte de barba",
              "Corte de cabello",
              "Greca",
              "Pomada",
            ].map((item) => (
              <button
                key={item}
                className="flex items-center justify-between rounded-xl border border-[#e4e4e7] p-4 text-left hover:bg-[#f7f7f8]"
              >
                <span className="text-[9px]">
                  {item}
                </span>

                <Plus size={13} />
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[#e2e2e5] bg-white p-5">
          <div className="text-[11px] font-medium">
            Detalle de venta
          </div>

          <div className="mt-5 space-y-4">
            <SaleRow
              title="Corte de cabello"
              price="$350"
            />

            <SaleRow
              title="Pomada"
              price="$180"
            />
          </div>

          <div className="mt-6 border-t border-[#ededee] pt-5">
            <div className="flex justify-between text-[9px] text-[#999]">
              <span>Subtotal</span>
              <span>$530.00</span>
            </div>

            <div className="mt-2 flex justify-between text-[9px] text-[#999]">
              <span>Descuento</span>
              <span>$0.00</span>
            </div>

            <div className="mt-4 flex justify-between">
              <span className="text-[11px] font-medium">
                Total
              </span>

              <span className="text-[17px] font-semibold">
                $530.00
              </span>
            </div>
          </div>

          <button className="mt-5 w-full rounded-lg bg-[#222] py-3 text-[9px] text-white">
            Cobrar
          </button>
        </div>
      </div>
    </div>
  );
}

function SaleRow({
  title,
  price,
}: {
  title: string;
  price: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-[9px]">
        {title}
      </div>

      <div className="text-[9px]">
        {price}
      </div>
    </div>
  );
}

function AgendaReports() {
  return (
    <div>
      <div>
        <div className="text-[22px] font-semibold tracking-[-0.05em]">
          Estadísticas e informes
        </div>

        <div className="mt-1 text-[9px] text-[#999]">
          Consulta el rendimiento de tu negocio.
        </div>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-4">
        <AgendaMetric
          label="Ventas"
          value="$28,450"
          trend="+12.4%"
        />

        <AgendaMetric
          label="Citas"
          value="184"
          trend="+8.2%"
        />

        <AgendaMetric
          label="Clientes"
          value="96"
          trend="+5.1%"
        />

        <AgendaMetric
          label="Ticket promedio"
          value="$415"
          trend="+4.8%"
        />
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-[#e2e2e5] bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] font-medium">
                Ventas
              </div>

              <div className="mt-1 text-[8px] text-[#aaa]">
                Últimos 7 días
              </div>
            </div>

            <MoreHorizontal
              size={15}
              className="text-[#aaa]"
            />
          </div>

          <div className="mt-10 flex h-[190px] items-end gap-3">
            {[38, 54, 42, 70, 61, 82, 92].map(
              (height, index) => (
                <div
                  key={index}
                  className="flex flex-1 flex-col justify-end gap-2"
                >
                  <div
                    className="rounded-t-md bg-[#222]"
                    style={{ height: `${height}%` }}
                  />

                  <span className="text-center text-[7px] text-[#aaa]">
                    {index + 1}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-[#e2e2e5] bg-white p-6">
          <div className="text-[11px] font-medium">
            Servicios más vendidos
          </div>

          <div className="mt-6 space-y-5">
            <ReportRow
              label="Corte de cabello"
              value="42%"
            />

            <ReportRow
              label="Corte de barba"
              value="27%"
            />

            <ReportRow
              label="Greca"
              value="18%"
            />

            <ReportRow
              label="Otros"
              value="13%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function AgendaMetric({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend: string;
}) {
  return (
    <div className="rounded-2xl border border-[#e2e2e5] bg-white p-5">
      <div className="text-[8px] uppercase tracking-[0.15em] text-[#aaa]">
        {label}
      </div>

      <div className="mt-3 text-[22px] font-semibold tracking-[-0.05em]">
        {value}
      </div>

      <div className="mt-2 flex items-center gap-1 text-[8px] text-[#666]">
        <ArrowUpRight size={10} />
        {trend}
      </div>
    </div>
  );
}

function ReportRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="flex justify-between text-[8px]">
        <span>{label}</span>
        <span className="text-[#999]">
          {value}
        </span>
      </div>

      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#eeeeef]">
        <div
          className="h-full rounded-full bg-[#222]"
          style={{ width: value }}
        />
      </div>
    </div>
  );
}

/* =========================================================
   UP CREDITS
========================================================= */

function UPCredits() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const students = [
    {
      name: "María Fernanda López",
      enrollment: "0234567",
      campus: "Ciudad de México",
      status: "Activo",
      credit: "$45,000",
    },
    {
      name: "Carlos Eduardo Ramírez",
      enrollment: "0234891",
      campus: "Ciudad de México",
      status: "Activo",
      credit: "$32,000",
    },
    {
      name: "Ana Sofía Hernández",
      enrollment: "0240123",
      campus: "Guadalajara",
      status: "Pendiente",
      credit: "$28,500",
    },
    {
      name: "Diego Alejandro Torres",
      enrollment: "0241187",
      campus: "Aguascalientes",
      status: "Activo",
      credit: "$36,800",
    },
    {
      name: "Valeria Gómez",
      enrollment: "0242218",
      campus: "Ciudad de México",
      status: "Activo",
      credit: "$52,000",
    },
  ];

  const filtered = students.filter((student) =>
    `${student.name} ${student.enrollment}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="relative min-h-[720px] overflow-hidden bg-[#f6f6f6] text-[#252525] md:min-h-[820px]">
      <div className="flex min-h-[720px] md:min-h-[820px]">
        <aside className="hidden w-[220px] shrink-0 bg-[#861f41] p-5 text-white md:block">
          <div className="text-[13px] font-semibold">
            Universidad
            <br />
            Panamericana
          </div>

          <div className="mt-10 space-y-1">
            {[
              "Inicio",
              "Alumnos",
              "Créditos",
              "Pagos",
              "Reportes",
              "Configuración",
            ].map((item) => (
              <div
                key={item}
                className={`rounded-lg px-3 py-2.5 text-[9px] ${
                  item === "Créditos"
                    ? "bg-white/15 text-white"
                    : "text-white/60"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <div className="flex h-[70px] items-center justify-between border-b border-[#e5e5e5] bg-white px-5 md:px-8">
            <div className="text-[14px] font-medium">
              Créditos
            </div>

            <div className="flex items-center gap-3">
              <Bell
                size={15}
                className="text-[#999]"
              />

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eee]">
                <User size={13} />
              </div>
            </div>
          </div>

          <div className="p-5 md:p-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div className="text-[21px] font-semibold tracking-[-0.05em]">
                  Créditos
                </div>

                <div className="mt-1 text-[8px] text-[#999]">
                  Datos actualizados al: 03/07/2026
                </div>
              </div>

              <button className="flex items-center gap-2 rounded-lg border border-[#ddd] bg-white px-4 py-2.5 text-[9px]">
                <Download size={12} />
                Exportar
              </button>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              <div className="flex min-w-[220px] items-center gap-2 rounded-lg border border-[#ddd] bg-white px-3 py-2.5">
                <Search
                  size={13}
                  className="text-[#aaa]"
                />

                <input
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Buscar alumno o matrícula"
                  className="w-full bg-transparent text-[9px] outline-none"
                />
              </div>

              <button className="rounded-lg border border-[#ddd] bg-white px-3 py-2.5 text-[9px]">
                Todos los campus
                <ChevronDown
                  size={10}
                  className="ml-2 inline"
                />
              </button>

              <button className="rounded-lg border border-[#ddd] bg-white px-3 py-2.5 text-[9px]">
                Todos los estados
                <ChevronDown
                  size={10}
                  className="ml-2 inline"
                />
              </button>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-[#dedede] bg-white">
              <div className="hidden grid-cols-[2fr_1fr_1.3fr_1fr_1fr] border-b border-[#eee] bg-[#fafafa] px-5 py-3 text-[7px] uppercase tracking-[0.15em] text-[#999] md:grid">
                <div>Alumno</div>
                <div>Matrícula</div>
                <div>Campus</div>
                <div>Estado</div>
                <div>Crédito</div>
              </div>

              {filtered.map((student) => (
                <button
                  key={student.enrollment}
                  onClick={() =>
                    setSelected(student.name)
                  }
                  className="grid w-full border-b border-[#eee] px-5 py-4 text-left transition hover:bg-[#fafafa] md:grid-cols-[2fr_1fr_1.3fr_1fr_1fr]"
                >
                  <div className="text-[9px] font-medium">
                    {student.name}
                  </div>

                  <div className="mt-1 text-[8px] text-[#999] md:mt-0">
                    {student.enrollment}
                  </div>

                  <div className="mt-1 text-[8px] text-[#777] md:mt-0">
                    {student.campus}
                  </div>

                  <div className="mt-1 md:mt-0">
                    <span className="rounded-full bg-[#edf5ed] px-2 py-1 text-[7px] text-[#497449]">
                      {student.status}
                    </span>
                  </div>

                  <div className="mt-1 text-[9px] md:mt-0">
                    {student.credit}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>

      {selected && (
        <div className="absolute inset-0 z-50 flex justify-end bg-black/20">
          <div className="h-full w-full max-w-[390px] bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="text-[14px] font-semibold">
                Detalle del alumno
              </div>

              <button
                onClick={() => setSelected(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f1f1f1]"
              >
                <X size={14} />
              </button>
            </div>

            <div className="mt-8 text-[18px] font-medium">
              {selected}
            </div>

            <div className="mt-7 space-y-4">
              <Detail
                label="Estado"
                value="Activo"
              />

              <Detail
                label="Campus"
                value="Ciudad de México"
              />

              <Detail
                label="Periodo"
                value="2026 - 2027"
              />

              <Detail
                label="Crédito disponible"
                value="$32,000 MXN"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-[#eee] pb-4">
      <div className="text-[8px] uppercase tracking-[0.15em] text-[#aaa]">
        {label}
      </div>

      <div className="mt-2 text-[10px]">
        {value}
      </div>
    </div>
  );
}

/* =========================================================
   DISBURSEMENT PORTAL
========================================================= */

function DisbursementPortal() {
  const [screen, setScreen] = useState<
    "dashboard" | "upload" | "transactions" | "users"
  >("dashboard");

  return (
    <div
      className="relative min-h-[720px] overflow-hidden text-white md:min-h-[820px]"
      style={{
        backgroundImage: "url('/backdisp.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-[#06152f]/15" />

      <div className="relative z-10 flex min-h-[720px] md:min-h-[820px]">
        {/* SIDEBAR */}

        <aside className="hidden w-[220px] shrink-0 border-r border-white/10 bg-[#06152f]/55 p-4 backdrop-blur-2xl md:flex md:flex-col">
          <div className="flex h-[58px] items-center gap-2 px-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
              <Wallet size={15} />
            </div>

            <div className="text-[12px] font-semibold">
              BLOCX PAY
            </div>
          </div>

          <div className="mt-8 space-y-1">
            <DispersionNav
              icon={LayoutDashboard}
              label="Dashboard"
              active={screen === "dashboard"}
              onClick={() => setScreen("dashboard")}
            />

            <DispersionNav
              icon={ArrowUp}
              label="Upload Batch"
              active={screen === "upload"}
              onClick={() => setScreen("upload")}
            />

            <DispersionNav
              icon={FileText}
              label="Transactions"
              active={screen === "transactions"}
              onClick={() => setScreen("transactions")}
            />

            <DispersionNav
              icon={Users}
              label="Users"
              active={screen === "users"}
              onClick={() => setScreen("users")}
            />
          </div>

          <div className="mt-auto rounded-xl border border-white/10 bg-white/[0.05] p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <User size={13} />
              </div>

              <div>
                <div className="text-[8px]">
                  Adrian Morfin
                </div>

                <div className="mt-1 text-[7px] text-white/35">
                  Administrator
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN */}

        <main className="min-w-0 flex-1">
          <div className="flex h-[68px] items-center justify-between border-b border-white/10 bg-[#06152f]/25 px-5 backdrop-blur-xl md:px-8">
            <div>
              <div className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                BLOCX PAY
              </div>

              <div className="mt-1 text-[13px]">
                {screen === "dashboard"
                  ? "Dashboard"
                  : screen === "upload"
                    ? "Upload Batch"
                    : screen === "transactions"
                      ? "Transactions"
                      : "Users"}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Search
                size={15}
                className="text-white/35"
              />

              <Bell
                size={15}
                className="text-white/35"
              />

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <User size={13} />
              </div>
            </div>
          </div>

          <div className="p-5 md:p-8">
            {screen === "dashboard" && (
              <DisbursementDashboard />
            )}

            {screen === "upload" && (
              <DisbursementUpload />
            )}

            {screen === "transactions" && (
              <DisbursementTransactions />
            )}

            {screen === "users" && (
              <DisbursementUsers />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function DispersionNav({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[8px] transition ${
        active
          ? "bg-white text-black"
          : "text-white/45 hover:bg-white/10 hover:text-white"
      }`}
    >
      <Icon size={13} />
      {label}
    </button>
  );
}

function DisbursementDashboard() {
  return (
    <div>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-[22px] font-medium tracking-[-0.05em]">
            Dashboard
          </div>

          <div className="mt-1 text-[8px] text-white/35">
            Overview of your disbursement operations.
          </div>
        </div>

        <button className="hidden items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[8px] font-medium text-black md:flex">
          <ArrowUp size={12} />
          Upload batch
        </button>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-2">
        <DispersionMetric
          label="Available balance"
          value="$320,090.00 USD"
        />

        <DispersionMetric
          label="Dispersing"
          value="$20,090.00 USD"
        />
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-medium">
                Pending authorization
              </div>

              <div className="mt-1 text-[8px] text-white/35">
                Operations waiting for approval.
              </div>
            </div>

            <MoreHorizontal
              size={15}
              className="text-white/30"
            />
          </div>

          <div className="mt-6 space-y-3">
            <PendingOperation
              name="Batch_07032026.csv"
              amount="$12,430.00"
            />

            <PendingOperation
              name="Batch_06032026.csv"
              amount="$7,660.00"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-2xl">
          <div className="text-[10px] font-medium">
            Batch history
          </div>

          <div className="mt-5 space-y-4">
            <BatchRow
              name="employees_july.csv"
              status="Completed"
            />

            <BatchRow
              name="providers_july.csv"
              status="Completed"
            />

            <BatchRow
              name="payroll_0626.csv"
              status="Pending"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DispersionMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-2xl">
      <div className="text-[8px] uppercase tracking-[0.16em] text-white/35">
        {label}
      </div>

      <div className="mt-3 text-[25px] font-medium tracking-[-0.05em]">
        {value}
      </div>

      <div className="mt-4 h-px bg-white/10" />

      <div className="mt-3 flex items-center gap-1 text-[7px] text-white/35">
        <ArrowUpRight size={10} />
        Updated today
      </div>
    </div>
  );
}

function PendingOperation({
  name,
  amount,
}: {
  name: string;
  amount: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/10 p-3">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
          <FileText size={13} />
        </div>

        <div>
          <div className="text-[8px]">
            {name}
          </div>

          <div className="mt-1 text-[7px] text-white/30">
            Awaiting authorization
          </div>
        </div>
      </div>

      <div className="text-[8px]">
        {amount}
      </div>
    </div>
  );
}

function BatchRow({
  name,
  status,
}: {
  name: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-3">
      <div className="text-[8px] text-white/70">
        {name}
      </div>

      <span
        className={`rounded-full px-2 py-1 text-[6px] ${
          status === "Completed"
            ? "bg-emerald-400/10 text-emerald-300"
            : "bg-amber-400/10 text-amber-300"
        }`}
      >
        {status}
      </span>
    </div>
  );
}

function DisbursementUpload() {
  return (
    <div className="mx-auto max-w-[850px]">
      <div className="text-[22px] font-medium tracking-[-0.05em]">
        Upload Batch
      </div>

      <div className="mt-1 text-[8px] text-white/35">
        Upload a new batch of disbursement operations.
      </div>

      <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.055] p-8 text-center backdrop-blur-2xl">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
          <ArrowUp size={20} />
        </div>

        <div className="mt-5 text-[12px] font-medium">
          Upload your batch file
        </div>

        <div className="mx-auto mt-2 max-w-sm text-[8px] leading-5 text-white/35">
          Drag and drop your CSV file here or select a file
          from your computer.
        </div>

        <button className="mt-6 rounded-lg bg-white px-5 py-3 text-[8px] font-medium text-black">
          Select file
        </button>
      </div>
    </div>
  );
}

function DisbursementTransactions() {
  return (
    <div>
      <div className="text-[22px] font-medium tracking-[-0.05em]">
        Transactions
      </div>

      <div className="mt-1 text-[8px] text-white/35">
        Review all disbursement transactions.
      </div>

      <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] backdrop-blur-2xl">
        <div className="grid grid-cols-4 border-b border-white/10 px-5 py-3 text-[7px] uppercase tracking-[0.15em] text-white/30">
          <span>Reference</span>
          <span>Recipient</span>
          <span>Amount</span>
          <span>Status</span>
        </div>

        {[
          ["TX-92881", "Maria Lopez", "$2,450.00", "Completed"],
          ["TX-92880", "Carlos Ramirez", "$1,820.00", "Completed"],
          ["TX-92879", "Ana Hernandez", "$3,200.00", "Pending"],
          ["TX-92878", "Diego Torres", "$980.00", "Completed"],
        ].map((row) => (
          <div
            key={row[0]}
            className="grid grid-cols-4 border-b border-white/5 px-5 py-4 text-[8px]"
          >
            <span>{row[0]}</span>
            <span className="text-white/60">
              {row[1]}
            </span>
            <span>{row[2]}</span>
            <span className="text-white/50">
              {row[3]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DisbursementUsers() {
  return (
    <div>
      <div className="text-[22px] font-medium tracking-[-0.05em]">
        Users
      </div>

      <div className="mt-1 text-[8px] text-white/35">
        Manage users with access to the platform.
      </div>

      <div className="mt-7 grid gap-3 md:grid-cols-2">
        {[
          ["Adrian Morfin", "Administrator"],
          ["Maria Lopez", "Finance"],
          ["Carlos Ramirez", "Operations"],
          ["Ana Hernandez", "Viewer"],
        ].map(([name, role]) => (
          <div
            key={name}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <User size={14} />
              </div>

              <div>
                <div className="text-[9px]">
                  {name}
                </div>

                <div className="mt-1 text-[7px] text-white/35">
                  {role}
                </div>
              </div>
            </div>

            <MoreHorizontal
              size={15}
              className="text-white/30"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   500 LATAM
========================================================= */

function LatamWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-[720px] overflow-hidden bg-[#f3efe7] text-[#101010] md:min-h-[820px]">
      <header className="relative z-20 flex h-[76px] items-center justify-between border-b border-black/10 px-6 md:px-10">
        <div className="text-[13px] font-semibold tracking-[-0.04em]">
          500 LATAM
        </div>

        <nav className="hidden items-center gap-8 text-[8px] md:flex">
          <a href="#">Program</a>
          <a href="#">Community</a>
          <a href="#">Portfolio</a>
          <a href="#">About</a>
        </nav>

        <button
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white md:hidden"
        >
          {menuOpen ? (
            <X size={14} />
          ) : (
            <Menu size={14} />
          )}
        </button>

        <button className="hidden rounded-full bg-black px-4 py-2 text-[8px] text-white md:block">
          Apply
        </button>
      </header>

      {menuOpen && (
        <div className="absolute right-5 top-20 z-30 w-48 rounded-2xl border border-black/10 bg-white p-4 shadow-xl md:hidden">
          {[
            "Program",
            "Community",
            "Portfolio",
            "About",
          ].map((item) => (
            <div
              key={item}
              className="border-b border-black/5 py-3 text-[9px]"
            >
              {item}
            </div>
          ))}
        </div>
      )}

      <div className="relative px-6 pb-16 pt-20 md:px-12 md:pb-24 md:pt-28">
        <div className="max-w-[900px] text-[clamp(3.8rem,9vw,9rem)] font-medium leading-[0.83] tracking-[-0.08em]">
          Build the
          <br />
          future.
        </div>

        <p className="mt-10 max-w-lg text-sm leading-7 text-black/50">
          Supporting the next generation of founders building
          ambitious companies across Latin America.
        </p>

        <div className="mt-10 flex gap-3">
          <button className="rounded-full bg-black px-5 py-3 text-[9px] text-white">
            Apply now
          </button>

          <button className="rounded-full border border-black/15 px-5 py-3 text-[9px]">
            Learn more
          </button>
        </div>

        <div className="mt-20 grid gap-3 md:grid-cols-3">
          <LatamCard
            number="01"
            title="Founders"
            text="A community built around ambitious founders."
          />

          <LatamCard
            number="02"
            title="Capital"
            text="Access to investors and a global network."
          />

          <LatamCard
            number="03"
            title="Growth"
            text="Resources and support to scale."
          />
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex justify-between border-t border-black/10 pt-4 text-[7px] uppercase tracking-[0.2em] text-black/35 md:left-12 md:right-12">
        <span>500 LATAM</span>
        <span>Mexico / Latin America</span>
      </div>
    </div>
  );
}

function LatamCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-black/[0.045] p-6">
      <div className="font-mono text-[8px] text-black/30">
        {number}
      </div>

      <div className="mt-12 text-[20px] tracking-[-0.04em]">
        {title}
      </div>

      <p className="mt-3 text-[9px] leading-5 text-black/45">
        {text}
      </p>

      <ArrowUpRight
        size={16}
        className="mt-8"
      />
    </div>
  );
}