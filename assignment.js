// Feet To Mile 
function feetToMile(feet){
    const oneFeet = 0.000189394; /*mile*/
    return Math.round(oneFeet * feet);
}
console.log(feetToMile(50000));


// Wood Calculator 
function woodCalculator(chair, table, bed){
    const oneChair = 1 * chair; /*Qubic Feet*/
    const oneTable = 3 * table; 
    const oneBed = 5 * bed; 
    const totalWood = oneChair + oneTable + oneBed;
    return totalWood; 
}
console.log(woodCalculator(2,3,5));


// Brick Calculator 
function brickCalculator(floorNumber){
    if(floorNumber <= 10){
        const brickForOneFeet = 1000;
        const firstToTenFloorHeight = 15 * brickForOneFeet;
        const floorNum = floorNumber;  
        const totalBrick = firstToTenFloorHeight * floorNum;
        return totalBrick;
    }else if(floorNumber <= 20){
        const brickForOneFeet = 1000;
        const elevenToTwentyFloorHeight = 12 * brickForOneFeet;
        const floorNum = floorNumber;  
        const totalBrick = elevenToTwentyFloorHeight * floorNum;
        return totalBrick;
    }else if(floorNumber <= 45 ){
        const brickForOneFeet = 1000;
        const twentytoFortyFiveFloorHeight = 10 * brickForOneFeet;
        const floorNum = floorNumber;  
        const totalBrick = twentytoFortyFiveFloorHeight * floorNum;
        return totalBrick;
    }else{
        console.log('The Brick Calculator is not calculate over 45 floor');
    }
}

console.log(brickCalculator(45));

// Find Small Name of the Array 


// function tinyFriend(){
//     let friendsName = ['Alamin', 'Nazrul Islam', 'Sahadannt', 'Goribullah'];
//     for(i = 0; i < friendsName.length; i++){
//         let length = friendsName[i].length;
//         let min = Math.min(length); 
//         return min; 
//     }
// }

function tinyFriend(){
    var arr = ['Alaminnnnnnmmmn', 'Nazrul Islam', 'Sahadannt', 'Goribullah'];
    var min = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(min < arr[i]){
            min = min;
        }else if (min > arr[i]){
            min = arr[i + 1];
        }else if (min == arr[i]){
            min = min;
        }
    }
    return min;
};


// var minvalue = arr[0]; 
// for (var i = 0; i < arr.length; i++) {
//     if(arr[i]<minvalue)
//     {
//         minvalue = arr[i];
//     }

// }
//   console.log(minvalue);

console.log(tinyFriend());

