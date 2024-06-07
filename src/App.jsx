import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Academies } from "./Page/Acadimies";
import { Testomonial } from "./Page/Testimonials";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Academies />
        <Testomonial />
        <Footer />
      </div>
    </>
  );
}

export default App;
