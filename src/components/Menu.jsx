import { RiMenu2Fill } from "react-icons/ri";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function Menu({ setOpenPopupMenu }) {
  return (
    <nav
      id="colorlib-main-nav"
      role="navigation"
      className="bg-gray-950 h-[200px] lg:h-[300px] "
    >
      <div className="flex items-center h-[200px] lg:h-[300px] lg:justify-center lg:flex-col">
        <motion.img
          initial={{
            clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
            scale: 0.1,
          }}
          animate={{
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            scale: 1,
          }}
          transition={{ duration: 1 }}
          src="/logo.png"
          alt="logo"
          className="w-[120px] lg:w-[180px] cursor-pointer"
        />
        <motion.div
          initial={{
            clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
            scale: 0.1,
          }}
          animate={{
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            scale: 1,
          }}
          transition={{ duration: 1 }}
          whileTap={{ scale: 1.2 }}
          className="ml-auto mr-4 text-white text-4xl cursor-pointer lg:hidden"
          onClick={() => setOpenPopupMenu(true)}
        >
          <RiMenu2Fill />
        </motion.div>
        <motion.ul
          initial={{
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          }}
          animate={{
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          }}
          transition={{ duration: 1, delay: 1.5 }}
          className="hidden  text-white text-xl uppercase lg:normal-case font-semibold tracking-widest lg:flex  items-center gap-x-8 pb-8"
        >
          <li
            className="bg-slate-100 py-3 px-6 shadow-md
          rounded-2xl text-black font-bold"
          >
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
    </nav>
  );
}
