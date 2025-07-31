const express =require("express")
const app =express();
// const port =3000;
const nodemailer=require('nodemailer');

const bodyParser=require('body-parser');
app.use(bodyParser.json())

app.post("/send-email", async (req, res) => {
  const { to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "raajasree27@gmail.com",
      pass: "fhxj oosh rlwe ckpt",
    },
  });

  const mailOptions = {
    from: "raajasree27@gmail.com",
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Email sent successfully!");
  } catch (err) {
    res.status(500).send("Failed to send email");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
