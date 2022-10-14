document.getElementById('download').onclick = (e)=>{
    let people = document.getElementsByClassName('person')
    for (const person of people){
        fetch("https://randomuser.me/api")
                .then(
                    response => response.json(),
                    reject => {
                        document.getElementById("error").innerText='Error: ' + reject
                    }
                ).then(user => {
                    let user_data = user.results[0];
                    updateElement(person, user_data)
                }).catch(e=>console.log('error'));
        }
    document.getElementById("error").innerText='Success!'
}

function updateElement(el, user_data) {
    el.getElementsByClassName("person-picture")[0].src = user_data.picture.large
    el.getElementsByClassName("person-name")[0].innerText = user_data.name.title + 
        ' ' +user_data.name.first + ' ' +user_data.name.last;
    el.getElementsByClassName("person-city")[0].innerText = "City: "+user_data.location.city;
    el.getElementsByClassName("person-cell")[0].innerText = "Cell: "+user_data.cell;
    el.getElementsByClassName("person-postcode")[0].innerText = "Postal code: "+user_data.location.postcode;
}