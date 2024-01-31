import heroImg from "./assets/hero-image-wr.jpg";
import Logo from "./components/Logo/Logo";
const App = () => {
  return (
    <div>
      <main className="main">
        <div className="logo">
          <Logo />
        </div>
        <img src={heroImg} alt="hero" className="hero-img" />
      </main>
    </div>
  );
};
export default App;
