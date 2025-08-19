const celciusInput = document.querySelector("input#celsius");
const fahrenheitInput = document.querySelector("input#fahrenheit");
const kelvinInput = document.querySelector("input#kelvin");

function convertFromCelsius() {
    const celsiusValue = parseFloat(celciusInput.value);
    const fahrenheit = (celsiusValue * 9 / 5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
    const kelvin = celsiusValue + 273.15;
    kelvinInput.value = kelvin.toFixed(2);
}

function convertFromFahrenheit() {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheitValue - 32) * 5 / 9;
    celciusInput.value = celsius.toFixed(2);
    const kelvin = (fahrenheitValue - 32) * 5 / 9 + 273.15;
    kelvinInput.value = kelvin.toFixed(2);
}

function convertFromKelvin() {
    const kelvinValue = parseFloat(kelvinInput.value);
    const celsius = kelvinValue - 273.15;
    celciusInput.value = celsius.toFixed(2);
    const fahrenheit = (kelvinValue - 273.15) * 9 / 5 + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
}

celciusInput.addEventListener("input", convertFromCelsius);
fahrenheitInput.addEventListener("input", convertFromFahrenheit);
kelvinInput.addEventListener("input", convertFromKelvin);