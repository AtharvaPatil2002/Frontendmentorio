function validation()
{
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) 
  {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = ""
  }
  else
  {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please enter a valid email address";
    text.style.color = "hsl(0, 100%, 63%)";
  }
}