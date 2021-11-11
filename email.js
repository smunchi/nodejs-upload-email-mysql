var nodeMailer = require('nodemailer');

var transporter = nodeMailer.createTransport({
    service:'gmail',
    auth: {
        user: 'engr.salahuddin@gmail.com',
        pass: 'salahuddin112$8908'
    }
});

var mailOptions = {
    from: 'engr.salahuddin@gmail.com',
    to: 'salah_cse_mbstu@yahoo.com',
    subject: 'test',
    text: 'test content'
};

transporter.sendMail(mailOptions);