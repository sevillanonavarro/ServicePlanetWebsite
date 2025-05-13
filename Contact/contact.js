const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log('aqui');
    fetch("https://script.google.com/macros/s/AKfycbxWdNDy39Gk9TWDhU20HOz1yHNcwwAJhDKKcyIOZ0RcVsXslYyudkQy2TjIoal_yrAIJA/exec", {
      method: "POST",
      body: new FormData(form),
    })
    .then(response => console.log("Message sent!"))
    .catch(error => console.log("Error sending message"));
    
    form.reset();
  });