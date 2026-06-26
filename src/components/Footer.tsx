import { footerColumns, socials } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <section className="footer-block">
          <h2>Edward Sexton</h2>
          <p>
            When compared with Edward, no tailor has achieved so much, nor captured such an
            extraordinary sense of the avant-garde in his work: of sex appeal, glamour, style or
            verve.
          </p>
        </section>

        <section className="footer-block footer-newsletter">
          <h2>Join us</h2>
          <p>Sign up for exclusive offers, original stories, events and more.</p>
          <form className="newsletter-form">
            <input aria-label="Email" placeholder="Enter email" type="email" />
            <button className="button button--footer" type="submit">
              Sign up
            </button>
          </form>
          <div className="social-links" aria-label="Social links">
            {socials.map((social) => (
              <a href={social.href} key={social.label}>
                {social.label}
              </a>
            ))}
          </div>
        </section>

        {footerColumns.map((column) => (
          <nav className="footer-block footer-menu" aria-label={column.title} key={column.title}>
            <h2>{column.title}</h2>
            {column.links.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© 2026 Edward Sexton. Designed &amp; Built by Studio Graft.</span>
      </div>
    </footer>
  );
}
