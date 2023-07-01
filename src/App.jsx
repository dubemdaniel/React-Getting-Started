import componentsImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";
import Concept from "./components/Concept";
import Header from "./components/Header";
import "./App.css";

const concepts = [
  {
    title: "Components",
    image: componentsImage,
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    title: "Events",
    image: eventsImage,
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];

function App() {
  return (
    <div className="center">
      <Header></Header>
      <ul id="concepts">
        {concepts.map((concept) => (
          <Concept
            title={concept.title}
            image={concept.image}
            description={concept.description}
          />
        ))}
        {/* <Concept
          title={concepts[0].title}
          image={concepts[0].image}
          description={concepts[0].description}
        ></Concept>
        <Concept
          title={concepts[1].title}
          image={concepts[1].image}
          description={concepts[1].description}
        ></Concept>
        <Concept
          title={concepts[2].title}
          image={concepts[2].image}
          description={concepts[2].description}
        ></Concept> */}
      </ul>
    </div>
  );
}

export default App;
