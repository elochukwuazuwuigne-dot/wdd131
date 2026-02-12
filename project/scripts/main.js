// === main.js ===

// === Footer date ===
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;
});

// === Destination Data ===
const destinations = [
  // === Luxury ===
  { id: 1, name: "Dubai, UAE", category: "Luxury", description: "City of luxury, innovation, and tall skyscrapers.", image: "images/dubai1.png", title: "Dubai Skyline at Night" },
  { id: 2, name: "Dubai Marina", category: "Luxury", description: "A modern district with amazing waterfront views and nightlife.", image: "images/dubai2.png", title: "Dubai Marina Waterfront" },
  { id: 3, name: "Dubai Creek", category: "Luxury", description: "A historic part of Dubai showing the blend of tradition and modernity.", image: "images/dubai3.png", title: "Dubai Creek at Sunset" },
  { id: 4, name: "Burj Khalifa Area", category: "Luxury", description: "The tallest building in the world surrounded by modern landmarks.", image: "images/dubai4.png", title: "Burj Khalifa Skyline" },

  // === Flashy ===
  { id: 5, name: "London, UK", category: "Flashy", description: "A modern European hub with history and bright lights.", image: "images/london1.png", title: "London Night Skyline" },
  { id: 6, name: "New York City, USA", category: "Flashy", description: "The city that never sleeps, full of light and life.", image: "images/newyork1.png", title: "New York City Skyline" },
  { id: 7, name: "New York City, USA", category: "Flashy", description: "A closer look at Manhattan's cityscape and lights.", image: "images/newyork3.png", title: "Manhattan Aerial View" },
  { id: 8, name: "Times Square, USA", category: "Flashy", description: "A dazzling hotspot of screens, shops, and energy.", image: "images/timesquare.jpg", title: "Times Square at Night" },
  { id: 9, name: "Times Square, USA", category: "Flashy", description: "The colorful street view of New York's famous Times Square.", image: "images/timessqaure.png", title: "Times Square Street View" },

  // === Cultural ===
  { id: 10, name: "Tokyo, Japan", category: "Cultural", description: "A blend of modern life and ancient temples.", image: "images/japan2.png", title: "Tokyo Modern District" },
  { id: 11, name: "Tokyo, Japan", category: "Cultural", description: "Peaceful temples surrounded by cherry blossoms.", image: "images/japan5.jpg", title: "Tokyo Temple Garden" },
  { id: 12, name: "Tokyo, Japan", category: "Cultural", description: "Old meets new — streets of Tokyo lit with neon.", image: "images/japan4.jpg", title: "Tokyo Night Street" },
  { id: 13, name: "Bangkok, Thailand", category: "Cultural", description: "Famous for golden temples and street markets.", image: "images/thailand1.png", title: "Bangkok Golden Temple" },
  { id: 14, name: "Beijing, China", category: "Cultural", description: "Home to the Forbidden City and the Great Wall.", image: "images/japan3.jpg", title: "Great Wall of China" },

  // === Popular ===
  { id: 15, name: "Paris, France", category: "Popular", description: "City of love and the iconic Eiffel Tower.", image: "images/paris.png", title: "Eiffel Tower, Paris" },
  { id: 16, name: "Paris, France", category: "Popular", description: "Romantic sunset over the city of Paris.", image: "images/paris1.png", title: "Paris Sunset View" },
  { id: 17, name: "London Bridge, UK", category: "Popular", description: "One of the most recognized bridges in the world.", image: "images/london2.png", title: "London Bridge Daylight" },
  { id: 18, name: "London Bridge, UK", category: "Popular", description: "Night lights reflecting off the River Thames.", image: "images/london5.png", title: "London Bridge at Night" },

  // === Religious & Historical ===
  { id: 19, name: "Aba Nigeria Temple", category: "Religious", description: "A sacred landmark in West Africa.", image: "images/temple6.jpg", title: "Aba Nigeria Temple" },
  { id: 20, name: "Manti Utah Temple", category: "Religious", description: "A historic temple surrounded by mountains.", image: "images/temple20.jpg", title: "Manti Utah Temple" }
];

// === Local Storage Helpers ===
function loadFavorites() {
  const saved = localStorage.getItem("favorites");
  return saved ? JSON.parse(saved) : [];
}
function saveFavorites(favs) {
  localStorage.setItem("favorites", JSON.stringify(favs));
}

// === Render Function ===
function renderDestinations(list = destinations) {
  const container = document.querySelector("#destinations-list");
  if (!container) return;

  container.innerHTML = list
    .map(
      (d) => `
      <article class="card" data-id="${d.id}">
        <img src="${d.image}" alt="${d.name}" title="${d.title}" loading="lazy" width="400" height="240">
        <h3>${d.name}</h3>
        <p>${d.description}</p>
        <p><strong>Category:</strong> ${d.category}</p>
        <button class="fav-btn">⭐ Favorite</button>
      </article>
    `
    )
    .join("");

  restoreFavorites();
}

// === Restore Favorites ===
function restoreFavorites() {
  const favs = loadFavorites();
  document.querySelectorAll(".card").forEach((card) => {
    const id = Number(card.dataset.id);
    const btn = card.querySelector(".fav-btn");
    if (favs.includes(id)) btn.classList.add("active");
  });
}

// === Favorite Button Toggle ===
document.addEventListener("click", (e) => {
  if (!e.target.matches(".fav-btn")) return;
  const card = e.target.closest(".card");
  const id = Number(card.dataset.id);

  let favs = loadFavorites();
  if (favs.includes(id)) {
    favs = favs.filter((x) => x !== id);
    e.target.classList.remove("active");
  } else {
    favs.push(id);
    e.target.classList.add("active");
  }
  saveFavorites(favs);
});

// === Filter by Category ===
function filterByCategory(category) {
  if (category === "All") renderDestinations();
  else {
    const filtered = destinations.filter((d) => d.category === category);
    renderDestinations(filtered);
  }
}

// === Initialize ===
document.addEventListener("DOMContentLoaded", () => renderDestinations());
