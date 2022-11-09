class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
    console.log("created");
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <img src="${this.image}" alt="${this.manufacture}" width="160px" height="270px" class="mx-auto py-5">
<p class="text-sm font-bold">${this.manufacture} ${this.model}</p>
<p class="text-lg font-bold">Rp${this.rentPerDay}/hari</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
<p>🧑🏻‍🤝‍🧑🏾 ${this.capacity} orang</p>
<p>⚙️ ${this.transmission}</p>
<p>📅 ${this.year}</p>

`;
  }
}

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

const onFilter = () => {
  const container = document.getElementById("list-data");
  container.innerHTML = "";
  const filterVal = parseInt(document.getElementById("jumlahPenumpang").value);
  fetch("http://localhost:2000/cars")
    .then((response) => response.json())
    .then((responseJSON) => {
      responseJSON.filter((data) => {
        if (data.capacity === filterVal) {
          const child = document.createElement("div");
          const obj = new Car(data);
          child.innerHTML = obj.render();
          child.classList.add(
            "w-[333px]",
            "border-2",
            "rounded-lg",
            "space-y-3",
            "p-4"
          );
          container.append(child);
        }
      });
    });
};

const onLoad = () => {
  fetch("http://localhost:2000/cars")
    .then((response) => response.json())
    .then((responseJSON) => {
      const container = document.getElementById("list-data");
      responseJSON.forEach((data) => {
        const child = document.createElement("div");
        const obj = new Car(data);
        child.innerHTML = obj.render();
        child.classList.add(
          "w-[333px]",
          "border-2",
          "rounded-lg",
          "space-y-3",
          "p-4"
        );
        container.append(child);
      });
    });
};

onLoad();
