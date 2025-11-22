import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import StaticsLayout from "./statics/StaticsLayout";
import Services from "./statics/Services";
import Industries from "./statics/Industries";
import Consultation from "./statics/Consultation";
import Plans from "./statics/Plans";
import Blogs from "./statics/Blogs";


const App: React.FC = () => {
  return (
        <Router>
          <AppContent />
        </Router>
  );
};

const AppContent: React.FC = () => {

  return (
    <Routes>

      <Route element={<StaticsLayout/>}>
        <Route path="/" element={<Services/>}/>
        <Route path="/industries" element={<Industries/>}/>
        <Route path="/consultation" element={<Consultation/>}/>
        <Route path="/plans" element={<Plans/>}/>
        <Route path="/blogs" element={<Blogs/>}/>

      </Route>

      {/* Catch all route - 404 */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;