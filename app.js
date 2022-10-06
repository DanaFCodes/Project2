// spoonacular API
const foodApp = {};

foodApp.apiKey = "8ea4a98517084d33ba459cc3ea2249ea";
foodApp.url = " https://api.spoonacular.com/recipes/findByIngredients";


// clear out form✅
// error handling! (throw catch)
// alert user if they do not input ingredients✅, and alert user if they enter more than x amount
// collapsable user guide 

// style the results 
// gallery?


foodApp.getRecipes = function(userSelection) {
    const foodUrl = new URL(foodApp.url);

    foodUrl.search = new URLSearchParams({
        ingredients: userSelection,
        // ingredients: "tomato",
        image: true,
        instructionsRequired: true,
        number: 9,
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