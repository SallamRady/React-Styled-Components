import "./App.css";
import { StyledButton } from "./components/StyledButton";

function App() {
  return (
    <div className="App">
      <button>Original Button</button>
      <StyledButton>Styled Button</StyledButton>
      <StyledButton variant="outlined">Styled Button</StyledButton>
    </div>
  );
}

export default App;
