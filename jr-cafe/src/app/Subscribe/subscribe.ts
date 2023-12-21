import mailchimp, { ErrorResponse } from "@mailchimp/mailchimp_marketing";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: "METHOD_NOT_ALLOWED", message: "Method not allowed" });
  }

  const { email } = req.body;

  // Initialize the Mailchimp client

  mailchimp.setConfig({
    apiKey: '659e8afbdeb8913ad62b6b10039731f0-us21',
    server: 'us21',
  });

  try {
    const addNew = await mailchimp.lists.addListMember(
      String('a97715f0ec.'),
      {
        email_address: email,
        status: 'subscribed',
      }
    );

    return res.status(200).json({ message: "Successfully subscribed email." });
  } catch (error: any) {
    if (
      error.response?.status === 400 &&
      error.response?.text?.includes("Member Exists")
    ) {
      return res
        .status(400)
        .json({ error: "ALREADY_SUBSCRIBED", message: "Already subscribed" });
    }

    console.error("Error subscribing email:", error);
    return res.status(500).json({
      error: "Failed to subscribe.",
      message: "Something went wrong, please try again later.",
    });
  }
}