const ioDevice = require("./input.js");
const getAllWords = require("./word-pile.js");

console.log("Welcome to lexiconic!\n" +
    "Just link all the words together."    
);

(async () => {
    let words = await getAllWords();
    // TODO: Better shuffling algorithm
    const shuffledArray = words.sort(() => Math.random() - 0.5);


    const user = [];
    for(let i = 0; i < 6; i++) {
        user.push(shuffledArray.pop());
    }

})();