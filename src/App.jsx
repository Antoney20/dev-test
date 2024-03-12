import {  Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FallbackLoading from "./components/loader/FallbackLoading";
import Login from "./components/Auth/Signin";

function App() {
  return (
    <Router>
      <Suspense fallback={<FallbackLoading />}>
        <Routes>
          <Route path="/signin" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
