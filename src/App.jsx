import heroImg from "./assets/hero-image-wr.jpg";
import CountryListing from "./components/CountryListing/CountryListing";
import Logo from "./components/Logo/Logo";
const App = () => {
  return (
    <div>
      <main className="main">
        <div className="logo">
          <Logo />
        </div>
        <img src={heroImg} alt="hero" className="hero-img" />
        <CountryListing />
      </main>
    </div>
  );
};
export default App;
