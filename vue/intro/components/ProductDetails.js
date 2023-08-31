app.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `<p 
        v-for="(detail, index) in details">
        {{ detail }}
    </p>`
})