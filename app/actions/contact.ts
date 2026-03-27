'use server';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name')?.toString();
  const email = formData.get('email')?.toString();
  const message = formData.get('message')?.toString();

  if (!name || !email || !message) {
    return { success: false, error: 'All fields are required.' };
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = '1856521582';

  if (!botToken) {
    console.warn('TELEGRAM_BOT_TOKEN is not defined in environment variables.');
    return { success: false, error: 'Server configuration error: Telegram bot token missing. Please add TELEGRAM_BOT_TOKEN to your .env file.' };
  }

  const text = `📬 *New Contact Form Submission*\n\n*Name:* ${name}\n*Email:* ${email}\n\n*Message:*\n${message}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API Error:', errorData);
      return { success: false, error: 'Failed to send message via Telegram.' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return { success: false, error: 'An unexpected error occurred.' };
  }
}
