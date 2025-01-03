import nodemailer from "nodemailer";

const mailTransport = () => {
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false, //true for 465,false for other ports
    auth: {
      user: "c484d71199375a", //generate a ethereal user
      pass: "b0bfe1a9abb20d", //generate a ethereal password
    },
    tls: {
      rejectUnauthorize: false,
    },
  });
  transport.verify((err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      console.log("transport is ready to receive mail");
    }
  });
  return transport;
};

export { mailTransport };


export const generateEmailTemplate=(code)=>{
  return `<!doctype html>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body style="font-family: sans-serif;">
      <div style="display: block; margin: auto; max-width: 600px;" class="main">
        <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px">
        Welcome to Assistive Career!
        </h1>
        <p>
        You’re receiving this message because you recently signed up to Assistive Career. Confirm your email address by clicking the button below. 
        This step adds extra security to your account by verifying you own this email.
        </p>
        <img alt="Inspect with Tabs" src="https://assets-examples.mailtrap.io/integration-examples/welcome.png" style="width: 100%;">
        <p>This link will expire in 1hour. If you have questions,${code} we’re here to help!</p>
      </div>
      <style>
        .main { background-color: white; }
        a:hover { border-left-width: 1em; min-height: 2em; }
      </style>
    
    </body>
  </html>`
}