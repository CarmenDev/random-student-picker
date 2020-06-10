const imageUrls = [
    'https://media.giphy.com/media/COYGe9rZvfiaQ/giphy.gif',
    'https://media.giphy.com/media/I9BrUZDq5hksw/source.gif',
    'https://media.giphy.com/media/B37cYPCruqwwg/source.gif',
    'https://media.giphy.com/media/hHuOmWidPXwCk/source.gif',
    'https://media.giphy.com/media/18hKuycmFuwaQ/source.gif',
    'https://media.giphy.com/media/3oFzma9FGIblOf6Wk0/source.gif',
    'https://media.giphy.com/media/7QxZfWnBLdGI8/source.gif',
    'https://media.giphy.com/media/KmTnUKop0AfFm/source.gif',
    'https://media.giphy.com/media/UseBZDm3O00hy/source.gif',
    'https://media.giphy.com/media/l0HlMWkHJKvyjftKM/source.gif',
    'https://media.giphy.com/media/d10dMmzqCYqQ0/source.gif',
    'https://media.giphy.com/media/PzQvWAhgfUipW/source.gif',
    'https://media.giphy.com/media/3q3RzbSNRugy0mH6LQ/giphy.gif',
    'https://media.giphy.com/media/2gG2xiMTtFwsg/source.gif',
    'https://media.giphy.com/media/YrD1PQldGsstG/source.gif',
    'https://media.giphy.com/media/uHox9Jm5TyTPa/giphy.gif',
    'https://media.giphy.com/media/gLQjUikb8nQnS/source.gif',
    'https://media.giphy.com/media/B6G2MYBmtnGYU/source.gif',
    'https://media.giphy.com/media/gE6IUBRWZd744/source.gif',
    'https://media.giphy.com/media/cO39srN2EUIRaVqaVq/source.gif'
];


const students = ['Af', 'Alex', 'Carmen', 'Célia', 'David', 'Dominik', 'Edwin', 'Gülcin', 'Ishita', 'Jasmin', 'Mahmoud', 'Marzena', 'Max', 'Najeeb', 'Nicole', 'Osama', 'Prem', 'Rami', 'Saeed', 'Zaher'];



function getRandomName(array) { 
    return array[Math.floor(Math.random() * array.length)];
}
console.log(getRandomName(students)); 



function updateHTML() {
    const randomName = getRandomName(students);
    const randomImage = getRandomImage(imageUrls);
    let intervalCounter = 0;
    document.getElementById('btn').innerText = "Who's next?";

    const interval = setInterval(() => {
        const randomName = students[Math.floor(Math.random() * students.length)];
        header.textContent = randomName;

        intervalCounter++;

        if(intervalCounter > 10) {
            clearInterval(interval);
            document.getElementById('btn').innerText = "Go!";
        }
        
    }, 100)


    console.log(randomImage);
    document.getElementById("header").innerText = randomName;
    document.getElementById("image").setAttribute('src', randomImage);
    
}

function getRandomImage(array){
    return array[Math.floor(Math.random() * array.length)];
}
