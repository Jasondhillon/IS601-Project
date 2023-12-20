import axios from 'axios'

export default async (req, res) => {
  const { email } = req.body

  if (!email || !email.length) {
    return res.status(400).json({ error: 'Email is required' })
  }

  const API_KEY = 'e444cd687c343d955dc1d2ea088e6f92-us21'
  const API_SERVER = 'us21'
  const AUDIENCE_ID = 'a97715f0ec.'
  
  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

  const data = {
    email_address: email,
    status: 'subscribed'
  }

  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `api_key ${API_KEY}`
    }
  }

  try {
    const response = await axios.post(url, data, options)
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter. Shoot me an email at ogbonnakell@gmail and I'll add you to the list.`
      })
    }
    return res.status(201).json({ message: 'success' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}

// import mailchimp from '@mailchimp/mailchimp_marketing';
// import env from './../../../'
// mailchimp.setConfig({
//   apiKey: process.env.PublicApi,
//   server: process.env.APIServer, // e.g. us1
// });

// export default async (req, res) => {
//   const { email } = req.body;

//   if (!email) {
//     return res.status(400).json({ error: 'Email is required' });
//   }

//   try {
//     await mailchimp.lists.addListMember(pr.AudienceId, {
//       email_address: email,
//       status: 'subscribed',
//     });

//     return res.status(201).json({ error: '' });
//   } catch (error) {
//     return res.status(500).json({ error: error.message || error.toString() });
//   }
// };