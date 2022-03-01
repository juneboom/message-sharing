//get hash from window
const { hash } = window.location;

//conver to ascii
const message = atob(hash.replace('#', ''));
if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault(); //prevent submitting the form

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');
    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value); //convert to base 64

    const linkinput = document.querySelector('#link-input');
    //object literal, to get JUST the url
    linkinput.value = `${window.location}#${encrypted}`;
    linkinput.select();
})