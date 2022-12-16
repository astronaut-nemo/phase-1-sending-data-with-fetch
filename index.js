// Add your code here
function submitData(name, email){
    // Make sure to return the fetch data
    // Save user information in an object
    const userInfo = {
        name: name,
        email: email,
    }

    // Valid POST request to http://localhost:3000/users
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(userInfo),
    })
    .then((response) => response.json())
    .then((data) => {
        // Append the data's ID to the DOM
        const display = document.getElementById('display');
        const responseId = document.createElement('h1');
        responseId.textContent = data.id;
        display.appendChild(responseId);
    })
    .catch((error) => {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = error.message;
        const display = document.getElementById('display');
        display.appendChild(errorMessage);
        res.send(process.pid.toString());
    })
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded')
    submitData('sam', 'sam@moringa.com')})
