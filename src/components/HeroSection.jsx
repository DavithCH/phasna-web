import { useEffect, useRef } from "react";
import "./HeroSection.css";
import { motion } from "framer-motion";

const words = ["Développeuse", "Designer", "Phtographer", "Vidéaste"];

export default function HeroSection() {
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const textRef = useRef(null);

  const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord?.substring(0, charIndex);
    const node = textRef.current;
    if (node) {
      node.textContent = currentChar;
      node.classList.add("stop-blinking");
      if (!isDeleting && charIndex < currentWord?.length) {
        charIndex++;
        setTimeout(typeEffect, 300);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 200);
      } else {
        isDeleting = !isDeleting;
        node.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
      }
    }
  };

  useEffect(() => {
    typeEffect();
  }, []);
  return (
    <section className="h-[75vh] w-screen bg-hero-pattern bg-no-repeat bg-cover">
      <div className="h-full w-full bg-gradient-to-b from-gray-900/10 to-gray-900 flex flex-col items-center justify-center">
        <div>
          <p className="text-white text-6xl">
            Je suis&nbsp;
            <span
              ref={textRef}
              className="relative text-rose-500 font-bold beofre:content-[''] before:absolute before:h-[60px] before:bg-rose-500 before:w-[10px] before:-right-[20px] before:translate-y-[8%]"
            ></span>
          </p>
        </div>
        <div className="w-full flex justify-center">
          <motion.button
            whileTap={{ scale: 1.2 }}
            className="w-50 text-3xl bg-white font-bold p-4 rounded-xl mt-12"
          >
            Contactez-moi
          </motion.button>
        </div>
      </div>
    </section>
  );
}
