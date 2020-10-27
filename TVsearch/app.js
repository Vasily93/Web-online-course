const log = console.log;

const form = document.querySelector('form');
const list = document.querySelector('#movies');
const refresh = document.querySelector('#refresh');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if(form.elements.query.value) {
        try {
            const userInput = form.elements.query.value;
            const config = {params: { q: userInput}}
            const res = await axios.get('http://api.tvmaze.com/search/shows', config);
            // log(res.data);
            for(movie of res.data) {
                createCard(movie)
            }
        } catch(err) {
            log('Somthing went wrong',err)
        }
    } else {
        alert('Enter the title please')
    }

})


//Element creation
function createCard(movie) {
    let li = document.createElement('li');
        let name = document.createElement('p');
        let image = document.createElement('img');

        if(movie.show.image !== null) {
            image.setAttribute('src', movie.show.image.medium);
        } else {
            image.setAttribute('src', 'https://www.cornerstone-business.com/wp-content/uploads/2019/09/placeholder.png');
            image.setAttribute('width', '300px');
        }
        name.innerText = movie.show.name;
        li.appendChild(name);
        li.appendChild(image);

        list.appendChild(li);
}

//refresh button
refresh.addEventListener('click', () => {
    form.elements.query.value = '';
    while(list.childElementCount > 0) {
        list.removeChild(list.firstChild)
    }
})