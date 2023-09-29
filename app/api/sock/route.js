import Pusher from "pusher";

const pusher = new Pusher({
  appId: process.env.app_id,
  key: process.env.key,
  secret: process.env.secret,
  cluster: process.env.cluster,
  useTLS: true,
});

// when we make post req to this api, it sends the data to the server
export async function POST(req) {
  const { sender, message } = await req.json();
  await pusher.trigger("my-channel", "my-event", {
    sender,
    message,
  });
  return new Response('session ended');
}
