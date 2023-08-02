import React from "react";
import "./styles/QuoteBox.css";
import ChangePhraseBG from "./ChangePhraseBG";
const QuoteBox = ({ handleChangeQuote, quote }) => {
   return (
      <section className="quoteBox">
         <h1>INFOGALAX</h1>
         <section>
            <article className="phraseBox">
               <p>{quote.phrase}</p>
            </article>
         </section>
         <ChangePhraseBG handleChangeQuote={handleChangeQuote} />
         <footer>
            <h4>Fuente: {quote.author}</h4>
         </footer>
      </section>
   );
};

export default QuoteBox;
