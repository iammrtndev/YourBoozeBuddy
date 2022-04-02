import { writable } from 'svelte/store'

let _selectedDrinks: [Drink, Drink] = [null, null]
export const selectedDrinks = writable(_selectedDrinks)

export function select(drink: Drink) {
  const active = _selectedDrinks.includes(drink)

  if (active == false && _selectedDrinks[0] == null) {
    _selectedDrinks[0] = drink
    return selectedDrinks.set([drink, _selectedDrinks[1]])
  }

  if (active == true && _selectedDrinks[0] == drink) {
    _selectedDrinks[0] = null
    return selectedDrinks.set([null, _selectedDrinks[1]])
  }

  if (active == false && _selectedDrinks[1] == null) {
    _selectedDrinks[1] = drink
    return selectedDrinks.set([_selectedDrinks[0], drink])
  }

  if (active == true && _selectedDrinks[1] == drink) {
    _selectedDrinks[1] = null
    return selectedDrinks.set([_selectedDrinks[0], null])
  }

  _selectedDrinks[0] = _selectedDrinks[1]
  _selectedDrinks[1] = drink
  selectedDrinks.set([_selectedDrinks[0], drink])
}