import Header from "./Header.js";
import {Routes, Route} from "react-router-dom"
import Homepage from "./Homepage.js"
import TextSummary from "./TextSummary.js";
import YtMP3 from "./YtMP3.js"
import PwdGen from "./PwdGen.js"
import Lyric from "./Lyric.js"
import PDF from "./PDF.js"
import QR from "./QR.js"

function App() {
  return (
    <div className="App" >
      <Header/>
      <Routes>
        <Route path="/" element ={<Homepage/>}/>
        <Route path="/textsum" element={<TextSummary/>}/>
        <Route path="/ytmp3" element={<YtMP3/>}/>
        <Route path="/pwdgen" element={<PwdGen/>}/>
        <Route path="/lyric" element={<Lyric/>}/>
        <Route path="/pdf" element={<PDF/>}/>
        <Route path="/qr" element={<QR/>}/>
      </Routes>
    </div>
  );
}

export default App;
