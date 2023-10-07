import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function PopupMenu({ setOpenPopupMenu }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" }}
        animate={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}
        exit={{ clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" }}
        className="absolute top-0 left-0 w-screen h-screen bg-black z-10 "
      >
        <div className="w-full flex justify-end h-[200px] items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileTap={{ scale: 1.2 }}
            className="ml-auto mr-4 text-white text-4xl cursor-pointer"
            onClick={() => setOpenPopupMenu(false)}
          >
            <AiOutlineClose />
          </motion.div>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <div>
            <motion.img
              initial={{
                clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
                scale: 0.1,
              }}
              animate={{
                clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
                scale: 1,
              }}
              transition={{ duration: 1.5 }}
              src="/logo.png"
              alt="logo"
              className="w-[200px] cursor-pointer"
            />
          </div>
          <motion.ul
            initial={{
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            }}
            animate={{
              clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-white text-xl uppercase font-semibold tracking-widest flex flex-col items-center gap-y-1"
          >
            <li>
              <a href="">Accueil</a>
            </li>
            <li>
              <a href="">Compétences</a>
            </li>
            <li>
              <a href="">Projets</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </motion.ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
