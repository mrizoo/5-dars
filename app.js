let input = document.querySelector(".forminput");
let form = document.querySelector(".form");
let main = document.querySelector(".main__list");
let remov = document.getElementById("removeAll");

let todo = JSON.parse(localStorage.getItem("todo"))
  ? JSON.parse(localStorage.getItem("todo"))
  : [];

function validate(value) {
  if (!value.value.trim()) {
    alert("todo bolishi shart");
    return false;
  }
  if (value.value.length < 5) {
    alert("beshta belgidan kam bo'lmasin");
    return false;
  }
  return true;
}

function clear(input) {
  input.value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  todo.forEach((el) => {
    console.log(el);
    return (main.innerHTML += `
    <div class="main__pages">
    <div class="checkbox-wrapper-12">
        <div class="cbx">
            <input checked="" type="checkbox" id="cbx-12">
            <label for="cbx-12"></label>
            <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
                <path d="M2 8.36364L6.23077 12L13 2"></path>
            </svg>
        </div>

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="goo-12">
                    <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic">
                    </feGaussianBlur>
                    <feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                        mode="matrix" in="blur"></feColorMatrix>
                    <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
                </filter>
            </defs>
        </svg>
    </div>
    <p>${el}</p>
</div>
    `);
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validate(input)) {
    todo.push(input.value);
    localStorage.setItem("todo", JSON.stringify(todo));
    main.innerHTML += `
    <div class="main__pages">
    <div class="checkbox-wrapper-12">
        <div class="cbx">
            <input checked="" type="checkbox" id="cbx-12">
            <label for="cbx-12"></label>
            <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
                <path d="M2 8.36364L6.23077 12L13 2"></path>
            </svg>
        </div>

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="goo-12">
                    <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic">
                    </feGaussianBlur>
                    <feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                        mode="matrix" in="blur"></feColorMatrix>
                    <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
                </filter>
            </defs>
        </svg>
    </div>
    <p>${input.value}</p>
</div>
    `;
  }
  clear(input);
});

remov.addEventListener("click", function () {
  main.innerHTML = "";
  localStorage.clear();
});
