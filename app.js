// spoonacular API
const foodApp = {};
// const foodGallery = {};

foodApp.apiKey = "956722d4112f4ae385dd4d0c9bd38fc2";
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
                alert("Please enter at least one ingredient!");
                return false;
            }
            return true;
        }
            validateForm(form);

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

// collapsible section - user guide
const userGuide = document.getElementsByClassName('guideButton');
let i;

for(i = 0; i < userGuide.length; i++){
    userGuide[i].addEventListener("click", function() {
        this.classList.toggle("active")

        const steps = document.querySelector(".userGuide");
        if (steps.style.display == "block") {
            steps.style.display = "none";
        } else {
            steps.style.display = "block";
        }
    })
}