// load Categories

let categoriesContainer = document.querySelector('populars-container');
let searchInput = document.getElementById('search-food');

let allCardsInnerHTML = ''
const loadCategories = async () => {
    try{
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        let data = await response.json();
        if (!data.meals){
            throw new Error('No categories found');
        }

        for(let category of data.meals){
          allCardsInnerHTML += `<div class="populars-container" onclick="searchBycard('${category.strMeal}')">

            <div class="popular-card-image">
                <img src="${category.strMealThumb}">
            </div>

            <div class="popular-type">${category.strMeal}</div>

        </div>`;
        }

        categoryContainer.innerHTML = allCardsInnerHTML;
    } catch (error){
        console.error('Error fetching categories:', error);
    }
}

const searchBycard = (foodItem) => {
    loadSearchResult(foodItem)
    setTimeout(() =>{
        window.location.href = "/pages/result.html"
    },1000)
}


// load Search Results