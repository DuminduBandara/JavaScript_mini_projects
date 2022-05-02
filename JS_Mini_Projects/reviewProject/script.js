
// local reviews data
const reviews = [

    {
        id: 1,
        name: "Martin Smith",
        job: "Web Development",
        img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam neque perferendis nihil quas quia autem omnis magni repellendus asperiores iusto maiores porro soluta, doloribus officia quaerat enim saepe itaque libero nisi! Molestias enim delectus incidunt. Eius aut dolorem eaque id repellendus maiores iste fugiat quibusdam aliquam culpa. At, accusamus odit!",
    },

    {
        id: 2,
        name: "Juliya Carollin",
        job: "Frontend Developer",
        img: "https://images.unsplash.com/photo-1539800318544-d10270da6e54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam neque perferendis nihil quas quia autem omnis magni repellendus asperiores iusto maiores porro soluta, doloribus officia quaerat enim saepe itaque libero nisi! Molestias enim delectus incidunt. Eius aut dolorem eaque id repellendus maiores iste fugiat quibusdam aliquam culpa. At, accusamus odit!",
    },

    {
        id: 3,
        name: "Roshan Dev",
        job: "Full Stake Developer",
        img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam neque perferendis nihil quas quia autem omnis magni repellendus asperiores iusto maiores porro soluta, doloribus officia quaerat enim saepe itaque libero nisi! Molestias enim delectus incidunt. Eius aut dolorem eaque id repellendus maiores iste fugiat quibusdam aliquam culpa. At, accusamus odit!",
    },

    {
        id: 4,
        name: "Jecica Smith",
        job: "UX Designer",
        img: "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam neque perferendis nihil quas quia autem omnis magni repellendus asperiores iusto maiores porro soluta, doloribus officia quaerat enim saepe itaque libero nisi! Molestias enim delectus incidunt. Eius aut dolorem eaque id repellendus maiores iste fugiat quibusdam aliquam culpa. At, accusamus odit!",
    },
];


// select items

const img = document.getElementById("avater");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");


const prvBtn = document.querySelector(".prvBtn");
const nextBtn = document.querySelector(".nextBtn");
const randomBtn = document.querySelector(".randomBtn");

// set starting item
let currrentItem = 0;

// local intial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currrentItem)
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person
nextBtn.addEventListener("click", function () {
    currrentItem++;
    if (currrentItem > reviews.length-1) {
        currrentItem = 0;
    }
    showPerson(currrentItem);
});

prvBtn.addEventListener("click", function () {
    currrentItem--;
    if (currrentItem < 0) {
        currrentItem = reviews.length-1;
    }
    showPerson(currrentItem);
});

randomBtn.addEventListener("click", function () {
    currrentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currrentItem);
})