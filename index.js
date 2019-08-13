const http = require("http");
const nerds = require("nerds");

const random = function (maxNum){
    return Math.floor(Math.random()*Math.floor(maxNum))
};

let randomArraylength = random(2)
let randomArraylength2 = random(2)


// function handleRequestAndResponse(req, res) {
//     let Poke = nerds.resolve('Pokemon',200).include(['name','type']).asArray();
//     // string = `<h1>I think this is cool ${Poke[randomArraylength].name}, i hate this one ${Poke[randomArraylength2].name}</h1>`
//     string2 = ""
//     Poke.forEach(element => {
//        string2 +=`<h1 style="color:red">${element.name}:${element.type}</h1>` 
//     });
//   res.end(string2)
// };

function getRandomName(req, res) {
    const harrypotterCharFullName = nerds.resolve("Harry Potter").include(['full', 'gender']).asArray();
    // console.log(harrypotterCharFullName[0].full, harrypotterCharFullName[0].gender)
    // console.log(harrypotterCharFullName.first, harrypotterCharFullName.gender)
    const pokemonChar = nerds.resolve('Pokemon',2).include(['name','type']).asArray();
    res.end(`<h1>Hello World,</h1><br/>
    <h3>This is ${harrypotterCharFullName[0].full} from Harry Potter. I am a ${harrypotterCharFullName[0].gender}.<br/>
    This is ${pokemonChar[0].name} from Pokemon! I am a ${pokemonChar[0].type}</h3>`)
    console.log('char',pokemonChar);
    console.log('Yay, you did it!');
 }
const server = http.createServer(getRandomName);  
server.listen(3007);