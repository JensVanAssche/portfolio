import Tv from "../assets/tv.png";
import Me from "../assets/me.png";

import "./info.scss";

function Info() {
  return (
    <div id="info">
      <div id="info-box">
        <div id="img">
          <img src={Tv} id="img-tv-placeholder" />
          <img src={Me} id="img-me" />
          <img
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2w5ZHF3aW00NWgzaW5kbDVqMTl6emJ6Z2hiaGVqMGk5N20xeWdnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YRcXl6VfNhCorklI0R/giphy.gif"
            id="img-white"
          />
          <img src={Tv} id="img-tv" />
          <span id="img-play">► PLAY</span>
        </div>
        <div id="text">
          <h1>Jens Van Assche</h1>
          <h2>
            Front-end Developer
            <br />
            Audio & Video Editor
            <br />
            Videographer
          </h2>
          <p>
            Welkom, ik ben Jens Van Assche, 27 jaar en gevestigd in Antwerpen.
            <br />
            <br />
            Momenteel ben ik actief als front-end developer bij een klein
            bedrijf hier in Antwerpen en heb al zo’n vijf jaar werkervaring.
            Toch wens ik mijn passies na te jagen en wil de sprong naar de
            audio/video wereld maken.
            <br />
            <br />
            Dankzij een combinatie van opleiding en hobby’s heb ik al een mooie
            set vaardigheden opgebouwd. Ook ben ik creatief actief en uit dit
            via verschillende wegen zoals muziek en design.
            <br />
            <br />
            Ik ben dus actief op zoek naar een job in de AV wereld, als monteur
            en/of videograaf. Ik wil mezelf blijven uitdagen en zie dit als
            mogelijkheden om bij te leren en te groeien.
            <br />
            <br />
            <span className="black">CONTACT:</span>
            <br />
            <a href="mailto:jens.va@hotmail.com" target="_blank">
              ► jens.va@hotmail.com
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/jens-van-assche-98501a187/"
              target="_blank"
            >
              ► LinkedIn
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/jens-van-assche-98501a187/"
              target="_blank"
            >
              ► CV
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
