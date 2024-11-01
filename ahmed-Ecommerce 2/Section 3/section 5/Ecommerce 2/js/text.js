document.querySelectorAll('.trending-prod-wrap').forEach(function(product) {
    product.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    product.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
