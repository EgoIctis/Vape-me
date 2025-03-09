document.addEventListener("DOMContentLoaded", function () {
    // Lista produktów
    const products = [
        {
            name: "Bang 18 000 Puffs - Mint Ice",
            price: "79.35 PLN",
            image: "images/bang-18000-mint-ice.jpg",
            description: "Chłodząca mięta z intensywnym smakiem."
        },
        {
            name: "Bang 20 000 Puffs - Kiwi Passionfruit Guava",
            price: "90.85 PLN",
            image: "images/bang-20000-kiwi-passionfruit-guava.jpg",
            description: "Owocowa mieszanka kiwi, marakui i guawy."
        },
        {
            name: "Vozol Vista 20 000 Puffs - Grape Ice",
            price: "97.75 PLN",
            image: "images/vozol-vista-grape-ice.jpg",
            description: "Orzeźwiający winogronowy smak z nutą chłodu."
        },
        {
            name: "Vozol 40 000 Puffs - Watermelon Mint",
            price: "148.35 PLN",
            image: "images/vozol-40000-watermelon-mint.jpg",
            description: "Klasyczna arbuzowo-miętowa kombinacja."
        }
    ];

    // Pobranie kontenera produktów
    const productContainer = document.querySelector(".product-list");

    // Generowanie kart produktów
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span class="price">${product.price}</span>
            <button class="add-to-cart">Dodaj do koszyka</button>
        `;
        productContainer.appendChild(productCard);
    });
});
