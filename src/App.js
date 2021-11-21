import logo from "./images/logo.png";
import "./App.css";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography color="primary.light">Hello</Typography>
        <Typography color="primary">Hello</Typography>
        <Typography color="primary.dark">Hello</Typography>

        <Typography color="secondary.light">Hello</Typography>
        <Typography color="secondary">Hello</Typography>
        <Typography color="secondary.dark">Hello</Typography>

        <img src={logo} className="App-logo" alt="logo" />
        <p>Homepage - Work Profile Jennifer Lindberg</p>
      </header>
    </div>
  );
}

export default App;
