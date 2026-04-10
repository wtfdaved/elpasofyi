'use server';

export async function subscribeToNewsletter(formData: FormData) {
  if (!process.env.BEEHIIV_API_KEY || !process.env.BEEHIIV_PUBLICATION_ID) {
    return {
      success: false,
      message: 'Missing API Keys in Vercel.',
    };
  }

  const email = formData.get('email');

  if (!email || typeof email !== 'string') {
    return {
      success: false,
      message: 'Email is required',
    };
  }

  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;
  const apiKey = process.env.BEEHIIV_API_KEY;

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          send_welcome_email: true,
          reactivate_existing: false,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 409) {
        return {
          success: true,
          message: 'You are on the list. Look out for The Weekend Drop.',
        };
      }

      const errorData = await response.json();
      console.error('Beehiiv Submission Error:', errorData);

      return {
        success: false,
        message: errorData.message || response.statusText,
      };
    }

    return {
      success: true,
      message: 'You are on the list. Look out for The Weekend Drop.',
    };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    };
  }
}
