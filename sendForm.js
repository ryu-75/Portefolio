//const { format } = require("path/posix");
let sendForm = document.getElementById('button');
// Send an email with emailjs-com
function sendForm() {
    let tmpParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send('service_jb9ddzt', 'template_un6j28r', tmpParams, 'user_Ze9lO9FBjxhykJkIYJmf8')
        .then(function(res) {
            alert("Votre mail à été correctement envoyé ! 🎉", res.status);
            return true;
        }, function(error) {
            alert('Erreur durant le transfert de vos informations', error.status);
            return false;
        });
    };
