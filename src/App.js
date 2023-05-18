import './App.scss';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import WeatherCard from './components/organisms/WeatherCard';

import WeatherContextProvider from "./contexts/WeatherContext";

function App() {
  return (
    <WeatherContextProvider>
      <div className="App">
        <Header />
        <main>
          <WeatherCard />
        </main>
        <Footer />
      </div>
    </WeatherContextProvider>
  );
}

export default App;
