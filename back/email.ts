import * as nodemailer from 'nodemailer';

interface Task {
    description: string,
    priority: number,
    date: string,
}

export const sendMail = (email_to: string, task: Task) => {

    let email_user: string = process.env.MAIL_SENDER as string;
    let email_pass: string = process.env.MAIL_PASSWORD as string;
    let email_subject: string = 'Nova tarefa';
    let email_html: string = `
<table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable"
    style="background:#FFFFFF none no-repeat center/cover;border-collapse: collapse;;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height: 100%;margin: 0;padding: 0;width: 100%;background-color: #FFFFFF;background-image: none;background-repeat: no-repeat;background-position: center;background-size: cover;">
    <tbody>
        <tr>
            <td align="left" valign="top" id="bodyCell"
                style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height: 100%;margin: 0;padding: 10px;width: 100%;border-top: 0;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer"
                    style="border-collapse: collapse;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;border: 0;max-width: 600px !important;">
                    <tbody>
                        <tr>
                            <td valign="top" id="templateHeader"
                                style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;border-top: 0;border-bottom: 0;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock"
                                    style="min-width: 100%;border-collapse: collapse;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    <tbody class="mcnTextBlockOuter">
                                        <tr>
                                            <td valign="top" class="mcnTextBlockInner"
                                                style="padding-top: 9px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                    style="max-width: 100%;min-width: 100%;border-collapse: collapse;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                                    width="100%" class="mcnTextContentContainer">
                                                    <tbody>
                                                        <tr>
                                                            <td valign="top" class="mcnTextContent"
                                                                style="padding-top: 0;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #202020;font-family: Helvetica;font-size: 16px;line-height: 150%;text-align: left;">
                                                                <h1
                                                                    style="display: block;margin: 0;padding: 0;color: #202020;font-family: Helvetica;font-size: 26px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;text-align: left;">
                                                                    Você recebeu uma nova tarefa!</h1>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top" id="templateBody"
                                style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;border-top: 0;border-bottom: 0;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock"
                                    style="min-width: 100%;border-collapse: collapse;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    <tbody class="mcnTextBlockOuter">
                                        <tr>
                                            <td valign="top" class="mcnTextBlockInner"
                                                style="padding-top: 9px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                    style="max-width: 100%;min-width: 100%;border-collapse: collapse;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                                    width="100%" class="mcnTextContentContainer">
                                                    <tbody>
                                                        <tr>

                                                            <td valign="top" class="mcnTextContent"
                                                                style="padding-top: 0;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #202020;font-family: Helvetica;font-size: 16px;line-height: 150%;text-align: left;">

                                                                Descrição: ${task.description}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock"
                                    style="min-width: 100%;border-collapse: collapse;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    <tbody class="mcnTextBlockOuter">
                                        <tr>
                                            <td valign="top" class="mcnTextBlockInner"
                                                style="padding-top: 9px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                    style="max-width: 100%;min-width: 100%;border-collapse: collapse;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                                    width="100%" class="mcnTextContentContainer">
                                                    <tbody>
                                                        <tr>
                                                            <td valign="top" class="mcnTextContent"
                                                                style="padding-top: 0;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #202020;font-family: Helvetica;font-size: 16px;line-height: 150%;text-align: left;">

                                                                Prioridade: ${task.priority}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock"
                                    style="min-width: 100%;border-collapse: collapse;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    <tbody class="mcnTextBlockOuter">
                                        <tr>
                                            <td valign="top" class="mcnTextBlockInner"
                                                style="padding-top: 9px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                    style="max-width: 100%;min-width: 100%;border-collapse: collapse;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                                    width="100%" class="mcnTextContentContainer">
                                                    <tbody>
                                                        <tr>
                                                            <td valign="top" class="mcnTextContent"
                                                                style="padding-top: 0;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #202020;font-family: Helvetica;font-size: 16px;line-height: 150%;text-align: left;">

                                                                Data limite: ${task.date}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top" id="templateFooter"
                                style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;border-top: 0;border-bottom: 0;">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
`

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: email_user,
            pass: email_pass
        }
    });

    let mailOptions = {
        from: email_user,
        to: email_to,
        subject: email_subject,
        html: email_html
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Erro ao enviar email: ' + error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });
}