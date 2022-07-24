
import Datastore from 'nedb'

const menu = new Datastore({
    filename: './datastore/menu.json',
    autoload: true
})

menu.loadDatabase((err) => console.log(err))

export function findMeal(name, callback) {
    menu.findOne({name}, (err, meal) => {
        callback(meal)
    })
}

export function allMeals(callback) {
    menu.find({}, (err, meals) => {
        callback(meals)
    })
}

export function createMeal( name , price, ingredients, image) {
    const doc = {
        name,
        price,
        ingredients,
        image
    }
    
    menu.insert( {name,price,ingredients,image}, (err, doc) => {
        console.log('New Meal is created.')
    })

}



