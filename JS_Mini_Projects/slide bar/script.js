const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");


toggleBtn.addEventListener('click', function () {
    //long method
    /*
    if (sidebar.classList.contains("show-sidebar")) {
        sidebar.classList.remove("show-sidebar");
    }
    else {
        sidebar.classList.add("show-sidebar");
    }*/

    //short method
    sidebar.classList.toggle("show-sidebar");
})


closeBtn.addEventListener('click', function () {
    sidebar.classList.remove("show-sidebar");
})