let total = 0
let tax = 0
let subtotal = 0
let diameter = 0
game.splash("Welcome to Atri's Pizzeria!")
let RENT_COST = 1
let LABOUR_COST = 0.75
let MATERIAL_COST = 0.5
let HST = 13 / 100
while (true) {
    diameter = game.askForNumber("Enter the pizza's diameter ( inches ):")
    subtotal = LABOUR_COST + RENT_COST + MATERIAL_COST * diameter
    tax = subtotal * HST
    total = Math.round((subtotal + tax) / 0.01) / 100
    game.splash("The total cost of the pizza is $" + total + "!")
    game.splash("Another Pizza?")
}
