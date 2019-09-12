<template>
  <div class="projects">
    <Project
      title="Dixido"
      desc="Dixido heb ik gemaakt als eindwerk aan de KdG. Het is een webapp voor kinderen met stemproblemen.
      
      Het platform bestaat uit verschillende spelletjes gemaakt in PhaserJS die bestuurbaar zijn met de stem. De spelletjes verschillen in moeilijkheidsgraad en oefenen telkens andere aspecten van de stem. De spelletjes zijn gebaseerd op bestaande logopedische oefeningen. Op Dixido kunnen ouders en leerkrachten ook inloggen om de prestaties van hun kinderen te kunnen volgen.

      Dit project is gemaakt met React, Node en Phaser. Kijk bij video's voor het trailer filmpje.
      
      (Als je de demo voor het eerst opent duurt het een beetje en dan crashed de app. Je moet hierna opnieuw proberen en dan werkt het wel. Dit is een probleem met Heroku.)"
      link="https://dixido-nodejs.herokuapp.com/demo"
      img1="dixido1.png"
      img2="dixido2.png"
      img3="dixido3.png"
      github="https://github.com/JensVanAssche/Eindwerk"
      github2="https://github.com/JensVanAssche/Eindwerk_node"
    />
    <Project
      title="BPM Detector"
      desc="Een POC waar je een liedje kan opzoeken en de app berekend het tempo van dat liedje. Je opgezochte liedje wordt gescraped van een mp3 hosting site en in een BPM algoritme gestoken.
      
      Gemaakt met Puppeteer voor webscraping en een zelf geschreven BPM detectie algoritme in javascript."
      link="https://bpmdetector.herokuapp.com/"
      img1="bpm1.png"
      img2="bpm2.png"
      img3="bpm3.png"
      github="https://github.com/JensVanAssche/bpm_detector"
    />
    <Project
      title="NxT Media Portfolio"
      desc="Een nieuwe portfolio site voor de NxT Media studierichting van KdG. De focus ligt op een coole frontend en fancy effecten om nieuwe studenten aan te trekken."
      link="https://nxt-portfolio.herokuapp.com/"
      img1="nxt1.png"
      img2="nxt2.png"
      img3="nxt3.png"
      github="https://github.com/JensVanAssche/NxT_portfolio"
    />
    <Project
      title="Giftly"
      desc="Giftly is een fictieve service waar je verrassingen kan kopen als cadeau. De opdracht was brainstormen voor een origineel en disruptief idee en daar de user experience van uitwerken. Niets technisch ontwerpen, enkel UX design."
      link="https://giftlyapp.herokuapp.com/"
      img1="giftly1.png"
      img2="giftly2.png"
      img3="giftly3.png"
      github="https://github.com/JensVanAssche/giftly"
    />
    <Project
      title="Kowloon"
      desc="Een oefening in accuraat en volledig een flexibele frontend namaken van een voorbeeld in Photoshop. Gemaakt met Vue."
      link="https://kowloon-app.herokuapp.com/"
      img1="kowloon1.png"
      img2="kowloon2.png"
      img3="kowloon3.png"
      github="https://github.com/JensVanAssche/web_dev_kowloon"
    />
  </div>
</template>

<script>
import Project from "@/components/Project.vue";

export default {
  name: "Projects",
  components: {
    Project
  }
};
</script>
