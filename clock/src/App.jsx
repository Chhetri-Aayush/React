import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Top from "./components/Top.jsx";
import CurrentTime from "./components/CurrentTime.jsx";

function App() {
  return (
    <>
      <center>
        <Top />
        <p>This is the clock that shows the Nepal Clock at all times</p>
        <CurrentTime />
      </center>
    </>
  );
}

export default App;
