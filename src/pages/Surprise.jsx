import cake from "../assets/present.mp4";
import offer from "../assets/offer.mp4";
import cut from "../assets/cut.mp4";
import { useContext, useState } from "react";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";

function Surprise() {
  const [clicked, setClicked] = useState(false);
  const [eat, setEat] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(true);

    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 1000,
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      // Top corners & random directions
      confetti(
        Object.assign({}, defaults, {
          particleCount: 10,
          origin: {
            x: Math.random() < 0.5 ? 0 : 1,
            y: Math.random() * 0.5,
          },
        })
      );

      // Bottom
      confetti(
        Object.assign({}, defaults, {
          particleCount: 10,
          origin: {
            x: Math.random(),
            y: 1,
          },
        })
      );

      // Center top blast
      confetti(
        Object.assign({}, defaults, {
          particleCount: 10,
          origin: {
            x: 0.5,
            y: 0,
          },
        })
      );
    }, 250);
  };

  return (
    <div className="h-full w-full   p-4    text-center">
      <h2 className="text-xl font-bold text-rose-700 mb-4">
        Chlo ab tumhari mehnat ka fal bhi toh milna chahiyee, ye lo Cake meri
        taraf se
      </h2>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mx-20 transition-all">
        <video
          src={cake}
          className={`w-[300px] sm:w-[400px] md:w-[300px]  rounded-xl shadow-lg  `}
          autoPlay
          loop
          muted
          playsInline
        />

        <button
          onClick={handleClick}
          className="bg-gradient-to-br from-pink-200 via-rose-300 to-purple-200 border rounded border-red-400 px-5 py-3 mt-4 sm:mt-0 cursor-pointer hover:scale-105 transition-transform"
        >
          Click to Cut
        </button>

        <video
          src={cut}
          className={`w-[300px] sm:w-[400px] md:w-[500px]  rounded-xl shadow-lg ${
            clicked ? "block" : "hidden"
          }`}
          autoPlay
          loop
          muted
          playsInline
        />
        <button
          onClick={() => setEat(true)}
          className={`bg-gradient-to-br from-pink-200 via-rose-300 to-purple-200 border rounded border-red-400 px-5 py-3 mt-4 sm:mt-0 cursor-pointer hover:scale-105 transition-transform ${
            clicked ? "block" : "hidden"
          }`}
        >
          Click to Eat
        </button>
      </div>

      <div className={` mx-70 mt-10 ${eat ? "block" : "hidden"}`}>
        <p className="text-xl flex  font-bold text-rose-700 ml-0  ">
          {" "}
          Chlo mai khilata hu apne hath se
        </p>
        <video
          src={offer}
          className={`w-[300px] sm:w-[400px] md:w-[200px]  rounded-xl shadow-lg ${
            eat ? "block" : "hidden"
          }`}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {eat && (
        <div className="flex flex-col items-center gap-2 mt-6 mb-6 ">
          <p className="text-lg font-semibold text-purple-800">
            Kuch Aur gift chahiyee?
          </p>
          <div className="flex flex-row gap-4">
            <button
              onClick={() => navigate("/gallery")}
              className="bg-gradient-to-br from-green-200 via-yellow-300 to-purple-200 border rounded border-red-400 px-5 py-3 cursor-pointer hover:scale-105 transition-transform"
            >
              Hannn
            </button>
            <button className="bg-gradient-to-br from-red-500 via-orange-600 to-purple-200 border rounded border-red-400 px-5 py-3 cursor-pointer hover:scale-105 transition-transform">
              Naaa
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Surprise;
