const pets = [
    {
        name: "Buddy",
        type: "Dog",
        age: 3,
        img: "img/dogs/dog01.jpg"
    },
    {
        name: "Bobby",
        type: "Dog",
        age: 3,
        img: "img/dogs/dog02.jpg"
    },
    {
        name: "Whiskers",
        type: "Cat",
        age: 2,
        img: "img/cats/cat01.jpg"
    },
    {
        name: "Mittens",
        type: "Cat",
        age: 2,
        img: "img/cats/cat02.jpg"
    },
    {
        name: "Charlie",
        type: "Bird",
        age: 4,
        img: "img/birds/bird01.jpg"
    },
    {
        name: "Polly",
        type: "Bird",
        age: 4,
        img: "img/birds/bird02.jpg"
    },
    {
        name: "Nibbles",
        type: "Capybara",
        age: 5,
        img: "img/capybaras/capybara01.jpg"
    },
    {
        name: "Coco",
        type: "Capybara",
        age: 5,
        img: "img/capybaras/capybara02.jpg"
    }
];

var ap = document.getElementById("all-pets")

for (let i = 0; i < pets.length; i++) {
    var aPet = ap.appendChild(document.createElement("div"));
    aPet.className = "pet";
    aPet.innerHTML = `
    <img src="${pets[i].img}" alt="${pets[i].name}">
    <h3>${pets[i].name}</h3>
    <p>Type: ${pets[i].type}</p>
    <p>Age: ${pets[i].age} years</p>
    <button onclick="adoptPet()">Adopt Now</button>
`;
}