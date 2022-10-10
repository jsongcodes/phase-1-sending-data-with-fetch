


function getID(object) {
    document.body.innerHTML = object.id
}

function errorFunc(error) {
    document.body.innerHTML = error.message;
}

function submitData(userName, userEmail) {
    const formData = {
        name: `${userName}`,
        email: `${userEmail}`
    };
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': "application/json",
        },
        body: JSON.stringify(formData)
    };
    return fetch("http://localhost:3000/users", configurationObject)
        .then(res => res.json())
        .then(getID)
        .catch(errorFunc);

}