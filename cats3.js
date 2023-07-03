
// relates to cats2.htm;
"use strict"

console.log("meow, meow, meow")
;

const catButton = document.getElementById("catButton");

const handleCatButtonClick = function() {
    const catsFormLs =JSON.parse(localStorage.getItem("cats"))
    for(let i = 0; i < catsFormLs.lenght; i++);
}