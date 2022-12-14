let button1 = document.querySelector('#task')
let listDom = document.querySelector('#list')

let check = document.querySelector("#list")
check.addEventListener("click", domClick)

function domClick(event) {
  console.log(event.target)

  if (!event.target.classList.contains('checked')) {
    event.target.classList.add("checked")

  } else {

    event.target.classList.remove("checked")
  }
  

    }
  

   // console.log(check)


function newElement() {
   if((button1.value)==("")) {
    console.log("hatalı giriş")
    $('.error').toast('show');

   }else{
  
   let liDOM = document.createElement('li')
   liDOM.innerHTML = `${button1.value} 
   <button
   onclick="delElement()"
   type="button"
   class="close"
   data-dismiss="toast"
   aria-label="Close"
   >
   <span  aria-hidden="true">&times;</span>
   </button>`
   listDom.appendChild(liDOM)
   
     
   $('.success').toast('show');

   console.log(button1.value)
  }
}     



function delElement() {
  event.currentTarget.parentElement.remove();



 
}