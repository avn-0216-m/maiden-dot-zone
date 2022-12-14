var blogFound = false
var blogName = ["slot", "girl", "machine"];
var blogNames = [[],[],[]]
var realBlogs = [
    "slime girl witch", "dragon girl knot", "dragon boy pussy", "shark girl dicks",
    "deer girl antlers", "cat girl asscheeks", "cat girl communism", "cat boy moments",
    "cat girl bionics", "cat girl viscera", "cat femboy foreskin", "deer girl dick",
    "cat girl foreskin", "dog girl breasts", "dog boy deathgrips", "puppy girl lasagna",
    "dog girl hen", "cat girl void", "cheetah girl muscles", "dragon girl snout", "puppy girl knot", 
    "puppy girl dick", "cat girl pillow", "cat girl dick", "cat girl pussy", "boy toy faun",
    "monster girl precum", "dog boy coochie", "bunny girl cock", "goat girl balls", "cat girl cockunions",
    "rat girl dick", "bunny girl skull", "dragon girl paws", "dragon girl tum", "dragon girl titties",
    "dragon girl tongue", "cat girl rosa"
]

var spinning = false;

var spins = 0;

var spinners = [];
var wordsPerSpinner = 30;
var textHeight = 20;

const init = () => {
    // Grabs elements after they've loaded
    spinners = [document.getElementById("spinner1"), document.getElementById("spinner2"), document.getElementById("spinner3")]
    revealSounds = [document.getElementById("sound_reveal_1"), document.getElementById("sound_reveal_2"), document.getElementById("sound_reveal_3")]

    // init random words
    realBlogs.forEach(blog => {
        blog.split(" ").forEach((word, index) => {
            if(!blogNames[index].includes(word)){
                blogNames[index].push(word);
            }
        })
    })

    // init spinner text
    spinners.forEach((spinner, index) => {
        spinner.innerText = Array(wordsPerSpinner + 1).fill(blogName[index]).join("\n");
    })

    setSpinLength();
}

const setSpinLength = () => {
    document.styleSheets[0].insertRule(`p.spin { top: -${textHeight * wordsPerSpinner}px }`, 0);
    spinners.forEach((spinner) => {
        spinner.style.top = -textHeight * wordsPerSpinner;
    })
}

const generateSpinnerText = (index, endWord) => {

    let arr = []

    for(i = 0; i != wordsPerSpinner; i++){
        arr.push(getRandomWord(index));
    }

    arr[0] = spinners[index].innerText.split("\n")[wordsPerSpinner]
    arr[wordsPerSpinner] = endWord;

    return arr.join("\n")
}

const getRandomWord = (index) => blogNames[index][Math.floor(Math.random() * blogNames[index].length)];

const start = () => {
    if(spinning){
        return
    }
    spins ++;
    spinning = true
    document.getElementById("sound_click").play();
    document.getElementById("lever").src = "/img/slot/lever2.png"

    blogName = getName();

    spinners.forEach((spinner, index) => {
        spinner.innerText = generateSpinnerText(index, blogName[index]);
    })

    spinners.forEach(spinner => {
        spinner.style.top = "0"
        spinner.style.transition = "none"
    })

}

const getName = () => {

    if(spins >= 5){
        return realBlogs[Math.floor(Math.random() * realBlogs.length)].split(" ");
    }

    return [
        getRandomWord(0),
        getRandomWord(1),
        getRandomWord(2)
    ];
}

const spin = () => {

    blogFound = false;

    document.getElementById("sound_spin").play();
    spinners.forEach((spinner, index) => {
        spinner.classList.add("spin");
        spinner.style.top = "";
        spinner.style.transition = `top ${5-(2.5-index)}s`;
    });
    setSpinLength();

    fetch(`http://maiden.zone/php/blogcheck.php?name=${blogName.join('')}`)
    .then(resp => resp.json())
    .then(data => {blogFound = (data == 1)});
}

const result = () => {
    if(blogFound){
        win()
    } else {
        lose()
    }
}

const win = () => {
    document.getElementById("sound_win").play();
    document.getElementById("bulb1").src = "/img/slot/flash.gif"
    document.getElementById("bulb2").src = "/img/slot/flash.gif"
    setTimeout(() => window.location.href = `https://${blogName[0]}${blogName[1]}${blogName[2]}.tumblr.com`, 1000);
}

const lose = () => {
    document.getElementById("sound_lose").play();
}

const finish = () => {
    spinning = false
    document.getElementById("bulb1").src = "/img/slot/bulb.png"
    document.getElementById("bulb2").src = "/img/slot/bulb.png"
    document.getElementById("lever").src = "/img/slot/lever.png"

}

