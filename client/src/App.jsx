import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import NewChar from "./components/NewChar";
import { Routes, Route } from "react-router";
import EditChar from "./components/EditChar";
import DelChar from "./components/DelChar";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewChar />} />
        <Route path="/edit" element={<EditChar />} />
        <Route path="/delete" element={<DelChar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
