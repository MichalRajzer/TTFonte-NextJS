import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_SECRET);

async function sendEmail(req, res) {
  if (req.method === "POST") {
    const { email, subject, content } = req.body;
    // console.log(req);
    let errors = { missing: [] };
    email ? "" : errors.missing.push("Your email");
    subject ? "" : errors.missing.push("the subject");
    content ? "" : errors.missing.push("Your message");
    console.log(errors);
    if (errors.missing.length > 0) {
      return res.status(400).json({ errors: errors.missing.join(", ") });
    }
    try {
      fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET}&response=${req.body.gRecaptchaToken}`,
      })
        .then((reCAPTCHARes) => reCAPTCHARes.json())
        .then((reCAPTCHARes) => {
          if (reCAPTCHARes.score < 0.5) {
            return res.status(400).json({ reCAPTCHAError: "Score too low" });
          }
        });
    } catch (e) {
      res.status(405).json({ error: "reCaptcha Error" });
    }
    try {
      await sendgrid.send({
        to: "michal.rajzer03+personalSiteContact@gmail.com", // Your email where you'll receive emails
        from: "contact@em7988.ttfonte.com", // your website email address here
        subject: TagRemover(subject),
        html: `${TagRemover(content)}`,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: "success" });
  }
  return res.status(400).json({ error: "Please use POST requests." });
}

export default sendEmail;

function TagRemover(text) {
  if (text === null || text === "") {
    return false;
  }
  return text.toString().replace(/(<([^>]+)>)/gi, "");
}
