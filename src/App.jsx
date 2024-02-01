import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import "./App.css";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  const [dark, setDark] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  const background = [
    { url: "/Nav/bg-1.jpg", id: "aSd" },
    { url: "/Nav/bg-2.jpg", id: "bNj" },
    { url: "/Nav/bg-3.jpg", id: "cLK" },
    { url: "/Nav/bg-4.jpg", id: "eFT" },
    { url: "/Nav/bg-5.jpg", id: "fLm" },
    { url: "/Nav/bg-6.jpg", id: "gUb" },
  ];
  const skills = [
    {
      url: "/Skills/html.png",
      name: "HTML",
      title: "Hyper Text Markup Language",
    },
    {
      url: "/Skills/css.png",
      name: "CSS",
      title: "Cascading Style Sheet",
    },
    {
      url: "/Skills/tailwind.png",
      name: "Tailwind",
      title:
        "A utility-first CSS framework that can build any design, directly in your markup.",
    },
    {
      url: "/Skills/java-script.png",
      name: "Java-Script",
      title: "One of the most populer Script languages",
    },
    {
      url: "/Skills/react.png",
      name: "React",
      title: "The library for web and native user interfaces",
    },
  ];
  const projects = [
    { id: "abc", url: "/Projects/Match-numbers/first.png" },
    { id: "bcd", url: "/Projects/Tenzies/first.png" },
    { id: "cde", url: "/Projects/Quiz/first.png" },
    { id: "def", url: "/Projects/Recipe/first.png" },
    { id: "efg", url: "/Projects/Tack-Tracker/first.png" },
  ];

  return (
    <main className={`${dark ? "bg-zinc-900" : "bg-white"} overflow-hidden`}>
      <Navbar background={background} dark={dark} setDark={setDark} />
      <About dark={dark} />
      <Skills skills={skills} dark={dark} />
      <Project projects={projects} dark={dark} />
      <Contact handleSubmit={handleSubmit} dark={dark} />
      <Footer dark={dark} />
    </main>
  );
};

export default App;
