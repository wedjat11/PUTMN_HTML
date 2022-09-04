const key = 'RGAPI-9ef78cc4-7ed9-40d4-be71-6adff58fd309' ;

const puuidsPlayers= [];
const datosPlayer=[];

let dataPlayers = function(){ //pedir datos a Riot
    fetch(`https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/thothmon?api_key=${key}`)
        .then((response) => response.json())
        //.then((data) => console.log(data.id))
        .then ((data) => puuidsPlayers.push(data.id));
    
        fetch(`https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Dante621?api_key=${key}`)
        .then((response) => response.json())
        .then ((data) => puuidsPlayers.push(data.id));

        fetch(`https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Humber7o?api_key=${key}`)
        .then((response) => response.json())
        .then ((data) => puuidsPlayers.push(data.id));
    
        fetch(`https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/SNG%20Ruben?api_key=${key}`)
        .then((response) => response.json())
        .then ((data) => puuidsPlayers.push(data.id));
    
        fetch(`https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Señor%20Quesito?api_key=${key}`)
        .then((response) => response.json())
        .then ((data) => puuidsPlayers.push(data.id));

        fetch(`https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/SNG%20Manolos?api_key=${key}`)
        .then((response) => response.json())
        .then ((data) => puuidsPlayers.push(data.id));

        fetch(`https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/SNG%20Cross?api_key=${key}`)
        .then((response) => response.json())
        .then ((data) => puuidsPlayers.push(data.id));

        fetch(`https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/PepsiBoy?api_key=${key}`)
        .then((response) => response.json())
        .then ((data) => puuidsPlayers.push(data.id));
    
    
        //console.log(puuidsPlayers);
        

}

function namePlayers (){
    for (let p of puuidsPlayers){
        let pp = p;
        fetch(`https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/${pp}?api_key=${key}`)
                .then((response) => response.json())
                .then ((data) => datosPlayer.push([data[0].summonerName, data[0].wins, data[0].losses, `${data[0].tier+' '+data[0].rank}`,data[0].leaguePoints]))
    }
    //console.log( datosPlayer);
}
let crearTabla = function(lista){
    
    let stringTabla = "<tr><th >#</th><th >Nombre</th><th>Victorias</th><th >Derrotas</th> <th >Win Rate</th> <th >ELO</th> <th >LP</th></tr>";
    f = 1;
    for (let dato of lista) {
        let fila = "<tr><th>";
        fila += f++;
        fila += "</th>";

        fila += "<td>";
        fila += dato[0];
        fila += "</td>";

        fila += "<td>";
        fila += dato[1];
        fila += "</td>";

        fila += "<td>";
        fila += dato[2];
        fila += "</td>";

        fila += "<td>";
        fila += '%'+ ' '+ ((dato[1] * 100) / (dato[2] + dato[1])).toFixed(2)
        fila += "</td>";

        fila += "<td>";
        fila += dato[3];
        fila += "</td>";

        fila += "<td>";
        fila += dato[4];
        fila += "</td>";

        fila += "</tr>";
        stringTabla += fila;
        
    }
    //console.log(stringTabla);
    return stringTabla;
};

 let test = function(){
document.getElementById("tablita").innerHTML = crearTabla(datosPlayer);
}
setTimeout(test, 3000);




function complete() {
    dataPlayers()
    setTimeout(namePlayers, 800);
};



