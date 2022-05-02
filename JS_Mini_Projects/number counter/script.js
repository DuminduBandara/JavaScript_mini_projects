let count = 0;

let value = document.querySelector("#count-el");
let buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const style = e.currentTarget.classList;
        if (style.contains("decrease")) {
            count--;
        }
        else if (style.contains("increase")) {
            count++;
        }
        else if (style.contains("reset")) {
            count = 0;
        }

        if (count > 0) {
            value.style.color = 'green';
        }
        else if (count < 0) {
            value.style.color = '#ff0000';
        }
        else if (count == 0) {
            value.style.color = '#0000ff';
        }
        value.textContent = count;
    });
});
