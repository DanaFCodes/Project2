// spoonacular API
const foodApp = {};

foodApp.apiKey = "956722d4112f4ae385dd4d0c9bd38fc2";
foodApp.url = " https://api.spoonacular.com/recipes/findByIngredients";

<<<<<<< HEAD
=======

// clear out form✅
// error handling! (throw catch)✅
// invalid ingedietns (alert)✅
// alert user if they do not input ingredients✅

// responsive nav✅
// collapsable user guide

// style the results ✅
// style width at full browser width = calc(100 /3);
// gallery?


>>>>>>> c373502bf3923ac36314de2bbe16306ef51905c0
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

<<<<<<< HEAD
=======
    // error handling b/c spoonacular api does not have an "ok" property🙃
>>>>>>> c373502bf3923ac36314de2bbe16306ef51905c0
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

<<<<<<< HEAD
        function disclaimer() {
            const showText = "Like what you see? Try searching the name of the meal in your favourite (online) recipe book🍴📖"
            document.getElementById('submitText').innerHTML = showText;
        }

        validateForm(form);
        disclaimer();

        document.getElementById('myForm').reset();
    })
};

=======
            // JUST US KILLIN IT, clearing that form!!
            document.getElementById('myForm').reset();

        })
}

>>>>>>> c373502bf3923ac36314de2bbe16306ef51905c0
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
