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

function loadPets() {
    console.log("Loading pets...");
    const petContainer = document.getElementById("all-pets");
    pets.forEach(pet => {
        const petDiv = document.createElement("div");
        petDiv.className = "pet";
        petDiv.innerHTML = `
            <img src="${pet.img}" alt="${pet.name}">
            <h3>${pet.name}</h3>
            <p>Type: ${pet.type}</p>
            <p>Age: ${pet.age} years</p>
            <button class="adopt-btn" onclick="adoptPet()">Adopt</button>
        `;
        petContainer.appendChild(petDiv);
        $('input[name="pet-type"]').on("change", function () {
            filterPets();

        });
    });
}

function filterPets() {
    const selectedTypes = $('input[name="pet-type"]:checked').map(function () {
        return this.value;
    }).get();

    $('.pet').each(function () {
        const petType = $(this).find('p').first().text().replace('Type: ', '');
        if (selectedTypes.includes(petType)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}
$(document).ready(loadPets);