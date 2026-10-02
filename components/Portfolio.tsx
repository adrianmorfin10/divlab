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

        {/* MOBILE HORIZONTAL SCROLL HINT */}
        <div className="mt-8 flex items-center gap-3 md:hidden">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5">
            <ArrowLeft size={11} className="text-white/35" />
            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/45">
              Swipe horizontally
            </span>
            <ArrowRight size={11} className="text-white/55" />
          </div>

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
            01 — 05
          </span>
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
          title="Blxck Pay"
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
    return (
      <div className="relative min-h-[720px] overflow-hidden bg-[#07152e] py-16 md:min-h-[820px] md:py-20">
        
        {/* PROJECT LABEL */}
  
        <div className="absolute left-6 top-6 z-40 font-mono text-[8px] uppercase tracking-[0.25em] text-white/30">
          BLXCK PAY / MOBILE PRODUCT
        </div>
  
        {/* =====================================================
            DESKTOP — 3 SCREENS
        ===================================================== */}
  
        <div className="relative z-10 mx-auto hidden min-h-[650px] items-center justify-center gap-5 px-5 md:flex md:gap-8">
          
          {/* HOME */}
  
          <div className="w-[270px] shrink-0 rotate-[-2deg]">
            <BLOCXImagePhone
              src="/home2.png"
              alt="Blxck Pay Home"
            />
          </div>
  
          {/* MENU */}
  
          <div className="w-[300px] shrink-0">
            <BLOCXImagePhone
              src="/menu.png"
              alt="Blxck Pay Menu"
            />
          </div>
  
          {/* COMPROBANTES */}
  
          <div className="w-[270px] shrink-0 rotate-[2deg]">
            <BLOCXImagePhone
              src="/comprobantes.png"
              alt="Blxck Pay Comprobantes"
            />
          </div>
  
        </div>
  
        {/* =====================================================
            MOBILE — ONLY HOME
        ===================================================== */}
  
        <div className="relative z-10 flex min-h-[650px] items-center justify-center px-5 md:hidden">
          
          <div className="w-[285px] shrink-0">
            <BLOCXImagePhone
              src="/home2.png"
              alt="Blxck Pay Home"
            />
          </div>
  
        </div>
  
      </div>
    );
  }
  
  /* =========================================================
     BLOCX IMAGE PHONE
  ========================================================= */
  
  function BLOCXImagePhone({
    src,
    alt,
  }: {
    src: string;
    alt: string;
  }) {
    return (
      <div
        className="
          relative
          mx-auto
          aspect-[9/18.5]
          w-full
          max-w-[300px]
          overflow-hidden
          rounded-[40px]
          border
          border-white/20
          bg-[#06162f]
          shadow-[0_35px_100px_rgba(0,0,0,.45)]
        "
      >
  
        {/* IPHONE / DEVICE NOTCH */}
  
        <div
          className="
            absolute
            left-1/2
            top-2
            z-30
            h-5
            w-24
            -translate-x-1/2
            rounded-full
            bg-black/80
          "
        />
  
        {/* REAL FIGMA SCREEN */}
  
        <img
          src={src}
          alt={alt}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />
  
        {/* SUBTLE GLASS / DEVICE BORDER */}
  
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[40px]
            border
            border-white/10
          "
        />
  
      </div>
    );
  }

/* =========================================================
   AGENDA
========================================================= */

function Agenda() {
  const [screen, setScreen] = useState<"calendar" | "new" | "sales" | "reports">("calendar");

  return (
    <div className="relative min-h-[720px] overflow-hidden bg-[#f5f5f7] text-[#222] md:min-h-[820px]" style={{ fontFamily: "Poppins, Arial, sans-serif" }}>
      <div className="flex h-full min-h-[720px] md:min-h-[820px]">
        <aside className="hidden w-[220px] shrink-0 bg-[#111111] text-white md:flex md:flex-col">
          <div className="flex h-[74px] items-center border-b border-white/10 px-6">
            <div>
              <div className="text-[17px] font-semibold tracking-[-0.04em]" style={{ fontFamily: "Poppins, Arial, sans-serif" }}>Agenda</div>
              <div className="mt-1 text-[8px] text-white/35" style={{ fontFamily: "Lato, Arial, sans-serif" }}>Business management</div>
            </div>
          </div>
          <div className="flex-1 p-4">
            <AgendaNav icon={Calendar} label="Appointments" active={screen === "calendar" || screen === "new"} onClick={() => setScreen("calendar")} />
            <AgendaNav icon={ShoppingBag} label="Sales" active={screen === "sales"} onClick={() => setScreen("sales")} />
            <AgendaNav icon={Users} label="Customers" />
            <AgendaNav icon={Package} label="Products" />
            <AgendaNav icon={BarChart3} label="Reports" active={screen === "reports"} onClick={() => setScreen("reports")} />
            <AgendaNav icon={User} label="Employees" />
            <div className="my-5 h-px bg-white/10" />
            <AgendaNav icon={Settings} label="Settings" />
          </div>
          <div className="border-t border-white/10 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10"><CircleUserRound size={14} /></div>
              <div>
                <div className="text-[9px] font-medium">Alberto Tuetinez</div>
                <div className="mt-1 text-[7px] text-white/35">Administrator</div>
              </div>
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1" style={{ fontFamily: "Lato, Arial, sans-serif" }}>
          <div className="flex h-[74px] items-center justify-between border-b border-[#e7e7e9] bg-white px-5 md:px-8">
            <div className="flex items-center gap-3">
              <Menu size={17} className="text-[#888] md:hidden" />
              <div>
                <div className="text-[8px] uppercase tracking-[0.18em] text-[#aaa]">Agenda</div>
                <div className="mt-1 text-[13px] font-medium" style={{ fontFamily: "Poppins, Arial, sans-serif" }}>
                  {screen === "reports" ? "Reports & analytics" : screen === "sales" ? "Sales" : screen === "new" ? "New appointment" : "Appointments"}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Search size={15} className="text-[#999]" />
              <Bell size={15} className="text-[#999]" />
              <button onClick={() => setScreen("new")} className="hidden items-center gap-2 rounded-lg bg-[#222] px-4 py-2.5 text-[9px] font-medium text-white md:flex">
                <Plus size={13} /> New appointment
              </button>
            </div>
          </div>
          <div className="p-5 md:p-8">
            {screen === "calendar" && <AgendaCalendar onNew={() => setScreen("new")} />}
            {screen === "new" && <AgendaNewAppointment onBack={() => setScreen("calendar")} />}
            {screen === "sales" && <AgendaSales />}
            {screen === "reports" && <AgendaReports />}
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
    ["Mon", "06"],
    ["Tue", "07"],
    ["Wed", "08"],
    ["Thu", "09"],
    ["Fri", "10"],
    ["Sat", "11"],
    ["Sun", "12"],
  ];

  return (
    <div>
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <div className="text-[22px] font-semibold tracking-[-0.05em]">
            Agenda
          </div>

          <div className="mt-1 text-[9px] text-[#999]">
            Friw and manage your business appointments.
          </div>
        </div>

        <div className="flex gap-2">
          <button className="rounded-lg border border-[#dedee2] bg-white px-3 py-2 text-[9px]">
            Today
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-[#222] px-3 py-2 text-[9px] text-white">
            <Plus size={12} />
            New appointment
          </button>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-2">
        <button className="rounded-lg border border-[#dedee2] bg-white px-3 py-2 text-[9px]">
          All employees
          <ChevronDown
            size={11}
            className="ml-2 inline"
          />
        </button>

        <button className="rounded-lg border border-[#dedee2] bg-white px-3 py-2 text-[9px]">
          All services
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
                  title="Haircut"
                  client="Carlos Ramírez"
                  time="10:00"
                />
              )}

              {index === 2 && (
                <>
                  <AgendaAppointment
                    top="105px"
                    title="Beard trim"
                    client="Juan Pérez"
                    time="11:00"
                  />

                  <AgendaAppointment
                    top="235px"
                    title="Haircut"
                    client="Miguel Ángel"
                    time="14:00"
                  />
                </>
              )}

              {index === 4 && (
                <AgendaAppointment
                  top="165px"
                  title="Design cut"
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
          Open new appointment
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
        Back to appointments
      </button>

      <div className="rounded-2xl border border-[#e2e2e5] bg-white">
        <div className="border-b border-[#ededee] p-6">
          <div className="text-[18px] font-semibold tracking-[-0.04em]">
            New appointment
          </div>

          <div className="mt-1 text-[9px] text-[#999]">
            Schedule a new appointment for a customer.
          </div>
        </div>

        <div className="grid gap-6 p-6 md:grid-cols-2">
          <AgendaField
            label="Customer"
            value="Select a customer"
          />

          <AgendaField
            label="Service"
            value="Select a service"
          />

          <AgendaField
            label="Date"
            value="08/07/2026 — 10:00"
          />

          <AgendaField
            label="End"
            value="08/07/2026 — 11:00"
          />

          <AgendaField
            label="Employee"
            value="Select an employee"
          />

          <AgendaField
            label="Price"
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
              Save appointment
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
            Sales
          </div>

          <div className="mt-1 text-[9px] text-[#999]">
            New sale y transacciones.
          </div>
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-[#222] px-4 py-2.5 text-[9px] text-white">
          <Plus size={12} />
          New sale
        </button>
      </div>

      <div className="mt-7 grid gap-5 lg:grid-cols-[1fr_330px]">
        <div className="rounded-2xl border border-[#e2e2e5] bg-white">
          <div className="border-b border-[#ededee] p-5">
            <div className="text-[11px] font-medium">
              New sale
            </div>
          </div>

          <div className="grid gap-2 p-5 sm:grid-cols-2">
            {[
              "Beard trim",
              "Haircut",
              "Design cut",
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
            Sale details
          </div>

          <div className="mt-5 space-y-4">
            <SaleRow
              title="Haircut"
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
              <span>Discount</span>
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
            Charge
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
          Reports & analytics
        </div>

        <div className="mt-1 text-[9px] text-[#999]">
          View your business performance.
        </div>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-4">
        <AgendaMetric
          label="Sales"
          value="$28,450"
          trend="+12.4%"
        />

        <AgendaMetric
          label="Appointments"
          value="184"
          trend="+8.2%"
        />

        <AgendaMetric
          label="Customers"
          value="96"
          trend="+5.1%"
        />

        <AgendaMetric
          label="Average ticket"
          value="$415"
          trend="+4.8%"
        />
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-[#e2e2e5] bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] font-medium">
                Sales
              </div>

              <div className="mt-1 text-[8px] text-[#aaa]">
                Last 7 days
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
            Top-selling services
          </div>

          <div className="mt-6 space-y-5">
            <ReportRow
              label="Haircut"
              value="42%"
            />

            <ReportRow
              label="Beard trim"
              value="27%"
            />

            <ReportRow
              label="Design cut"
              value="18%"
            />

            <ReportRow
              label="Other"
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
  const [screen, setScreen] = useState<"dashboard" | "upload" | "transactions" | "users">("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const nav = [
    ["dashboard", LayoutDashboard, "Dashboard"],
    ["upload", ArrowUp, "Upload batch"],
    ["transactions", FileText, "Transactions"],
    ["users", Users, "Users"],
  ] as const;

  return (
    <div className="relative min-h-[720px] overflow-hidden bg-[#07101d] text-white md:min-h-[820px]" style={{ backgroundImage: "url('/backdisp.png')", backgroundPosition: "center", backgroundSize: "cover" }}>
      <div className="absolute inset-0 bg-[#06152f]/45" />
      <div className="relative z-10 flex min-h-[720px] md:min-h-[820px]">
        <aside className={`${collapsed ? "w-[76px]" : "w-[220px]"} hidden shrink-0 border-r border-white/10 bg-[#A6A6A6]/40 backdrop-blur-2xl transition-all duration-300 md:flex md:flex-col`}>
          <div className="flex h-[72px] items-center justify-between border-b border-white/10 px-4">
            {!collapsed && (
              <div>
                <div className="text-[11px] font-semibold tracking-wide">BLXCK PAY</div>
                <div className="mt-1 text-[7px] uppercase tracking-[0.2em] text-white/55">Disbursement portal</div>
              </div>
            )}
            <button onClick={() => setCollapsed((value) => !value)} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-white/10 text-white transition hover:bg-white/20" aria-label="Collapse navigation">
              <ChevronLeft size={15} className={collapsed ? "rotate-180" : ""} />
            </button>
          </div>
          <div className="flex-1 p-3">
            {nav.map(([key, Icon, label]) => (
              <button key={key} onClick={() => setScreen(key)} className={`mb-1 flex w-full items-center gap-3 rounded-[12px] px-3 py-3 text-left text-[8px] transition ${screen === key ? "bg-white/20 text-white" : "text-white/60 hover:bg-white/10 hover:text-white"}`}>
                <Icon size={14} className="shrink-0" />
                {!collapsed && label}
              </button>
            ))}
          </div>
          <div className="border-t border-white/10 p-3">
            <div className={`flex items-center ${collapsed ? "justify-center" : "gap-3"}`}>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10"><User size={13} /></div>
              {!collapsed && <div><div className="text-[8px]">Alberto Martinez</div><div className="mt-1 text-[7px] text-white/40">Administrator</div></div>}
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1 overflow-auto">
          <div className="p-5 md:p-8 lg:p-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-[8px] uppercase tracking-[0.22em] text-white/35">BLXCK PAY / DISBURSEMENTS</div>
                <h3 className="mt-2 text-[25px] font-medium tracking-[-0.05em]">{screen === "dashboard" ? "Dashboard" : screen === "upload" ? "Upload batch" : screen === "transactions" ? "Transactions" : "Users"}</h3>
              </div>
              <button onClick={() => setScreen("upload")} className="hidden rounded-[12px] bg-[#A6A6A6]/40 px-4 py-2.5 text-[8px] font-medium text-white backdrop-blur-xl transition hover:bg-[#A6A6A6]/55 md:block"><ArrowUp size={12} className="mr-2 inline" />Upload batch</button>
            </div>

            {screen === "dashboard" && <DisbursementDashboardV2 onUpload={() => setScreen("upload")} />}
            {screen === "upload" && <DisbursementUpload />}
            {screen === "transactions" && <DisbursementTransactions />}
            {screen === "users" && <DisbursementUsers />}
          </div>
        </main>
      </div>
    </div>
  );
}

function DisbursementDashboardV2({ onUpload }: { onUpload: () => void }) {
  return (
    <div className="mt-6">
      <div className="grid gap-4 md:grid-cols-3">
        <DisbursementMetricV2 label="Available balance" value="$320,090.00" />
        <DisbursementMetricV2 label="Dispersing" value="$20,090.00" />
        <DisbursementMetricV2 label="Pending authorization" value="12 batches" />
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_.85fr]">
        <div className="rounded-[22px] border border-[#0DA8F3]/20 bg-[#0DA8F3]/20 p-5 backdrop-blur-2xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-[10px] font-medium">Batch history</div>
              <div className="mt-1 text-[7px] text-white/40">Recent disbursement batches and their current status.</div>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-1 items-center gap-2 rounded-[13px] border border-[#0DA8F3]/30 bg-[#0DA8F3]/40 px-3 py-2.5 md:w-[190px] md:flex-none">
                <Search size={12} className="text-white/55" />
                <input placeholder="Search batch" className="w-full bg-transparent text-[8px] outline-none placeholder:text-white/45" />
              </div>
              <button className="rounded-[13px] bg-[#0DA8F3]/40 px-3 py-2.5 text-[8px] text-white"><ChevronDown size={12} className="mr-1 inline" />Status</button>
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <DisbursementBatchV2 name="employees_july.csv" amount="$84,230.00" status="Completed" />
            <DisbursementBatchV2 name="providers_july.csv" amount="$52,180.00" status="Completed" />
            <DisbursementBatchV2 name="payroll_0626.csv" amount="$20,090.00" status="Pending" />
            <DisbursementBatchV2 name="operations_0619.csv" amount="$31,400.00" status="Processing" />
          </div>
        </div>

        <div className="rounded-[22px] border border-white/10 bg-[#0DA8F3]/20 p-5 backdrop-blur-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-medium">Pending authorization</div>
              <div className="mt-1 text-[7px] text-white/40">Operations waiting for approval.</div>
            </div>
            <button onClick={onUpload} className="rounded-[12px] bg-[#A6A6A6]/40 px-3 py-2 text-[7px] text-white">Review all</button>
          </div>
          <div className="mt-5 space-y-3">
            <DisbursementPendingV2 name="Batch_07032026.csv" amount="$12,430.00" />
            <DisbursementPendingV2 name="Batch_06032026.csv" amount="$7,660.00" />
            <DisbursementPendingV2 name="Batch_05032026.csv" amount="$4,920.00" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DisbursementMetricV2({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[20px] border border-[#0DA8F3]/20 bg-[#0DA8F3]/20 p-5 backdrop-blur-2xl">
      <div className="text-[7px] uppercase tracking-[0.18em] text-white/45">{label}</div>
      <div className="mt-3 text-[23px] font-medium tracking-[-0.05em]">{value}</div>
      <div className="mt-4 flex items-center gap-1 text-[7px] text-white/35"><ArrowUpRight size={10} /> Updated today</div>
    </div>
  );
}

function DisbursementBatchV2({ name, amount, status }: { name: string; amount: string; status: string }) {
  return (
    <div className="flex items-center justify-between rounded-[15px] border border-white/10 bg-black/10 px-3 py-3">
      <div className="flex items-center gap-3 min-w-0">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-white/10"><FileText size={13} /></div>
        <div className="min-w-0"><div className="truncate text-[8px]">{name}</div><div className="mt-1 text-[7px] text-white/35">{amount}</div></div>
      </div>
      <span className="ml-3 rounded-full bg-[#A6A6A6]/40 px-2.5 py-1 text-[6px] text-white">{status}</span>
    </div>
  );
}

function DisbursementPendingV2({ name, amount }: { name: string; amount: string }) {
  return (
    <div className="flex items-center justify-between rounded-[15px] border border-white/10 bg-black/10 p-3">
      <div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-white/10"><FileText size={13} /></div><div><div className="text-[8px]">{name}</div><div className="mt-1 text-[7px] text-white/35">{amount}</div></div></div>
      <button className="rounded-[10px] bg-[#A6A6A6]/40 px-2.5 py-2 text-[6px] text-white">Review</button>
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