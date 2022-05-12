eruda.init()

let pageContent = document.querySelector("#page-content")
let loading = document.querySelector("#loading")

function removeLoader () {
  let remove = setTimeout(function showPageContent() {
    loading.style.display = "none"
    pageContent.style.display = "block"
  }, 2500);
}

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
e.preventDefault()
  for (i = 0; i < details.length; i++) {
    if (details[i].value !== "") {
      details[i].style.borderColor = "teal"
        const formData = new FormData()
        //const formData = [{'name': details[0].value}, {'email':details[1].value},{'subject':details[2].value},{'body':details[3].value}];
        formData.append(
           'name',
           details[0].value
       )
        formData.append(
           'email',
           details[1].value
       )
        formData.append(
           'subject',
           details[2].value
       )
        formData.append(
           'body',
           details[3].value
       )
        
        fetch("https://getform.io/f/6bc58a62-b63d-4ba6-812a-e77c55beebe4",
          {
            method: "POST",
            body: formData,
          })
        .then(response => console.log(response))
        .catch(error => console.log(error))
      
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