import React, { useEffect, useState } from "react";
 
import { useNavigate } from "react-router-dom";

function Home() {
  const [position, setPosition] = useState({ top: "40%", left: "40%" });
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [countn, setCountn] = useState(0);
  const [text, setText] = useState("");

  const moveContainer = () => {
    if (count >= 80) return;
    const randTop = Math.floor(Math.random() * 80); // up to 80% of screen
    const randLeft = Math.floor(Math.random() * 80);
    setPosition({ top: `${randTop}%`, left: `${randLeft}%` });
    setCount(count + 1);
    console.log(count);
  };
  const navTired = () => {
    setCountn((prevCountn) => {
      const newCountn = prevCountn + 1;
      if (newCountn >= 5) {
        navigate("/notired");
      }
      return newCountn;
    });
  };

  const getTextForCount = (count) => {
    if (count === 1) return "Nice try! 😜";
    if (count === 2) return "Still no luck 😏";
    if (count === 3) return "Keep trying... 😆";
    if (count === 4) return "Almost got it! 😁";
    if (count >= 5 && count <= 8) return "Alright fine, you're persistent 😅";
    if (count === 9)
      return "Don't get angry on me 😬 you won’t get it that easy!";
    if (count === 12)
      return "You're really something special 💖 I’m loving your passion!";
    if (count === 15)
      return "You're unstoppable, my Queen 👑 Your fire lights up everything 🔥";
    if (count === 18) return "Your energy is magical ✨ You deserve a crown 💫";
    if (count === 20)
      return "You made this game feel like a fairy tale ✨ But no shortcuts, Princess! 👸";
    if (count === 22) return "Even this Yes button is shy of your charm 😳✨";
    if (count === 25)
      return "You’ve made this chase so cute 😍 You're the fun in my function!";
    if (count === 28)
      return "Are you flirting with this button? 😏 Even I’m jealous now.";
    if (count === 30)
      return "Queen behavior detected 👑 The Yes button is literally blushing 🫣";

    if (count === 38) return "Stop! You’re breaking the cuteness meter 🥵💓";

    if (count === 45)
      return "You're the plot twist the Yes button wasn’t ready for 🌀👑";
    if (count === 50)
      return "Only a true queen has this much patience and charm 💕 Royal level unlocked!";
    if (count === 55)
      return "Okay okay, you win! 🫡 Just kidding... keep going 😈";
    if (count === 60) return "If love was a game, you'd be the final boss 💘🔥";
    if (count === 65)
      return "This button's considering therapy after this 😵💭";
    if (count === 70)
      return "You're literally flirting with pixels right now 🧡💻 But I support it.";
    if (count === 75)
      return "The ‘Yes’ button has applied for witness protection 😂";
    if (count === 80)
      return "Queen. Icon. Legend. Myth. And now: Button Slayer 🗡️👑";

    return "";
  };

  useEffect(() => {
    const newText = getTextForCount(count);
    if (newText) {
      setText(newText);
    }
  }, [count]);

  return (
    <div className="h-screen w-full bg-gradient-to-b from-pink-400 via-red-500 to-yellow-500 flex items-center justify-center text-white text-center relative overflow-hidden">
      <div className="absolute top-10 text-2xl font-semibold w-full">
        <p className="text-2xl font-semibold text-rose-600 bg-rose-100 px-4 py-2 rounded-lg shadow-md animate-pulse">
          Hey Angel, It's your birthday 🎉 Ready for your gift? 🎁
        </p>

        {count ? (
          <div className="absolute font-bold border-white border-2 p-4 w-80 ml-76 mt-5 rounded-3xl text-center bg-black/70 shadow-lg">
            <span className="text-pink-300">
              {text.replace(/[\u{1F300}-\u{1FAFF}]/gu, "")}
            </span>
            <span className="text-yellow-300">
              {text.match(/[\u{1F300}-\u{1FAFF}]/gu)?.join("")}
            </span>
          </div>
        ) : null}
      </div>

      <div
        className="absolute border-amber-400 border-2 p-4 w-80 mt-10 rounded-full bg-gradient-to-b from-pink-400 via-red-500 to-yellow-500 transition-all duration-300 ease-in-out"
        style={{
          top: position.top,
          left: position.left,
        }}
      >
        <h3 className="text-3xl font-bold text-white drop-shadow-lg">
  Wanna See that
</h3>

        <button
          className="  px-4 py-1 bg-green-300 rounded cursor-pointer mt-4 mr-15"
          onMouseEnter={moveContainer}
          //   onClick={moveContainer}
          onKeyDown={moveContainer}
          onClick={() => navigate("/tired")}
          tabIndex={-1}
        >
          Yes
        </button>
        <button
          onClick={navTired}
          tabIndex={-1}
          className="px-4 py-1 bg-red-500 rounded cursor-pointer"
        >
          No
        </button>
      </div>
    </div>
  );
}

export default Home;
