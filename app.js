new Vue({
    el: '#app',
    data: {
        name: '',
        quantity: 1,
        selectedProduct: {},
        orderMessage: '',
        products: [
            { id: 1, name: 'Pizza', description: 'Delicious cheese pizza.', price: 10, image: 'images/pizza.jpg' },
            { id: 2, name: 'Burger', description: 'Juicy beef burger.', price: 8, image: 'images/burger.jpg' },
            { id: 3, name: 'Sushi', description: 'Fresh sushi rolls.', price: 15, image: 'images/sushi.jpg' }
        ]
    },
    methods: {
        selectProduct(product) {
            this.selectedProduct = product;
            this.orderMessage = `You have selected ${product.name} for $${product.price}. Please enter the quantity.`;
        },
        submitOrder() {
            const total = this.selectedProduct.price * this.quantity;
            this.orderMessage = `Thank you ${this.name}! Your order for ${this.quantity} ${this.selectedProduct.name}(s) has been placed. Total amount is $${total}.`;
            
            // Clear the form fields
            this.name = '';
            this.quantity = 1;
            this.selectedProduct = {};
        }
    }
});
