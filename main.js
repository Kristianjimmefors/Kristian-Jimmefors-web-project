const containerDiv = document.getElementById("content-container");
let characters = [];
let movie = [["5cd95395de30eff6ebccde5c", "the fellowship of the ring"], ["5cd95395de30eff6ebccde5b", "the two towers"], ["5cd95395de30eff6ebccde5d", "return of the king"]];

//gets all the characters and put them with ID and name in the characters array
fetch("https://the-one-api.dev/v2/character", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + "sqhij0G-eoz3d5CGuBe9",
        },
      })
        .then((response) => response.json())
        .then((data) =>
        data.docs.forEach(element => {
            let character = [element._id, element.name]
            characters.push(character);
        })
        );

function getMovieQuotes() {
    
  fetch("https://the-one-api.dev/v2/quote?", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + "sqhij0G-eoz3d5CGuBe9",
    },
  })
    .then((response) => response.json())
    .then((data) =>
    data.docs.forEach((element) => {
        //finds the character by ID so you can get the name of that character
        let findCharacter = characters.find(e => e[0] == element.character);
        let charName = findCharacter[1];

        //creates a paragraph where the qoute and the name of the character that said that quote
        let quotePara = document.createElement("p");
        let quote = document.createTextNode('"' + element.dialog + '" -' + charName);
        quotePara.appendChild(quote);
        containerDiv.appendChild(quotePara);
      })
    );
}
