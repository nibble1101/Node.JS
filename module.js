/*
Whenever we're using this require property, we're asking the Node.js to include the JS file and then
run it for us.
Just because we're importing the file doesn't means that we get access to all the functions and the
structures of that file. We need to explictly import and export the functions and the objects from one
file to another file.
*/

// const file = require('./people');

/*
If we are importing multiple values from another file, it will be in the form of a dictionary. Hence, we 
can access them using a dot operator.
*/

// console.log(file.people)
// console.log(file.age)


/*
If we are importing some particular functions or objects and we're aware of their names, then we can just
select few specifics out of all the exported objects.
*/
const {people, age} = require('./people');
console.log(people, age);




