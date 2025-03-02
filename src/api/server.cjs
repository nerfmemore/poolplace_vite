const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    
})

app.post('/send-email', (res, req) => {
    const {name,phone, email, city, comment} = req.body;

    const mailOptions = {
        from: {
            name: 'PoolPlaceBot',
            address: 'gromov.yegor.b@gmail.com'
        },
        to: ['whyyounerfme@gmail.com'],
        subject: 'Новый клиент просит чтобы с ним связались',
        text: `Имя: ${name}, Телефон: ${phone}, Город: ${city}, E-Mail: ${email}, Сообщение: ${comment}`,
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Что-то пошло не так при отправке письма.')
        } else {
            console.log('Email отправлен' + info.response);
            res.status(200).send('Email успешно отправлен.')
        }
    });
});


app.listen(5173, () => {
    console.log(`Сервер запущен на порту 5000`);
});


/*const sendMail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email has been sent!')
    } catch (error) {
        console.error(error);
    }
}

sendMail(transporter, mailOptions)*/