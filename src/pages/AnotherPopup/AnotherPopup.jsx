import React from 'react';
// import './Popup.css';
import Popup from '../Popup/Popup';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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


const AnotherPopup = () => {
    return (
            <div className="App">
                <Routes>
                    <Route path="/popup" element={<Popup />} />
                    {/* <Route path="/options" element={<Options />} /> */}
                </Routes>
                <div className="row">
                    <div className="column">
                        <h2>Column 1</h2>
                    </div>
                    <div className="column">
                        <h2>Column 2</h2>
                        <Link to="/popup">Go to Popup</Link>
                    </div>
                </div>
            </div>
    );
};

export default AnotherPopup;
