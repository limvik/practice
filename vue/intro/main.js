const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            url: 'https://v3-docs.vuejs-korea.org/',
            inventory: 10,
            inStock: true,
            onSale: true
        }
    }
})