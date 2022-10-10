<<<<<<< HEAD
const toggleButton = document.getElementsByClassName("toggleButton")[0]
const navLinks = document.getElementsByClassName("navLinks")[0]

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})
=======
// Gallery page
const foodGallery = {};

foodGallery.apiKey = "956722d4112f4ae385dd4d0c9bd38fc2";
foodGallery.url = "https://api.spoonacular.com/recipes/complexSearch";

foodGallery.getRecipes = function () {
    const foodUrl = new URL(foodGallery.url);

    foodUrl.search = new URLSearchParams({
        query: "Halloween",
        apiKey: foodGallery.apiKey
    });

    fetch(foodUrl)
        .then((apiPromise) => {
            return apiPromise.json()
        })
        .then((apiPromise) => {
            // document.querySelector("#gallery").innerHTML = "";
            // console.log(apiPromise);
            foodGallery.displayFood(apiPromise);
        })
}

foodGallery.displayFood = (arrayOfFood) => {
    const ul = document.querySelector('ul');

    // error handling b/c spoonacular api does not have an "ok" property🙃
    // if (arrayOfFood.length == 0) {
    //     alert("Please try entering a different ingredient");
    // }

    arrayOfFood.forEach((foodObject) => {
        const li = document.createElement('li');
        const image = document.createElement('img')

        image.src = foodObject.image;
        image.alt = foodObject.alt_description;

        // const title = document.createElement('p');
        // title.innerText = foodObject.title;

        // const fridge = document.createElement('div');
        // fridge.classList.add('meal')
        listElement.appendChild(image);
        ul.appendChild(listElement);

        document.querySelector("#gallery").appendChild(fridge);
    })
}

foodGallery.init = () => {
    foodGallery.getRecipes();
    foodGallery.displayFood();
};

foodGallery.init();
>>>>>>> form-feature
