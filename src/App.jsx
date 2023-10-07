import { useState } from "react";
import Menu from "./components/Menu";
import PopupMenu from "./components/PopupMenu";
import HeroSection from "./components/HeroSection";

function App() {
  const [openPopupMenu, setOpenPopupMenu] = useState(false);
  return (
    <main className="relative font-montserrat ">
      <Menu setOpenPopupMenu={setOpenPopupMenu} />
      {openPopupMenu && (
        <PopupMenu
          openPopupMenu={openPopupMenu}
          setOpenPopupMenu={setOpenPopupMenu}
        />
      )}
      <HeroSection />
    </main>
  );
}

export default App;
