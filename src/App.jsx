import { useState } from "react";
import quotes from "./db/quotes.json";
import { getRandom } from "./utils/random";
import "./App.css";
import QuoteBox from "./components/QuoteBox";

const listBg = ["bg1", "bg2", "bg3", "bg4"];
function App() {
   const [quote, setQuote] = useState(getRandom(quotes));
   const [currentBg, setCurrentBg] = useState(getRandom(listBg));
   const handleChangeQuote = () => {
      setQuote(getRandom(quotes));
      setCurrentBg(getRandom(listBg));
   };
   return (
      <main className={`App ${currentBg}`}>
         <QuoteBox handleChangeQuote={handleChangeQuote} quote={quote} />
      </main>
   );
}

export default App;
