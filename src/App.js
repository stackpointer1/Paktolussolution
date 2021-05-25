import "./styles.css";
import Slots from "./Slots";
import MenuAppBar from "./MenuAppBar";


export default function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <Slots />
    </div>
  );
}
