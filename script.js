function calculate(){
    let height = document.getElementById('height').value;
    height /=100;
    let weight = document.getElementById('weight').value;
    let bmi = weight/(height*height);
    
    document.getElementById('bmi').classList.toggle("bmi");

    document.getElementById('bmi').innerHTML = '<strong>' + bmi.toFixed(2) + '</strong>';
}