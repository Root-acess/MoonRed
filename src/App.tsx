import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Pages/Hero';
import Blog from './Pages/Blog';
import TeamSection from './Pages/Team';
import Footer from './Component/Footer';
import Prices from './Pages/Prices';
import Aipage from './Pages/PromptPage';

// Main Application Component
const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Define a route for home page that includes all components */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Blog />
                <TeamSection />
                <Prices />
               <Footer />
              </>
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<TeamSection />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/ai" element={<Aipage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
