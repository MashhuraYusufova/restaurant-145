import { allMeals, createMeal } from "../services/menu.service.js";


function testCreateMeal() {
    createMeal('Palov', 21000, 'Guruch, sabzi, gosht', 'Bu yerda rasm bor')
    createMeal('Manti', 8000, 'piyoz, hamir, gosht', 'Bu yerda rasm bor')
    createMeal('Barak', 8000, 'piyoz, hamir, kartoshka', 'Bu yerda rasm bor')
}

testCreateMeal()


function testAllMeals() {
    allMeals((meals) => {
        console.log(meals);
    })
}

testAllMeals()