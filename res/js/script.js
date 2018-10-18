/* Global variable:s aux_data */
var aux_data;

window.onload = function () {
    document.getElementById('txt').style.display = 'inline';
    getFruits()

}



/* Play game */
function play(){

}

/* Check answer */
function checkAnswer() {
    
}

/* Load question info */
function loadNext() {
    
}

/* Display results */
function displayResults() {
    
}


function getFruits(){

    document.getElementById('question').innerHTML = 'What fruit is it?';
    document.getElementById('txt').style.display = 'none';

    /* Counters */
    var cont = 0;
    var ins_for=0;

    aux_data = getRandomInt(0,3);
    
    

    const endpointUrl = 'https://query.wikidata.org/sparql',
      sparqlQuery = `SELECT DISTINCT ?fruit ?fruitLabel (MIN(?image) AS ?img) (MD5(CONCAT(str(?fruit),str(RAND()))) as ?random) WHERE {
          SERVICE wikibase:label { bd:serviceParam wikibase:language "de". }
          ?fruit wdt:P279 wd:Q3314483.
          ?fruit rdfs:label ?fruitLabel.
          ?fruit wdt:P18 ?image. 
        }
        GROUP BY ?fruit ?fruitLabel
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
                            format = result[variable].value;
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
                        case 2:
                            /* img */
                            /* date */
                            if(aux_data == cont) document.getElementById('ask_img').src = result[variable].value;
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

function getCharacters(){

    document.getElementById('question').innerHTML = 'Who is it?';

    document.getElementById('txt').style.display = 'none';

    /* Counters */
    var cont = 0;
    var ins_for=0;

    aux_data = getRandomInt(0,3);
    

    const endpointUrl = 'https://query.wikidata.org/sparql',
      sparqlQuery = `SELECT DISTINCT ?fictional_character ?fictional_characterLabel (MIN(?image) AS ?img) (MD5(CONCAT(str(?fictional_character),str(RAND()))) as ?random) WHERE {
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
              OPTIONAL { ?fictional_character wdt:P31 wd:Q15632617. }
              OPTIONAL { ?fictional_character wdt:P31 wd:Q95074. }
              ?fictional_character wdt:P18 ?image. 
              ?fictional_character rdfs:label ?fictional_characterLabel
            }
            GROUP BY ?fictional_character ?fictional_characterLabel 
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
                            format = result[variable].value;
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
                        case 2:
                            /* img */
                            /* date */
                            if(aux_data == cont) document.getElementById('ask_img').src = result[variable].value;
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

function getAnimals(){

    document.getElementById('question').innerHTML = 'How do you describe the picture?';

    document.getElementById('txt').style.display = 'none';

    /* Counters */
    var cont = 0;
    var ins_for=0;

    aux_data = getRandomInt(0,3);

    

    const endpointUrl = 'https://query.wikidata.org/sparql',
      sparqlQuery = `SELECT DISTINCT ?animal ?animalLabel (MIN(?image) AS ?img) (MD5(CONCAT(str(?animal),str(RAND()))) as ?random) 
            WHERE {
              SERVICE wikibase:label { bd:serviceParam wikibase:language 'en'. }
              ?animal wdt:P279* wd:Q729.
              ?animal rdfs:label ?animalLabel.
              ?animal wdt:P18 ?image.
            }
            GROUP BY ?animal ?animalLabel
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
                            format = result[variable].value;
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
                        case 2:
                            /* img */
                            /* date */
                            if(aux_data == cont) document.getElementById('ask_img').src = result[variable].value;
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


function getBrands(){

    document.getElementById('question').innerHTML = 'Where is it from?';

    /* Counters */
    var cont = 0;
    var ins_for=0;

    aux_data = getRandomInt(0,3);

    

    const endpointUrl = 'https://query.wikidata.org/sparql',
      sparqlQuery = `SELECT DISTINCT ?marca ?marcaLabel ?location ?locationLabel ?logo (MD5(CONCAT(STR(?marca), STR(RAND()))) AS ?random) WHERE {
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
              ?marca wdt:P31 wd:Q167270.
              ?marca rdfs:label ?marcaLabel.
              ?marca wdt:P159 ?location.
              ?marca wdt:P154 ?logo.
            }
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
                            if(aux_data == cont) document.getElementById('txt').innerHTML = result[variable].value;
                            break;
                        case 2:
                            /* img */
                            

                            break;
                        case 3:
                            /* date */
                            format = result[variable].value;
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
                        case 4:
                            /* date */
                            if(aux_data == cont) document.getElementById('ask_img').src = result[variable].value;
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

function getVideogames() {

    document.getElementById('question').innerHTML = 'When was it released?';

    /* Counters */
    var cont = 0;
    var ins_for=0;

    aux_data = getRandomInt(0,3);

    

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
        //const { head: { vars }, results } = json;
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
                            if(aux_data == cont) document.getElementById('txt').innerHTML = result[variable].value;
                            break;
                        case 2:
                            /* img */
                            if(aux_data == cont) document.getElementById('ask_img').src = result[variable].value;

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

function updateElements(img, ans1, ans2, ans3, ans4){
    document.getElementById('ask_img').src = img;
    document.getElementById('ans1').innerHTML = ans1;
    document.getElementById('ans2').innerHTML = ans2;
    document.getElementById('ans3').innerHTML = ans3;

}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/* Timer countdown */
/* 
    <div id="timer"><span id="time">10</span> seconds!</div>
 
function startTimer(duration, display) {
    var timer = duration,seconds;
    setInterval(function () {

        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var t_seconds = 10,
        display = document.querySelector('#time');
    startTimer(t_seconds, display);
    console.log("ye");
    
};
*/