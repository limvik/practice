app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: 
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <a :href="url">
                    <img
                        :src="image"
                        alt="socks"
                        :class="{'out-of-stock-img': !inStock}"
                    />
                </a>
            </div>
            <div class="product-info">
                <h1>{{ title + ' ' + onSaleMessage}}</h1>
                <!-- <p v-if="inStock">In Stock</p>-->
                <p v-if="inStock > 10">In Stock</p>
                <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out</p>
                <p v-else :style="styles">Out of Stock</p> <!-- style도 data로 넣을 수 있음 -->
                <!-- v-show를 하면 조건에 따라 display:none 이 설정될 뿐 element 자체가 사라지지는 않는다. -->
                <!-- <p v-show="inStock">In Stock</p> -->
                <!-- <p v-if="onSale">On Sale</p> -->

                <p>Shipping: {{ shipping }}</p>

                <ul>
                    <li v-for="attribute in attributes">{{ attribute }}</li>
                </ul>
                <!-- @mouseover는 vue 버전의 hover -->
                <!-- <div 
                    v-for="variant in variants"
                    :key="variant.id"
                    @mouseover="updateImage(variant.image)"
                    class="color-circle"
                    :style="{ backgroundColor: variant.color }">
                </div> -->
                <div 
                    v-for="(variant, index) in variants"
                    :key="variant.id"
                    @mouseover="updateVariant(index)"
                    class="color-circle"
                    :style="{ backgroundColor: variant.color }">
                    <!-- :style="{ 'background-color': variant.color }"> -->
                    <!-- dash가 있는 kebab cased 스타일을 사용하려면 문자열로 -->
                </div>
                <ul>
                    <li v-for="size in sizes">{{ size }}</li>
                </ul>
                <!-- <button class="button" v-on:click="cart += 1">Add to Cart</button> -->
                <!-- <button class="button" v-on:click="addToCart">Add to Cart</button> -->

                <!-- Multiple Classes -->
                <button 
                    class="button"
                    :class="{ disabledButton: !inStock}"
                    :disabled="!inStock"
                    @click="addToCart">
                    Add to Cart
                </button>
                <!-- ternary operator 도 알려줬는데 안됨 :class="[!inStock ? disabledButton : '']" -->
                <button class="button" @click="removeFromCart">Remove from Cart</button>
            </div>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div>`,
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
            attributes: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ],
            sizes: ['L', 'M', 'S'],
            styles: {
                color: 'red',
                fontSize: '2em'
            },
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        // updateImage(variantImage) {
        //     this.image = variantImage
        // },
        updateVariant(index) {
            this.selectedVariant = index
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        },
        addReview(review) {
            this.reviews.push(review)
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
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        }
    }
})