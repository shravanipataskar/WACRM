import { Link } from 'react-router-dom'

const stack = [
  { icon: 'bi bi-window', title: 'React 19 + Vite', detail: 'Fast, modern frontend foundation' },
  { icon: 'bi bi-bootstrap', title: 'Bootstrap 5', detail: 'Responsive UI components and utilities' },
  { icon: 'bi bi-hdd-network', title: 'Laravel 11 API', detail: 'REST API foundation with Sanctum' },
  { icon: 'bi bi-database', title: 'MySQL 8', detail: 'Database connection is ready to configure' },
]

function WelcomePage() {
  return (
    <main className="welcome-page">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <span className="brand-mark me-2"><i className="bi bi-grid-1x2-fill" /></span>
            WACRM
          </Link>
          <span className="navbar-text small">Workspace foundation</span>
        </div>
      </nav>

      <section className="container welcome-hero">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <span className="eyebrow"><span className="status-dot" /> Your workspace is ready to grow</span>
            <h1 className="display-3 fw-bold mt-4">
              A clearer way to build <span>better relationships.</span>
            </h1>
            <p className="lead mt-4">
              Welcome to WACRM. Your application foundation is in place, ready for the next step.
            </p>
            <a className="btn btn-primary btn-lg mt-3" href="#foundation">
              Explore the foundation <i className="bi bi-arrow-down ms-2" />
            </a>
          </div>
          <div className="col-lg-5">
            <div className="welcome-card">
              <div className="card-icon"><i className="bi bi-stars" /></div>
              <p className="text-uppercase small fw-semibold mb-2">A fresh start</p>
              <h2 className="h3 fw-bold">Built for what comes next.</h2>
              <p className="mb-0">The essential frontend and API building blocks, ready for your direction.</p>
              <div className="card-orbit orbit-one" />
              <div className="card-orbit orbit-two" />
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-5" id="foundation">
        <div className="section-heading mb-4">
          <p className="eyebrow mb-2">The foundation</p>
          <h2 className="h3 fw-bold mb-0">A modern stack, ready to go</h2>
        </div>
        <div className="row g-3">
          {stack.map((item) => (
            <div className="col-sm-6 col-lg-3" key={item.title}>
              <article className="stack-card h-100">
                <i className={`${item.icon} stack-icon`} aria-hidden="true" />
                <h3 className="h6 fw-bold mt-3">{item.title}</h3>
                <p className="small mb-0">{item.detail}</p>
              </article>
            </div>
          ))}
        </div>
        <p className="footer-note text-center mt-5 mb-0">
          <i className="bi bi-shield-check me-2" />
          Your project foundation is set. More functionality will follow your instructions.
        </p>
      </section>
    </main>
  )
}

export default WelcomePage
