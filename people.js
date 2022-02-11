const people = ['Ritik', 'Jack', 'Terry', 'Andrea', 'George'];
const age = [32,23,43,11,31];

/*
Using the module.exports, we're exporting the people object to whichever file wants to import. 
*/

// module.exports = people;

/*
Here, we're sending a dictionary of the varaible names and its values and then exporting it to other files.
In this way we can select what specific types of values we want to send from one file to another file.

*/
module.exports = {
    people: people,
    age: age
}





