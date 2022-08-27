import React from "react";

const Result = ({word,phonetics,meanings,setText}) => {
  return(
      <ul>
         <li className="word">
            <h2>{word}</h2>
            {
               phonetics.map((phonetics, index) => (
                  <span key={index}>{phonetics.text}</span>
               ))
            }
         </li>
         {
            meanings.map((meaning, index) => (
            <li key={index} className="contain">
               <h3>noun</h3>
               <div className="details meaning">
                  <h3>Meaning</h3>
                  {
                     meaning.definitions.map((definition, index) =>(
                        <p key={index}>- {definition.definition}</p>
                     ))
                  }
               </div>
               {
               meaning.synonyms.length !== 0 &&
               <div className="details synonyms">
                  <h3>synonyms</h3>
                  {
                     meaning.synonyms.map((synonym, index) => (
                        <p key={index} onClick={() => setText(synonym)}>{`${synonym},`},</p>
                     ))
                  }
               </div>
                }
            </li>         
            ))
         }
      </ul>
  )
}

export default Result;