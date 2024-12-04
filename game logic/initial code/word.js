const fs = require("fs");

/** Filepath for the file with all the words */
const FILEPATH = "../resources/my-game-words.txt"

/**
 * Returns all words from a text file separated by a new line char.
 *
 * @param {string} filePath
 * @return {*} array with all words as json with word, head, rear
 */
async function getWordsFromFile(filePath) {

    const data = await fs.readFileSync(filePath, "utf-8");

    // Splits all lines into arrays and filters the empty and one letter words.
    const words = data.split("\n")
                    .map(word => word.trim())
                    .filter(word => word.length > 1);

    const wordArray = words.map(word => {
        return {
            word: word,
            head: word.charAt(0),
            rear: word.charAt(word.length - 1)
        };
    });

    return wordArray;

}

/**
 * Returns an array with all the words used in the game.
 *
 * @return {*} array with all the Word objects.
 */
async function getAllWords() {
    return await getWordsFromFile(FILEPATH);
}
