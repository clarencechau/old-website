import React from "react";
import CardItem from "./CardItem";
import "./Card.css";

function Card() {
  return (
    <div className="cards">
      <div className="title">Check out some of my recent projects:</div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/gungeon.png "
              text="Gungeon"
              label="Java"
              path="https://github.com/clarencechau/Gungeon"
              target="_blank"
              minitext="Built a 2-dimensional dungeon shooting game, using Greenfoot to help develop the graphical animations"
            />
            <CardItem
              src="images/badmintonzone.png"
              text="Badminton Zone"
              label="HTML"
              path="http://www.badmintonzone.ca/"
              target="_blank"
              minitext="Created an application to quickly create embedded HTML links whenever badminton news is announced"
            />
            <CardItem
              src="images/meepoisyou.png"
              text="Meepo is You"
              label="Python"
              path="https://github.com/clarencechau/Meepo-Is-You"
              target="_blank"
              minitext="Developed a grid-based puzzle game, inspired by the popular game, Baba is You"
            />
          </ul>
        </div>
      </div>
      <div className="title">I am proud to have worked for these companies:</div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/moneris.png "
              text="Moneris"  
              label="React/TypeScript/Java/SQL"
              path="https://www.moneris.com/"
              target="_blank"
            />
            <CardItem
              src="images/aireum.jpg"
              text="Aireum"
              label="React/JavaScript/Firebase"
              path="http://www.aireum.ca/"
              target="_blank"
            />
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Card;
