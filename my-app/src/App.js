import logo from './logo.svg';
import './App.css';
import { SeqViz } from "seqviz";

function App() {
  return (
    <div className="App">
        
        <SeqViz
          name="J23100"
          seq="TTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGC"
          annotations={[{ name: "promoter", start: 0, end: 34, direction: 1, color: "blue" }]}
          style={{ height: "100vh", width: "100vw" }}
        />
    </div>
  );
}

export default App;
