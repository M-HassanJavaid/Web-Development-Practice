const Cities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"]

const YourCity = prompt("Enter your City", "karachi")

function checkCity(CitiesParam , YourCityParam ) {
    for (let i = 0; i < CitiesParam.length; i++) {
        if (YourCityParam.toLowerCase() === CitiesParam[i]) {
            return `Welcome to ${CitiesParam[i]} city!`
        }

    } return 'City Not Found'
}

let IsCity = checkCity(Cities , YourCity);
alert(IsCity);