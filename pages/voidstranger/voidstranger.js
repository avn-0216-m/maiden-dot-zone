let alphabet = {
    'A': [0,1,0,0,0,0,0,0,1],
    'B': [1,0,0,0,0,0,0,0,1],
    'C': [1,0,0,0,0,0,0,1,1],
    'D': [1,0,0,0,0,0,1,0,0],
    'E': [1,0,0,0,0,0,1,1,0],
    'F': [1,0,0,0,0,0,1,0,1],
    'G': [1,0,0,0,0,0,1,1,1],
    'H': [1,0,0,0,0,1,0,0,0],
    'I': [1,0,0,0,0,1,0,1,0],
    'J': [1,0,0,0,0,1,0,0,1],
    'K': [1,0,0,0,0,1,0,1,1],
    'L': [1,0,0,0,0,1,1,0,0],
    'M': [1,0,0,0,0,1,1,1,0],
    'N': [1,0,0,0,0,1,1,0,1],
    'O': [1,0,0,0,0,1,1,1,1],
    'P': [1,0,0,1,0,0,0,0,0],
    'Q': [1,0,0,1,0,0,0,1,0],
    'R': [1,0,0,1,0,0,0,0,1],
    'S': [1,0,0,1,0,0,0,1,1],
    'T': [1,0,0,1,0,0,1,0,0],
    'U': [1,0,0,1,0,0,1,1,0],
    'V': [1,0,0,1,0,0,1,0,1],
    'W': [1,0,0,1,0,0,1,1,1],
    'X': [1,0,0,1,0,1,0,0,0],
    'Y': [1,0,0,1,0,1,0,1,0],
    'Z': [1,0,0,1,0,1,0,0,1],
}

const update = (text) => {
    console.log("clearing.")
    document.getElementById("tiles").textContent = '';

    const cleanText = text.replaceAll(/[^a-zA-Z ]+/gi,"")

    const splitText = cleanText.toUpperCase().split(" ").filter((val, index) => val != "");
    console.log(cleanText)
    console.log(splitText)


    let newImg = document.createElement("img")
    newImg.src = "tile.png"

    splitText.forEach((word, index) => {
        const column = document.createElement("div")
        column.className = "column"

        for(let i = 0; i < word.length; i++){
            alphabet[word.charAt(i)].forEach((bool, index) => {
                const tile = document.createElement("img")
                tile.className = "tileImg"
                if(bool === 1){
                    tile.src = "tile.png"
                } else {
                    tile.src = "empty.png"
                }
                column.appendChild(tile)
            })
            
        }

        document.getElementById("tiles").appendChild(column)

    })

}