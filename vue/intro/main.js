const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            brand: 'Limvik',
            selectedVariant: 0,
            // image: './assets/images/socks_blue.jpg',
            url: 'https://v3-docs.vuejs-korea.org/',
            inventory: 0,
            // inStock: false,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ],
            sizes: ['L', 'M', 'S'],
            cart: 0,
            styles: {
                color: 'red',
                fontSize: '2em'
            }
        }
    },
    methods: {
        addToCart() {
            this.cart++
        },
        // updateImage(variantImage) {
        //     this.image = variantImage
        // },
        updateVariant(index) {
            this.selectedVariant = index
        },
        removeFromCart() {
            if (this.cart > 0)
                this.cart--
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        onSaleMessage() {
            if (this.variants[this.selectedVariant].quantity)
                this.onSale = true;
            else this.onSale = false;
            return this.onSale ? 'is on sale' : ''
        }
    }
})