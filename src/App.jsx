import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./pages/Hero";
import { MangaDetails } from "./pages/MangaDetails";
import { ChapterPages } from "./pages/ChapterPages";
import { Result } from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/mangadetails/" element={<MangaDetails />} />
        <Route path="/mangadetails/chapterpages" element={<ChapterPages />} />
        <Route path="/result/" element={<Result />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
