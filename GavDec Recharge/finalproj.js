document.addEventListener('DOMContentLoaded', function() {
    // Product data - you can expand this with more products
    const products = {
        'VALORANT POINTS': {
            image: 'images/Valorant.png',
            price: '$4.99 - $99.99',
            minPrice: 4.99
        },
        'GENSHIN CRYSTALS': {
            image: 'images/Genshin.png',
            price: '$4.99 - $99.99',
            minPrice: 4.99
        },
        'STEAM WALLET': {
            image: 'images/Steam.png',
            price: '$5.00 - $100.00',
            minPrice: 5.00
        },
        'MOBILE LEGENDS': {
            image: 'images/mobile-legends.png',
            price: '$1.99 - $49.99',
            minPrice: 1.99
        },
        'WILD RIFT': {
            image: 'images/lol-wild-rift.png',
            price: '$4.99 - $99.99',
            minPrice: 4.99
        },
        'COD: MOBILE': {
            image: 'images/cod-mobile.png',
            price: '$2.99 - $99.99',
            minPrice: 2.99
        },
        'PUBG MOBILE': {
            image: 'images/pubg-mobile.png',
            price: '$0.99 - $99.99',
            minPrice: 0.99
        },
        'FORTNITE VBUCKS': {
            image: 'images/fortnite.png',
            price: '$7.99 - $99.99',
            minPrice: 7.99
        }
    };

    // Get DOM elements
    const modal = document.getElementById('productModal');
    const modalProductImage = document.getElementById('modalProductImage');
    const modalProductTitle = document.getElementById('modalProductTitle');
    const modalProductPrice = document.getElementById('modalProductPrice');
    const closeBtn = document.querySelector('.close-btn');
    const quantityInput = document.getElementById('quantity');
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');
    const addToCartBtn = document.querySelector('.add-to-cart');

    // Product cards click event
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function() {
            const productTitle = this.querySelector('.product-title').textContent;
            const product = products[productTitle];
            
            if (product) {
                modalProductImage.src = product.image;
                modalProductImage.alt = productTitle;
                modalProductTitle.textContent = productTitle;
                modalProductPrice.textContent = product.price;
                
                // Reset quantity
                quantityInput.value = 1;
                
                // Show modal
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close when clicking outside modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Quantity controls
    minusBtn.addEventListener('click', function() {
        let value = parseInt(quantityInput.value);
        if (value > 1) {
            quantityInput.value = value - 1;
        }
    });

    plusBtn.addEventListener('click', function() {
        let value = parseInt(quantityInput.value);
        quantityInput.value = value + 1;
    });

    // Add to cart functionality
    addToCartBtn.addEventListener('click', function() {
        const productTitle = modalProductTitle.textContent;
        const quantity = parseInt(quantityInput.value);
        const platform = document.getElementById('platform').value;
        
        // Calculate total price (simple calculation based on min price)
        const minPrice = products[productTitle].minPrice;
        const totalPrice = (minPrice * quantity).toFixed(2);
        
        // In a real application, you would add this to a cart system
        alert(`Added ${quantity} ${productTitle} for ${platform.toUpperCase()} to cart!\nTotal: $${totalPrice}`);
        
        // Close modal
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Keyboard navigation for modal
    document.addEventListener('keydown', function(event) {
        if (modal.style.display === 'block') {
            if (event.key === 'Escape') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });
});