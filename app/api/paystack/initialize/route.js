export async function POST(req) {
  const body = await req.json();
  const { email, amount, metadata } = body;

  try {
    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: Math.round(amount * 100), // kobo
        currency: "NGN",
        metadata,
        callback_url: `${process.env.NEXT_PUBLIC_SITE_URL}/order-success`,
      }),
    });

    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    return Response.json({ status: false, message: "Payment init failed" }, { status: 500 });
  }
}
