// Product array
const products = [
  // Provided example products
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "fc-2050", name: "Power Laces" },
  { id: "fs-1987", name: "Time Circuits" },
  { id: "ac-2000", name: "Low Voltage Reactor" },
  { id: "jj-1969", name: "Warp Equalizer" },

  // Added custom products (phones, shoes, clothes, etc.)
  { id: "ph-2026", name: "iPhone 15 Pro" },
  { id: "sm-2026", name: "Samsung Galaxy S24" },
  { id: "nk-0021", name: "Nike Air Max 2025" },
  { id: "ad-1010", name: "Adidas Ultraboost" },
  { id: "lv-3030", name: "Louis Vuitton Jacket" },
  { id: "hp-5500", name: "HP Pavilion Laptop" },
  { id: "lg-7700", name: "LG Smart TV" },
  { id: "dy-8800", name: "Dyson V15 Vacuum Cleaner" }
];

// Populate select options dynamically
const productSelect = document.getElementById("productName");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id; // value attribute (required by rubric)
  option.textContent = product.name; // visible name (required by rubric)
  productSelect.appendChild(option);
});
