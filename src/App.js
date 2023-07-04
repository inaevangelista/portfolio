
import './css/App.css';
import './css/App_mobile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "yet-another-react-lightbox/styles.css";
import Landing from './pages/Landing';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

document.body.style.background = "#9D99B6";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/"element={<Landing />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
