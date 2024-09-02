let first = document.getElementById("first");
let one = document.getElementsByName("one");
let submit1 = document.getElementById("submit1");
let next1 = document.getElementById("next1");

let display = document.getElementById("display");
let score = 0;
next1.disabled = true;
submit1.onclick = function () {
  one.forEach((el) => {
    if (el.checked == false) {
      el.disabled = true;
    }
    if (el.value == "right") {
      el.parentElement.classList.add("win");
      submit1.disabled = true;
    } else if (el.value != "rigth" && el.checked == true) {
      el.parentElement.classList.add("lose");
      submit1.disabled = true;
    }
    if (el.checked == true && el.value == "right") {
      score += 1;
    }
  });
  qu.forEach((el) => {
    if (el.children[0].checked == true && el.children[0].value == "right") {
      el.appendChild(check);
    } else if (
      el.children[0].checked == true &&
      el.children[0].value != "right"
    ) {
      el.appendChild(wrong);
    }
  });
  next1.disabled = false;
};

let second = document.getElementById("second");
let two = document.getElementsByName("two");
let submit2 = document.getElementById("submit2");
let next2 = document.getElementById("next2");
next2.disabled = true;
submit2.onclick = function () {
  two.forEach((el) => {
    if (el.checked == false) {
      el.disabled = true;
    }
    if (el.value == "right") {
      el.parentElement.classList.add("win");
      submit2.disabled = true;
    } else if (el.value != "right" && el.checked == true) {
      el.parentElement.classList.add("lose");
      submit2.disabled = true;
    }
    if (el.checked == true && el.value == "right") {
      score += 1;
    }
  });
  qu.forEach((el) => {
    if (el.children[0].checked == true && el.children[0].value == "right") {
      el.appendChild(check);
    } else if (
      el.children[0].checked == true &&
      el.children[0].value != "right"
    ) {
      el.appendChild(wrong);
    }
  });
  next2.disabled = false;
};

let third = document.getElementById("third");
let three = document.getElementsByName("three");
let submit3 = document.getElementById("submit3");
let next3 = document.getElementById("next3");
next3.disabled = true;

submit3.onclick = function () {
  three.forEach((el) => {
    if (el.checked === false) {
      el.disabled = true;
    }
    if (el.value == "right") {
      el.parentElement.classList.add("win");
      submit3.disabled = true;
    } else if (el.value != "right" && el.checked == true) {
      el.parentElement.classList.add("lose");
      submit3.disabled = true;
    }
    if (el.checked == true && el.value == "right") {
      score += 1;
    }
  });
  qu.forEach((el) => {
    if (el.children[0].checked == true && el.children[0].value == "right") {
      el.appendChild(check);
    } else if (
      el.children[0].checked == true &&
      el.children[0].value != "right"
    ) {
      el.appendChild(wrong);
    }
  });
  next3.disabled = false;
};

let finale = document.getElementById("finale");
let four = document.getElementsByName("finale");
let submit4 = document.getElementById("submit4");
let next4 = document.getElementById("next4");

next4.disabled = true;

submit4.onclick = function () {
  four.forEach((el) => {
    if (el.checked == false) {
      el.disabled = true;
    }
    if (el.value == "right") {
      el.parentElement.classList.add("win");
      submit4.disabled = true;
    } else if (el.value != "right" && el.checked == true) {
      el.parentElement.classList.add("lose");
      submit4.disabled = true;
    }
    if (el.checked == true && el.value == "right") {
      score += 1;
    }
  });
  qu.forEach((el) => {
    if (el.children[0].checked == true && el.children[0].value == "right") {
      el.appendChild(check);
    } else if (
      el.children[0].checked == true &&
      el.children[0].value != "right"
    ) {
      el.appendChild(wrong);
    }
  });
  next4.disabled = false;
};
let backup = document.getElementById("back-up");
let start = document.getElementById("main-click");
start.onclick = function () {
  start.classList.add("hide");
  first.classList.add("show");
};

next1.onclick = function () {
  first.classList.remove("show");
  second.classList.add("show");
};

next2.onclick = function () {
  second.classList.remove("show");
  third.classList.add("show");
};

next3.onclick = function () {
  third.classList.remove("show");
  finale.classList.add("show");
};

next4.onclick = function () {
  finale.classList.remove("show");
  backup.classList.add("show");
  document.getElementById("scr").textContent = (score / 4) * 100 + "%";
};
let reset = document.getElementById("reset");
reset.onclick = function () {
  location.reload();
};

let qu = document.getElementsByName("qu");
qu.forEach((el) => {
  el.onclick = function () {
    el.children[0].checked = true;
  };
});
window.onselectstart = function (event) {
  event.preventDefault();
};

let check = document.createElement("span");
let i = document.createElement("i");
i.classList.add("bi");
i.classList.add("bi-check");
check.appendChild(i);

check.classList.add("text-success,ms-3,fs-1");

let wrong = document.createElement("span");
let k = document.createElement("i");
k.classList.add("bi");
k.classList.add("bi-x");
wrong.appendChild(k);
wrong.classList.add("text-danger,ms-3,fs-1");
