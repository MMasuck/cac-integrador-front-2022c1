const ticket = 200;
const studentTicket = ticket - (ticket * 0.8);
const traineeTicket = ticket - (ticket * 0.5);
const jrTicket = ticket - (ticket * 0.15);
let nOfTickets;
let category;
let total;


function resume() {
    nOfTickets = document.getElementById('inputNumber').value;
    category = document.getElementById('inputCategory').value;

    if (category == 'Estudiante') {
        total = studentTicket * nOfTickets;
        document.getElementById('showTotal').innerHTML =
            'Total a pagar: $' + total;
    } else if (category == 'Trainee') {
        total = traineeTicket * nOfTickets;
        document.getElementById('showTotal').innerHTML =
            'Total a pagar: $' + total;
    } else if (category == 'Junior') {
        total = jrTicket * nOfTickets;
        document.getElementById('showTotal').innerHTML =
            'Total a pagar: $' + total;
    } else if (category == 'General') {
        total = ticket * nOfTickets;
        document.getElementById('showTotal').innerHTML =
            'Total a pagar: $' + total;
    }
}

function clean() {
    document.getElementById("buyTickets").reset();
    document.getElementById("showTotal").innerHTML = "Total a pagar: $";
}