"use client";
import { useState } from "react";

export default function Contact() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [err, setErr] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErr(""); 
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setErr(json.error ?? "Failed to submit.");
        setState("error");
      } else {
        setState("success");
        form.reset();
      }
    } catch {
      setErr("Network error.");
      setState("error");
    }
  }

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold">Let’s Create Your Dream Space</h2>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* FORM */}
          <form
  name="contact"
  method="POST"
  action="/thanks"
  data-netlify="true"
  netlify-honeypot="bot-field"
  className="space-y-4"
>
  {/* Netlify needs these two hidden fields */}
  <input type="hidden" name="form-name" value="contact" />
  <p className="hidden"><label>Don’t fill this out: <input name="bot-field" /></label></p>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <input className="w-full rounded-md border p-3" name="name" placeholder="Your Name *" required />
    <input className="w-full rounded-md border p-3" name="email" placeholder="Email *" type="email" required />
  </div>
  <input className="w-full rounded-md border p-3" name="phone" placeholder="Phone" />
  <textarea className="w-full rounded-md border p-3" name="message" placeholder="Tell us about your project…" rows={6} />
  <button className="rounded-md bg-[var(--brand)] px-6 py-3 font-medium text-black">Submit</button>
</form>


          {/* ADDRESS CARD */}
          <div className="space-y-4">
            <div className="rounded-xl border bg-[var(--offwhite)] p-6 shadow-sm">
              <h3 className="font-semibold text-lg">Kashyap Interior Studio</h3>
              <p className="mt-2 text-sm leading-6">
                Office Number 9, Palm Village, Sector 126,<br />
                <strong>Model Town, Sahibzada Ajit Singh Nagar, Punjab 140301</strong>
              </p>
              <div className="mt-3 text-sm leading-7">
                📞 <a href="tel:+918054144900" className="underline">8054144900</a><br />
                ✉️ <a href="mailto:kashyapom429@gmail.com" className="underline">kashyapom429@gmail.com</a><br />
                🕒 Hours: 10 AM – 7 PM
              </div>
              <p className="mt-2 text-sm">Service areas: Chandigarh, Mohali, Landra, Kharar, Airport Road & nearby.</p>
              <a href="https://www.google.com/maps/place/Model+Town,+Sector+126,+Sahibzada+Ajit+Singh+Nagar,+Punjab+140301" target="_blank" className="mt-3 inline-block rounded-md border border-[var(--brand)] px-4 py-2 text-sm">
                Open in Google Maps
              </a>
            </div>
            <div className="overflow-hidden rounded-xl shadow-sm">
              <iframe title="Map" src="https://www.google.com/maps?q=Model%20Town%2C%20Sector%20126%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140301&output=embed" className="h-80 w-full border-0" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
