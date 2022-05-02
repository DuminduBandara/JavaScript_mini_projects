const modelBtn = document.querySelector(".btn");
const modelOpen = document.querySelector(".model-overlay");
const closeBtn = document.querySelector(".close-btn");
const modelClose = document.querySelector(".hero");


modelBtn.addEventListener("click", function () {
    
    if (modelOpen.classList.contains("open-model")) {
        modelOpen.classList.remove("open-model");
        modelClose.classList.remove("close-hero");
    }
    else {
        modelOpen.classList.add("open-model");
        modelClose.classList.add("close-hero");

    }

    // modelOpen.classList.toggle("open-model");
    // modelClose.classList.toggle("close-hero");
});

closeBtn.addEventListener("click", function () {
    modelOpen.classList.remove("open-model");
    modelClose.classList.remove("close-hero");
});