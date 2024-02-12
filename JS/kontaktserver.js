
function SendMail() {
    var ime = document.getElementById("ime").value;
    var prezime = document.getElementById("prezime").value;
    var brojtelefona = document.getElementById("brojtelefona").value;
    var email = document.getElementById("email").value;
    var poruka = document.getElementById("poruka").value;

	if (ime === "" || brojtelefona === "" || email === "" || poruka === "") {
        alert('Molimo ispunite sva obavezna polja (ime, broj telefona, e-mail, poruka).');
        return;
    }
   
    if (!isValidTelefon(brojtelefona)) {
        alert('Unesite ispravan broj telefona (+ i brojevi).');
        return;
    }
	if (!isValidEmail(email)) {
        alert('Unesite pravilni format e-maila (npr. pravilni@gmail.com).');
        return;
    }

    var params = {
        ime: ime,
        prezime: prezime,
        brojtelefona: brojtelefona,
        email: email,
        poruka: poruka
    };

    emailjs.send("service_9i6u8mx", "template_20e2ban", params)
        .then(function(res) {
            alert("Uspješno poslano! ");
        })
        .catch(function(error) {
            console.error('Došlo je do greške pri slanju e-pošte:', error);
            alert('Došlo je do greške pri slanju e-pošte. Molimo pokušajte ponovno.');
        });
}


function isValidTelefon(telefon) {
    var telefonRegex = /^[+0-9]+$/;
    return telefonRegex.test(telefon);
}
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
