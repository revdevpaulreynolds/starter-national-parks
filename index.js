// const divs = document.querySelectorAll("div > .area-display");

// for (let element of divs.values()) {
//     console.log(element.innerText)
// }

const descriptions = document.querySelectorAll(".description-display");


for (let desc of descriptions.values()) {
    let content = desc.innerText;
    if (content.length > 250) {
        content=content.slice(0, 250);
        content = content + '<a href="#">...</a>';
    }
    desc.innerHTML = content;
}

const ratings = document.querySelectorAll(".rating-display .value");

// for (let rating of ratings) {
//     let ratingValue = parseFloat(rating.innerText);
//     if (ratingValue > 4.7) {
//         rating.classList.add("high-rating");
//         rating.classList.remove("value");
//     }
// }

const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add("header-statement");
const header = document.querySelector("header");
header.appendChild(newElement);

const main = document.querySelector("main");
const park = main.querySelector(".park-display");

// const firstBtn = document.querySelector("button");
// firstBtn.addEventListener("click", (event) => {
//     console.log(event.target);
// });

const allBtns = document.querySelectorAll(".rate-button");
allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const park = event.target.parentNode;
        park.style.backgroundColor="#c8e6c9";
    });
});

const sortByName = ((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
        return -1;
    } else if (parkBName < parkAName) {
        return 1;
    } else {
        return 0;
    }
});

const nameSorter = document.querySelector("#name-sorter");
nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
    const main = document.querySelector("main");
    const parksList = main.querySelectorAll(".park-display");
    main.innerHTML = "";
    const parksArray = Array.from(parksList);
    parksArray.sort(sortByName);
    parksArray.forEach((park) => {
        main.appendChild(park);
    })
    
    
});

const sortByRating = (parkA, parkB) => {
    console.log(parkA)
    const parkARating = parseFloat(parkA.querySelector(".rating-display > .value").innerText);
    const parkBRating = parseFloat(parkB.querySelector(".rating-display > .value").innerText);
    return parkBRating - parkARating;
};

const ratingSorterClickHandler = ((event) => {
    event.preventDefault();
    const main = document.querySelector("main");
    const parksList = main.querySelectorAll(".park-display");
    main.innerHTML = "";
    const parksArray = Array.from(parksList);
    console.log(parksArray);
    parksArray.sort(sortByRating);
    console.log(parksArray);
    parksArray.forEach((park) => {
        main.appendChild(park);
    });
});

const ratingSorter = document.querySelector("#rating-sorter");
ratingSorter.addEventListener("click", ratingSorterClickHandler);
