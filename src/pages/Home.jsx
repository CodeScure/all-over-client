import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { PhoneIcon } from '../components/Icons.jsx'
import { site } from '../data/site.js'
import usePageTitle from '../hooks/usePageTitle.js'

const programs = [
  { name: 'Arts and Humanities', text: 'Writing, history, philosophy, and languages, taught in small seminars.' },
  { name: 'Business and Economics', text: 'Accounting, management, and entrepreneurship with paid placements.' },
  { name: 'Engineering and Computing', text: 'Software, civil, electrical, and mechanical engineering, built around lab work.' },
  { name: 'Health and Life Sciences', text: 'Nursing, public health, and biology with clinical partners nearby.' },
  { name: 'Education', text: 'Teacher preparation for primary, secondary, and adult learners.' },
  { name: 'Environment and Design', text: 'Architecture, planning, and sustainability studies.' },
]

function Rings() {
  return (
    <svg className="rings" viewBox="0 0 400 400" role="img" aria-label="Concentric rings spreading outward from a single point, with learners marked along each ring">
      <g fill="none" stroke="var(--green)">
        <circle className="rings__r rings__r--1" cx="200" cy="200" r="48" strokeWidth="2" />
        <circle className="rings__r rings__r--2" cx="200" cy="200" r="98" strokeWidth="1.5" opacity=".7" />
        <circle className="rings__r rings__r--3" cx="200" cy="200" r="148" strokeWidth="1.5" opacity=".45" />
        <circle className="rings__r rings__r--4" cx="200" cy="200" r="190" strokeWidth="1" opacity=".25" />
      </g>
      <g fill="var(--green)">
        <circle cx="200" cy="200" r="12" />
        <circle cx="248" cy="200" r="5" />
        <circle cx="116" cy="148" r="6" />
        <circle cx="304" cy="262" r="6" />
        <circle cx="62" cy="236" r="5" />
        <circle cx="236" cy="52" r="5" />
        <circle cx="338" cy="140" r="4" />
        <circle cx="150" cy="346" r="4" />
      </g>
    </svg>
  )
}

export default function Home() {
  usePageTitle('')

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <h1 className="hero__title">Learn from anywhere. Belong everywhere.</h1>
            <p className="hero__text">
              All Over University brings degrees to campus, to your screen, and
              to the communities where you already live and work.
            </p>
            <div className="hero__actions">
              <Button to="/admissions">Start your application</Button>
              <Button to="/about" variant="secondary">Read more</Button>
            </div>
            <p className="hero__aside">
              Questions first?{' '}
              <a href={site.phoneHref} className="text-link">Call our representative</a>
            </p>
          </div>
          <div className="hero__visual">
            <Rings />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2 className="section__title">Find your program</h2>
            <p className="section__lead">
              Six schools, more than ninety degrees, and the same support
              whether you study on campus or online.
            </p>
          </div>
          <ul className="program-list">
            {programs.map((p) => (
              <li key={p.name} className="program-list__row">
                <h3 className="program-list__name">{p.name}</h3>
                <p className="program-list__text">{p.text}</p>
                <Link to="/admissions" className="text-link" aria-label={`Read more about ${p.name}`}>
                  Read more
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container split">
          <div>
            <h2 className="section__title">A university that meets you where you are</h2>
          </div>
          <div className="prose">
            <p>
              Our students are school leavers, working parents, career changers,
              and people studying from another time zone. Classes run in the
              daytime, in the evening, and online, and every course has a named
              advisor you can reach by phone.
            </p>
            <p>
              Most programs include a placement with a local employer, so you
              finish with experience as well as a qualification.
            </p>
            <div className="prose__actions">
              <Button to="/about" variant="secondary">Read more about us</Button>
              <Button href={site.phoneHref} variant="text" icon={<PhoneIcon />}>
                {site.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
