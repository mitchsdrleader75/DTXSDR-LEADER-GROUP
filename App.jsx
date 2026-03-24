import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CheckCircle2,
  Crown,
  Shield,
  Sparkles,
  Users,
  MapPin,
  CalendarDays,
  ArrowRight,
  Building2,
} from 'lucide-react';

function DTXLogo() {
  return (
    <div className="relative inline-flex items-center gap-4">
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/30 bg-slate-900/80 shadow-[0_0_60px_rgba(34,211,238,0.25)]">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-indigo-500/30 blur-sm" />
        <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-cyan-300/40 blur-md" />
        <Crown className="relative z-10 h-8 w-8 text-cyan-300" />
      </div>
      <div>
        <div className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-2xl font-black tracking-tight text-transparent">
          DTX SDR Leaders
        </div>
        <div className="text-xs uppercase tracking-[0.32em] text-slate-400">
          Dallas SDR leadership community
        </div>
      </div>
    </div>
  );
}

function EventsPopup({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 px-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22 }}
            className="w-full max-w-lg rounded-[2rem] border border-cyan-300/20 bg-slate-950/95 p-8 text-center shadow-[0_0_80px_rgba(34,211,238,0.18)] backdrop-blur"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-4 inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-4 text-cyan-200">
              <CalendarDays className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-black text-white">
              Official Upcoming Event Announcements Coming Soon
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              We’re getting the first DTX SDR Leaders events ready now. Join the founding waitlist to be the first to hear when official event announcements go live.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://forms.gle/Hwe2CV9xkhhq8bbf8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.01]"
              >
                Join the Founding Waitlist
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-slate-900 px-5 py-3 font-semibold text-slate-200 transition hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="text-2xl font-black text-cyan-300">{value}</div>
      <div className="mt-1 text-sm text-slate-400">{label}</div>
    </div>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
      <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-slate-950/50 p-3">{icon}</div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

export default function App() {
  const [showEventsPopup, setShowEventsPopup] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45 }}
          className="mt-8 overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-slate-950 shadow-2xl"
        >
          <div className="relative">
            <div className="absolute inset-0">
              <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
            </div>

            <div className="relative grid gap-10 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-14">
              <div>
                <DTXLogo />

                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
                  <Shield className="h-4 w-4" />
                  Free early access for SDR leaders and future leaders in Dallas
                </div>

                <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
                  The Free Community for SDR Leaders Building{' '}
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                    Pipeline, Leaders, and the Future of Sales Development in Dallas
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  DTX SDR Leaders is a free community for SDR Managers, Directors of Sales Development, VP of Sales Development, Heads of Sales Development, and future leaders who want real operator conversations, stronger coaching systems, deeper peer relationships, and high-value events built specifically for the Dallas market.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <StatCard value="Free" label="for SDR leaders" />
                  <StatCard value="Dallas" label="local leadership room" />
                  <StatCard value="Events" label="roundtables + dinners" />
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <div className="mb-4 inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-3 text-cyan-200">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">
                  Join the founding list
                </div>
                <h2 className="mt-2 text-3xl font-black">DTX SDR Leaders Early Access</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Early members will help shape the community, influence programming, get first access to events, and become part of the founding leadership group building something meaningful for Dallas.
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    'Private peer-level conversations',
                    'Dallas SDR leadership relationships',
                    'High-trust roundtables and dinners',
                    'Coaching, hiring, and pipeline strategy',
                    'Founding member momentum and visibility',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm text-slate-200"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href="https://forms.gle/Hwe2CV9xkhhq8bbf8"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.01]"
                  >
                    Join the Founding Waitlist
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <button
                    onClick={() => setShowEventsPopup(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-3 font-semibold text-slate-200 transition hover:bg-slate-900"
                  >
                    See Upcoming Events
                  </button>
                </div>

                <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
                  Public applications are now open for Dallas SDR leaders ready to join the founding waitlist.
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <InfoCard
            icon={<Users className="h-5 w-5 text-cyan-300" />}
            title="Who this is for"
            text="SDR Managers, Senior SDR Managers, Directors of Sales Development, VP of Sales Development, Heads of Sales Development, and future leaders."
          />
          <InfoCard
            icon={<Building2 className="h-5 w-5 text-cyan-300" />}
            title="What members get"
            text="Operator conversations, peer support, tactical leadership discussions, frameworks, special events, and a network built for real SDR leaders."
          />
          <InfoCard
            icon={<MapPin className="h-5 w-5 text-cyan-300" />}
            title="Why this exists"
            text="Dallas has no true home built specifically for SDR leaders. DTX is being built to become that home."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5 text-cyan-300" />}
            title="How it grows"
            text="Roundtables, dinners, and tactical sessions create real momentum, stronger local relationships, and a category-defining leadership room."
          />
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur lg:p-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-black">Why this exists</h2>
            <p className="mt-4 text-slate-300">
              Dallas has no true home built specifically for SDR leaders. There is no real room where SDR Managers, Directors of Sales Development, Heads of Sales Development, VP of Sales Development, and rising leaders can come together consistently to sharpen their craft, share what is actually working, and build the future of pipeline creation together. Too many SDR leaders are carrying the pressure of pipeline, hiring, coaching, reporting, culture, and executive alignment without a trusted peer community that truly understands the weight of the role.
            </p>
            <p className="mt-4 text-slate-300">
              DTX SDR Leaders exists to change that. This is being built to become the Dallas home for SDR leadership — a place where leaders feel supported, challenged, connected, and deeply respected for the work they do behind the scenes to move revenue forward.
            </p>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              SDRs are the offensive line of revenue. SDR Leaders are the offensive line coaches.
            </p>
          </div>
        </section>
      </div>

      <EventsPopup open={showEventsPopup} onClose={() => setShowEventsPopup(false)} />
    </div>
  );
}
