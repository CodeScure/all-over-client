import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Button from '../components/Button.jsx'
import { PhoneIcon, MailIcon, PinIcon } from '../components/Icons.jsx'
import { site } from '../data/site.js'
import usePageTitle from '../hooks/usePageTitle.js'

const faqs = [
  { q: 'When is the admissions office open?', a: 'Monday to Friday, 8:30 am to 5:30 pm. Phone calls are answered by a person, not a menu.' },
  { q: 'Can I visit before I apply?', a: 'Yes. Book a campus tour or an online open session through the form on this page.' },
  { q: 'How quickly will you reply?', a: 'We answer messages within one working day.' },
]

export default function Contact() {
  usePageTitle('Contact')
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // Demo only: wire this to your API, Formspree, or a Vercel Function.
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <>
      <PageHero title="Talk to a real person.">
        Call, write, or visit. Tell us what you are thinking about and we will
        point you to the right team.
      </PageHero>

      <section className="section">
        <div className="container contact">
          <div className="contact__methods">
            <h2 className="section__title">Reach us directly</h2>
            <ul className="method-list">
              <li>
                <PhoneIcon />
                <div>
                  <h3>Call our representative</h3>
                  <a href={site.phoneHref} className="text-link">{site.phone}</a>
                </div>
              </li>
              <li>
                <MailIcon />
                <div>
                  <h3>Email admissions</h3>
                  <a href={`mailto:${site.email}`} className="text-link">{site.email}</a>
                </div>
              </li>
              <li>
                <PinIcon />
                <div>
                  <h3>Visit the main campus</h3>
                  <address>{site.address.map((l) => <span key={l}>{l}<br /></span>)}</address>
                </div>
              </li>
            </ul>
            <Button href={site.phoneHref} icon={<PhoneIcon />}>Call now</Button>
          </div>

          <form className="form" onSubmit={onSubmit} aria-labelledby="form-title">
            <h2 id="form-title" className="section__title">Send a message</h2>

            <div className="field">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="field">
              <label htmlFor="topic">What is this about?</label>
              <select id="topic" name="topic" defaultValue="admissions">
                <option value="admissions">Admissions</option>
                <option value="programs">Programs and courses</option>
                <option value="fees">Fees and financial aid</option>
                <option value="visit">Booking a visit</option>
                <option value="other">Something else</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Your message</label>
              <textarea id="message" name="message" rows="5" required />
            </div>

            <Button type="submit">Send message</Button>

            <p className="form__status" role="status" aria-live="polite">
              {sent && 'Thanks. Your message was sent and we will reply within one working day.'}
            </p>
          </form>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container split">
          <h2 className="section__title">Common questions</h2>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q} className="faq__item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
