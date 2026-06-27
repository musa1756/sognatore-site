import { withBasePath } from "@/lib/asset";
import { contact, footerColumns, socials } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <section className="footer-block">
          <h2>Sognatore</h2>
          <p>
            Бутик-ателье индивидуального пошива мужской одежды и обуви. Москва,
            Ленинградский пр-т., 15с28.
          </p>
        </section>

        <section className="footer-block footer-newsletter">
          <h2>Консультация</h2>
          <p>Оставьте телефон или email, чтобы согласовать встречу с экспертом.</p>
          <form className="newsletter-form">
            <input aria-label="Телефон или email" placeholder="Телефон или email" type="text" />
            <button className="button button--footer" type="submit">
              Оставить заявку
            </button>
          </form>
          <div className="social-links" aria-label="Social links">
            <a href={contact.phoneHref}>{contact.phone}</a>
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
              <a href={withBasePath(link.href)} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© 2026 Sognatore. {contact.hours}.</span>
      </div>
    </footer>
  );
}
