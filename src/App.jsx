import { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Cards from "./Cards";
import Form from "./Form";
import * as React from "react";

export default function App() {
  const [cardsDetails, setCardsDetails] = useState(function () {
    const storedCardsOnList = localStorage.getItem("cardsDetails");
    return storedCardsOnList ? JSON.parse(storedCardsOnList) : [];
  });
  const [card, setCard] = useState(null);
  const handleChange = (id) => {
    setCard(id !== card ? id : null);
  };

  useEffect(
    function () {
      localStorage.setItem("cardsDetails", JSON.stringify(cardsDetails));
    },
    [cardsDetails]
  );

  const addQuestionAndAnswer = (data) => {
    setCardsDetails((currDetails) => [
      ...currDetails,
      {
        id: uuidv4(),
        isQuestion: true,
        question: data.question,
        answer: data.answer,
      },
    ]);
  };
  const handleRemoveCard = (currCard) => {
    setCardsDetails(cardsDetails.filter((card) => card.id !== currCard.id));
  };
  return (
    <>
      <Form
        addQuestionAndAnswer={addQuestionAndAnswer}
        cardsDetails={cardsDetails}
      />
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Cards
          handleChange={handleChange}
          card={card}
          setCard={setCard}
          cardsDetails={cardsDetails}
          handleRemoveCard={handleRemoveCard}
        />
      </div>
    </>
  );
}
