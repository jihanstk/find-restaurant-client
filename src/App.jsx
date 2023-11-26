import "./App.css";
import Banner from "./Components/Banner/Banner";
import Content from "./Components/Content/Content";
import ExtraSection from "./Components/ExtraSection/ExtraSection";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Content />
      <ExtraSection />
      <Footer />
    </>
  );
}

export default App;
