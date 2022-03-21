// console.log("I'm ready!");

//Iteration 1
let hacker1 = "John";
let hacker2 = "Jane";
console.log("The driver's name is", hacker1);
console.log(`The navigators's name is ${hacker2}`);

//Iteration 2

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has",
    hacker1.length,
    "characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!"
  );
}

//Iteration 3
// console.log(hacker1.toUpperCase().split('').join(' '))

// //3.3 version 1
// console.log(hacker2.split('').reverse().join(''))
// //3.3 version 2
// let reverse = [...hacker2].reverse().join('')
// console.log(reverse)

// let compare = hacker1.localeCompare(hacker2)

// if(compare < 0){
//   console.log("Driver goes first")
// }else if(compare > 0){
//   console.log("Navigator goes first definitely")
// } else {
//   console.log("What?! You both have the same name?")
// }

//Bonus 1

let paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue dui sit amet felis rhoncus, quis volutpat odio lobortis. Donec sem neque, rutrum eget consequat ac, interdum sed enim. Aliquam et purus eu enim pellentesque iaculis eu sed nunc. Aliquam accumsan massa a ipsum malesuada, non vestibulum sapien efficitur. Morbi aliquam blandit ullamcorper. Proin eget commodo mauris, at viverra sem. Integer sodales tellus id arcu lacinia, eu lobortis sapien posuere. Cras et interdum metus, id lobortis orci. Nullam neque quam, hendrerit vitae aliquam ac, fringilla aliquam enim. Nullam porta, ligula id interdum auctor, sem neque convallis leo, id iaculis orci nunc sed neque. Fusce quis dignissim odio. Morbi egestas tincidunt tellus non aliquam. Aenean dignissim elit non lectus ullamcorper, vehicula tincidunt nibh placerat. Aliquam posuere elit ac cursus tincidunt. In mollis, tellus a accumsan consequat, nulla ante venenatis turpis, eu laoreet orci ex at dolor. Nam efficitur turpis sed elit tincidunt, at pretium neque venenatis. Vivamus et erat eu neque egestas efficitur ac et ante. Pellentesque feugiat suscipit dui vel bibendum. Suspendisse convallis dictum quam, in lobortis nibh vestibulum in. Nunc tincidunt libero purus. Morbi molestie eros eu mauris ultrices ultrices. Praesent gravida, risus condimentum accumsan sodales, tellus nisi aliquet ex, vitae fringilla dui elit ac elit. Curabitur accumsan, ante eu rhoncus sagittis, quam quam tristique ante, vitae tristique quam augue sit amet arcu. Integer nec accumsan ligula, at aliquet dolor. Duis mollis risus nisl, vel egestas enim pharetra et. Quisque nec iaculis nisi. Aliquam non accumsan ipsum. Quisque eget gravida neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";

//Bonus 1 version 1
// function etCounter(){
//   let count = 0
//   for(let i=0;i<paragraph.length; i++){
//     if(paragraph[i]+paragraph[i+1]+paragraph[i+2] === ' et'){
//      count++
//     }
//   }
//   return count
// }

// console.log(etCounter())

//Bonus 1 version 2

let lorem = paragraph
  .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
  .toLowerCase()
  .split(" ");

let counter = 0;
for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === "et") {
    counter++;
  }
}

console.log(counter);

//Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";

let clean = phraseToCheck
  .replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
  .toLowerCase();

let reverse = clean.split("").reverse().join("");

console.log(clean === reverse);
