import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import FourOFour from "./pages/FourOFour.jsx";
import Home from "./pages/Home.jsx";
import Index from "./pages/Index.jsx";

// COMPONENTS
import SongForm from "./components/SongForm.jsx";
import SongDetails from "./components/SongDetails.jsx";
import EditSong from "./components/EditSong.jsx";
import NavBar from "./components/NavBar.jsx";
//STATEs

function App() {

  return (
    <div className="App">
        <main>
          <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Index />} />
          <Route path="/songs/:id" element={<SongDetails />} />
          <Route path="/songs/:id/edit" element={<EditSong />} />
          <Route path="/songs/new" element={<SongForm />} />
          <Route path="*" element={<FourOFour />} />
      </Routes>
        </main>
    </div>
  )
}

export default App;
