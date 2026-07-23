import { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={`min-h-screen w-full font-sans antialiased transition-colors duration-300 ${
        dark ? "bg-[#121212] text-[#f2f2f2]" : "bg-[#f3f3f3] text-[#181717]"
      }`}
    >
      <Nav dark={dark} onToggleTheme={() => setDark((d) => !d)} />
      <Home dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}
