const RESTAURANT = {
  whatsappNumber: "94775572256",
  phoneNumber: "+94 77 557 2256",
  address: "Only Online",
  email: "dinifoodhouse@gmail.com",
};

const categories = [
  {
    name: "Fried Rice",
    items: [
      "Chicken Fried Rice",
      "Seafood Fried Rice",
      "Egg Fried Rice",
      "Vegetable Fried Rice",
    ],
  },
  {
    name: "Rice and Curry",
    items: [
      "Chicken Rice and Curry",
      "Fish Rice and Curry",
      "Egg Rice and Curry",
      "Vegetable Rice and Curry",
    ],
  },
  {
    name: "Kottu",
    items: [
      "Chicken Kottu",
      "Cheese Kottu",
      "Chicken Cheese Kottu",
      "Seafood Kottu",
      "Egg Kottu",
      "Vegetable Kottu",
      "Dolphin Kottu",
    ],
  },
  {
    name: "Noodles",
    items: [
      "Chicken Noodles",
      "Seafood Noodles",
      "Egg Noodles",
      "Vegetable Noodles",
      "Mixed Noodles",
    ],
  },
  {
    name: "Short Eats",
    items: [
      "Fish Rolls",
      "Fish Patties",
      "Fish Cutlets",
      "Chicken Rolls",
      "Vegetable Roti",
      "Isso Wade",
      "Parippu Wade",
    ],
  },
  {
    name: "Beverages",
    items: [
      "Faluda",
      "Fresh Lime Juice",
      "Mango Juice",
      "Wood Apple Juice",
      "Avocado Juice",
      "Watermelon Juice",
      "Iced Coffee",
      "Milo",
    ],
  },
  {
    name: "Desserts",
    items: [
      "Watalappan",
      "Caramel Pudding",
      "Fruit Salad",
      "Ice Cream",
      "Curd and Treacle",
      "Bibikkan",
      "Kavum",
    ],
  },
];

const placeholderImage = "assets/menu/food-placeholder.svg";
const menuImages = {
  "Chicken Fried Rice":
    "assets/Fried Rice/WhatsApp Image 2026-11-23 at 10.20.02.jpeg",
  "Seafood Fried Rice":
    "assets/Fried Rice/WhatsApp Image 2026-11-23 at 10.19.55.jpeg",
  "Egg Fried Rice":
    "assets/Fried Rice/WhatsApp Image 2026-11-23 at 10.19.53 (1).jpeg",
  "Vegetable Fried Rice":
    "assets/Fried Rice/WhatsApp Image 2026-11-23 at 10.19.51.jpeg",
  "Chicken Rice and Curry": "assets/Rice and Curry/919-9163-mx.jpg",
  "Fish Rice and Curry": "assets/Rice and Curry/fish.jpg",
  "Egg Rice and Curry": "assets/Rice and Curry/rice-and-curry-egg1-min.jpg",
  "Vegetable Rice and Curry": "assets/Rice and Curry/images.jpg",
  "Chicken Kottu": "assets/Kottu/WhatsApp Image 2026-11-23 at 10.48.16 (1).jpeg",
  "Cheese Kottu": "assets/Kottu/WhatsApp Image 2026-11-23 at 10.48.19.jpeg",
  "Chicken Cheese Kottu": "assets/Kottu/WhatsApp Image 2026-11-23 at 10.48.16.jpeg",
  "Seafood Kottu":
    "assets/Kottu/WhatsApp Image 2026-11-23 at 10.48.18 (2).jpeg",
  "Egg Kottu": "assets/Kottu/WhatsApp Image 2026-11-23 at 10.48.18.jpeg",
  "Vegetable Kottu":
    "assets/Kottu/WhatsApp Image 2026-11-23 at 10.48.17 (2).jpeg",
  "Dolphin Kottu":
    "assets/Kottu/WhatsApp Image 2026-11-23 at 10.48.18 (1).jpeg",
  "Chicken Noodles": "assets/Noodles/WhatsApp Image 2026-11-23 at 10.50.03.jpeg",
  "Seafood Noodles":
    "assets/Noodles/WhatsApp Image 2026-11-23 at 10.50.03 (1).jpeg",
  "Egg Noodles": "assets/Noodles/WhatsApp Image 2026-11-23 at 10.50.04.jpeg",
  "Vegetable Noodles":
    "assets/Noodles/WhatsApp Image 2026-11-23 at 10.50.03 (2).jpeg",
  "Mixed Noodles":
    "assets/Noodles/WhatsApp Image 2026-11-23 at 10.50.04 (2).jpeg",
  "Fish Rolls": "assets/Short eats/WhatsApp Image 2026-11-23 at 10.52.18 (1).jpeg",
  "Fish Patties": "assets/Short eats/WhatsApp Image 2026-11-23 at 10.52.18.jpeg",
  "Fish Cutlets": "assets/Short eats/cuttlet.jpg",
  "Chicken Rolls": "assets/Short eats/chicken rolls.jpg",
  "Vegetable Roti": "assets/Short eats/vegetable roti.jpg",
  "Isso Wade": "assets/Short eats/isso wade.jpg",
  "Parippu Wade": "assets/Short eats/parippu wade.jpg",
  Faluda: "assets/Beverages/WhatsApp Image 2026-11-23 at 10.52.10.jpeg",
  "Fresh Lime Juice": "assets/Beverages/lime juice.jpg",
  "Mango Juice": "assets/Beverages/mango.jpg",
  "Wood Apple Juice": "assets/Beverages/wood apple.jpg",
  "Avocado Juice": "assets/Beverages/avacado.jpg",
  "Watermelon Juice": "assets/Beverages/water melon.jpg",
  "Iced Coffee": "assets/Beverages/ice coffee.jpg",
  Milo: "assets/Beverages/milo.jpg",
  Watalappan: "assets/Dessert/WhatsApp Image 2026-11-23 at 10.53.17.jpeg",
  "Caramel Pudding": "assets/Dessert/pudding.jpg",
  "Fruit Salad": "assets/Dessert/fruit salad.jpg",
  "Ice Cream": "assets/Dessert/ice cream.jpg",
  "Curd and Treacle": "assets/Dessert/images.jpg",
  "Bibikkan": "assets/Dessert/bibikkan.jpg",
  "Kavum": "assets/Dessert/images.jpg",
};
const menuPrices = {
  "Chicken Fried Rice": "Rs. 1,000",
  "Seafood Fried Rice": "Rs. 1,350",
  "Egg Fried Rice": "Rs. 800",
  "Vegetable Fried Rice": "Rs. 750",
  "Chicken Rice and Curry": "Rs. 850",
  "Fish Rice and Curry": "Rs. 800",
  "Egg Rice and Curry": "Rs. 650",
  "Vegetable Rice and Curry": "Rs. 550",
  "Chicken Kottu": "Rs. 950",
  "Cheese Kottu": "Rs. 1,100",
  "Chicken Cheese Kottu": "Rs. 1,250",
  "Seafood Kottu": "Rs. 1,400",
  "Egg Kottu": "Rs. 750",
  "Vegetable Kottu": "Rs. 650",
  "Dolphin Kottu": "Rs. 1,200",
  "Chicken Noodles": "Rs. 950",
  "Seafood Noodles": "Rs. 1,300",
  "Egg Noodles": "Rs. 750",
  "Vegetable Noodles": "Rs. 650",
  "Mixed Noodles": "Rs. 1,100",
  "Fish Rolls": "Rs. 100",
  "Fish Patties": "Rs. 120",
  "Fish Cutlets": "Rs. 100",
  "Chicken Rolls": "Rs. 150",
  "Vegetable Roti": "Rs. 100",
  "Isso Wade": "Rs. 150",
  "Parippu Wade": "Rs. 60",
  Faluda: "Rs. 450",
  "Fresh Lime Juice": "Rs. 300",
  "Mango Juice": "Rs. 400",
  "Wood Apple Juice": "Rs. 400",
  "Avocado Juice": "Rs. 450",
  "Watermelon Juice": "Rs. 350",
  "Iced Coffee": "Rs. 400",
  Milo: "Rs. 350",
  Watalappan: "Rs. 250",
  "Caramel Pudding": "Rs. 300",
  "Fruit Salad": "Rs. 400",
  "Ice Cream": "Rs. 300",
  "Curd and Treacle": "Rs. 350",
  Bibikkan: "Rs. 200",
  Kavum: "Rs. 100",
};
const items = categories.flatMap((category) =>
  category.items.map((name) => ({
    name,
    category: category.name,
    image: menuImages[name] || placeholderImage,
    price: menuPrices[name] || "Add price",
  })),
);
const categoryNames = categories.map((category) => category.name);
let activeCategory = "All";
const filters = document.querySelector("#filters");
const grid = document.querySelector("#foodGrid");
const menuSelection = document.querySelector("#menuSelection");

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function renderMenu() {
  filters.innerHTML = ["All", ...categoryNames]
    .map(
      (category) =>
        `<button class="filter${category === activeCategory ? " active" : ""}" type="button" data-category="${escapeHTML(category)}" aria-pressed="${category === activeCategory}">${escapeHTML(category)}</button>`,
    )
    .join("");

  const visibleItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);
  menuSelection.textContent =
    activeCategory === "All"
      ? `${items.length} dishes across ${categoryNames.length} categories`
      : `${visibleItems.length} items in ${activeCategory}`;
  grid.innerHTML = visibleItems
    .map(
      (item) => `
        <article class="foodcard">
          <div class="food-image">
            <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.name)}" loading="lazy" />
          </div>
          <div class="foodbody">
            <h3>${escapeHTML(item.name)}</h3>
            <div class="foodbottom">
              <span class="price">${escapeHTML(item.price)}</span>
              <button class="order" type="button" data-item="${escapeHTML(item.name)}" data-price="${escapeHTML(item.price)}" aria-label="Order ${escapeHTML(item.name)} for ${escapeHTML(item.price)} on WhatsApp">Order Now ↗</button>
            </div>
          </div>
        </article>`,
    )
    .join("");
  grid.querySelectorAll("img").forEach((image) => {
    image.tabIndex = 0;
    image.addEventListener(
      "error",
      () => {
        image.src = placeholderImage;
      },
      { once: true },
    );
  });
}

function openWhatsApp(message) {
  window.open(
    `https://wa.me/${RESTAURANT.whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderMenu();
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-item]");
  if (button) {
    openWhatsApp(
      `Hello Dini Food House! I would like to order: ${button.dataset.item} for ${button.dataset.price}. Please confirm availability.`,
    );
  }
});

document.querySelector("#offerOrder").addEventListener("click", () => {
  openWhatsApp(
    "Hello Dini Food House! I would like to order the special offer: Seafood Rice Pack (suitable for 5 people) for Rs. 2,500 with ONE FREE WATALAPPAN!",
  );
});

document.querySelector("#contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  openWhatsApp(
    `Hello Dini Food House! My name is ${document.querySelector("#customerName").value}. ${document.querySelector("#customerMessage").value}`,
  );
});

document.querySelector("#floating").addEventListener("click", (event) => {
  event.preventDefault();
  openWhatsApp("Hello Dini Food House! I'd like to place an order.");
});

document.querySelector("#phone").textContent = RESTAURANT.phoneNumber;
document.querySelector("#address").textContent = RESTAURANT.address;
document.querySelector("#email").textContent = RESTAURANT.email;
document.querySelector("#footerAddress").textContent = RESTAURANT.address;
document.querySelector("#footerEmail").textContent = RESTAURANT.email;
document.querySelector("#footerPhone").textContent = RESTAURANT.phoneNumber;
document.querySelector("#year").textContent = new Date().getFullYear();

const hamburger = document.querySelector("#hamb");
const links = document.querySelector("#links");
hamburger.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", String(isOpen));
  hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});
links.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    links.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Open menu");
  }),
);

let galleryIndex = 0;
const track = document.querySelector("#track");
function slideGallery(direction) {
  const visibleCount =
    window.innerWidth < 650 ? 1 : window.innerWidth < 900 ? 2 : 3;
  const maxIndex = Math.max(0, track.children.length - visibleCount);
  galleryIndex = Math.max(0, Math.min(maxIndex, galleryIndex + direction));
  const cardWidth = track.children[0].getBoundingClientRect().width + 18;
  track.style.transform = `translateX(${-galleryIndex * cardWidth}px)`;
}
document
  .querySelector("#prev")
  .addEventListener("click", () => slideGallery(-1));
document
  .querySelector("#next")
  .addEventListener("click", () => slideGallery(1));

const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector(".lightbox-image");
const lightboxCaption = lightbox.querySelector(".lightbox-caption");
let lightboxImages = [];
let lightboxIndex = 0;
let previousFocus = null;
document
  .querySelectorAll("img:not(.lightbox-image)")
  .forEach((image) => (image.tabIndex = 0));

function showLightboxImage() {
  const image = lightboxImages[lightboxIndex];
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = image.alt;
}

function openLightbox(image) {
  lightboxImages = [...document.querySelectorAll("img:not(.lightbox-image)")];
  lightboxIndex = lightboxImages.indexOf(image);
  previousFocus = image;
  showLightboxImage();
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  lightbox.querySelector(".lightbox-close").focus();
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  if (previousFocus) previousFocus.focus();
}

function moveLightbox(direction) {
  lightboxIndex =
    (lightboxIndex + direction + lightboxImages.length) % lightboxImages.length;
  showLightboxImage();
}

document.addEventListener("click", (event) => {
  const image = event.target.closest("img:not(.lightbox-image)");
  if (!image) return;
  event.preventDefault();
  openLightbox(image);
});
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
lightbox
  .querySelector(".lightbox-close")
  .addEventListener("click", closeLightbox);
lightbox
  .querySelector(".lightbox-prev")
  .addEventListener("click", () => moveLightbox(-1));
lightbox
  .querySelector(".lightbox-next")
  .addEventListener("click", () => moveLightbox(1));
document.addEventListener("keydown", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!lightbox.classList.contains("open")) {
    const image = target && target.closest("img:not(.lightbox-image)");
    if (image && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openLightbox(image);
    }
    return;
  }
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") moveLightbox(-1);
  if (event.key === "ArrowRight") moveLightbox(1);
});

renderMenu();
