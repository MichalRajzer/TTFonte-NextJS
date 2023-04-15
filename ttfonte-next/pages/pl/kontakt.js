import Layout from "../../components/Layout";
import { useCallback } from "react";
import styles from "../../styles/Contact.module.css";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Contact() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const { email, subject, content } = e.target;

      if (!executeRecaptcha) {
        return;
      }
      executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
        fetch("/api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.value,
            subject: subject.value,
            content: content.value,
            gRecaptchaToken: gReCaptchaToken,
          }),
        })
          .then((res) => res.json())
          .then((res) =>
            res.errors
              ? alert(
                  `Wystąpił błąd podczas wysyłania twojej wiadomości!\nBrakowało w niej: ${res?.errors}.`
                )
              : res.error
              ? alert(
                  "Wewnętrzny błąd serwera!\nSkontaktuj się z nami bezpośrednio przez maila: michal.rajzer03@gmail.com"
                )
              : res.ReCAPTCHAError
              ? alert(
                  "Twój wynik reCAPTCHA był za niski aby wysłać Twoją wiadomość.\nMożesz się z nami bezpośrednio skontaktować przez adres michal.rajzer03(małpa)gmail.com"
                )
              : alert("Twoja wiadomość została wysłana!")
          );
      });
    },
    [executeRecaptcha]
  );
  return (
    <Layout title="Contact us!">
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label className={styles.formLabel} htmlFor="email">
          Twój adres emailowy &#40;żebyśmy mogli odpowiedzieć na Twoją
          wiadomość&#41;.
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className={styles.formInput}
          placeholder="Your email"
          required
        />
        <label className={styles.formLabel} htmlFor="subject">
          Temat Twojej wiadomości.
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          className={styles.formInput}
          placeholder="Temat"
          required
        />
        <label className={styles.formLabel} htmlFor="content">
          Treść Twojej wiadomości.
        </label>
        <textarea
          rows={10}
          type="text"
          name="content"
          id="content"
          className={styles.formInput}
          placeholder="Twoja wiadomość"
          required
        />
        <button type="submit" id="submit" className={styles.submit}>
          Wyślij wiadomość!
        </button>
      </form>
    </Layout>
  );
}
