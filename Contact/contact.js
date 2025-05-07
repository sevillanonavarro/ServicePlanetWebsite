const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    fetch("https://script.google.com/macros/s/AKfycbyIlpi789yLRfMSx2vbQeBMQJAZ7FH0rX6rZmW2l7LEURi7QzSyWnYFeLuAZCHQh3CoMQ/exec", {
      method: "POST",
      body: new FormData(form),
    })
    .then(response => alert("Message sent!"))
    .catch(error => alert("Error sending message"));
    
    form.reset();
  });