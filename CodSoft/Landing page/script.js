
document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".product");

    window.addEventListener("scroll", function() {
        products.forEach(product => {
            const productPosition = product.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (productPosition < screenPosition) {
                product.style.opacity = "1";
                product.style.transform = "translateY(0)";
            }
        });
    });
});