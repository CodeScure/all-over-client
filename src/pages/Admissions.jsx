import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Button from '../components/Button.jsx'
import { CheckIcon } from '../components/Icons.jsx'
import usePageTitle from '../hooks/usePageTitle.js'

const steps = [
  { title: 'Choose a program', text: 'Browse our six schools and pick the degree and study mode that fits your life.' },
  { title: 'Submit your application', text: 'Complete the online form with your education history and a short personal statement.' },
  { title: 'Send your documents', text: 'Upload transcripts and identification. We will tell you if anything is missing.' },
  { title: 'Receive your decision', text: 'Most applicants hear back within three weeks of a complete application.' },
  { title: 'Accept and enrol', text: 'Confirm your place, choose your classes, and meet your advisor.' },
]

const dates = [
  { intake: 'Autumn', apply: 'June 30', start: 'September 8' },
  { intake: 'Winter', apply: 'October 31', start: 'January 12' },
  { intake: 'Spring', apply: 'February 28', start: 'April 20' },
]

const requirements = [
  'Secondary school diploma or an equivalent qualification',
  'Official transcripts from every school you have attended',
  'A personal statement of up to 500 words',
  'Proof of English proficiency, if English is not your first language',
  'Two references for postgraduate programs',
]

export default function Admissions() {
  usePageTitle('Admissions')

  return (
    <>
      <PageHero title="Apply in five steps. Ask for help at any of them.">
        Applications are open for all three intakes. If you are unsure where to
        begin, our team can walk you through it by phone.
      </PageHero>

      <section className="section">
        <div className="container split">
          <h2 className="section__title">How to apply</h2>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title} className="steps__item">
                <span className="steps__num" aria-hidden="true">{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container split">
          <h2 className="section__title">Key dates</h2>
          <div className="table-wrap">
            <table className="table">
              <caption className="sr-only">Application deadlines and start dates by intake</caption>
              <thead>
                <tr>
                  <th scope="col">Intake</th>
                  <th scope="col">Apply by</th>
                  <th scope="col">Classes start</th>
                </tr>
              </thead>
              <tbody>
                {dates.map((d) => (
                  <tr key={d.intake}>
                    <th scope="row">{d.intake}</th>
                    <td>{d.apply}</td>
                    <td>{d.start}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <h2 className="section__title">What you will need</h2>
          <div>
            <ul className="checklist">
              {requirements.map((r) => (
                <li key={r}>
                  <CheckIcon className="checklist__icon" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <div className="prose__actions">
              <Button to="/contact">Start your application</Button>
              <Button to="/contact" variant="secondary">Read more about fees and aid</Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Not sure which program is right?" text="Talk it through with an admissions advisor. It takes about ten minutes." />
    </>
  )
}
