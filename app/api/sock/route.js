import { NextRequest, NextResponse } from "next/server";
import Pusher from "pusher";

export const pusher = new Pusher({
  appId: process.env.app_id,
  key: process.env.key,
  secret: process.env.secret,
  cluster: process.env.cluster,
  useTLS: true,
});

export async function POST(req) {
  const { sender, message } = await req.json();
  await pusher.trigger("my-channel", "my-event", {
    sender,
    message,
  });
  return new Response('session ended');
}
