<template>
  <div id="OD">
    <q-btn label="Tchauzinho" id="BtnT" color="secondary" @click="dialog = true" />
    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Essa é a nossa história</div>
        </q-card-section>
        <q-card-section class="row items-center q-gutter-sm">
          <q-btn label="Abrir o dialogo" color="dark" @click="dialog2 = true" />
          <q-btn v-close-popup label="Sair" color="dark" />

          <q-dialog v-model="dialog2">
            <q-card>
              <q-card-section>
                <div class="text-h6">
                  <h1>Espero que tenha gostado adeus!</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque cumque cupiditate quam placeat? Quam molestiae consequuntur eligendi, vitae debitis, aspernatur aut perspiciatis accusamus non corporis voluptatum nesciunt, asperiores ducimus maiores.</p>
                  </div>
              </q-card-section>
              <q-card-section class="row items-center q-gutter-sm">
                <q-btn v-close-popup="2" label="Fechar Tudo" color="dark" />
                <q-btn v-close-popup label="Fechar o dialogo" color="dark" />
              </q-card-section>
            </q-card>
          </q-dialog>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      dialog: ref(false),
      dialog2: ref(false)
    }
  }
}
</script>
