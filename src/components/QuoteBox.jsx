import React from "react";
import "./styles/QuoteBox.css";
const QuoteBox = ({ handleChangeQuote, quote }) => {
   return (
      <section className="quoteBox">
         <h1>Fortune Cookies</h1>
         <section>
            <button onClick={handleChangeQuote}>Try luck</button>
            <article>
               <p>{quote.phrase}</p>
            </article>
         </section>
         <footer>
            <h4>Fuente: {quote.author}</h4>
         </footer>
      </section>
   );
};

export default QuoteBox;
