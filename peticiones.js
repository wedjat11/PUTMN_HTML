

const key = 'RGAPI-1f6fd6c4-5279-4484-87a7-c6f4ce128d35' ;

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
        .then ((data) => datosPlayer.push([`Summoner:${data[0].summonerName}`,`wins:${data[0].wins}`, `losses:${data[0].losses}`,`LP:${data[0].leaguePoints}`, `ELO:${data[0].tier+' '+data[0].rank}`]));
});
console.log(datosPlayer)

    
};

