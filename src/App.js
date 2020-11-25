import "./reset.css";
import "./App.css";
import { Fragment } from "react";

import Header from "./components/Header/header";
import Card from "./components/Card/card";

function getRandomId() {
  return Math.floor(Math.random() * 893) + 1;
}

const generatedId = getRandomId();

export default function App() {
  return (
    <Fragment>
      <Header generatedId={generatedId} />
      <Card generatedId={generatedId} />
    </Fragment>
  );
}