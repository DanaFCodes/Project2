// spoonacular API
const foodApp = {};

foodApp.apiKey = "8ea4a98517084d33ba459cc3ea2249ea";
foodApp.url = " https://api.spoonacular.com/recipes/findByIngredients";


// clear out form✅
// error handling! (throw catch)
// invalid ingedietns (alert)
// alert user if they do not input ingredients✅

// responsive nav✅
// collapsable user guide

// style the results ✅
// style width at full browser width = calc(100 /3);
// gallery?


foodApp.getRecipes = function(userSelection) {
    const foodUrl = new URL(foodApp.url);

    foodUrl.search = new URLSearchParams({
        ingredients: userSelection,
        // ingredients: "tomato",
        image: true,
        instructionsRequired: true,
        number: 8,
        apiKey: foodApp.apiKey
    });
   

    fetch(foodUrl)
        .then((apiPromise) => {
            return apiPromise.json()
        })
        .then((apiPromise) => {
            document.querySelector("#foodContainer").innerHTML = "";
            console.log(apiPromise);
            foodApp.displayFood(apiPromise);
        })
}

foodApp.displayFood = (arrayOfFood) => {
    console.log(arrayOfFood);


    arrayOfFood.forEach((foodObject) => {
        const image = document.createElement('img')
        image.src = foodObject.image;
        
        const title = document.createElement('p');
        title.innerText = foodObject.title;

        const fridge = document.createElement('div');
        fridge.classList.add('meal')

        fridge.append(image, title);

        document.querySelector("#foodContainer").appendChild(fridge);
    })
}

foodApp.events = function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        // makes sure form doesnt take us elsewhere 
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

        fetch(foodApp) 
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("please try entering a different ingredient!");
                }
            })
            .then((apiPromise) => {
                console.log(apiPromise);
            })
            .catch((err) => {
                console.log(err);
            })

        validateForm(form);

        // JUST US KILLIN IT:
        document.getElementById('myForm').reset();

    })
};


// initialization 
foodApp.init = () => {
    // console.log("page initalized");
    foodApp.events();
}

foodApp.init();



// hamburger nav 

const toggleButton = document.getElementsByClassName("toggleButton")[0]
const navLinks = document.getElementsByClassName("navLinks")[0]

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})