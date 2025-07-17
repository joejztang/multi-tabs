import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Popup.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AnotherPopup from '../AnotherPopup/AnotherPopup';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/popup" element={<Popup />} />
//         <Route path="/options" element={<Options />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


const Popup = () => {
  return (
    
      <div className="App">
          <Routes>
            <Route path="/popup" element={<Popup />} />
            <Route path="/anotherpopup" element={<AnotherPopup />} />
          </Routes>
        <div className="row">
          <div className="column">
            <h2>Column 1</h2>
          </div>
          <div className="column">
            <h2>Column 2</h2>
            <Link to="/anotherpopup">Go to Another Popup</Link>
          </div>
        </div>
      </div>
  );
};

export default Popup;
