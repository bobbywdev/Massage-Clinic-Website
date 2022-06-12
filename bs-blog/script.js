function newFunc()  {

var a;

a = document.getElementById("mover");
a.innerHTML = "";

setTimeout(function()   {

    a.innerHTML = "aches";
}, 2000);


setTimeout(function()   {
    a.innerHTML = "pain";
    }, 4000);

setTimeout(function()   {
a.innerHTML = "injuries";
}, 6000);

setTimeout(function()   {
a.innerHTML = "stress";
}, 8000);


setTimeout(newFunc, 10000);
};


function scrollFunc()   {
    document.getElementById("navB").classList = "navbar navbar-expand-lg bg-primary fixed-top opac";
    
    
};


