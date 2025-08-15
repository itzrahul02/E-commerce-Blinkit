import { Resend } from 'resend';
import dotenv from 'dotenv'
dotenv.config()

if(!process.env.RESEND_API){
    console.log("Provide RESEND_API in side the .env file")
}

const resend = new Resend(process.env.RESEND_API);

const sendEmail = async({sendTo, subject, html })=>{
    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: sendTo,
            subject: subject,
            html: html,
        });

        if (error) {
            return console.error("Error is ",{ error });
        }
        console.log("what is this data",data);
        return data
    } catch (error) {
        console.log(error)
    }
}

export default sendEmail

