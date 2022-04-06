const app = Vue.createApp({
    data(){
        return{
            cart:0,
            header:'Vue is ready to party',
            image: "./images/socks_green.jpg",
            inventory:0,
        
        }
    },
    methods:{
        addToCart(){
            this.cart +=1
        }
    }
})