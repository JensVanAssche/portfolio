import { useState } from "react";

import VHS from "../assets/vhs.png";
import Arrows from "../assets/arrows.png";

import Spinnaker from "../assets/Spinnaker.png";
import Spotify from "../assets/Spotify.png";
import Itch from "../assets/Itch.png";
import Cousins from "../assets/Cousins.png";
import Dehora from "../assets/Dehora.png";
import Formaat from "../assets/Formaat.png";

import "./projects.scss";

import projects from "./projects.json";

function Projects() {
  const [slide, setSlide] = useState(0);

  const thisSetSlide = (index) => {
    if (projects[index]) setSlide(index);
    if (!projects[index] && index < 0) setSlide(projects.length - 1);
    if (!projects[index] && index > 0) setSlide(0);
  };

  const images = [Spinnaker, Spotify, Itch, Cousins, Dehora, Formaat];

  return (
    <div id="projects">
      <h1>Projecten</h1>
      <div id="vhs">
        <div
          className="vhs-button rewind"
          onClick={() => thisSetSlide(slide - 1)}
        >
          <img src={Arrows} />
          <h2>REWIND</h2>
        </div>
        <div id="vhs-img-wrapper">
          <a href={projects[slide].links[0].url} target="_blank">
            <img src={images[slide]} id="vhs-project" />
          </a>
          <img src={VHS} id="vhs-img" />
          <img src={VHS} id="vhs-img-placeholder" />
          <div id="bullets">
            <img src={Arrows} onClick={() => thisSetSlide(slide - 1)} />
            {projects.map((_, i) => (
              <div
                key={i}
                className={slide === i ? "active" : ""}
                onClick={() => thisSetSlide(i)}
              ></div>
            ))}
            <img src={Arrows} onClick={() => thisSetSlide(slide + 1)} />
          </div>
        </div>
        <div
          className="vhs-button forward"
          onClick={() => thisSetSlide(slide + 1)}
        >
          <h2>FORWARD</h2>
          <img src={Arrows} />
        </div>
      </div>
      <div id="vhs-text">
        <h2>{projects[slide].title}</h2>
        <p>{projects[slide].description}</p>
        {projects[slide].links.map((e) => (
          <a key={e.url} href={e.url} target="_blank">
            ► {e.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
