export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const reference = searchParams.get("reference");

  if (!reference) {
    return Response.json({ status: false, message: "No reference provided" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` },
      }
    );
    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    return Response.json({ status: false, message: "Verification failed" }, { status: 500 });
  }
}
