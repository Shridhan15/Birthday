import React, { useEffect } from "react";
import choco from "../assets/choco.gif";
import hug from "../assets/hug.gif";
import phone from "../assets/phone.gif";
import confetti from "canvas-confetti";

function Gallery() {
  useEffect(() => {
    // One-time confetti blast when page loads
    confetti({
      particleCount: 150,
      spread: 180,
      origin: { y: 0.6 },
    });
  }, []);

  const gifts = [
    {
      name: "A Phone ",
      type: "image",
      src: phone,
    },
    {
      name: "A Sweet Chocolate Treat  ",
      type: "image",
      src: choco,
    },
    {
      name: "A Big Warm Hug 🤗",
      type: "image",
      src: hug,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-rose-100 via-pink-200 to-rose-300 p-6 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold text-rose-800 mb-8 animate-bounce">
        ✨ Your Surprise Gifts ✨
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {gifts.map((gift, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-xl border border-rose-200 transition-transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-rose-600 mb-2">
              {gift.name}
            </h2>
            {gift.type === "image" ? (
              <img
                src={gift.src}
                alt={gift.name}
                className="rounded-lg w-full"
              />
            ) : (
              <video
                src={gift.src}
                className="rounded-lg w-full"
                autoPlay
                loop
                muted
                playsInline
              />
            )}
          </div>
        ))}
      </div>

      <p className="mt-10 text-xl text-rose-800 font-medium max-w-2xl">
        Life is full of gifts—some you can touch, some you feel. 🎁💗
        <br />
        These may be virtual... but the emotions are real. <br />
        <span className="text-2xl font-bold text-rose-700">
          You deserve all the happiness, and more. 🌸💖
        </span>{" "}
        <br />
        <span className="text-xl mt-4 block text-rose-600">
          May your days be as sweet as chocolate, as cozy as a hug, and as
          bright as your beautiful smile. 💫❤️
        </span>
      </p>
    </div>
  );
}

export default Gallery;
