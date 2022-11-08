// const Car = require("./scripts/car");

const showOrHideDropdown = (id) => {
  if (id.classList.contains("hidden")) {
    id.classList.replace("hidden", "block");
  } else if (id.classList.contains("block")) {
    id.classList.replace("block", "hidden");
  }
};

const showDrop = (id) => {
  const dropdown = document.getElementById(id);
  showOrHideDropdown(dropdown);
};

const changeText = (point, target, close) => {
  const driverLen = document.querySelectorAll(point).length;
  const selectDriver = document.querySelectorAll(point);
  const selectedDriver = document.querySelector(target);
  for (let i = 0; i < driverLen; i++) {
    selectDriver[i].addEventListener("click", () => {
      selectedDriver.innerHTML = selectDriver[i].innerHTML;
      console.log(selectDriver[i].classList);
      showOrHideDropdown(document.getElementById(close));
    });
  }
};

changeText(".driver", "#drop-driver", "dropdown-driver");
changeText(".time", "#drop-time", "dropdown-time");

console.log(document.querySelector(".time").innerHTML);

const onLoad = () => {
  fetch("http://localhost:2000/cars")
    .then((response) => response.json())
    .then((responseJSON) => {
      const container = document.getElementById("list-data");

      const Car = fuck();
      responseJSON.forEach((data) => {
        console.log(Car);

        // name.innerText = data.name;
        // age.innerText = data.age;

        // child.append(name);
        // child.append(age);

        // console.log(child);
        // container.append(child);
      });
    });
};

onLoad();
