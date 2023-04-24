//Частина 1
const categoriesList = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${categoriesList.length}`);

//Частина 2
categoriesList.forEach((item)=>{
    const categoryTitle = item.querySelector("h2").textContent;
    const categoryElements = item.querySelectorAll("li").length
    console.log(`Category: ${categoryTitle}`)
    console.log(`Elements ${categoryElements}`);
})