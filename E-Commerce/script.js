// Menyimpan produk yang ditambahkan ke keranjang
let cart = [];

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(productId) {
    // Menambahkan produk berdasarkan ID
    cart.push(productId);
    
    // Menampilkan notifikasi atau memperbarui jumlah produk di keranjang
    alert('Produk telah ditambahkan ke keranjang!');
    
    // Menyimpan keranjang ke localStorage (opsional, untuk penyimpanan tetap)
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Mengupdate jumlah produk dalam keranjang di tampilan (misal di header atau tombol)
    updateCartCount();
}

// Fungsi untuk menghitung jumlah produk dalam keranjang
function updateCartCount() {
    const cartCount = cart.length;
    const cartIcon = document.querySelector('.cart-count'); // Anda bisa menambahkan elemen untuk menampilkan jumlah keranjang
    if (cartIcon) {
        cartIcon.textContent = cartCount; // Menampilkan jumlah produk
    }
}

// Inisialisasi keranjang saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    const savedCart = JSON.parse(localStorage.getItem('cart')); // Ambil data keranjang dari localStorage
    if (savedCart) {
        cart = savedCart; // Muat data keranjang sebelumnya
    }
    updateCartCount(); // Update jumlah keranjang saat halaman dimuat
});
