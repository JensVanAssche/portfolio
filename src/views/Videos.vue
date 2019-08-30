<template>
  <div class="videos">
    <Video
      title="Dixido Trailer"
      desc="De trailer voor mijn eindwerk, Dixido (lees hier meer over bij projecten). Ik heb contact opgezocht met een school voor zwakkere kinderen en daar user tests gaan afnemen. De beelden komen van die user tests. Het geeft een idee hoe de site gebruikt wordt in een realistische omgeving.
      
      Editing in Adobe Premiere."
      url="https://www.youtube.com/embed/asvpde_aR70"
    />
    <Video
      title="Arcon Console Trailer"
      desc="De trailer voor een groepsproject waar we een werkende multiplayer arcade console hebben gemaakt. Editing van het filmpje is door mijzelf gedaan in Adobe Premiere."
      url="https://www.youtube.com/embed/gaPCY-YOgOk"
    />
    <Video
      title="What Are Algae, Animatie"
      desc="Een animatie over algen volgens een bestaand script. Gemaakt in Adobe After Effects."
      url="https://www.youtube.com/embed/Kt-PxcTLujg"
    />
    <Video
      title="Trash Film Intro Montage"
      desc="Een intro sequentie voor een fictieve film. Een oefening in framing en film editing met Adobe Premiere."
      url="https://www.youtube.com/embed/u4Cbxrx12_I"
    />
    <Video
      title="3D Speaker Model"
      desc="Een 3D model van de interne werking van een luidspreker. Gemaakt met Cinema 4D."
      url="https://www.youtube.com/embed/Z24Yd3AH184"
    />
  </div>
</template>

<script>
import Video from "@/components/Video.vue";

export default {
  name: "Videos",
  components: {
    Video
  }
};
</script>
