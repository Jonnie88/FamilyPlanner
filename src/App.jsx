import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  let data = [
    { firstname: "Johannes", lastname: "Lundberg", birthdate: "1988-11-16" },
    { firstname: "Charlie", lastname: "Lundberg", birthdate: "1988-11-16" },
    { firstname: "Edith", lastname: "Lundberg", birthdate: "1988-11-16" },
    { firstname: "Märta", lastname: "Lundberg", birthdate: "1988-11-16" },
    { firstname: "Gösta", lastname: "Lundberg", birthdate: "1988-11-16" },
    { firstname: "Emelie", lastname: "Johansson", birthdate: "1988-11-16" },
  ];
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
