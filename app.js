// new Vue({
//     el: '#app',
//     data: {
//         title: 'Becoming a vue ninja Abdulla sayket '
//     }

// })


const app = Vue.createApp({});

app.component('modal-button', {
    template: `
    <button @click="modalOpen = true">
        Open full screen modal! (With teleport!)
    </button>

    <teleport to=".hello">
      <div v-if="modalOpen" class="modal">
        <div>
          I'm a teleported modal! 
          (My parent is "body")
          hello

          <button @click="modalOpen = false">
            Close
          </button>
        </div>
      </div>
    </teleport>
    
  `,
    data() {
        return {
            modalOpen: false
        }
    }
})

app.mount('#app')