let FaherhietConvert = document.getElementById('FahrenhietConvert');
let CelciusConvert = document.getElementById('CelciusConvert');
let KelvinConvert = document.getElementById('KelvinConvert');

FaherhietConvert.addEventListener('click', function () {
    
    let FahrenhietValue = prompt('Give the value Of Fahrenhiet Temperature.' , 0)
    FahrenhietValue = Number(FahrenhietValue);
    
    while (isNaN(FahrenhietValue)) {
        alert('Please Give value in numbers only.')
        FahrenhietValue = prompt('Give the value Of Fahrenhiet Temperature again.' , 0)
        FahrenhietValue = Number(FahrenhietValue);
    }

    let FahrenhietToCelcius = (FahrenhietValue - 32) * 5/9  ;

    let FahrenhietToKelvin = (FahrenhietValue - 32) * 5/9 + 273.15;

    alert(`Faherenhiet = ${FahrenhietValue} °F \nCelcius = ${FahrenhietToCelcius.toFixed(3)} °C \nKelvin = ${FahrenhietToKelvin.toFixed(3)} °K `);

});

CelciusConvert.addEventListener('click' , function () {
    
    let CelciusValue = prompt('Give Value of Celcius Temperature.' , 0);
    CelciusValue = Number(CelciusValue);

    while (isNaN(CelciusValue)) {
        alert('Please Give value in numbers only.')
        CelciusValue = prompt('Give the value Of Celcius Temperature again.' , 0)
        CelciusValue = Number(CelciusValue);
    }

    let CelciusToFahrenhiet = (9/5 * CelciusValue) + 32;

    let CelciusToKelvin = CelciusValue + 273.15;

    alert(`Celcius = ${CelciusValue} °C \nFahrenhiet = ${CelciusToFahrenhiet} °F\nKelvin = ${CelciusToKelvin} °K`)

});


KelvinConvert.addEventListener('click' , function () {
    
    let KelvinValue = prompt('Give the value Kelvin Temperature' , 0);
    KelvinValue = Number(KelvinValue);

    while (isNaN(KelvinValue)) {
        alert('Please Give value in numbers only.');
        KelvinValue = prompt('Give the value Of Celcius Kelvin again.' , 0);
        KelvinValue = Number(KelvinValue);
    }

    let KelvinToCelcius = KelvinValue - 273.15;

    let KelvinToFahrenhiet = (KelvinValue - 273.15) * 1.8 + 32;

    alert(`Kelvin = ${KelvinValue} °K \nCelcius = ${KelvinToCelcius} °C \nFahrenhiet = ${KelvinToFahrenhiet} °F`);

})