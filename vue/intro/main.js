const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            url: 'https://v3-docs.vuejs-korea.org/',
            inventory: 10,
            inStock: true,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
            ],
            sizes: ['L', 'M', 'S'],
            cart: 0
        }
    },
    methods: {
        addToCart() {
            this.cart++
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        removeFromCart() {
            if (this.cart > 0)
                this.cart--
        }
    }
})