import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Button from '../components/Button.jsx'
import usePageTitle from '../hooks/usePageTitle.js'

const values = [
  { title: 'Open to everyone', text: 'Entry routes for school leavers, mature students, and transfers, with no one turned away for lack of a traditional path.' },
  { title: 'Practical by design', text: 'Every degree includes real projects, placements, or clinical hours before you graduate.' },
  { title: 'Close to the community', text: 'We teach in libraries, workplaces, and regional hubs, not only on our main campus.' },
  { title: 'Honest about costs', text: 'Fees, aid, and living costs are published in plain language before you apply.' },
]

const timeline = [
  { year: '1952', text: 'All Over opens as an evening college for factory workers in Riverton.' },
  { year: '1974', text: 'The first regional learning centre opens, two hours from the main campus.' },
  { year: '1998', text: 'Distance degrees launch, delivered by post and later by video.' },
  { year: '2009', text: 'The university receives full degree-awarding status.' },
  { year: '2021', text: 'Hybrid classrooms open across all twelve learning centres.' },
]

export default function About() {
  usePageTitle('About')

  return (
    <>
      <PageHero title="A university built to reach people, not just fill a campus.">
        For more than seventy years, All Over has taught students where they
        live and work. We still do.
      </PageHero>

      <section className="section">
        <div className="container split">
          <h2 className="section__title">Our mission</h2>
          <div className="prose">
            <p>
              We believe a good education should not depend on your postcode,
              your schedule, or your savings. Our mission is to give every
              student a clear route to a degree and the support to finish it.
            </p>
            <p>
              We teach across six schools and twelve learning centres, with
              a faculty that includes working engineers, nurses, teachers, and
              designers alongside career researchers.
            </p>
            <Button to="/admissions" variant="secondary">Read more about admissions</Button>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <h2 className="section__title">What we stand for</h2>
          <dl className="values">
            {values.map((v) => (
              <div key={v.title} className="values__item">
                <dt>{v.title}</dt>
                <dd>{v.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <h2 className="section__title">Our story so far</h2>
          <ol className="timeline">
            {timeline.map((t) => (
              <li key={t.year} className="timeline__item">
                <span className="timeline__year">{t.year}</span>
                <p>{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand title="Want to see if All Over is right for you?" />
    </>
  )
}
