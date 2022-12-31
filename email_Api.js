function SendEmail(){
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    }
    emailjs.send("","",params).then(function(res) {
        alert("success"+res.status);
    })
}