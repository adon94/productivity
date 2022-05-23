import fetch from 'node-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'
const SENDGRID_API_KEY = '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'

const sendEmail = async ({ email }) => {
  console.log('... sending ...')
  const d = new Date();
  d.setHours(d.getHours() + 1);
  const oneHour = Math.floor(d / 1000);
    await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                  email
                }
              ],
              dynamic_template_data: {
                bodyContent: 'You are incredible.',
              },
            }
          ],
          from: {
            email: 'adambfad@gmail.com',
            name: 'Adam'
          },
          template_id: 'd-1c975321a3444df78a97ca3230b79839',

        })
    });
    await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                  email
                }
              ],
              dynamic_template_data: {
                bodyContent: 'You are amazing.',
              },
            }
          ],
          from: {
            email: 'adambfad@gmail.com',
            name: 'Adam'
          },
          template_id: 'd-1c975321a3444df78a97ca3230b79839',
          send_at: oneHour
        })
    });
}

export { sendEmail };
/*
curl --request POST \
  --url https://api.sendgrid.com/v3/mail/send \
  --header "Authorization: Bearer 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" \
  --header 'Content-Type: application/json' \
  --data '{"personalizations": [{"to": [{"email": "adambfad@gmail.com"}]}],"from": {"email": "adambfad@gmail.com"},"subject": "Sending with SendGrid is Fun","content": [{"type": "text/plain", "value": "and easy to do anywhere, even with cURL"}]}'

  */
