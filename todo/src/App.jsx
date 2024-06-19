import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./components/Top";
import Input from "./components/Input";
import Value from "./components/value";

function App() {
  let data = [
    { name: "buy milk", date: "2081/2/31" },
    { name: "go to college", date: "2081/03/01" },
    { name: "go to college", date: "2081/03/01" },
  ];

  return (
    <>
      <center>
        <Top />
        <Input />
        <Value data={data} />
      </center>
    </>
  );
}

export default App;
