
'use strict';
function showNotification(text) {
    Toastify({
        text: text || "Please enter any text !",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();
}

function clearInput() {
    document.getElementById("input-text").value = ""
}
function clearOutput() {
    document.getElementById("result").innerHTML = ""
}

function inputValue() {
    return document.getElementById("input-text").value
}
const ShowOutput = (output) => {
    document.getElementById("result").innerHTML = "<h3>"+output+"</h3>";
}
const tellTime=() => {
    var now=new Date()
    var hour=now.getHours()
    var min=now.getMinutes()
    var sec=now.getSeconds()
    let html="<br>You clicked the button @ "+hour+":"+min+":"+sec;
    ShowOutput(html)

}

const DateTime = () => {
    var days = ["sundaty", "monday", "tuesday", "wednesday".charAt, "thursday", "friday", "saturday"]
    let rightNow = new Date();
    let index = rightNow.getDay()
    console.log(index);
    let day = days[index]
    console.log(day);
    ShowOutput(day)

}
// DateTime()
const  birthDayCal= () => {
    let today = new Date()
    console.log(today);
    let dob = inputValue()
    console.log(dob);
    if (!dob) {
        showNotification("Please enter any date ")
        return
    }
    let bornDate = new Date(dob)
    console.log(bornDate);
    let msDiff = today - bornDate
    console.log(msDiff);
    let day = msDiff / (1000 * 60 * 60 * 24)
    day = Number(day)
    day = Math.floor(day)
    console.log(day);
    ShowOutput(day)
}
const birthDay = () => {

    let today = new Date()
    console.log(today);
    let dob = inputValue()
    console.log(dob);
    if (!dob) {
        showNotification("Please enter any date ")
        return
    }
    
    let bornDate = new Date(dob)
    console.log(bornDate);
if(bornDate<today){
    showNotification("Please enter your date Properly ")
    return 
}
    let msDiff = bornDate-today
    console.log(msDiff);
    let day = msDiff / (1000 * 60 * 60 * 24)
    day = Number(day)
    day = Math.floor(day)
    console.log(day);
    ShowOutput(day)
}


const greetUser = () => {
    let today = new Date();
    let hour = today.getHours();
    console.log(hour);
    if (!hour) {
        showNotification("please enter the time")
    }
    let userName = prompt("please enter youur name")
    if(!userName){
        showNotification("Please entter your name")
    }
    // userName=userName.toUpperCase()
    let greetingMsg = ""
    let msg = "good";

    if (hour < 12 && hour >= 4) {
        greetingMsg = "Good morning";
    } else if (hour >= 12 && hour < 18) {
        greetingMsg = "Good afternoon";
    } else if (hour >= 18 && hour < 20) {
        greetingMsg = "Good Evening ";
    }
    else{
        greetingMsg = "Good Night ";
    }
    msg = greetingMsg + " " + userName+" !"
    console.log(msg);
    ShowOutput(msg);
};
const calculateTax=(price,taxRate)=>{
return price*(taxRate/100)
}
const taxBtn =()=>{
    let price =+prompt("Enter the price")
    if(!price){
        showNotification("Please enter your price")
        return 
    }
    var taxRate = 18;
    var tax=calculateTax(price ,taxRate)
    let html ="Tax is : "+Math.round(tax)
    ShowOutput(html)


}
const calculateTotal=(price)=>{

    if(price<1000){
        var taxRate= 10;

    }
    else{
        var taxRate=18;
    }
   var tax = calculateTax(price,taxRate)
   var total= price +tax;
   return total;
}

const calculateTotalBtn=(price)=>{
    var price =+prompt("Enter your Price");
    if(!price){
        showNotification("Please enter your price")
        return
    }
    let total =calculateTotal(price)
    console.log(total);
    let html =" Total is : "+Math.round(total);
    ShowOutput(html)
}

