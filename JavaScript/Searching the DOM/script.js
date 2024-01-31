//for alert 
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}

//Searching the DOM
//change the card title to red

//getelementbyId: This method is used to get the elment with "id" attribute
let cNote = document.getElementById("firstNote");
cNote.style.color = "blue";

//similar as getElementById  but this uses a ClassName
let ctitle = document.getElementsByClassName("card-title");
ctitle[0].style.color = "red";
ctitle[1].style.color = "green";
ctitle[2].style.color = "blue";


//querySelectorAll , it select all the components(Id , elements)
// let ctitle = document.querySelectorAll(".card-title"); //you have to use selectors . for class and # for id
// ctitle[0].style.color = "red";
// ctitle[1].style.color = "green";
// ctitle[2].style.color = "blue";
 

document.querySelector(".this").style.color = "rgb(34, 255, 0)"
document.querySelector(".this").style.background = "red"

console.log(document.getElementsByTagName("a"));
console.log(document.body.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"))//searchs the class card and inside class card it searches element a
console.log(document.getElementsByName("Search"))
