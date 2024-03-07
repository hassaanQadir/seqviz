import logo from './logo.svg';
import './App.css';
import { SeqViz } from "seqviz";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <SeqViz
          name="J23100"
          seq="TTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGC"
          annotations={[{ name: "promoter", start: 0, end: 34, direction: 1, color: "blue" }]}
        />
        <SeqViz
                    // accession="MN623123"
                    annotations = {[
                      { start: 0, end: 22, name: "Strong promoter", direction: 1} , // [0, 22)
                      { start: 23, end: 273, name: "GFP" },
                      { start: 300, end: 325, name: "Weak promoter", direction: -1, color: "#FAA887" },
                    ]}
                    primers= {[
                      { start: 33, end: 53, name: "LacZ Foward Primer", direction: 1 },
                      { start: 3098, end: 3128, name: "LacZ Reverse Primer", direction: -1, color: "#FAA887" },
                    ]}
                    enzymes=  {[
                      "EcoRI",
                      "PstI",
                      {
                        name: "Cas9",
                        rseq: "NGG", // recognition sequence
                        fcut: 0, // cut index on FWD strand, relative to start of rseq
                        rcut: 1, // cut index on REV strand, relative to start of rseq
                        color: "#D7E5F0", // color to highlight recognition site with
                        // (optional) only show recognition sites between 100th and 250th index [100, 250)
                        range: {
                          start: 100,
                          end: 250,
                        },
                      },
                    ]}
                    highlights={[
                      { start: 36, end: 66, color: "magenta" },
                      { start: 70, end: 80 },
                    ]}
                    name="obama"
                    seq={"TTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGCTTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGCTTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGCTTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGCTTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGCTTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGCTTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGCTTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGCTTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGCTTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGCTTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGCTTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGCTTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGCTTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGCTTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGCTTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGCTTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGCTTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGCTTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGC"}
                    showComplement={true}
                    showIndex={true}
                    translations = {[
                      { start: 0, end: 90, direction: 1 }, // [0, 90)
                      { start: 191, end: 522, direction: -1 },
                    ]}
                    viewer={"circular"}
                    zoom={{ linear: 50 }}
                    style={{ height: "100vh", width: "100vw" }}
                  >

                  </SeqViz>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
