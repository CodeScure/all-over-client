import PageHero from '../components/PageHero.jsx'
import Button from '../components/Button.jsx'
import usePageTitle from '../hooks/usePageTitle.js'

export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <>
      <PageHero title="We could not find that page.">
        The link may be old or mistyped. Head back to the home page or contact us.
      </PageHero>
      <section className="section">
        <div className="container prose__actions">
          <Button to="/">Go to home</Button>
          <Button to="/contact" variant="secondary">Contact us</Button>
        </div>
      </section>
    </>
  )
}
