import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import avatarImage from "./assets/react.svg";
import "./App.css";
import ExampleComponent from "./ExampleComponent";
import Welcome from "./Welcome";
import { Goodbye } from "./Welcome";
import PropsDisplayer from "./components/PropsDisplayer";
import City from "./components/City";
import Pet from "./components/Pet";
import { FullName } from "./components/FullName";
import ComplexComment from "./components/ComplexComment";
import Comment from "./components/Comment";
import Callout from "./components/Callout";
import MoviesList from "./components/MoviesList";
import MoodChanger from "./components/MoodChanger";
import BirthdayTranslator from "./components/BirthdayTranslator";
import Weather from "./components/Weather";
import LoginForm from "./components/LoginForm";
import LoginFormUncontrolled from "./components/LoginFormUncontrolled";
import ExplodingBomb from "./components/ExplodingBomb";
import Movie from "./components/Movie";

function App() {
  const [count, setCount] = useState(100);

  const population = 322278;
  const year = 2016;

  const user = {
    name: "Harry Styles",
    age: 29,
  };

  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      // author is also an object
      name: "Hello Kitty",
      avatarUrl: "https://live.staticflickr.com/1305/4680268546_09f37c6391_c.jpg",
    },
  };

  const handleDeleteMovie = ()=>{

  }

  return (
    <>
      <ExplodingBomb />
      <PropsDisplayer user={user} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more sdflkjdfsgj
      </p>

      {/* <PropsDisplayer reactLogo={reactLogo} buttonCount={count} /> */}

      <ExampleComponent />
      <Welcome name="students">
        <p>Children of Welcome</p>
        <blockquote>What does this look like?</blockquote>
        <cite>Hey I am a cite!</cite>
        <ExampleComponent />
      </Welcome>
      <Goodbye />

      {/* <PropsDisplayer myProp="My first prop!" />
      <PropsDisplayer prop1="first" prop2="second" prop3={3} /> */}

      {/* <PropsDisplayer pets={["cat", "dog", "goldfish"]} /> */}

      <City name="Sydney" />

      <City name="Melbourne" state="VIC" />

      <City name="Chicago" state="Illinois" country="USA" />

      <City name="Newcastle">
        <div>Newcastle is a harbour city in the Strayan state of NSW.</div>
        <div>
          <strong>Population:</strong> {population} ({year})
        </div>
      </City>

      <Pet type={"horse"} name="Giddeon" colour="red" loggedIn={"Bill"} />

      <FullName first="Kendrick" last="Lamar" />

      <ComplexComment author={comment.author} date={comment.date} text={comment.text} />

      <Comment author={comment.author} date={comment.date} text={comment.text} />

      <Callout title="Nested React Component"
        message="Simple message with a fancy box applied via composition">
        <FullName first="Elon" last="Musk" />
      </Callout>

      <MoviesList />

      <MoodChanger />
      
      <BirthdayTranslator />
      
      <Weather />

      {/* <LoginForm /> */}
      <LoginFormUncontrolled />
      <Movie title="Test Movie" year={2024} synopsis={"Too long..."} id={100} onDeleteMovie={handleDeleteMovie} />
    </>
  );
}

// const spideyJSX = (
//   <div>
//     <h3>{spiderman.name}</h3>
//     <blockquote>{spiderman.catchPhrase}</blockquote>
//     <cite>{spiderman.alterEgo}</cite>
//   </div>
// )

// const spideyJSXFragment = (
//   <>
//     <h3>{spiderman.name}</h3>
//     <blockquote>{spiderman.catchPhrase}</blockquote>
//     <cite>{spiderman.alterEgo}</cite>
//   </>
// )

// const jsxElement = <h1 className="greeting">Hello World</h1>

// const nojsxElement = React.createElement('h1', { className: 'greeting'}, "Hello World")

// const jsElement = { type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello World'
//   }
// }

export default App;
