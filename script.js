const properties = [
  {
    city: "Delhi",
    bhk: "2 BHK",
    price: "₹45 Lakh",
image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"

  },
  {
    city: "Mumbai",
    bhk: "3 BHK",
    price: "₹1.2 Cr",
image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"

  },
  {
    city: "Noida",
    bhk: "1 BHK",
    price: "₹30 Lakh",
image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"

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

        <a class="whatsapp"
           href="https://wa.me/919876543210?text=I am interested in your property in ${p.city}"
           target="_blank">
           WhatsApp Owner
        </a>

        <a class="call" href="tel:9876543210">
           Call Owner
        </a>
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
