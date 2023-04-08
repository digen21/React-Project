import "./App.css";
import TestForm from "./Components/Test-Form/TestForm";
import Header from "./Components/Header/Header";
import Meme from "./Components/Meme-Form/Meme";
import Card from "./Components/Test-Com/Card";
import FormComponent from "./Components/Form/FormComponent";
import ApiComponent from "./Components/Api-Call/ApiComponent";
// import Card from "./Components/Test-Com/Card";
// import Counter from "./Components/Test-Com/counter";
// import Test from "./Components/Test-Com/test";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <ApiComponent /> */}
      <Meme />
    </div>
  );
}

export default App;
