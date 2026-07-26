"use client";

import { useState } from "react";
import type { Profile } from "@/lib/testProfiles";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdUPlk8DBoN4UoD5bHQnLtCzQiK690rrQ1HWEWwQummP4oVqg/formResponse";

/**
 * Envía la captura al Google Form (se guarda en su Sheet asociado).
 * Los IDs de entry.* corresponden a los campos Nombre / Correo / Perfil.
 */
async function sendToForm(name: string, email: string, profile: Profile) {
  const formData = new FormData();
  formData.append("entry.1896278279", name);
  formData.append("entry.1896578092", email);
  formData.append("entry.536002554", profile.name);

  try {
    await fetch(FORM_URL, { method: "POST", body: formData, mode: "no-cors" });
  } catch {
    // Silencioso: no bloqueamos el resultado por un fallo de red del form.
  }
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function CaptureScreen({
  profile,
  onComplete,
}: {
  profile: Profile;
  onComplete: (user: { name: string; email: string }) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!emailPattern.test(email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    setSending(true);

    sendToForm(name, email, profile).finally(() => {
      setTimeout(() => onComplete({ name, email }), 750);
    });
  }

  return (
    <div className="rounded-2xl border border-border-subtle bg-white p-9 text-center sm:p-11">
      <div className="mx-auto mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-pink-soft">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#B81632"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>

      {sending ? (
        <div className="py-6">
          <div className="mx-auto mb-3 h-7 w-7 animate-spin rounded-full border-[3px] border-border-subtle border-t-red-uhub" />
          <p className="text-sm text-gray-dark/80">Preparando tu diagnóstico…</p>
        </div>
      ) : (
        <>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-gray-dark">
            Tu resultado está listo
          </h2>
          <p className="mx-auto mt-2.5 max-w-[420px] text-pretty leading-relaxed text-gray-dark">
            Déjanos tu correo y te mandamos tu perfil completo con la guía
            específica para tu tipo de emprendedor.
          </p>

          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mx-auto mb-3 max-w-[400px] text-left">
              <label
                htmlFor="test-name"
                className="mb-1.5 block font-display text-xs font-bold uppercase tracking-[0.04em] text-gray-dark/80"
              >
                Tu nombre
              </label>
              <input
                id="test-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="¿Cómo te llamas?"
                className="w-full rounded-[10px] border-[1.5px] border-border-subtle px-4 py-3 text-[15px] text-gray-dark focus:border-red-uhub focus:outline-none"
              />
            </div>
            <div className="mx-auto mb-3 max-w-[400px] text-left">
              <label
                htmlFor="test-email"
                className="mb-1.5 block font-display text-xs font-bold uppercase tracking-[0.04em] text-gray-dark/80"
              >
                Tu correo
              </label>
              <input
                id="test-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tucorreo@ejemplo.com"
                className="w-full rounded-[10px] border-[1.5px] border-border-subtle px-4 py-3 text-[15px] text-gray-dark focus:border-red-uhub focus:outline-none"
              />
              {emailError && (
                <p className="mt-1 text-xs text-red-uhub">Ingresa un correo válido.</p>
              )}
            </div>

            <button
              type="submit"
              className="mx-auto mt-3 block w-full max-w-[400px] min-h-[44px] rounded-lg bg-red-uhub px-6 py-3 font-display text-[0.95rem] font-bold text-white transition-colors hover:bg-red-uhub-hover"
            >
              Ver mi resultado →
            </button>
            <p className="mx-auto mt-3.5 max-w-[400px] text-xs text-gray-dark/80">
              Te enviamos tu perfil + guía de acción. Sin spam. Un click para
              salirte.
            </p>
          </form>
        </>
      )}
    </div>
  );
}
