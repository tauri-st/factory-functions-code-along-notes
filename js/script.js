//const createOutfit = function () {
    //const outfit = {
        //shirt: "green",
        //pants: "blue",
        //isNew: false,
        //showOff: function () {
            //this.isNew = true;
            //console.log("Show-off your brand new outfit!")
        //}
    //};
    //if you don't include return keyword and try to logout you'll receive undefined error
    //return outfit;
//};
 
//console.log(createOutfit());

//Create a factory function like a template to produce multiple outfits
const createOutfit = function (shirt, pants) {
    const outfit = {
        shirt: shirt,
        pants: pants,
        isNew: false,
        showOff: function () {
            this.isNew = true;
            console.log("Show-off your brand new outfit!")
        }
    };
    return outfit;
};

const tuesday = createOutfit ("white", "black");
console.log(tuesday);

const wednesday = createOutfit("pink", "gray");
console.log(wednesday);

//for...in loops loop thru keys values or both single objects or multiple
//name the loop key or anything you like
for (let key in tuesday) {
    console.log(key);
    //loop thru values only
    console.log(tuesday[key]);
    //loop thru keys and values. Seperate by a comma so the appear on the same line
    console.log(key, tuesday[key]);
}

//Loop thru multiple objects by placing the objects in an array
const outfitArray = [tuesday, wednesday];

for (let outfit of outfitArray) {
    console.log(outfit);
}

//Or combine the for...of and for...in loops to isolate keys and values of multiple objects at once
for (let outfit of outfitArray) {
    for (let key in outfit) {
        console.log(key, outfit[key];)
    }
}