import { Routes, Route } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { Navbar } from "./components/Navbar";
import ButtonAppBar from "./components/ButtonAppBar";
import { Snack } from "./components/Snack";

import { Amlou } from "./pages/Amlou";
import { Peppermint } from "./pages/Peppermint";
import { Flatpan } from "./pages/FlatPan";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <CssBaseline />
      <ButtonAppBar />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/amlou" element={<Amlou />} />
        <Route path="/peppermint" element={<Peppermint />} />
        <Route path="/flatpan" element={<Flatpan />} />
        <Route path="/snack/:name" element={<Snack />} />
      </Routes>
    </>
  );
}

export default App;
