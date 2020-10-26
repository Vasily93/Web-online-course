
const colorChanger = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                document.body.style.backgroundColor = color;
                resolve();
            }, delay)
    })
}

 

colorChanger('red', 1000)
    .then(() => (colorChanger('green', 1000)))
    .then(() => (colorChanger('blue', 1000)))
    .then(() => (colorChanger('yellow', 1000)))
    .then(() => (colorChanger('violet', 1000)))
    .then(() => (colorChanger('indigo', 1000)))
    .then(() => (colorChanger('orange', 1000)))