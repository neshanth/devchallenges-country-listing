import heroImg from "./assets/hero-image-wr.jpg";
import CountryListing from "./components/CountryListing/CountryListing";
import Logo from "./components/Logo/Logo";
import { AppContext } from "./context/AppContext";
const App = () => {
  return (
    <AppContext.Provider value={{ test: "123" }}>
      <div>
        <main className="main">
          <div className="logo">
            <Logo />
          </div>
          <img src={heroImg} alt="hero" className="hero-img" />
          <CountryListing />
        </main>
      </div>
    </AppContext.Provider>
  );
};
export default App;
