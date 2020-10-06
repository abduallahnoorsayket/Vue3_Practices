{ /* < script src = "https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js" > < /script> */ }

{ /* <script src = "https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js" > </script> */ }
const watchExampleVM = Vue.createApp({
    data() {
        return {
            question: '',
            answer: 'Questions usually contain a question mark. ;-)'
        }
    },
    watch: {
        // whenever question changes, this function will run
        question(newQuestion, oldQuestion) {
            if (newQuestion.indexOf('?') > -1) {
                this.getAnswer()
            }
        }
    },
    methods: {
        getAnswer() {
            this.answer = 'Thinking...'
            axios
                .get('https://yesno.wtf/api')
                .then(response => {
                    this.answer = response.data.answer
                })
                .catch(error => {
                    this.answer = 'Error! Could not reach the API. ' + error
                })
        }
    }
}).mount('#watch-example')