/*********************************************************/
/***** Bugfix for EDD CART NOT EMPTY CLASS *********/
/**** when there is product added to cart        *********/
/*******************************************************/

  $(".edd-cart-quantity").on('DOMSubtreeModified', function () {

        $( document ).ajaxComplete(function() {
            // getting number of products in the cart
            var $cartQuantity =  $(".edd-cart-quantity").html();
            if (($cartQuantity == 1)&&($("aside.widget_edd_cart_widget").hasClass('cart-empty'))) {
                          // remove cart -empty class and add cart-not-empty class
                          $("aside.widget_edd_cart_widget").removeClass('cart-empty');
                          $("aside.widget_edd_cart_widget").addClass('cart-not-empty');
                    }
         });
 });
