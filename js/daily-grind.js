/*
Day of week - day
Coffee Name - name
Coffee Pic - pic
Alt tag - alt
Coffee Description - desc
Color for coffee - color
*/



let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

function coffeeTemplate(coffee){
    let myReturn = "";


    myReturn=`<img src="${coffee.pic}" alt="Our ${coffee.alt}" id="coffee" />
    <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">Pumpkin Spice Latte</strong>,
    ${coffee.desc}`
    return myReturn;

}

switch(myDay){

  
    case 1:
            today = "Monday";
            coffee = {
                color: "Pink",
                name: "Bubble Tea",
                pic: "images/bubble-tea.jpg",
                alt: "A pic of bubble tea",
                desc: `Some days you just need the bubble tea!`
            };
        break;
    case 2:
            today = "Tuesday";
            coffee = {
                color: "yellow",
                name: "Caramel Latte",
                pic: "images/caramel-latte.jpg",
                alt: "A pic of caramel-latte",
                desc: `Great scott!, it's Caramel latte day!`
            };
        break;
    case 3:
            today = "Wenesday";
            coffee = {
                color: "brown",
                name: "Drip",
                pic: "images/drip.jpg",
                alt: "A pic of drip Coffee",
                desc: `Some days you just need the drip!`
            };
        break;
        
}

console.log(coffee);

document.getElementById("coffee-output").innerhtml = coffeeTemplate();


//alert("Hi, it's " + today);