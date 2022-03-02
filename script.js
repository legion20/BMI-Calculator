function changeunit() {
    let unit = document.getElementById("unit").value;
    if (unit === "Metric") {
        document.getElementById('h-unit').innerHTML = '(Meters)';
        document.getElementById('w-unit').innerHTML = '(Kilograms)';
    } else {
        document.getElementById('h-unit').innerHTML = '(Inches)';
        document.getElementById('w-unit').innerHTML = '(Pounds)';
    }
}

function calculate() {
    let height = document.getElementById('height').value;
    console.log(height);
    let weight = document.getElementById('weight').value;
    if (height === "" || weight === "") {
        alert("Please Enter Correct Values.")
    } else {
        let bmi = weight / (height * height);
        let unit = document.getElementById("unit").value;
        if (unit === "Standard")
            bmi *= 730;
        document.getElementById('bmi').classList.add("bmi");
        document.getElementById('bmi').innerHTML = '<strong>' + bmi.toFixed(2) + '</strong>';
    }
}