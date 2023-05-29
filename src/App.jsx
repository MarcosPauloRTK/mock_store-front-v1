import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header, Footer } from "./components";

import Home from "./screens/Home/Home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
