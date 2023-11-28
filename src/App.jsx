import "./App.css";
import { MenuHamburguesaProvider } from "./components/context/menu_hamburguesa";
import Routes from "./routes/routes";

function App() {
  return (
    <MenuHamburguesaProvider>
      <Routes />
    </MenuHamburguesaProvider>
  );
}

export default App;
