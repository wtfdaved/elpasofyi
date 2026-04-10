'use server';

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get('email');

  if (!email || typeof email !== 'string') {
    return {
      success: false,
      message: 'Email is required',
    };
  }

  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;
  const apiKey = process.env.BEEHIIV_API_KEY;

  if (!publicationId || !apiKey) {
    console.error('Missing Beehiiv configuration');
    return {
      success: false,
      message: 'Server configuration error',
    };
  }

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
      const errorData = await response.json().catch(() => ({}));
      console.error('Beehiiv API error:', errorData);

      if (response.status === 409) {
        return {
          success: true,
          message: 'You are on the list. Look out for The Weekend Drop.',
        };
      }

      return {
        success: false,
        message: 'Failed to subscribe. Please try again.',
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
