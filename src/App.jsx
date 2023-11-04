import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import FourOFour from "./pages/FourOFour.jsx";
import Home from "./pages/Home.jsx";
import Index from "./pages/Index.jsx";

// COMPONENTS



//STATES


function App() {

  return (
    <div className="App">
        <main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Index />} />
          <Route path="*" element={<FourOFour />} />
      </Routes>
        </main>
    </div>
  )
}

export default App;
