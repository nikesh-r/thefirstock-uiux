import "./assets/styles/index.scss";
import Header from "./components/Header";
import TradingApp from "./components/TradingApp";

function App() {
  return (
    <div className="app">
      <Header />

      <TradingApp />
    </div>
  );
}

export default App;
