import Navigation from "./Navigation";
import { AppProvider } from "./common/State";
import "./common/styles.scss";

function App() {
  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
}

export default App;
