// items
const menu = [
    {
        id: 1,
        title: "Smoke burger",
        category: "breakfast",
        price: 249.99,
        img: "https://images.unsplash.com/photo-1637637187692-9736fe7b7973?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",

        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat autem et commodi veritatis saepe quos nostrum quis minima ipsa vitae.",
    },

    {
        id: 2,
        title: "Stir fry bowl",
        category: "lunch",
        price: 320.99,
        img: "https://images.unsplash.com/photo-1638329313670-0ef6cf95a3ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat autem et commodi veritatis saepe quos nostrum quis minima ipsa vitae.",
    },

    {
        id: 3,
        title: "Ice-cream",
        category: "shakes",
        price: 120.55,
        img: "https://images.unsplash.com/photo-1638210390620-f5dee405dd3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat autem et commodi veritatis saepe quos nostrum quis minima ipsa vitae.",
    },

    {
        id: 4,
        title: "Chili con carne",
        category: "breakfast",
        price: 150.55,
        img: "https://images.unsplash.com/photo-1638329389022-daef2efb71b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat autem et commodi veritatis saepe quos nostrum quis minima ipsa vitae.",
    },

    {
        id: 5,
        title: "Buddha bowl",
        category: "lunch",
        price: 134.55,
        img: "https://images.unsplash.com/photo-1505576633757-0ac1084af824?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHVuY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat autem et commodi veritatis saepe quos nostrum quis minima ipsa vitae.",
    },

    {
        id: 6,
        title: "Coffee Drink",
        category: "shakes",
        price: 75.55,
        img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwY3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat autem et commodi veritatis saepe quos nostrum quis minima ipsa vitae.",
    },

    {
        id: 7,
        title: "Fried egg",
        category: "breakfast",
        price: 198.99,
        img: "https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWtmYXN0JTIwZm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",

        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat autem et commodi veritatis saepe quos nostrum quis minima ipsa vitae.",
    },

    {
        id: 8,
        title: "Fish noodles",
        category: "lunch",
        price: 120.55,
        img: "https://images.unsplash.com/photo-1585417791023-a5a6164b2646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGx1bmNoJTIwZm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",

        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat autem et commodi veritatis saepe quos nostrum quis minima ipsa vitae.",
    },

    {
        id: 9,
        title: "Chocolate milkshake oreo milkshake",
        category: "shakes",
        price: 249.55,
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat autem et commodi veritatis saepe quos nostrum quis minima ipsa vitae.",
    },

    {
        id: 10,
        title: "Pancake",
        category: "breakfast",
        price: 234.55,
        img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyZWFrZmFzdCUyMGZvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",

        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat autem et commodi veritatis saepe quos nostrum quis minima ipsa vitae.",
    },
];


const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn")

//load items
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
});


// filter items
filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if (category === 'all') {
            displayMenuItems(menu);
        }
        else {
            displayMenuItems(menuCategory);
        }
    });
});




function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item">
                <div class="hide">
                    <button class="check"><i class="fas fa-shopping-cart"></i>Order Now</button>
                </div>
                <img src=${item.img} alt=${item.title} class="photo">
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">LKR ${item.price} + tax</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
                </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu
}

