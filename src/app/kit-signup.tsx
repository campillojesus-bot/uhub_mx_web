"use client";

import Link from "next/link";
import { useState, useRef, useEffect, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { lunesSubscription } from "./components";

// Same public form as the hosted Lunes 1-1-1 landing. No secret or server-side proxy.
const kitAction = "https://app.kit.com/forms/9946011/subscriptions";
type Status = "idle" | "sending" | "verify" | "retry";

export function KitSignup() {
  const [status, setStatus] = useState<Status>("idle");
  const current = useRef<AbortController | null>(null);
  const router = useRouter();
  useEffect(() => () => current.current?.abort(), []);

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (current.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    data.set("email_address", String(data.get("email_address") ?? "").trim());
    // The provider accepts FormData. Never put email, search params, or quiz responses in a URL.
    data.set("token", "");
    data.set("referrer", "");
    data.set("host", window.location.origin + window.location.pathname);
    data.set("search", "");
    data.set("user", crypto.randomUUID());
    data.set("ckjs_version", "6");
    const controller = new AbortController();
    current.current = controller;
    const timer = window.setTimeout(() => controller.abort(), 12000);
    setStatus("sending");
    try {
      const response = await fetch(kitAction, {
        method: "POST", body: data, headers: { Accept: "application/json", "X-CKJS-Version": "6" },
        credentials: "omit", referrerPolicy: "no-referrer", signal: controller.signal,
      });
      if (!response.ok) throw new Error();
      const reply = await response.json();
      if (reply?.status === "quarantined" || reply?.consent?.enabled) {
        setStatus("verify");
      } else if (reply?.status === "success") {
        router.push("/kit/gracias");
      } else {
        setStatus("retry");
      }
    } catch {
      setStatus("retry");
    } finally {
      window.clearTimeout(timer);
      current.current = null;
    }
  }

  return <div className="kit-signup">
    <form className="kit-live-form" onSubmit={subscribe} action={kitAction} method="post" aria-busy={status === "sending"}>
      <label htmlFor="kit-email">Tu correo</label>
      <div className="kit-fields">
        <input id="kit-email" type="email" name="email_address" placeholder="tu@correo.com" autoComplete="email" required maxLength={254} aria-describedby="kit-consent" />
        <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Enviando…" : "Quiero el kit"}</button>
      </div>
      <small id="kit-consent">Al solicitarlo, te suscribes a Lunes 1-1-1 por correo. <Link href="/aviso-de-privacidad">Aviso de privacidad</Link>.</small>
    </form>
    <div role="status" aria-live="polite" aria-atomic="true">
      {(status === "verify" || status === "retry") && <p className="kit-feedback">
        {status === "verify" ? "Kit necesita que completes una verificación." : "No pudimos confirmar el registro. Puedes volver a intentarlo."}{" "}
        <a href={lunesSubscription} target="_blank" rel="noreferrer">Continuar en el formulario oficial de Kit ↗</a>
        <span className="kit-fallback-download">Si ya completaste el registro allí, <Link href="/kit/gracias">abre la página de descarga →</Link>.</span>
      </p>}
    </div>
    <noscript><style>{".kit-live-form{display:none}"}</style><p>Para solicitar el kit sin JavaScript, <a href={lunesSubscription} target="_blank" rel="noreferrer">regístrate en Lunes 1-1-1</a> y luego <Link href="/kit/gracias">abre la página de descarga</Link>.</p></noscript>
  </div>;
}
