/**
 * Catalyst Coffee Roasters - Main Interactive Logic
 * File: JavaScript/main.js
 * Deskripsi: Render produk dinamis, filter kategori, live search, & modal pop-up
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Element References ---
  const productsGrid = document.getElementById("products-grid");
  const searchInput = document.getElementById("search-input");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const mobileToggle = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");

  // Modal Elements
  const modalOverlay = document.getElementById("product-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalImg = document.getElementById("modal-img");
  const modalBadge = document.getElementById("modal-badge");
  const modalTitle = document.getElementById("modal-title");
  const modalPrice = document.getElementById("modal-price");
  const modalDesc = document.getElementById("modal-desc");
  const modalOrigin = document.getElementById("modal-origin");
  const modalRoast = document.getElementById("modal-roast");
  const modalWeight = document.getElementById("modal-weight");
  const modalStock = document.getElementById("modal-stock");
  const modalWaBtn = document.getElementById("modal-wa-btn");

  // --- State Variables ---
  let currentCategory = "all";
  let searchQuery = "";

  // --- Helper: Format Rupiah ---
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(number);
  };

  // --- Function: Render Products ---
  const renderProducts = () => {
    if (!productsGrid) return;

    // Filter by category & search query
    const filteredProducts = productsData.filter((product) => {
      const matchCategory =
        currentCategory === "all" || product.category === currentCategory;
      const matchSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchSearch;
    });

    // Check if empty
    if (filteredProducts.length === 0) {
      productsGrid.innerHTML = `
        <div class="catalog-empty">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <h3>Produk Tidak Ditemukan</h3>
          <p>Coba kata kunci lain atau pilih kategori yang berbeda.</p>
        </div>
      `;
      return;
    }

    // Render cards
    productsGrid.innerHTML = filteredProducts
      .map((product) => {
        return `
        <article class="product-card">
          <div class="product-img-wrapper">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            <span class="product-badge">${product.badge}</span>
          </div>
          <div class="product-body">
            <span class="product-category-tag">${product.categoryName}</span>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-desc">${product.shortDesc}</p>
            <div class="product-footer">
              <span class="product-price">${formatRupiah(product.price)}</span>
              <button class="btn-detail" data-id="${product.id}" aria-label="Lihat detail ${product.name}">
                Lihat Detail
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </article>
      `;
      })
      .join("");

    // Attach click events to "Lihat Detail" buttons
    document.querySelectorAll(".btn-detail").forEach((btn) => {
      btn.addEventListener("click", () => {
        const productId = parseInt(btn.getAttribute("data-id"));
        openModal(productId);
      });
    });
  };

  // --- Function: Open Modal ---
  const openModal = (id) => {
    const product = productsData.find((p) => p.id === id);
    if (!product) return;

    modalImg.src = product.image;
    modalImg.alt = product.name;
    modalBadge.textContent = product.badge;
    modalTitle.textContent = product.name;
    modalPrice.textContent = formatRupiah(product.price);
    modalDesc.textContent = product.fullDesc;
    modalOrigin.textContent = product.origin;
    modalRoast.textContent = product.roastLevel;
    modalWeight.textContent = product.weight;
    modalStock.textContent = product.stock;

    // Direct WhatsApp message link
    const waNumber = "6281234567890"; // Nomor dummy representatif
    const waMessage = encodeURIComponent(
      `Halo Catalyst Coffee Roasters! Saya tertarik memesan produk:\n\n*${product.name}*\nHarga: ${formatRupiah(product.price)}\nJumlah: 1\n\nMohon info ketersediaan dan ongkos kirim. Terima kasih!`
    );
    modalWaBtn.href = `https://wa.me/${waNumber}?text=${waMessage}`;

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  // --- Function: Close Modal ---
  const closeModal = () => {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  };

  // Modal event listeners
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });

  // --- Filter Category Buttons ---
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-filter");
      renderProducts();
    });
  });

  // --- Live Search Input ---
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // --- Mobile Hamburger Navigation ---
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });

    // Close menu when clicking any nav link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
      });
    });
  }

  // --- Active Nav Link on Scroll (ScrollSpy) ---
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-link");

  const highlightNavOnScroll = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", highlightNavOnScroll);

  // Initial render
  renderProducts();
});
