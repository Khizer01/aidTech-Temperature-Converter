document.getElementById("convertBtn").addEventListener("click", function () {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let convertedTemp;

    if (fromUnit === toUnit) {
        convertedTemp = inputTemp;
    } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        convertedTemp = (inputTemp * 9 / 5) + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        convertedTemp = (inputTemp - 32) * 5 / 9;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        convertedTemp = inputTemp + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        convertedTemp = inputTemp - 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        convertedTemp = (inputTemp - 32) * 5 / 9 + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        convertedTemp = (inputTemp - 273.15) * 9 / 5 + 32;
    }

    document.getElementById("convertedTemp").textContent = convertedTemp.toFixed(2);
    document.getElementById("resultUnit").textContent = getUnitSymbol(toUnit);
});

function getUnitSymbol(unit) {
    switch (unit) {
        case "celsius":
            return "°C";
        case "fahrenheit":
            return "°F";
        case "kelvin":
            return "K";
        default:
            return "";
    }
}