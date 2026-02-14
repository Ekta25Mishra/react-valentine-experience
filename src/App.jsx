import { Routes, Route } from "react-router-dom";
import Setup from "./pages/Setup";
import Wish from "./pages/Wish";
import Valentine from "./pages/Valentine";
import Questions from "./pages/Questions";
import Reveal from "./pages/Reveal";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Setup />} />
      <Route path="/love/:id/wish" element={<Wish />} />
      <Route path="/love/:id/valentine" element={<Valentine />} />
      <Route path="/love/:id/questions" element={<Questions />} />
      <Route path="/love/:id/reveal" element={<Reveal />} />
    </Routes>
  );
}
