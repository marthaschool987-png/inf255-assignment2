const animals = [
	{ id: 1, name: "Luna", species: "cat", age: 3, adopted: false },
	{ id: 2, name: "Biscuit", species: "dog", age: 7, adopted: true },
	{ id: 3, name: "Pepper", species: "cat", age: 1, adopted: true },
	{ id: 4, name: "Moose", species: "dog", age: 5, adopted: false },
	{ id: 5, name: "Charly", species: "dog", age: 4, adopted: false },
	{ id: 6, name: "Bill", species: "cat", age: 0.5, adopted: true },
	{ id: 7, name: "Chompers", species: "rabbit", age: 0.5, adopted: false },
	{ id: 8, name: "Beowulf", species: "dog", age: 7, adopted: true },
];

// Keep just the names for a simple roster, leaving the original objects intact.
const animalNames = animals.map((animal) => animal.name);
console.log(animalNames);

// Print each animal's identity; forEach runs this callback once per animal.
animals.forEach((animal) => {
	console.log(`Name: ${animal.name} Species: ${animal.species}`);
});

// Show age and adoption status for every animal so we can review their details.
// for...of runs a loop body directly and allows break or continue;
// forEach calls a function for each item and cannot be stopped with break.
for (const animal of animals) {
	console.log(`Age: ${animal.age} Adopted: ${animal.adopted}`);
}
