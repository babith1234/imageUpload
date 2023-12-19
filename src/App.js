import ImageUpload from "./components/imageUpload";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImageUpload />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
