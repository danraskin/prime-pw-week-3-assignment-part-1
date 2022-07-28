console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
    let marinadeSalmon = ['lemon juice', 'olive oil', 'apple cider vinegar', 'salt', 'tarragon', 'thyme', 'sage', 'agave'];

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above
    console.log('The following ingredients can be combined to make a delectable salmon marinade: ', marinadeSalmon);

// 2. Array.length - tells you how many items are in the array

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
    console.log(`The length of this array is ${marinadeSalmon.length}, but it could be longer if you want to get real freaky with this sauce. It's up to you!`);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 
    console.log(`The second animal in the array is ${animalArray[1]}.`);

// 3.b. TODO: Log the last animal in the array using it's array index 
    console.log(`The last animal in the array is ${animalArray[3]}`);
// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item
    console.log(`This is a preferable way to log the last animal in the array, which is currently ${animalArray[animalArray.length - 1]}, but is subject to change.`);

// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array

    marinadeSalmon.push('dried chili');
    console.log(`Don't forget ${marinadeSalmon[marinadeSalmon.length-1]}!`);
    console.log(marinadeSalmon);

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array
    let badIngredient = marinadeSalmon.pop();
    console.log(`Way too spicy. Take out the ${badIngredient}`); //this is another way to log removed item; problem with this that it old item is unrecoverable
    console.log('Back to the original: ', marinadeSalmon);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
    marinadeSalmon.unshift('fish sauce');
    console.log(`updated recipe: ${marinadeSalmon}`);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array
    badIngredient = marinadeSalmon.shift();
    console.log(`That was disgusting. let's return to the old recipe: ${marinadeSalmon}`);


// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.

    marinadeSalmon[1] = 'avocado oil';
    console.log(`I read another piece of clickbait about an Australian avocado glut, so I've updated my recipe once again to show my solidarity for plight of these desperate fruit growers: ${marinadeSalmon}`);

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.
    marinadeSalmon.reverse();
    console.log(marinadeSalmon);

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.

    console.log(marinadeSalmon.join(' and '));

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']

    marinadeMostFoul = marinadeSalmon.concat(animalArray);
    console.log(marinadeMostFoul);
   