import React from "react";
import "./styles/QuoteBox.css";
const QuoteBox = ({ handleChangeQuote, quote }) => {
   return (
      <section className="quoteBox">
         <h1>Galletas de la fortuna</h1>
         <section>
            <article>
               <p>{quote.phrase}</p>
            </article>
            <button onClick={handleChangeQuote}>Try luck</button>
         </section>
         <footer>
            <h4>Fuente: {quote.author}</h4>
         </footer>
      </section>
   );
};

export default QuoteBox;
