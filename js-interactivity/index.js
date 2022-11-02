// console.log('hello') //to check connectivity

let message = document.querySelector('#message')

const addMovie = (event) =>{
    event.preventDefault()

    let inputField = document.querySelector('input');
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span');
    
    
    movieTitle.textContent = inputField.value

    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)
    inputField.value = ''

    message.textContent = `You've added ${movieTitle.textContent}.`
    revealMessage()
}


const deleteMovie = (event) => {
    event.target.parentNode.remove() 
    message.textContent = `You've deleted ${event.target.parentNode.childNodes[0].textContent}`
    
    revealMessage()
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked') 
    if (event.target.classList.contains('checked') ){
        message.textContent = `You've watched ${event.target.textContent}.`
    } else {
        message.textContent = `You've unwatched ${event.target.textContent}.`
    }
    revealMessage()
}

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(callback = () => {
        message.classList.add('hide')
    }, 1000);
}

document.querySelector('form').addEventListener('submit', addMovie) 