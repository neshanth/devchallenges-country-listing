import heroImg from "./assets/hero-image-wr.jpg";
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
        </main>
      </div>
    </AppContext.Provider>
  );
};
export default App;
