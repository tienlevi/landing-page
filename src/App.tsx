import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SlideShow from "./components/Banner/SlideShow";
import Clients from "./components/Clients/Clients";
import Community from "./components/Community/Community";
import Achievements from "./components/Achievements/Achievements";
import Calender from "./components/Calender/Calender";
import Customer from "./components/Customer/Customer";
import Mkt from "./components/Mkt/Mkt";
import EndContainer from "./components/EndContainer/EndContainer";

function App() {
  return (
    <>
      <Header />
      <SlideShow />
      <Clients />
      <Community />
      <Achievements />
      <Calender />
      <Customer />
      <Mkt />
      <EndContainer />
      <Footer />
    </>
  );
}

export default App;
