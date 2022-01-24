// FUNZIONE CHE GENERA I DATI AL CLICK DEL PULSANTE
let generateButton = document.getElementById("enter");

generateButton.addEventListener("click", 
    function() {

        // INPUT DA INSERIRE
        let name = document.getElementById('name').value;
        let km = document.getElementById('km').value;
        let age = document.getElementById('age').value;

        // calcolo il prezzo del biglietto
        // prezzo per km
        let pricePerTicket = 0.21;
        console.log(pricePerTicket);

        // Calcolo prezzo biglietto di listino - senza sconto
        const priceTicket = km * pricePerTicket;

        // Sconto under 18
        let sale20 = priceTicket - (priceTicket * 0.2);
        // Sconto over 65
        let sale40 = priceTicket - (priceTicket * 0.4);

        let typeUser = 'Biglietto Standard';
        var finalPrice; 

        // Condizione sconto applicato in base all'età
        if (age == 'under18') {
            finalPrice = sale20;
            typeUser = 'Sconto Junior';

        } else if (age == 'over65') {
            finalPrice = sale40;
            typeUser = 'Sconto Senior';

        } else {
            finalPrice = priceTicket;
            console.log(finalPrice);
        }

        // generatore da 1 a 9 per cabina
        var carriageNumber = Math.floor((Math.random() * 9) + 1);

        // generatore min e max per CP
        var min = 90000;
        var max = 99999;
        var discountCode = Math.floor(Math.random() * (max - min) ) + min;

        // STAMPA DATI SU TICKET DETAIL
        document.getElementById('passanger_name').innerHTML = name;

        document.getElementById('discount_name').innerHTML = typeUser;
        document.getElementById('carriage').innerHTML = carriageNumber;
        document.getElementById('discount_code').innerHTML = discountCode;
        document.getElementById('final_price').innerHTML = finalPrice.toFixed(2) + ' €';

        // Funzione per mostrare i dettagli del biglietto al click del pulsante
        document.getElementById('detail_container_passanger').className = 'show';
    }
);


// FUNZIONE CHE CANCELLA I DATI AL CLICK DEL RELATIVO PULSANTE
var eraseButton = document.getElementById("reset");

eraseButton.addEventListener("click", 
    function() {
        // Funzione per nascondere i dettagli del biglietto al click del pulsante
        document.getElementById('detail_container_passanger').className = 'hidden';
    }
);
