var a;
a = document.getElementById("mover");
a.innerHTML = "";

//you can leave the sleep constant
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  
  const doSomething = async () => {
    let array = ["pain", "aches", "injuries", "stress"];
    for (var i = 0; i < array.length; i++) {
   console.log(array[i])
   a.innerHTML = array[i]
     await sleep(2000)
    //code after sleep goes here 
      }
    };
  setInterval(function() {

    doSomething()

  }, 8000);

  //created second js file so window on load would only execute this function of index page, which is where function is needed, not other pages