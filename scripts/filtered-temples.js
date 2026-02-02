// ✅ Temple Data
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/temple4.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/temple2.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/temple3.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/temple5.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/temple6.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/temple7.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/temple8.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, March, 27",
    area: 60000,
    imageUrl: "images/temple9.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 10000,
    imageUrl: "images/temple10.jpg"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 12000,
    imageUrl: "images/temple11.jpg"
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1999, April, 15",
    area: 15000,
    imageUrl: "images/temple12.jpg"
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii, United States",
    dedicated: "1919, November, 27",
    area: 120000,
    imageUrl: "images/temple13.jpg"
  },
  {
    templeName: "Lisbon Portugal",
    location: "Lisbon, Portugal",
    dedicated: "2019, July, 15",
    area: 9500,
    imageUrl: "images/temple14.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 12000,
    imageUrl: "images/temple15.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
    imageUrl: "images/temple16.jpg"
  },
  {
    templeName: "Frankfurt Germany",
    location: "Frankfurt, Germany",
    dedicated: "1987, August, 28",
    area: 29646,
    imageUrl: "images/temple17.jpg"
  }
];


// ✅ Function to Display Temples
function displayTemples(filteredList = temples) {
  const container = document.querySelector("#templeAlbum");
  container.innerHTML = ""; // clear any previous content

  filteredList.forEach((temple) => {
    const card = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <strong>${temple.templeName}</strong><br>
      Location: ${temple.location}<br>
      Dedicated: ${temple.dedicated}<br>
      Area: ${temple.area.toLocaleString()} sq ft
    `;

    card.appendChild(img);
    card.appendChild(caption);
    container.appendChild(card);
  });
}

// ✅ Filter Logic
document.querySelectorAll("[data-filter]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const filter = link.dataset.filter;
    let filteredTemples = temples;

    switch (filter) {
      case "old":
        filteredTemples = temples.filter(t => parseInt(t.dedicated) < 1900);
        break;
      case "new":
        filteredTemples = temples.filter(t => parseInt(t.dedicated) > 2000);
        break;
      case "large":
        filteredTemples = temples.filter(t => t.area > 90000);
        break;
      case "small":
        filteredTemples = temples.filter(t => t.area < 10000);
        break;
      default:
        filteredTemples = temples;
    }

    displayTemples(filteredTemples);
  });
});

// ✅ Footer Year & Last Modified
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// ✅ Hamburger Menu
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.textContent = navigation.classList.contains("open") ? "✖" : "☰";
});

// ✅ Initial Load
displayTemples();
