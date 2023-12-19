

function sendMail(){
  
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    // console.log(validateMyForm())
  
    
    const serviceID = "service_5gxf0q8";
    const templateID = "template_svp94gs"; 

    emailjs.send(serviceID, templateID, params)
    .then((res) =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        alert ("Form sent successfully");
        console.log(res); 
    })
    .catch((err) => console.log(err));
}








