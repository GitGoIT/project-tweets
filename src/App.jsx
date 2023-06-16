import './App.module.css';
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

const TweetsPage = lazy(() => import("./pages/TweetsPage/TweetsPage"));

const App = () => {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
