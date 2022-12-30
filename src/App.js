import Box_Select from "./Components/Box_Select/Box_Select";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home_page from "./Components/Home_page/Home_page";
import How_To_Play from "./Components/How_to_play/How_To_Play";


function App() {
  return (
    <div className=" bg-black">
      <Header/>
      <Home_page/>
      <How_To_Play/>
      <Box_Select/>
      <Footer/>
    </div>
  );
}

export default App;
