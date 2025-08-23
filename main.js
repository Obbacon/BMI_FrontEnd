function getUserInfo(){
    let storeTheOutput = [];
    let userWeight = document.getElementById('weight').value;
    let userHeight = document.getElementById('height').value;
    let floatValueWeight = parseFloat(userWeight);
    let floatValueHeight = parseFloat(userHeight)

    storeTheOutput.push(floatValueWeight);
    storeTheOutput.push(floatValueHeight);

    return storeTheOutput;
}

function output(){
    let trueOutput = getUserInfo();
    let userWeight = trueOutput[1];
    let userHeight = trueOutput[0]

    let bmi = userWeight / (userHeight ** 2);
    bmi = Math.round(bmi * 100) / 100;

    let newOutput = document.getElementById('output');
    newOutput.innerHTML = `Total BMI = ${bmi}`;
    calc(bmi);
}

function calc(BMI){
    let displayWeight = document.getElementById('weightScore');
    
    if (BMI <= 18.5){
        displayWeight.innerHTML = "Category = Too Low";
    } else if (BMI > 18.5 && BMI <= 24.9) {
        displayWeight.innerHTML = "Category = Healthy";
    } else if (BMI > 25 && BMI <= 29.9) {
        displayWeight.innerHTML = "Category = Overweight";
    } else if (BMI > 30) {
        displayWeight.innerHTML = "Category = Danger";
    } else {
        console.log("Error");
    }
}