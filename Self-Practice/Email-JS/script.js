emailjs.init("IlhJE7gHmbaRf3AVl"); 

let emailTemplate = {
    
}

document.querySelector("button").addEventListener("click", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_yw4u58i", "template_ih76j6v", this)
      .then(() => alert("Email sent successfully!"))
      .catch((error) => console.error("EmailJS Error:", error));
  });