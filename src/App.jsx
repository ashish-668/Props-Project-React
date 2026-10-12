import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Podcast from "./component/podcast/Podcast";
import Report from "./component/report/Report";

const App = () => {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/Podcast" element={<Podcast />} />
          <Route path="/Report" element={<Report />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
