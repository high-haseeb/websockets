"use client";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  Pusher.logToConsole = true;
  const [response, setRes] = useState();

  useEffect(() => {
    var pusher = new Pusher("7eca90fb6038f156ed85", {
      cluster: "ap2",
    });
    var channel = pusher.subscribe("my-channel");
    channel.bind("my-event", function (data) {
      console.log(response);
      setRes([data]);
      console.log(response);
    });
    return () => {
      pusher.unsubscribe("my-channel");
    };
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/sock", {
        sender: e.target.user.value,
        message: e.target.message.value,
      });
    } catch {
      (e) => console.log(e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <form onSubmit={handleSubmit} className="text-black text-3xl">
        <input type="text" name="user" className="m-4 border-red-50 p-4" />
        <br/>
        <input type="text" name="message" className="m-4 border-red-50 p-4"/>
        <br/>
        <input type="submit" value={"Submit"} className="text-white font-bold m-4 text-4xl" />
      </form>
      <div className="flex flex-col ">
      </div>
    </div>
  );
}
