<template>
  <div class="videos">
    <Video
      title="What Are Algae, Animatie"
      desc="Een animatie gemaakt in Adobe After Effects volgens een script."
      url="https://www.youtube.com/embed/Kt-PxcTLujg"
    />
    <Video
      title="3D Speaker Model"
      desc="Een 3D model van de werking van een speaker. Gemaakt met Cinema 4D."
      url="https://www.youtube.com/embed/Z24Yd3AH184"
    />
    <Video
      title="Trash Film Intro Montage"
      desc="Een intro sequentie voor een fictieve film. Een oefening in framing en film editing met Adobe Premiere."
      url="https://www.youtube.com/embed/u4Cbxrx12_I"
    />
    <Video
      title="Arcon Console Trailer"
      desc="De trailer voor een groepsproject waar we een werkende multiplayer arcade console hebben gemaakt. Editing van het filmpje is door mijzelf gedaan in Adobe Premiere."
      url="https://www.youtube.com/embed/gaPCY-YOgOk"
    />
    <Video
      title="Dixido Trailer"
      desc="De trailer voor mijn eindwerk, Dixido (lees hier meer over bij projecten). Editing in Adobe Premiere."
      url="https://www.youtube.com/embed/asvpde_aR70"
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
