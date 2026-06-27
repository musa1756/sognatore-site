import { contact } from "@/lib/site";

export function ContactSection() {
  return (
    <section className="contact-section" id="contacts">
      <div className="contact-section__content">
        <p className="section-kicker">Контакты</p>
        <h2>{contact.title}</h2>
        <p>{contact.copy}</p>
        <dl className="contact-list">
          <div>
            <dt>Адрес</dt>
            <dd>{contact.addressFull}</dd>
          </div>
          <div>
            <dt>График</dt>
            <dd>{contact.hours}</dd>
          </div>
          <div>
            <dt>Телефон</dt>
            <dd>
              <a href={contact.phoneHref}>{contact.phone}</a>
              <a href={contact.secondaryPhoneHref}>{contact.secondaryPhone}</a>
            </dd>
          </div>
        </dl>
        <div className="contact-actions">
          <a className="button button--dark" href={contact.phoneHref}>
            Позвонить
          </a>
          <a className="button button--dark button--outline" href={contact.whatsapp}>
            Написать в WhatsApp
          </a>
        </div>
      </div>
      <figure className="contact-section__media">
        <img src="/images/sognatore-contact.jpg" alt="Образ Sognatore" />
      </figure>
    </section>
  );
}
