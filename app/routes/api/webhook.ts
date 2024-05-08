import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Check for basic authentication if you've set it up in FingerprintJS
  const auth = req.headers.get('Authorization');
  const expectedAuth = `Basic ${Buffer.from('kodaneflash:ghvfbn1rdkMKB0qbf').toString('base64')}`; // Replace 'username:password' with your credentials

  if (!auth || auth !== expectedAuth) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  // Process the webhook data
  const data = await req.json();
  console.log('Webhook received:', data);

  // Respond to FingerprintJS server
  return new NextResponse(JSON.stringify({ message: 'Webhook received successfully' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
