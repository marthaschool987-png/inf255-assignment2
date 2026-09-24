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

// Separate adopted animals from those still waiting for homes without changing the roster.
const adoptedAnimals = animals.filter((animal) => animal.adopted);
const availableAnimals = animals.filter((animal) => !animal.adopted);
console.log(adoptedAnimals);
console.log(availableAnimals);

// Only unadopted dogs belong in this list; extract names after checking both conditions.
const availableDogs = animals
	.filter((animal) => animal.species === "dog" && !animal.adopted)
	.map((animal) => animal.name);
console.log(availableDogs);

// Start the age total at zero, then divide by the roster size to find the mean.
const averageAge = animals.reduce((total, animal) => total + animal.age, 0) / animals.length;
console.log(averageAge);

// Give the species test, adoption test, and name lookup reusable names so later
// chains can describe their purpose without repeating callback logic.
function isCat(animal) {
	return animal.species === "cat";
}

function isAdopted(animal) {
	return animal.adopted;
}

function getName(animal) {
	return animal.name;
}

// Pass the functions themselves as callbacks to select adopted cats and list their names.
const adoptedCats = animals.filter(isCat).filter(isAdopted).map(getName);
console.log(adoptedCats);

// Each returned function remembers the species from its own factory call.
// This closure lets us create different species tests from the same logic.
function makeSpeciesChecker(species) {
	return function (animal) {
		return animal.species === species;
	};
}

// Create independent dog and rabbit checks, then reuse the name lookup for each roster.
const isDog = makeSpeciesChecker("dog");
const isRabbit = makeSpeciesChecker("rabbit");
console.log(animals.filter(isDog).map(getName));
console.log(animals.filter(isRabbit).map(getName));
