export default {
    data(){
        return {
            mixinCounter: 0
        }
    },
    methods:{
        removeCount(){
            this.counter--
        },
        addMixinCount(){
          this.mixinCounter++
        }
    }
}