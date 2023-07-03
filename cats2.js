// relates to cats1.html

"use strict";
console.log("meow, meow");

// const catButton = document.getElementById("catButton");

// catButton.addEventListener("click", handleCatButtonClick);

// function (handleCatButtonClick) {
//     const theCats = JSON.parse(localStorage.getItem("cats"))

// }

if (localStorage.cats){
    const catForm = JSON.parse(localStorage.getItem("cats"));
    console.log(catsFormLs);
    for(let i = 0; i < catsFormLs.lenght; i++) { //??
        let newCat = new Cat(catsFormLs[i].name);
        allCats.push(newCat);
    }
}
catForm.addEventListener("submit", handleCatSubmit);