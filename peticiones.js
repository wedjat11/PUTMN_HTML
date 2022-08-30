

const key = 'RGAPI-40ec86a4-d858-49bb-af90-a680a8265f11' ;

const puuidsPlayers= [];
const datosPlayer=[];
function dataPlayers(){
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
    
    
        console.log(puuidsPlayers);

}
function namePlayers(){
puuidsPlayers.forEach(element => {

    const people = element;

    fetch(`https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/${people}?api_key=${key}`)
        .then((response) => response.json())
        .then ((data) => datosPlayer.push([`Summoner:${data[0].summonerName}`,`wins:${data[0].wins}`, `losses:${data[0].losses}`, `ELO:${data[0].tier+' '+data[0].rank}`,`LP:${data[0].leaguePoints}`]))
});
console.log(datosPlayer)


    // document.getElementById('contabla').style.backgroundColor = 'red'
    let tr = document.createElement('tr')

    let th = document.createElement('th')

    let td = document.createElement('td')

    document.getElementById('contabla').appendChild(tr).appendChild(th).appendChild(td)
    

    th.innerHTML = '4';

    td.innerHTML = 'name';

    


};

