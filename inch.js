// var inch = 156; 

// var feet = inch / 12; 

// console.log(feet);



function inchToFeet(inch){
    var feet = inch / 12; 
    return feet;
}

var shop = inchToFeet(300);

var studentHeight = [200, 156, 130, 300];

var studentFee = inchToFeet(studentHeight[0]);

console.log(studentFee)  ; 