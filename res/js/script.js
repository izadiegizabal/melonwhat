/* Global variable:s videogame_ans */
var answer;

window.onload = function () {
    console.log("Get videogames");
    
    getVideogames();

}



/* Play game */
function play(){
    document.getElementById('game').style.display = 'flex';
    document.getElementById('top').style.display = 'none';

    // Start timer
    var t_seconds = 10, display = document.querySelector('#time');
    startTimer(t_seconds, display);


    console.log("ye");

}

/* Check answer */
function checkAnswer(selected) {
    if(answer == selected) post_actions(true);
    else post_actions(false); 
}

/* Post actions answer*/
function post_actions(param) {
    // Adds points, green points, change color to green o
    switch(param){
        case true:
            // Correct answer


            break;
        case false:
            // Wrong answer


            break;
        default:
            break;
    }
}


/* Load question info */
function loadNext() {
    
}

/* Display results */
function displayResults() {
    
}


function getFruits(){


}

function getVideogames() {

    /* Counters */
    var cont = 0;
    var ins_for=0;

    answer = getRandomInt(0,3);
    console.log("Respuesta correcta es: ");
    
    console.log(answer);
    

    const endpointUrl = 'https://query.wikidata.org/sparql',
      sparqlQuery = `SELECT DISTINCT ?video_game ?video_gameLabel ?image (MIN(?publication_date) AS ?publication_date_antigua) (MD5(CONCAT(str(?video_game),str(RAND()))) as ?random) WHERE{
    SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
    ?video_game wdt:P31 wd:Q7889.
    ?video_game rdfs:label ?video_gameLabel.
    ?video_game wdt:P18 ?image.
    ?video_game wdt:P577 ?publication_date.
    
    }
    GROUP BY ?video_game ?video_gameLabel ?image
    ORDER BY ?random
    LIMIT 4`,
        fullUrl = endpointUrl + '?query=' + encodeURIComponent( sparqlQuery ),
        headers = { 'Accept': 'application/sparql-results+json' };

    fetch( fullUrl, { headers } )
    .then( body => body.json() )
    .then( json => {
        const { head: { vars }, results } = json;
        for ( const result of results.bindings ) {
            //console.log(results.bindings);
            ins_for = 0;
            for ( const variable of vars ) {
                //console.log( '%s: %o', variable, result[variable] );  
                switch (ins_for) {
                        case 0:
                            /* wd */
                            break;
                        case 1:
                            /* label */
                            if(answer == cont) document.getElementById('txt').innerHTML = result[variable].value;
                            break;
                        case 2:
                            /* img */
                            if(answer == cont) document.getElementById('ask_img').src = result[variable].value;

                            break;
                        case 3:
                            /* date */
                            format = convertDate(result[variable].value)
                            switch(cont){
                                case 0:
                                    
                                    document.getElementById('ans0').innerHTML = format;
                                    break;
                                case 1:
                                    document.getElementById('ans1').innerHTML = format;
                                    break;
                                case 2:
                                    document.getElementById('ans2').innerHTML = format;                                
                                    break;
                                case 3:
                                    document.getElementById('ans3').innerHTML = format;                                
                                    break;
                            }
                            break;
                        default:
                            break;
                }
                ins_for++;
                //console.log(ins_for);
                
            }
            cont++;
            //console.log( '---' );

        }
        
    } );
    

}

function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/* Timer countdown */
function startTimer(duration, display) {
    var timer = duration,seconds;
    setInterval(function () {

        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds + 's';

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
