const person = {
    gender: 'male',
    age: 50,
    firstName: 'Dennis',
    lastName: 'Wachira',
    occupation: 'Technical mentor',
    isHumorous: false,
    status: "married",
    phoneNumber: 798546695,
    "shoe-number": 40,
    hobbies:[
        "Watch movies",
        "Twitter Fanatic"
    ],
    school: {
        name: 'moringa',
        course: 'software engineering',
    },

};
const favoriteColors = {
    primary: 'green',
    secondary:  'black',
};

favoriteColors.primary = 'red';
console.log(favoriteColors);

const movies = {
    movies:  [
        'Peaky Blinders',
        'Slow Horses'
    ]
}

//CRUD Operations
//create
const test = {};
//read - we use dot notation to read objects, (2) square brackets access notation-Non standard keys, dynamically get data from an external source

console.log (person.age);
console.log (person["shoe-number"])
console.log(person.school.name);
console.log(person.school["name"]);
console.log('hobbies' [2]);

//update/modify

const books ={
    scienceFiction: '',
    fantasy:'',
    erotic:'',
    crime:'',
    political:'',
    spiritual:'',
    nonFictional:'',
    selfHelp:'',
}

books.scienceFiction = '';
books.fantasy= 'Harry potter';
books.erotic = 'It ends with us';
books.crime = 'my life in crime';
books.political = 'Inheritance';
books.spiritual = '90 minutes in heaven';
books.nonFictional = 'In cold blood';
books.selfHelp = 'Atomic Habits';

console.log(books)
//add a new category
books.romance = "it ends with us";
console.log(books);

//spread operator
const extraBooks = {
    ...books,
    cultural: 'the river and the source',
}


//delete
delete books.scienceFiction;
console.log('scienceFiction ' in books);


//object.methods
//static
//object.keys()

const keyss = Object.keys(books);
console.log(keyss);
//object.values()

const valuess = Object.values(books);
console.log(valuess);

//DISPLAY ALL THE BOOK CATEGORIES



// Select the list container
const categ = document.querySelector(".categories > ul");

// Map over keyss array to create list items
const categList = keyss.map((item) => {
    return `<li>${item}</li>`;
}).join(""); // Convert array to string

// Insert into the DOM
categ.insertAdjacentHTML("afterbegin", categList);



//FOR .. IN

for (key in books) {
    console.log(`${books[key]} is a good  ${key}books`);
};

