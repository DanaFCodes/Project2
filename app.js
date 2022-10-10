// spoonacular API
const foodApp = {};

foodApp.apiKey = "8ea4a98517084d33ba459cc3ea2249ea";
foodApp.url = " https://api.spoonacular.com/recipes/findByIngredients";

foodApp.getRecipes = function(userSelection) {
    const foodUrl = new URL(foodApp.url);

    foodUrl.search = new URLSearchParams({
        ingredients: userSelection,
        image: true,
        instructionsRequired: true,
        number: 80,
        apiKey: foodApp.apiKey
    });

    fetch(foodUrl)
        .then((apiPromise) => {
            return apiPromise.json()
        })
        .then((apiPromise) => {
            document.querySelector("#foodContainer").innerHTML = "";
            foodApp.displayFood(apiPromise);
        })
}

foodApp.displayFood = (arrayOfFood) => {

    if (arrayOfFood.length == 0) {
        alert("Please try entering a different ingredient");
    }

    arrayOfFood.forEach((foodObject) => {
        const image = document.createElement('img')
        image.src = foodObject.image;
        
        const title = document.createElement('p');
        title.innerText = foodObject.title;

        const fridge = document.createElement('div');
        fridge.classList.add('meal')

        fridge.append(image, title);

        document.querySelector("#foodContainer").appendChild(fridge);
    });
}

foodApp.events = function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = document.querySelector(".input");
        foodApp.getRecipes(input.value);

        function validateForm() {
            const empt = document.forms["myForm"]["ingredients"].value;
            if (empt == "") {
                alert("please enter some ingredients!");
                return false;
            }
            return true;
        }

        function disclaimer() {
            const showText = "Like what you see? Try searching the name of the meal in your favourite (online) recipe book🍴📖"
            document.getElementById('submitText').innerHTML = showText;
        }

        validateForm(form);
        disclaimer();

        document.getElementById('myForm').reset();
    })
};

// initialization 
foodApp.init = () => {
    foodApp.events();
}

foodApp.init();

// hamburger nav 
const toggleButton = document.getElementsByClassName("toggleButton")[0]
const navLinks = document.getElementsByClassName("navLinks")[0]

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})
