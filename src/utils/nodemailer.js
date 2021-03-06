const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const dotenv = require('dotenv');
dotenv.config();

//Métodos y configuraciones para enviar un correo electrónico
const oAuth2 = google.auth.OAuth2;

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirection = process.env.REDIRECTION;
const refreshToken = process.env.REFRESH_TOKEN;

const oAuth2Client = new oAuth2(
    clientId,
    clientSecret,
    redirection
);

oAuth2Client.setCredentials({
    "refresh_token":refreshToken
});

//Método para obtener un nuevo token de acesso getAccesToken()
const accessToken = oAuth2Client.getAccessToken();

//Se agrega el contenido para enviar el correo electrónico
const smtpTransport = nodemailer.createTransport({
    service:"gmail",
    auth: {
        type: "OAuth2",
        user: "hebertbass@gmail.com",
        clientId: clientId,
        clientSecret: clientSecret,
        refreshToken: refreshToken,
        accessToken: accessToken
    },
    tls: {
        rejectUnauthorized: false
    }
}); 

const sendEmail = (to, token, userId) => {
    //Se coloca el contenido del correo electrónico
    const mailOptions = {
    from: "Proyecto final <hebertbass@gmail.com>",
    to,
    subject: "Restablecimiento de la contraseña en nodemailer",
    generateTextFromHTML: true,
    html: `<a href='http://proyectofinalnodejs/nueva-contraseña?token=${token}&userId=${userId}'>Restablece tu contraseña aquí</a>`
}

    smtpTransport.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
        } else {
            console.log(info);
        }
    });
}

module.exports = sendEmail;
