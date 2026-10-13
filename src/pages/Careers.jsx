import { useRef, useState } from 'react';
import { careersPage } from '../content/pages/careers';
import PageHero from '../components/common/PageHero';
import Reveal from '../components/common/Reveal';
import Pill from '../components/common/Pill';

/**
 * `/careers` — ported 2026-10-13 from the 2025 frontend's `app/careers/` and
 * the components it composes. Copy is **verbatim**.
 *
 * ## ⚠️ There are no jobs on this page, and that is the source's doing
 *
 * The original has **zero job listings** — no titles, no locations, no role
 * descriptions, and no API fetching any. The only route in is this one
 * general application form. Its "Check out our open jobs" line links
 * nowhere. Nothing was invented to fill the gap; if there are open roles,
 * they need to come from somewhere before this page does its job.
 *
 * ## The form
 *
 * `POST {VITE_API_BASE_URL}/api/career_form_submit/`, **multipart** — it
 * carries a CV file, so it is `FormData`, not JSON. That is the original's
 * contract, unchanged.
 *
 * **The form is hidden until "Apply Now" is pressed**, as in the original.
 * It is built as a real disclosure: the button carries `aria-expanded` and
 * `aria-controls`, the form is *unmounted* while closed so its nine fields
 * stay out of the tab order, and focus moves to the form's heading when it
 * opens — otherwise the page grows silently below a keyboard user's focus
 * and the form is unreachable without hunting for it.
 *
 * One difference from the original:
 *
 * - **Country/State/City are text inputs**, not cascading selects — the
 *    `countrycitystatejson` package the original used is not a dependency
 *    here. Field names and values are unchanged, so the payload is identical.
 *    Department stays a real `<select>`; its four options are in the content.
 *
 * **reCAPTCHA is not wired.** The reference commits a site key under
 * `NEXT_PUBLIC_CAPTCHA_KEY` — a prefix Vite does not expose — so it would
 * not have worked as-is regardless. Worth restoring before launch: a public
 * endpoint that accepts file uploads is worth spamming.
 *
 * ## Also for the client
 *
 * - **"Join Us. Your Future is secured"** is a strong claim to make to
 *   applicants in writing. Carried verbatim, but worth a legal read.
 * - The phone field validates to exactly 10 characters, which rejects most
 *   non-Indian numbers — inherited from the original.
 * - The Mindlogicxian Club CTA is repointed from the source's
 *   `/mindlogicxian_club/` to this site's `/mindlogicxian-club`.
 */
export default function Careers() {
  const s = Object.fromEntries(careersPage.sections.map((x) => [x.id, x]));
  const formSection = s['application-form'];
  const { form } = formSection;
  const base = import.meta.env.VITE_API_BASE_URL;

  const [values, setValues] = useState(() =>
    Object.fromEntries(form.fields.map((f) => [f.name, f.type === 'file' ? null : '']))
  );
  const [state, setState] = useState({ status: 'idle', message: '' });

  /*
   * The form is hidden until "Apply Now" is pressed, which is the original's
   * behaviour.
   *
   * It is a real disclosure, not a scroll-to: the button carries
   * `aria-expanded` and `aria-controls`, and focus moves to the form's
   * heading when it opens. Without that last part a keyboard user presses
   * the button, the page silently grows *below* their focus position, and
   * they have no idea anything happened — the form is unreachable without
   * hunting for it.
   *
   * `tabIndex={-1}` on the heading makes it focusable programmatically
   * without putting it into the tab order.
   */
  const [showForm, setShowForm] = useState(false);
  const formHeadingRef = useRef(null);

  const openForm = () => {
    setShowForm(true);
    // After paint, so the node exists to receive focus.
    requestAnimationFrame(() => formHeadingRef.current?.focus());
  };

  const update = (field) => (e) =>
    setValues((v) => ({
      ...v,
      [field.name]: field.type === 'file' ? e.target.files?.[0] ?? null : e.target.value,
    }));

  const submit = async (e) => {
    e.preventDefault();

    if (!base) {
      setState({
        status: 'error',
        message:
          'This form is not connected yet — VITE_API_BASE_URL is not set. Please email info@mindlogicx.com with your CV in the meantime.',
      });
      return;
    }

    setState({ status: 'sending', message: '' });
    try {
      /* Multipart, not JSON: the CV is a file. */
      const body = new FormData();
      Object.entries(values).forEach(([k, v]) => {
        if (v !== null && v !== '') body.append(k, v);
      });

      const res = await fetch(`${base.replace(/\/$/, '')}/${form.submitEndpoint}`, {
        method: form.submitMethod ?? 'POST',
        body, // no Content-Type header — the browser sets the multipart boundary
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setState({ status: 'sent', message: data.message ?? 'Thank you — your application has been sent.' });
        setValues(Object.fromEntries(form.fields.map((f) => [f.name, f.type === 'file' ? null : ''])));
      } else {
        setState({ status: 'error', message: data.message ?? `${form.errorToastPrefix} please try again.` });
      }
    } catch {
      setState({ status: 'error', message: `${form.errorToastPrefix} please try again.` });
    }
  };

  const bands = [s['people-are-our-assets'], s['work-and-grow-with-us']];

  return (
    <>
      <PageHero title={careersPage.title} tone="plain" tight />

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <ul className="ls-pillars">
            {bands.map((band, i) => (
              <li key={band.id}>
                <Reveal
                  className={`ls-pillar ls-pillar--${i % 2 === 1 ? 'purple' : 'cyan'}`}
                  effect="fadeInUp"
                >
                  <span className="ls-pillar__figure">
                    <img src={band.image} alt="" aria-hidden="true" loading="lazy" />
                  </span>
                  <span className="ls-pillar__body">
                    <h2 className="ls-pillar__title">{band.heading}</h2>
                    {band.body.map((p) => (
                      <p className="ls-pillar__desc" key={p.slice(0, 40)}>
                        {p}
                      </p>
                    ))}
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The "Join Us" prompt. Its button reveals the form below. */}
      <section className="ls-section ls-section--ink">
        <div className="ls-container">
          <Reveal className="ls-careers__join" effect="fadeInUp">
            <h2 className="ls-h2 ls-careers__jointitle">{s['join-us-cta'].heading}</h2>
            <Pill
              variant="light"
              type="button"
              onClick={openForm}
              aria-expanded={showForm}
              aria-controls="application-form"
              arrow
            >
              {s['join-us-cta'].buttonText}
            </Pill>
          </Reveal>
        </div>
      </section>

      {/*
        Hidden until "Apply Now". Unmounted rather than hidden with CSS, so
        its nine fields are not in the tab order and not announced while the
        section is closed.
      */}
      {showForm && (
      <section className="ls-section ls-section--smoke" id="application-form">
        <div className="ls-container">
          <Reveal className="ls-careers__formwrap" effect="fadeInUp">
            <h2 className="ls-h3" ref={formHeadingRef} tabIndex={-1}>
              Apply
            </h2>

            <form className="ls-contact__form" onSubmit={submit}>
              {form.fields.map((field) => {
                const id = `careers-${field.name}`;
                const wide = field.type === 'textarea' || field.type === 'file';
                return (
                  <div
                    className={`ls-contact__field${wide ? ' ls-contact__field--wide' : ''}`}
                    key={field.name}
                  >
                    {/* A real label for every field. The original had
                        placeholders only, which vanish on typing and leave a
                        screen reader announcing an unlabelled box. */}
                    <label
                      className={field.type === 'file' ? 'ls-careers__filelabel' : 'ls-visually-hidden'}
                      htmlFor={id}
                    >
                      {field.placeholder ?? field.label}
                    </label>

                    {field.type === 'textarea' && (
                      <textarea
                        id={id}
                        name={field.name}
                        rows={field.rows ?? 6}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={values[field.name]}
                        onChange={update(field)}
                      />
                    )}

                    {field.type === 'select' && field.options?.length > 0 && (
                      <select
                        id={id}
                        name={field.name}
                        required={field.required}
                        value={values[field.name]}
                        onChange={update(field)}
                      >
                        <option value="">{field.placeholder}</option>
                        {field.options.map((opt) => {
                          const value = typeof opt === 'string' ? opt : opt.value ?? opt.label;
                          const label = typeof opt === 'string' ? opt : opt.label ?? opt.value;
                          return (
                            <option value={value} key={value}>
                              {label}
                            </option>
                          );
                        })}
                      </select>
                    )}

                    {field.type === 'file' && (
                      <input
                        id={id}
                        name={field.name}
                        type="file"
                        required={field.required}
                        onChange={update(field)}
                      />
                    )}

                    {/* Country/State/City fall here — see the note above. */}
                    {!['textarea', 'file'].includes(field.type) &&
                      !(field.type === 'select' && field.options?.length > 0) && (
                        <input
                          id={id}
                          name={field.name}
                          type={field.type === 'select' ? 'text' : field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={values[field.name]}
                          onChange={update(field)}
                        />
                      )}
                  </div>
                );
              })}

              <div className="ls-contact__actions">
                <Pill variant="solid" type="submit" arrow>
                  {state.status === 'sending' ? 'Sending…' : form.submitButtonText}
                </Pill>
              </div>

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
      </section>
      )}

      <section className="ls-section ls-section--white">
        <div className="ls-container">
          <Reveal className="ls-pillar ls-pillar--cyan" effect="fadeInUp">
            {/* `--plain`: this artwork is a transparent PNG, so the figure's
                usual grey plate showed through the cut-out. */}
            <span className="ls-pillar__figure ls-pillar__figure--plain">
              <img
                src={s['mindlogicxian-club-cta'].image}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
            </span>
            <span className="ls-pillar__body">
              <h2 className="ls-pillar__title">{s['mindlogicxian-club-cta'].heading}</h2>
              {s['mindlogicxian-club-cta'].body.map((p) => (
                <p className="ls-pillar__desc" key={p.slice(0, 40)}>
                  {p}
                </p>
              ))}
              <div className="ls-ke__ctas">
                {/* The content's `buttonHref` is the source's own
                    `/mindlogicxian_club/`, which is not a route here. Kept in
                    the data for audit; the live link is this site's path. */}
                <Pill variant="ghost" to="/mindlogicxian-club" arrow>
                  {s['mindlogicxian-club-cta'].buttonText}
                </Pill>
              </div>
            </span>
          </Reveal>
        </div>
      </section>
    </>
  );
}
