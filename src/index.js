import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// import App from "./App";

function App() {
  return (
    <div className="App">
      <div className="Title">
        <Avatar name="My News Feed" />
      </div>

      <div className="Main">
        <WorkExperience id="i" profile="My News Feed">
          <Company
            name="Tesla Shanghai Capacity Will Exceed 1 Million Cars in 2022, BYD Blade Batteries Coming"
            author="By: Steve Hanley"
            description="Tesla's Giga Shanghai is expanding and will soon be able to
            manufacture more than 1 million cars a year."
            image="https://placehold.co/600x400/EEE/31343C"
          />
          <Company
            name="Elon Musk asegura que la 'verdadera' deuda de EU es de al menos 60 billones de dolares"
            author="By: Milenio Digital"
            description="El director ejecutivo de Tesla y SpaceX, Elon Musk, estimó que la
            deuda de Estados Unidos en tres veces mayor a su economía. ?La
            verdadera deuda nacional, incluidos los derechos no financiados, es
            de al menos 60 billones de dólares, aproximadamente tres veces el
            tamaño de toda la economía de ..."
            image="https://images.milenio.com/rEKBz9gvm8RL-BRlZBe7Eajux40=/942x532/uploads/media/2022/02/13/elon-musk-estimo-deuda-unidos.jpeg"
          />
          <Company
            name="Tesla recall for heater and defroster systems issued by Transport Canada."
            author="By: Mario Merano"
            description=" Transport Canada issued a recall for the Tesla Model 3, Model Y, and
            Model S on February 3, 2022, the agency told Teslarati recently. The
            recall was issued after the agency discovered an issue with the heat
            system in certain Tesla vehicles. Transport Canada reported that a
            little over ..."
            image="https://placehold.co/600x400/EEE/31343C"
          />
          <Company
            name="China represento la mitad de las ventas globales de coches electricos en 2021"
            author="By: Newsroom Infobae"
            description="Shanghái (China), 14 feb La mitad de las ventas de vehículos eléctricos registradas en 2021 a nivel mundial se efectuaron en China, según datos publicados hoy por la consultora Canalys. En total, según las estimaciones de Canalys, se vendieron 6,5 millones de este tipo de vehículos -incluyendo los totalmente eléctricos ..."
            image="https://placehold.co/600x400/EEE/31343C"
          />
        </WorkExperience>
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div className="profile-container">
      <div>
        <p className="profile">{props.name}</p>
      </div>
    </div>
  );
}

function WorkExperience(props) {
  return (
    <div>
      <ul className="work">{props.children}</ul>
    </div>
  );
}

function Company(props) {
  return (
    <div>
      <li>
        <div className="flex">
          <img src={props.image} alt="" />
          <h2 className="work-title">
            <span className="company">{props.name}</span>
            <span className="until">{props.author}</span>
          </h2>
        </div>
        <p>{props.description}</p>
      </li>
    </div>
  );
}

function Portfolio(props) {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio">{props.children}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
