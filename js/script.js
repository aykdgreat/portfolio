eruda.init()
function openNav() {
  document.querySelector('#nav-body').style.width = '100%'
  document.querySelector('.hamburger').style.visibility = 'hidden'
}

function closeNav() {
  document.querySelector('#nav-body').style.width = '0'
  document.querySelector('.hamburger').style.visibility = 'visible'
}

let senderName = document.querySelector("#sender-name")
let senderEmail = document.querySelector("#sender-email")
let messageSubject = document.querySelector("#message-subject")
let messageBody = document.querySelector("#message-body")
let sendBtn = document.querySelector("#send");

let details = [senderName, senderEmail, messageSubject, messageBody]

let contactForm = document.forms[0];
sendBtn.addEventListener('click', function validate(e) {
  for (i = 0; i < details.length; i++) {
    if (details[i].value !== "") {
      details[i].style.borderColor = "teal"
      console.log(details[i].value)
    } else {
      details[i].style.borderColor = "red"
      details[i].placeholder = "Required field";
    }
  }
});

topBtn = document.querySelector("#top-btn");

window.onscroll = function() {
  scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}