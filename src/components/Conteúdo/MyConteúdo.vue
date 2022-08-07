<template>
<div>
    <q-carousel animated v-model="slide" arrows navigation infinite>
      <q-carousel-slide :name="1" img-src="https://wallpapers.com/images/high/illuminati-trippy-cat-b4llahnro6nizg09.webp" />
      <q-carousel-slide :name="2" img-src="https://wallpapers.com/images/high/purple-vaporwave-of-jojo-80ustzjzsjvm6s8n.webp" />
      <q-carousel-slide :name="3" img-src="https://wallpapers.com/images/high/knight-looking-at-the-castle-aprabrqngonpntwq.webp" />
      <q-carousel-slide :name="4" img-src="https://wallpapers.com/images/high/the-ringed-city-dark-souls-3-6ncalkr58jm4n9er.webp" />
    </q-carousel>
</div>
<div class="MyConteúdo">
  <h1>Contéudo</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt possimus voluptatibus enim saepe quisquam? Vitae placeat numquam voluptas sapiente optio obcaecati porro ullam officia, incidunt repellat dolore odit ea. Vero.</p>
  <ConteúdoItem/>
</div>
</template>
<script>
import { ref } from 'vue'
import ConteúdoItem from 'components/Adicionar/ContéudoItem.vue'
export default {
  components:{
    ConteúdoItem
  },
  setup () {
    return {
      slide: ref(1),
    }
  }
}
</script>
