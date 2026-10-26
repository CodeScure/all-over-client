import Button from './Button.jsx'
import { PhoneIcon } from './Icons.jsx'
import { site } from '../data/site.js'

export default function CtaBand({
  title = 'Talk to someone who can help.',
  text = 'Our admissions team answers questions about programs, deadlines, and costs, Monday to Friday.',
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <h2 className="cta-band__title">{title}</h2>
          <p className="cta-band__text">{text}</p>
        </div>
        <div className="cta-band__actions">
          <Button href={site.phoneHref} variant="light" icon={<PhoneIcon />}>
            Call our representative
          </Button>
          <Button to="/contact" variant="ghost-light">Contact us</Button>
        </div>
      </div>
    </section>
  )
}
