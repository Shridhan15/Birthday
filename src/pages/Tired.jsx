import React, { useState } from "react";
import LoveShower from "../components/LoveShower";
import { useNavigate } from "react-router-dom";
const TiredPage = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [next, setNext] = useState(false);
  const navigate= useNavigate()

  const handleDrinkWaterClick = () => {
    setShowAnimation(true);
    setNext(false);
    setTimeout(() => {
      setShowAnimation(false);
      setNext(true);
    }, 5000);
  };

  return (
    <div className="h-screen w-full bg-gradient-to-tr from-blue-200 via-purple-300 to-pink-200 flex flex-col items-center justify-center text-center text-black p-6">
      <p className="text-xl">
        Even the Yes button gave up... but you're amazing 💜
      </p>
      <h1 className="text-4xl font-bold mb-6">Aww, You Look Tired 🥺</h1>
      <p className="text-lg mb-4">Here’s some water 💧</p>

      <button
        className="px-6 py-2 bg-blue-300 hover:bg-blue-400 rounded-full shadow cursor-pointer animate-water-effect"
        onClick={handleDrinkWaterClick}
      >
        🥤 Drink Water
      </button>

      {showAnimation && (
        <LoveShower message="Water is just the start... You deserve all the love the world has to offer! 🌍❤️" />
      )}

      {next && (
        <div>
          <button onClick={()=>navigate('/surprise')}  className="mt-10 border-slate-600 px-7 text-teal-50 cursor-pointer py-2 text-2xl rounded-full bg-red-400 hover:bg-red-600 hover:translate-y-[-2] transition-all duration-200 ease-in-out">
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default TiredPage;
