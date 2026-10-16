import { useState } from 'react';
import { contactPage } from '../content/pages/intelliexams-contact';
import PageHero from '../components/common/PageHero';
import Reveal from '../components/common/Reveal';
import Pill from '../components/common/Pill';

/**
 * `/contact-us` — ported 2026-10-13 from the 2025 frontend's
 * `app/contact-us/` plus `components/Contact/`. Copy is **verbatim**,
 * including the validation messages' typos (see below).
 *
 * ## The endpoint
 *
 * The form posts the same payload to the same path as the original:
 * `POST {base}/api/contact_us_form_submit/`.
 *
 * The base URL comes from **`VITE_API_BASE_URL`** — which is also what the
 * reference project's own `.env` defines, so the same variable works for
 * both. (Its *code* reads `NEXT_PUBLIC_API_BASE_URL` in places, a leftover
 * from the Next build; Vite only exposes `VITE_`-prefixed variables, so that
 * one is silently invisible and the `.env` name is the one to trust.)
 *
 * Until it is set the form says so rather than pretending to send — posting
 * to a relative path on the dev server would 404 and read as a server
 * fault.
 *
 * ## Three things the original had that this does not
 *
 * 1. **Cascading Country/State/City selects.** The source drove these from
 *    the `countrycitystatejson` package, which is not a dependency here.
 *    Installing one to populate three dropdowns is a call for the client, so
 *    they are text inputs for now — **the posted field names and values are
 *    unchanged**, so the backend sees the same payload either way.
 * 2. **reCAPTCHA.** The original gated submission on it. It needs a site key,
 *    which was not in the reference project's `.env`, so it is not wired.
 *    Worth restoring before this is public: an open contact endpoint attracts
 *    spam quickly.
 * 3. **A Google map with four pins.** The pins had coordinates but no address
 *    copy — the addresses were reverse-geocoded at runtime. Rendering a map
 *    needs an API key, and the three non-Bengaluru offices have no address
 *    text to fall back on, so the map is omitted rather than shown empty.
 *
 * ## ⚠️ Content that needs the client before publishing
 *
 * - The partner email **mismatches in the source**: the visible text reads
 *   `partners@mindlogix.com` (no "c") while the link goes to
 *   `info@mindlogicx.com`. Both are reproduced exactly as found — this is a
 *   bug in the original, and guessing which is right would be worse.
 * - The validation messages contain typos as written: "charactors",
 *   "atleast", "alteast", and **"Massage is required"**. Carried verbatim
 *   like all other copy; say the word and they are a one-line fix each.
 * - **Two** offices have addresses since 2026-10-15 (Bengaluru and Kuala
 *   Lumpur). The source's map implied four.
 */
export default function ContactUs() {
  const { form } = contactPage;
  const base = import.meta.env.VITE_API_BASE_URL;

  const [values, setValues] = useState(() =>
    Object.fromEntries(form.fields.map((f) => [f.name, '']))
  );
  const [state, setState] = useState({ status: 'idle', message: '' });

  const update = (name) => (e) =>
    setValues((v) => ({ ...v, [name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();

    if (!base) {
      setState({
        status: 'error',
        message:
          'This form is not connected yet — VITE_API_BASE_URL is not set. Please email info@mindlogicx.com in the meantime.',
      });
      return;
    }

    setState({ status: 'sending', message: '' });
    try {
      const res = await fetch(`${base.replace(/\/$/, '')}/${form.endpoint}`, {
        method: form.method ?? 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      /* The original showed whatever `message` the backend returned, and had
         no strings of its own — hence the neutral fallbacks here. */
      if (res.ok) {
        setState({ status: 'sent', message: data.message ?? 'Thank you — your message has been sent.' });
        setValues(Object.fromEntries(form.fields.map((f) => [f.name, ''])));
      } else {
        setState({ status: 'error', message: data.message ?? 'Sorry — your message could not be sent. Please try again.' });
      }
    } catch {
      setState({ status: 'error', message: 'Sorry — your message could not be sent. Please try again.' });
    }
  };

  return (
    <>
      <PageHero title={contactPage.title} tone="plain" />

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <div className="ls-contact">
            {/* ---- the details ---- */}
            <Reveal className="ls-contact__info" effect="fadeInUp">
              {/* Keyed on `id`, not `type` — there is more than one address
                  box since 2026-10-15, and `type` is no longer unique. */}
              {contactPage.infoBoxes.map((box) => (
                <div className="ls-contact__box" key={box.id ?? box.type}>
                  {box.label && <h2 className="ls-contact__boxlabel">{box.label.trim()}</h2>}

                  {/* The legal entity, where one is recorded. It heads the
                      address rather than replacing the label: the Bengaluru
                      box has both ("Head Office" / "Mindlogicx Infratec
                      Limited"), the Kuala Lumpur box has only the name. */}
                  {box.name && <p className="ls-contact__entity">{box.name}</p>}

                  {box.lines?.map((line) => (
                    <p className="ls-contact__line" key={line.slice(0, 30)}>
                      {line}
                    </p>
                  ))}

                  {box.entries?.map((entry) => (
                    <p className="ls-contact__line" key={entry.value}>
                      {entry.label && <span className="ls-contact__entrylabel">{entry.label}</span>}
                      <a className="ls-contact__link" href={entry.href}>
                        {entry.value}
                      </a>
                    </p>
                  ))}
                </div>
              ))}
            </Reveal>

            {/* ---- the form ---- */}
            <Reveal className="ls-contact__formwrap" effect="fadeInUp" delay={100}>
              <h2 className="ls-h3 ls-contact__formtitle">{form.heading}</h2>

              <form className="ls-contact__form" onSubmit={submit} noValidate={false}>
                {form.fields.map((field) => {
                  const id = `contact-${field.name}`;
                  /*
                   * A real `<label>` for every field, visually hidden.
                   *
                   * The original had placeholders and nothing else — so the
                   * field's name vanished the moment anyone typed, and screen
                   * readers announced an unlabelled box. The placeholder text
                   * is reused as the label so the wording is unchanged.
                   */
                  return (
                    <div
                      className={`ls-contact__field${field.type === 'textarea' ? ' ls-contact__field--wide' : ''}`}
                      key={field.name}
                    >
                      <label className="ls-visually-hidden" htmlFor={id}>
                        {field.placeholder}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          id={id}
                          name={field.name}
                          rows={field.rows ?? 6}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={values[field.name]}
                          onChange={update(field.name)}
                        />
                      ) : (
                        <input
                          id={id}
                          name={field.name}
                          /* Country/State/City were cascading selects; see the
                             note at the top of this file. */
                          type={field.type === 'select' ? 'text' : field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={values[field.name]}
                          onChange={update(field.name)}
                        />
                      )}
                    </div>
                  );
                })}

                <div className="ls-contact__actions">
                  <Pill variant="solid" type="submit" arrow>
                    {state.status === 'sending' ? 'Sending…' : form.submitLabel}
                  </Pill>
                </div>

                {/* `role="status"` so the result is announced, not just shown. */}
                <p
                  className={`ls-contact__status ls-contact__status--${state.status}`}
                  role="status"
                  aria-live="polite"
                >
                  {state.message}
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
