let color = "purple";
let number = 10;
let word = "cool";
if (color = "purple") {
    $('.North').css("background", "purple");
}

if (number > 100){
    $('.East').text("Whoa, that is a big number")
} else {
    $('.East').text("Just a regular number please")
};
if (word == "cool"){
    $('.South').text('Power of DOM');
} else {
    $('.West').text('Power of DOM');
};