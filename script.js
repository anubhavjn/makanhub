const properties = [
  {
    city: "Delhi",
    bhk: "2 BHK",
    price: "₹45 Lakh",
    image: "https://via.placeholder.com/400x250"
  },
  {
    city: "Mumbai",
    bhk: "3 BHK",
    price: "₹1.2 Cr",
    image: "https://via.placeholder.com/400x250"
  },
  {
    city: "Noida",
    bhk: "1 BHK",
    price: "₹30 Lakh",
    image: "https://via.placeholder.com/400x250"
  }
];

const list = document.querySelector(".properties");

function showProperties(data) {
  list.innerHTML = "";
  data.forEach(p => {
    list.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.bhk} Apartment</h3>
        <p>${p.city}</p>
        <p class="price">${p.price}</p>
        <button>Contact Owner</button>
      </div>
    `;
  });
}

function searchProperty() {
  const city = document.getElementById("city").value.toLowerCase();
  const bhk = document.getElementById("bhk").value;

  const result = properties.filter(p =>
    (city === "" || p.city.toLowerCase().includes(city)) &&
    (bhk === "" || p.bhk === bhk)
  );

  showProperties(result);
}

showProperties(properties);
