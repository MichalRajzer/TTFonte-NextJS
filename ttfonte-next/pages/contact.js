import Layout from "../components/Layout";
import { useCallback } from "react";
import styles from "../styles/Contact.module.css";
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
                  `There was an error with Your message!\nYour message was missing: ${res?.errors}.`
                )
              : res.error
              ? alert(
                  "Internal server error!\nContact us directly at michal.rajzer03@gmail.com"
                )
              : res.ReCAPTCHAError
              ? alert(
                  "You reCAPTCHA score was too low to send Your message.\nYou can contact us at michal.rajzer03 at gmail.com"
                )
              : alert("Your message has been sent!")
          );
      });
    },
    [executeRecaptcha]
  );
  return (
    <Layout>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label className={styles.formLabel} htmlFor="email">
          Your email adress &#40;so we can respond to Your message&#41;.
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
          The subject of Your message.
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          className={styles.formInput}
          placeholder="Subject"
          required
        />
        <label className={styles.formLabel} htmlFor="content">
          The body of Your message.
        </label>
        <textarea
          rows={10}
          type="text"
          name="content"
          id="content"
          className={styles.formInput}
          placeholder="Your message"
          required
        />
        <button type="submit" id="submit" className={styles.submit}>
          Submit
        </button>
      </form>
    </Layout>
  );
}
