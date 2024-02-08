function SendMail(){
	var params = {
		ime : document.getElementById("ime").value,
		prezime : document.getElementById("prezime").value,
		brojtelefona : document.getElementById("brojtelefona").value,
		email : document.getElementById("email").value,
		poruka : document.getElementById("poruka").value
		}
	emailjs.send("service_9i6u8mx","template_20e2ban", params).then(function (res){
		alert("Uspješno poslano! ");
	})
	.catch(function (error) {
		console.error('Došlo je do greške pri slanju e-pošte:', error);
		alert('Došlo je do greške pri slanju e-pošte. Molimo pokušajte ponovno.');
	});
	
}
