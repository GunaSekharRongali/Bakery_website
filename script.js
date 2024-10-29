const bakeryItems = [
{
    title: "Donuts",
    description: "Delicious and colorful donuts.",
    price: 5,
    rating: 4.5, // Added rating
    category: "Pastry", // Added category
    image: "https://media.istockphoto.com/id/1200046925/photo/set-of-various-colorful-donuts-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=3BAy7p17aB_aLq4VEaaTp5VeXEME77B_tfIn-ep9nek="
},
{
    title: "Fresh Croissant",
    description: "Warm and flaky croissants.",
    price: 3,
    rating: 4.7, // Added rating
    category: "Pastry", // Added category
    image: "https://media.istockphoto.com/id/629455902/photo/french-boulangerie-fresh-croissant-for-sale.jpg?s=612x612&w=0&k=20&c=ImE0C1nh-Nq_FROYD3IcbeC1GrvA2RUH1zzbKPOY2Lg="
},
{
    title: "Cookies",
    description: "Freshly baked cookies.",
    price: 2,
    rating: 4.3, // Added rating
    category: "Cookies", // Added category
    image: "https://media.istockphoto.com/id/177336896/photo/cookies.jpg?s=612x612&w=0&k=20&c=h7YofxM8EzGy-QZp2Vk-EMkzMDsgEEpP5bYiFm92gfk="
},
{
    title: "Cup Cakes",
    description: "Delicious and colorful cupcakes.",
    price: 4,
    rating: 4.6, // Added rating
    category: "Cupcakes", // Added category
    image: "https://media.istockphoto.com/id/1182508676/photo/colorful-cupcakes-with-candy-sprinkles.jpg?s=612x612&w=0&k=20&c=_l6GXUayelBJbLV-BhJRSn7B_Nmwe7CaMPSdhtH5Tt4="
},
{
    title: "French Bread",
    description: "Freshly baked French bread.",
    price: 3,
    rating: 4.4, // Added rating
    category: "Bread", // Added category
    image: "https://media.istockphoto.com/id/1220488943/photo/french-bread-in-brazil.jpg?s=612x612&w=0&k=20&c=bDZSOKsnA52g0L-Uv3g1Xu3xMvJVk-24ddL_bzA25y4="
},
{
    title: "Cherry Cake",
    description: "Delicious cherry cake.",
    price: 5,
    rating: 4.8, // Added rating
    category: "Cake", // Added category
    image: "https://media.istockphoto.com/id/653290820/photo/cake.jpg?s=612x612&w=0&k=20&c=R24Ji4ub_m6llQNSSBgnaPA6jf3EUzRTc6P4BP3-CXk="
},
{
    title: "Brown Cup Cakes",
    description: "Delicious brown cupcakes.",
    price: 4,
    rating: 4.5, // Added rating
    category: "Cupcakes", // Added category
    image: "http://www.yourcupofcake.com/wp-content/uploads/2013/07/Chocolate-Brown-Sugar-Cupcake.jpg"
},
{
    title: "Berries Cup Cake",
    description: "Delicious berries cupcakes.",
    price: 4,
    rating: 4.6, // Added rating
    category: "Cupcakes", // Added category
    image: "https://tse4.mm.bing.net/th?id=OIP.unY2c5J9ORNTgCzLBisJ8gHaE8&pid=Api&P=0&h=220"
},
{
    title: "Cookies",
    description: "Delicious cookies.",
    price: 2,
    rating: 4.7, // Added rating
    category: "Cookies", // Added category
    image: "https://cdn.pixabay.com/photo/2024/04/01/06/57/cookies-8668140_640.jpg"
},
{
    title: "Blueberry muffins",
    description: "Delicious blueberry muffins.",
    price: 2,
    rating: 4.7, // Added rating
    category: "Muffins", // Added category
    image: "https://cdn.pixabay.com/photo/2017/03/12/10/29/blueberry-muffins-2136749_640.jpg"
},
{
    title: "Bun loaf",
    description: "Delicious bun loaf.",
    price: 1,
    rating: 4.1, // Added rating
    category: "Bun", // Added category
    image: "https://cdn.pixabay.com/photo/2018/08/18/10/36/roll-3614535_640.jpg"
},
{
    title: "Bread croissant",
    description: "Delicious bread croissant.",
    price: 5,
    rating: 4.5, // Added rating
    category: "Croissants", // Added category
    image: "https://cdn.pixabay.com/photo/2016/03/27/21/59/bread-1284438_640.jpg"
},
{
    title: "Pastry desert",
    description: "Delicious pastry desert.",
    price: 5,
    rating: 4.5, // Added rating
    category: "Desert", // Added category
    image: "https://cdn.pixabay.com/photo/2021/11/09/07/21/pastry-6780834_640.jpg"
},
{
    title: "Baked breads",
    description: "Delicious baked breads.",
    price: 5,
    rating: 4.5, // Added rating
    category: "Bread", // Added category
    image: "https://cdn.pixabay.com/photo/2017/05/15/01/18/baked-2313462_1280.jpg"
},
{
    title: "Burger bun",
    description: "Delicious burger bun.",
    price: 6,
    rating: 4.8, // Added rating
    category: "Burger", // Added category
    image: "https://images.unsplash.com/photo-1541796512681-800c76e2657e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1bnxlbnwwfHwwfHx8MA%3D%3D"
}
];


document.addEventListener('DOMContentLoaded', function () {
    const elementsToAnimate = document.querySelectorAll('.section-heading, .section-description');
    
    function checkIfInView() {
        elementsToAnimate.forEach(el => {
            const rect = el.getBoundingClientRect();
            const inView = rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 50;
            
            if (inView) {
                el.classList.add('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkIfInView);
    checkIfInView(); // Initial check on load
});


    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const bannerHeight = document.querySelector('#banner').offsetHeight;

        if (window.scrollY > bannerHeight) {
            navbar.classList.add('navbar-background');
        } else {
            navbar.classList.remove('navbar-background');
        }
    });



    const bakeryItemsContainer = document.getElementById('bakery-items-container');

    bakeryItems.forEach(item => {
        const itemCol = document.createElement('div');
        itemCol.classList.add('col-md-4', 'mb-4', "container");

        itemCol.innerHTML = `
    <div class="card mb-4 shadow-sm">
        <img src="${item.image}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
            <h5 class="card-title fs-4">${item.title}</h5>
            <p class="card-text fs-5">${item.description}</p>
            <p class="card-text fs-4"><strong>Price: $${item.price}</strong></p>
            <p class="card-text">Rating: <span class="text-warning">${'★'.repeat(Math.floor(item.rating))}${item.rating % 1 ? '☆' : ''}</span> (${item.rating})</p>
            <p class="card-text fs-6"><small class="text-muted">Category: ${item.category}</small></p>
            <button class="btn btn-primary" onclick="logClick('Add to cart button clicked')">Add to Cart</button>
        </div>
    </div>
`;


        bakeryItemsContainer.appendChild(itemCol);
    });

// Function to check if the card is in the lower 30% of the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    
    return rect.top <= viewportHeight * 0.7 && rect.bottom >= 0;
}

// Function to handle scroll event
function handleScroll() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (isElementInViewport(card)) {
            card.classList.add('visible'); // Add visible class when in view
        }
    });
}

// Initial check to add visible class to cards in viewport
handleScroll();

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Function to log clicks
function logClick(message) {
    console.log(message);
}

function showOnMap(address) {
    const iframe = document.querySelector("#bakery-locator .map-container iframe");
    iframe.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyD-MOCKKEY12345&q=${encodeURIComponent(address)}`;
}