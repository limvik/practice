const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            details: ['detail1', 'detail2']
        }
    },
    methods: { 
        updateCart(id) {
            this.cart.push(id)
        },
        removeById(id) {
            const index = this.cart.indexOf(id);
            if (index > -1) {
                this.cart.splice(index, 1);
            }
        }
     }
})