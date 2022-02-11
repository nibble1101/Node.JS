const greet = (name) => {
    console.log(`Hello ${name}`);
}


global.setTimeout(() => {
    console.log(`In the timeout`);
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log(`In the set interval`);
}, 1000)

console.log(__dirname);
console.log(__filename);


console.log(document.querySelector);