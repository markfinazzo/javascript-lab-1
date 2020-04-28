let name = "Mark Finazzo";
let age = 44;
let birthday = "May 10, 1975";
let detroitGC = true;
let lifeEvents = ["I was born in Royal Oak, Mi.", "I used to print silkscreen concert posters", "I attended College for Creative Studies in Detroit", "In 2000, I got my first job in Advertising."];


//Write an if/else statement that runs one of two console.log methods. Your console.log methods must incorporate the variables: name , age , and birthday .

if (detroitGC === true) {
    console.log(`My name is ${name} and I'm a student at Grand Circus in Detroit, Mi. I am currently ${age} and my birthday is ${birthday}`);

} else {
    console.log(`My name is ${name} and I'm a student at Grand Circus in Grand Rapids, Mi. I am currently ${age} and my birthday is ${birthday}`);
}

//Write a for loop that starts at 0 and iterates by increments of 1 while i is less than the length of the lifeEvents array. Each iteration of the loop should log a new sentence from the lifeEvents array. You should only have one console.log method.
for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
    let randomNumber = innerHTML = Math.floor(Math.random() * 10) + 1;
    if (randomNumber != 5) {
        console.log(`${randomNumber} !===5`);
    } else {
        counter++;
        console.log(`5===5. it took ${counter} iterations to randomly generate the number 5`);
        break;
    }
}




