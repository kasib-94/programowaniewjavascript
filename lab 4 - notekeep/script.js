
const notes = [];
function dajNotatke(tytul, content, color, pin, koledzy) {
    return {
        title: tytul,
        content: content,
        color: color,
        pin: pin,
        createDate: Date.now(),

    }
}

function dodajNotatke(){

}

const types = {
    Zielony : "green",
   Czerwony : "red",
    Zolty : "yellow",
}