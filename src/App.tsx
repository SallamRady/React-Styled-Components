import logo from "./logo.svg";
import "./App.css";
import { StyledButton } from "./components/01.StyledButton";
import { FancyButton } from "./components/02.FancyButton";
import { AnimatedLogo } from "./components/03.AnimatedImage";
import { GlobalStyle } from "./components/04.GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <img src={logo} alt="logo" className="App-logo" /> */}
      <AnimatedLogo src={logo} alt="logo" className="App-logo" />
      <div style={{ margin: "1rem" }}>
        <button>Original Button</button>
        <StyledButton>Styled Button</StyledButton>
        <StyledButton variant="outlined">Styled Button</StyledButton>
        <FancyButton>Fancy Button</FancyButton>
      </div>
    </div>
  );
}

export default App;
