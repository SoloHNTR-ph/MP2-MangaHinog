import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./pages/Hero";
import { MangaDetails } from "./pages/MangaDetails";
import { Result } from "./pages/ResultPage";
import { ChapterPages } from "./pages/ChapterPages";
import { Browse } from "./pages/Browse";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/manga/:id" element={<MangaDetails />} />
        <Route path="/Browse" element={<Browse />} />
        <Route path="/result" element={<Result />} />
        <Route path="/chapter/:chapterId" element={<ChapterPages />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
