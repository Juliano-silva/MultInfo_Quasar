<template>
  <div class="Relogio ">
      <q-time id="Timer" v-model="time" color="dark" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      time: ref('10:56')
    }
  }
}
</script>
