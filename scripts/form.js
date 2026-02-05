// Product array
const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "fc-2050", name: "Power Laces" },
  { id: "fs-1987", name: "Time Circuits" },
  { id: "ac-2000", name: "Low Voltage Reactor" },
  { id: "jj-1969", name: "Warp Equalizer" },
  { id: "ph-2026", name: "iPhone 15 Pro" },
  { id: "sm-2026", name: "Samsung Galaxy S24" },
  { id: "nk-0021", name: "Nike Air Max 2025" },
  { id: "ad-1010", name: "Adidas Ultraboost" },
  { id: "lv-3030", name: "Louis Vuitton Jacket" },
  { id: "hp-5500", name: "HP Pavilion Laptop" },
  { id: "lg-7700", name: "LG Smart TV" },
  { id: "dy-8800", name: "Dyson V15 Vacuum Cleaner" }
];

// Wait for DOM to load before manipulating elements
document.addEventListener("DOMContentLoaded", () => {
  // Populate select dropdown dynamically
  const productSelect = document.getElementById("productName");
  if (productSelect) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  }

  // Display last modified date
  const lastModifiedSpan = document.getElementById("lastModified");
  if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
  }
});
