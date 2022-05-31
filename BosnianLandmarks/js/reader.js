fetch("./dzejev_sin/landmarks.json")
    .then(response => {
        return response.json();
    })
    .then(jsondata => console.log(jsondata));