export default function PageHero({ title, children }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__text">{children}</p>
      </div>
    </section>
  )
}
