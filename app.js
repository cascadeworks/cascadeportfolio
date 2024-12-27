$(document).ready(function() {
    $('.order-btn').click(function() {
        const productName = $(this).closest('.product').data('name');
        const productPrice = $(this).closest('.product').data('price');

        $('#product').val(productName);
        $('#order-message').text(`You have selected ${productName} for $${productPrice}. Please enter the quantity.`).show();

        // Scroll to the order section
        $('html, body').animate({
            scrollTop: $("#order").offset().top
        }, 1000);
    });

    $('#order-form').submit(function(event) {
        event.preventDefault();
        
        const name = $('#name').val();
        const product = $('#product').val();
        const quantity = $('#quantity').val();
        
        const total = parseInt(quantity) * parseFloat($('.product[data-name="' + product + '"]').data('price'));
        
        const message = `Thank you ${name}! Your order for ${quantity} ${product}(s) has been placed. Total amount is $${total.toFixed(2)}.`;
        
        $('#order-message').text(message).show();
        
        // Clear the form fields
        $(this).trigger("reset");
        $('#product').val('');
    });
});
