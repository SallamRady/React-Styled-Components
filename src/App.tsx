import "./App.css";
import { StyledButton } from "./components/01.StyledButton";
import { FancyButton } from "./components/02.FancyButton";

function App() {
  return (
    <div className="App">
      <button>Original Button</button>
      <StyledButton>Styled Button</StyledButton>
      <StyledButton variant="outlined">Styled Button</StyledButton>
      <FancyButton>Fancy Button</FancyButton>
    </div>
  );
}

export default App;
