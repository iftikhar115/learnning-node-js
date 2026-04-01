const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // variables from new bmi detector.html
    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
    const results = document.querySelector('#result')
    const status = document.querySelector('#status');
    if(weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `please enter a correct value of weight ${weight}`
    }else if(height === '' || height <= 1 || isNaN(height)) {
        results.innerHTML = `please enter a valid height now you was written ${height}`
    }else {
        const bmi = (weight / (height * height)) * 10000;
        // under weight  , normal weight,overweight,obese
        if(bmi <= 18.5) {
            
            status.innerHTML = ` your bmi is ${bmi.toFixed(2)} you are underweight`
        }else if (bmi <= 25) {
            status.innerHTML = ` your BMI is ${bmi.toFixed(2)} you are normal weight`
        }else if(bmi >= 25 && bmi <=30){
            status.innerHTML = ` your BMI is ${bmi.toFixed(2)} you are overweight`
        }else {
            status.innerHTML = ` your BMI is ${bmi.toFixed(2)} you are obese`
        }
    }
})