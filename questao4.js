document.getElementById('valorCelsius').addEventListener('keyup', function() {
    const valorCelsius = parseFloat(this.value);
    if (isNaN(valorCelsius)) {
        document.getElementById('temp-fahrenheit').textContent = "-";
        document.getElementById('temp-kelvin').textContent = "-";
        document.getElementById('mensagem').style.display = "block";
    } else {
        document.getElementById('temp-fahrenheit').textContent = converterFahrenheit(valorCelsius).toFixed(2);
        document.getElementById('temp-kelvin').textContent = converterKelvin(valorCelsius).toFixed(2);
        document.getElementById('mensagem').style.display = "none";
    }
});

const converterFahrenheit = celsius => celsius * 9/5 + 32;

const converterKelvin = celsius => celsius + 273.15;
