// relates to index.html
"use strick"
console.log("meow")

const catForm = document.getElementById("CatForm");
const catsList = document.getElementById("catslist");

catForm.addEventListener("submit", handleCatSubmit);

const allCats = []

function Cat(name){
    this.name = name;
    this.render = function (){
        const listItem = document.createElement("li");
        listItem.textContent = this.name;
        catsList.appendChild(listItem);
    };
}

function handleCatSubmit(event){
    event.preventDefault()
    const newCat = new Cat(event.target.kitteh.value);
    allCats.push(newCat);
    catForm.reset();
    newCat.render();
    //console.log(newCat);
    localStorage.cats = JSON.stringify(allCats);
    localStorage.setItem("cats", JASON.allCats);
    //console.log("this is what is in local storage", localStorage.cats);

}

    // catForm.addEventListener("submit", hadleCatSubmit)
    catForm.addEventListener("submit", handleCatSubmit);