// FUNZIONE CHE GENERA I DATI AL CLICK DEL PULSANTE
let generateButton = document.getElementById("enter");

generateButton.addEventListener("click", 
    function() {

        // INPUT DA INSERIRE
        const name = document.getElementById('name').value;
        console.log(name);

        const km = document.getElementById('km').value;
        console.log(km);

        const age = document.getElementById('age').value;
        console.log(age);

        // calcolo il prezzo del biglietto
        // prezzo per km
        let pricePerTicket = 0.21;
        console.log("Il prezzo per Km è pari a: " + pricePerTicket);

        // Calcolo prezzo biglietto di listino - senza sconto
        const priceTicket = km * pricePerTicket;
        console.log("Il prezzo del biglietto senza sconto è pari a: " + priceTicket);

        // Sconto under 18
        let sale20 = priceTicket - (priceTicket * 0.2);
        // Sconto over 65
        let sale40 = priceTicket - (priceTicket * 0.4);

        let typeUser = 'Biglietto Standard';
        let finalPrice; 

        // Condizione sconto applicato in base all'età
        if (age == 'under18') {
            finalPrice = sale20;
            typeUser = 'Sconto Junior';
            console.log("Sconto junior: " + finalPrice)

        } else if (age == 'over65') {
            finalPrice = sale40;
            typeUser = 'Sconto Senior';
            console.log("Sconto Senior: " + finalPrice)

        } else {
            finalPrice = priceTicket;
            console.log("Sconto Adult: " + finalPrice)
        }

        // generatore da 1 a 9 per cabina
        let carriageNumber = Math.floor((Math.random() * 9) + 1);

        // generatore numero compreso tra 90000 e 99999 per codice CP
        let discountCode = Math.floor(Math.random() * 10000) + 90000;

        // STAMPA DATI SU TICKET DETAIL

        // trascrivo nome passeggero nel biglietto
        document.getElementById('passanger_name').innerHTML = name;

        // riporto il nome dell'offerta
        document.getElementById('discount_name').innerHTML = typeUser;

        // genero un numero random della carrozza
        document.getElementById('carriage').innerHTML = carriageNumber;

        // genero un numero random del codice CP
        document.getElementById('discount_code').innerHTML = discountCode;

        // riporto il prezzo del biglietto
        document.getElementById('final_price').innerHTML = finalPrice.toFixed(2) + ' €';

        // Funzione per mostrare i dettagli del biglietto al click del pulsante - richiamo classe style
        document.getElementById('detail_container_passanger').className = 'show';
    }
);


// FUNZIONE CHE CANCELLA I DATI AL CLICK DEL RELATIVO PULSANTE
var eraseButton = document.getElementById("reset");

eraseButton.addEventListener("click", 
    function() {
        
        // reset valori cliccando su annulla
        document.getElementById('name').value = "";
        document.getElementById('km').value = "";
        document.getElementById('age').value = "";
        
        // Funzione per nascondere i dettagli del biglietto al click del pulsante - richiamo classe style
        document.getElementById('detail_container_passanger').className = 'hidden';
    }
);
