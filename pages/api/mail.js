const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
   <div>
   <h3 style="font-size:17px;font-weight:600">Hey there!<h3>
   <p class="font-size:15px;line-height:24px">You just received a new submission to your <span style="font-size:16px;font-weight:600">Zysk Contact form</span> <br/> Here is the data that was collected...
   </p>
   </div>
    Name : ${body.name}\r\n
    Email : ${body.email}\r\n
    Phone : ${body.phone}\r\n
    Message : ${body.message}
  `;

  const data = {
    to: 'vishak.gowda@zysk.in',
    from: 'contact@zysk.in',
    subject: `Alert..! Contact form submission`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };

  await mail.send(data);

  res.status(200).json({ status: 'OK' });
};

