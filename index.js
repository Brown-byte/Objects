//QUESTION 1 and 2  
function InstagramPost (HandleOfAuthor, content, ImageLink, Views,Likes){
    this.HandleOfAuthor = HandleOfAuthor;
    this.content = content;
    this.ImageLink = ImageLink;
    this.Views = Views;
    this.Likes = Likes;
}
//Two Instagram post objects
const post1 = new InstagramPost('Ella', 'Beautiful', 'https://tbrownel.com/ella.jpg', 1200, 400 );
const post2 = new InstagramPost ('Rihanna', 'Diamonds', 'https://Rihanna.com/diamonds.jpg', 2000, 599);

console.log(post1.HandleOfAuthor); //Ella
console.log(post1.content); //Beautiful
console.log(post1.ImageLink); //https://tbrownel.com/ella.jpg
console.log(post1.Views); //1200
console.log(post1.Likes); //400

console.log(post2.HandleOfAuthor); //Rihanna
console.log(post2.content); //Diamonds
console.log(post2.ImageLink); //https://Rihanna.com/diamonds.jpg
console.log(post2.Views); //2000
console.log(post2.Likes); //599


//QUESTION 3
//Factory function for createPerson
function createPerson(name,age,location){
    return{name, age, location};
}

//Factory function for createJambScores
function createJambScores(eng,govt,lit,crk){
    return{eng,govt,lit,crk};
}

const musa = {Person: createPerson('Musa Dawodu', 19, 'Lekki, Lagos State'), jambScores: createJambScores(70,85,82,94),
};

console.log(musa); //{ Person: { name: 'Musa Dawodu', age: 19, location: 'Lekki, Lagos State' },jambScores: { eng: 70, govt: 85, lit: 82, crk: 94 }


//QUESTION 4
//object.assign copies the properties and methods from 1 or more source objects into a target object, and that can be used to clone an object, or combine multiple objects into a single object, 
const OriginalNumber = { a: 5, b: 8 };
const copiedNumber = Object.assign({}, OriginalNumber);
console.log(copiedNumber); //{ a: 1, b: 2 }



//The spread operator is used to spread an object, which basically means getting all it's properties and methods and putting them into another object.
const mySubjects = [ 'Maths', 'English']
const newSubject = [...mySubjects, 'Science']
console.log(newSubject) // [ 'Maths', 'English', 'Science' ]




//QUESTION 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }

 for (let party in presidentialCandidates) {
    console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
  }
  