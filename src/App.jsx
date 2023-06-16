import './App.module.css';
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import TweetsPage from "./pages/TweetsPage/TweetsPage";

const App = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <TweetsPage />
    </div>
  );
};

export default App;
