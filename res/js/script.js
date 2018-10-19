
/* Global variable:s answer */

var answer;
var nQuestion;
var timer = 0;
var mucho_nice = 0;
var wrong = 0;
var bonus = 0;
var ans = new Array();

var image1 = new Image();
var image2 = new Image();
var image3 = new Image();
var image4 = new Image();
var image5 = new Image();
image1.id='ask_img', image2.id='ask_img', image3.id='ask_img', image4.id='ask_img',image5.id='ask_img';
image1.className='card-img', image2.className='card-img', image3.className='card-img', image4.className='card-img',image5.className='card-img';



window.onload = function () {
    /* Main state: */
    // Hide game card
    document.getElementById('game').style.display = 'none';
    // Hide punctuation card
    document.getElementById('results').style.display = 'none';
    document.getElementById('txt').style.display = 'inline';

    //Change melonfact
    changeMelonFact();
    //Videogames
    getVideogames();
    // Fruits
    getFruits();
    // Charachters
    getCharacters();
    // Animals
    getAnimals();
    // Brands
    getBrands();
    ///
    console.log(ans);
}


/*function loadall(){
    document.getElementById('game').style.display = 'flex';
    document.getElementById('top').style.display = 'none';
    //document.getElementById('results').classList.toggle('unhide');
    var t_seconds = 10, display = document.querySelector('#time');
    startTimer(t_seconds, display);

        






    // Start timer
    

    // Initialize variables
    nQuestion = 0;

    loadNext(nQuestion);

    //console.log("Get videogames");
    //getVideogames();


}*/
/* Play game */
function loadall(){

    document.getElementById('startBtn').classList.add('hide');
    document.getElementById('loading').classList.remove('hide');
    setTimeout(
    function() {

        document.getElementById('game').style.display = 'flex';
        document.getElementById('top').style.display = 'none';
        //document.getElementById('results').classList.toggle('unhide');

        // Start timer
        var t_seconds = 10, display = document.querySelector('#time');
        startTimer(t_seconds, display);

        // Initialize variables
        nQuestion = 0;
        loadNext(nQuestion);
    }, 1000);
    //console.log("Get videogames");
    //getVideogames();


}

/* Check answer */
function checkAnswer(selected) {
    if(answer == selected) { 
        mucho_nice+=10; 
        bonus+=timer; 
        post_actions(true, selected);
    }
    else if(selected == null){
        wrong-=5;
        post_actions( null, selected);
    }
    else{
        wrong-=5;
        post_actions(false, selected); 
    }
    timer = 10;
}

/* Post actions answer*/
function post_actions(param, selected) {
    var btns, btns2, btns_ok, btns_bad;
    // Adds points, green points, change color to green o
    //console.log("post_actions -> nQuestion: " + nQuestion);
    if(nQuestion < 5){
        // Dots corrects/incorres
        var dots = document.getElementsByClassName('progress')[nQuestion];
        
        // Answers buttons
        btns = document.querySelectorAll('div.question-section button');
        console.log("botones recgod:");
        console.log(btns);
        
        
        console.log("time end: " + param);
        
            switch(param){
                case true:
                    // Correct answer
                    dots.classList.add('correct');
                    break;
                case false:
                    // Wrong answer
                    dots.classList.add('wrong');

                    btns[selected].classList.toggle('incorrectButton'); //?????????????
                    break;
                default:
                    /* Time ends */
                    console.log("Time finisssshh");
                    /* Paint red answers */
                    for(var x=0; x<btns.length; x++){
                        if(x!=answer) btns[x].classList.toggle('incorrectButton');
                    }

                    dots.classList.add('wrong');

                    break;
            }
        /* Paint green answer */        
        btns[answer].classList.toggle('correctButton');

        // Highlight wrong and correct answers
        btns_ok = document.getElementsByClassName('correctButton');
        //console.log(btns);
        
        btns_bad = document.getElementsByClassName('incorrectButton');
        //console.log(btns2);
        
    }
    // Countdown
    setTimeout(function () {
        //console.log("long corrects: " + btns.length);
        //console.log("long incorrects: " + btns2.length);

        //console.log(btns2);
         
        for(var x=0; x<btns.length;x++){
            console.log("value x: " + x);
            
            btns[x].classList.remove('incorrectButton');
            btns[x].classList.remove('correctButton');
        }

        /*
        if(btns2.length > 0){
            for(var x=0; x<btns2.length; x++){
                console.log("RESET incorrecto toggle");

                btns2[x].classList.toggle('incorrectButton');
            }
        }
        */
        // Next game
        nQuestion++;
        //console.log('---------'+nQuestion+'-------');
        if(nQuestion==7) nQuestion = 0;
        loadNext(nQuestion);

        clearTimeout();
    startTimer(t_seconds, display);
        
    }, 2500);

}


/* Load question info */
function loadNext(param) {


    switch (param) {
        case 0:
            document.getElementById('question').innerHTML = 'When was it released?';
            document.getElementById('txt').innerHTML = ans[0][5];
            aux_img = document.getElementById('ask_img');
            aux_img.parentNode.insertBefore(image1, aux_img.nextSibling);
            aux_img.remove();
            document.getElementById('ans0').innerHTML = ans[0][1];
            document.getElementById('ans1').innerHTML = ans[0][2];
            document.getElementById('ans2').innerHTML = ans[0][3];                                
            document.getElementById('ans3').innerHTML = ans[0][4];                                

            // Videogame - year
            //getVideogames();
            break;
        case 1:
            // Fruits
            document.getElementById('question').innerHTML = 'What fruit is it?';
            document.getElementById('txt').innerHTML = ans[1][5];
            aux_img = document.getElementById('ask_img');
            aux_img.parentNode.insertBefore(image2, aux_img.nextSibling);
            aux_img.remove();
            document.getElementById('ans0').innerHTML = ans[1][1];
            document.getElementById('ans1').innerHTML = ans[1][2];
            document.getElementById('ans2').innerHTML = ans[1][3];                                
            document.getElementById('ans3').innerHTML = ans[1][4]; 
            //getFruits();
            break;
        case 2:
            // Charachters
            document.getElementById('question').innerHTML = 'Who is it?';
            document.getElementById('txt').innerHTML = ans[2][5];
            aux_img = document.getElementById('ask_img');
            aux_img.parentNode.insertBefore(image3, aux_img.nextSibling);
            aux_img.remove();
            document.getElementById('ans0').innerHTML = ans[2][1];
            document.getElementById('ans1').innerHTML = ans[2][2];
            document.getElementById('ans2').innerHTML = ans[2][3];                                
            document.getElementById('ans3').innerHTML = ans[2][4]; 
            //getCharacters();
            break;
        case 3:
            // Animals
            document.getElementById('question').innerHTML = 'How do you describe the picture?';
            document.getElementById('txt').innerHTML = ans[3][5];
            aux_img = document.getElementById('ask_img');
            aux_img.parentNode.insertBefore(image4, aux_img.nextSibling);
            aux_img.remove();
            document.getElementById('ans0').innerHTML = ans[3][1];
            document.getElementById('ans1').innerHTML = ans[3][2];
            document.getElementById('ans2').innerHTML = ans[3][3];                                
            document.getElementById('ans3').innerHTML = ans[3][4]; 
            //getAnimals();
            break;
        case 4:
            // Brands
            document.getElementById('question').innerHTML = 'Where is it from?';
            document.getElementById('txt').innerHTML = ans[4][5];
            aux_img = document.getElementById('ask_img');
            aux_img.parentNode.insertBefore(image5, aux_img.nextSibling);
            aux_img.remove();
            document.getElementById('ans0').innerHTML = ans[4][1];
            document.getElementById('ans1').innerHTML = ans[4][2];
            document.getElementById('ans2').innerHTML = ans[4][3];                                
            document.getElementById('ans3').innerHTML = ans[4][4]; 
            //getBrands();
            break;
        case 5:
            // Results
            console.log("FIN");
            displayResults();
            
            break;
        default:
            break;
    }


    console.log("Respuesta: " + answer);
    console.log("nQues: " + nQuestion);
}

/* Display results */
function displayResults() {
    console.log("OYE");


    document.getElementById('wrong').innerHTML = +wrong;
    document.getElementById('mucho_nice').innerHTML = '+'+mucho_nice;
    document.getElementById('bonus').innerHTML = '+'+bonus;
    document.getElementById('final').innerHTML = mucho_nice+bonus+wrong;
    document.getElementById('how_nice').innerHTML = '&nbsp; '+(mucho_nice/10)+'/5';
    document.getElementById('how_wrong').innerHTML = '&nbsp; '+(Math.abs(wrong)/5)+'/5';
    document.getElementById('results').style.display = 'flex';
    document.getElementById('game').style.display = 'none';

}


function getFruits(){

    
    document.getElementById('txt').style.display = 'none';

    /* Counters */
    var cont = 0;
    var ins_for=0;

    answer = getRandomInt(0,3);
    var aux_answer = new Array();
    var numrand=getRandomInt(0, 100);
    var lang=['eu', 'ja', 'zh', 'de', 'cs', 'eo' ,'id', 'fi'];
    var langrand =getRandomInt(0, lang.length-1);    
    

    const endpointUrl = 'https://query.wikidata.org/sparql',
      sparqlQuery = `SELECT DISTINCT ?fruit ?fruitLabel (MIN(?image) AS ?img) (MD5(CONCAT(str(?fruit),str(RAND()))) as ?random) WHERE {
          SERVICE wikibase:label { bd:serviceParam wikibase:language "`+lang[langrand]+`". }
          ?fruit wdt:P279 wd:Q3314483.
          ?fruit rdfs:label ?fruitLabel.
          ?fruit wdt:P18 ?image. 
        }
        GROUP BY ?fruit ?fruitLabel
        ORDER BY ?random
        LIMIT 4
        #`+numrand,

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
                                    aux_answer.splice(1, 0, format);
                                    //document.getElementById('ans0').innerHTML = format;
                                    break;
                                case 1:
                                aux_answer.splice(2, 0, format);
                                    //document.getElementById('ans1').innerHTML = format;
                                    break;
                                case 2:
                                aux_answer.splice(3, 0, format);
                                    //document.getElementById('ans2').innerHTML = format;                                
                                    break;
                                case 3:
                                aux_answer.splice(4, 0, format);
                                    //document.getElementById('ans3').innerHTML = format;   
                                    aux_answer.splice(5, 0, "no_title");                             
                                    break;
                            }
                            break;
                        case 2:
                            /* img */
                            /* date */
                            if(answer == cont) {//document.getElementById('ask_img').src = result[variable].value;
                        aux_answer.splice(0, 0, result[variable].value);
                        image2.src = result[variable].value;}
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
    ans.push(aux_answer);


}

function getCharacters(){


    document.getElementById('txt').style.display = 'none';

    /* Counters */
    var cont = 0;
    var ins_for=0;

    answer = getRandomInt(0,3);
    var aux_answer = new Array();
    var numrand=getRandomInt(0, 100);
    

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
            LIMIT 4
             #`+numrand,

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
                                    aux_answer.splice(1, 0, format);
                                    //document.getElementById('ans0').innerHTML = format;
                                    break;
                                case 1:
                                aux_answer.splice(2, 0, format);
                                    //document.getElementById('ans1').innerHTML = format;
                                    break;
                                case 2:
                                aux_answer.splice(3, 0, format);
                                    //document.getElementById('ans2').innerHTML = format;                                
                                    break;
                                case 3:
                                aux_answer.splice(4, 0, format);
                                aux_answer.splice(5, 0, "no_title");  
                                    //document.getElementById('ans3').innerHTML = format;                                
                                    break;
                            }
                            break;
                        case 2:
                            /* img */
                            /* date */
                            if(answer == cont) {//document.getElementById('ask_img').src = result[variable].value;
                        aux_answer.splice(0, 0, result[variable].value);
                        image3.src = result[variable].value;}
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
    ans.push(aux_answer);


}

function getAnimals(){

    

    document.getElementById('txt').style.display = 'none';

    /* Counters */
    var cont = 0;
    var ins_for=0;

    answer = getRandomInt(0,3);
    var aux_answer = new Array();
    var numrand=getRandomInt(0, 100);
    

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
            LIMIT 4
             #`+numrand,
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
                                    aux_answer.splice(1, 0, format);
                                    //document.getElementById('ans0').innerHTML = format;
                                    break;
                                case 1:
                                aux_answer.splice(2, 0, format);
                                    //document.getElementById('ans1').innerHTML = format;
                                    break;
                                case 2:
                                aux_answer.splice(3, 0, format);
                                    //document.getElementById('ans2').innerHTML = format;                                
                                    break;
                                case 3:
                                aux_answer.splice(4, 0, format);
                                aux_answer.splice(5, 0, "no_title");  
                                    //document.getElementById('ans3').innerHTML = format;                                
                                    break;
                            }
                            break;
                        case 2:
                            /* img */
                            /* date */
                            if(answer == cont) {//document.getElementById('ask_img').src = result[variable].value;
                            aux_answer.splice(0, 0, result[variable].value);
                            image4.src = result[variable].value;}
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
    ans.push(aux_answer);


}


function getBrands(){

    

    /* Counters */
    var cont = 0;
    var ins_for=0;

    answer = getRandomInt(0,3);
    var aux_answer = new Array();
    var title;
    var numrand=getRandomInt(0, 100);

    

    const endpointUrl = 'https://query.wikidata.org/sparql',
      sparqlQuery = `SELECT DISTINCT ?marca ?marcaLabel ?location ?locationLabel ?logo (MD5(CONCAT(STR(?marca), STR(RAND()))) AS ?random) WHERE {
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
              ?marca wdt:P31 wd:Q167270.
              ?marca rdfs:label ?marcaLabel.
              ?marca wdt:P159 ?location.
              ?marca wdt:P154 ?logo.
            }
            ORDER BY ?random
            LIMIT 4
             #`+numrand,
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
                            if(answer == cont) {//document.getElementById('txt').innerHTML = result[variable].value;
                            title=result[variable].value;
                            //aux_answer.splice(5, 0, result[variable].value);
                        }
                            break;
                        case 2:
                            /* img */
                            

                            break;
                        case 3:
                            /* date */
                            format = result[variable].value;
                            switch(cont){
                                case 0:
                                    aux_answer.splice(1, 0, format);
                                    //document.getElementById('ans0').innerHTML = format;
                                    break;
                                case 1:
                                    aux_answer.splice(2, 0, format);
                                    //document.getElementById('ans1').innerHTML = format;
                                    break;
                                case 2:
                                aux_answer.splice(3, 0, format);
                                    //document.getElementById('ans2').innerHTML = format;                                
                                    break;
                                case 3:
                                aux_answer.splice(4, 0, format);
                                aux_answer.splice(5, 0, title);
                                    //document.getElementById('ans3').innerHTML = format;                                
                                    break;
                            }
                            break;
                        case 4:
                            /* date */
                            if(answer == cont) {//document.getElementById('ask_img').src = result[variable].value;
                            aux_answer.splice(0, 0, result[variable].value);
                            image5.src = result[variable].value;}
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
    ans.push(aux_answer);


}

function getVideogames() {

    

    /* Counters */
    var cont = 0;
    var ins_for=0;

    answer = getRandomInt(0,3);
    var aux_answer = new Array();
    var numrand=getRandomInt(0, 100);
    

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
    LIMIT 4
    #`+numrand,

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

                            if(answer == cont) {//document.getElementById('txt').innerHTML = result[variable].value;
                                aux_answer.splice(5, 0, result[variable].value);
                                //console.log(aux_answer);
                            }
                            break;
                        case 2:
                            /* img */

                            if(answer == cont) {//document.getElementById('ask_img').src = result[variable].value;
                            aux_answer.splice(0, 0, result[variable].value);
                            image1.src = result[variable].value;
                                //console.log(aux_answer);
                            }

                            break;
                        case 3:
                            /* date */
                            format = convertDate(result[variable].value);
                            switch(cont){
                                case 0:
                                    aux_answer.splice(1, 0, format);
                                //console.log(aux_answer);
                                    //document.getElementById('ans0').innerHTML = format;
                                    break;
                                case 1:
                                aux_answer.splice(2, 0, format);
                                //console.log(aux_answer);
                                    //document.getElementById('ans1').innerHTML = format;
                                    break;
                                case 2:
                                aux_answer.splice(3, 0, format);
                                //console.log(aux_answer);
                                    //document.getElementById('ans2').innerHTML = format;                                
                                    break;
                                case 3:
                                aux_answer.splice(4, 0, format);
                                //console.log(aux_answer);
                                    //document.getElementById('ans3').innerHTML = format;                                
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

    ans.push(aux_answer);

    

}

function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    //return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
    return d.getFullYear();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Random melon facts */
function changeMelonFact(){

    let ranFactNum = getRandomInt(0, melonfacts.length-1);

    console.log("CHANGING FACT to " + ranFactNum);

    document.getElementById('melonfact').innerHTML = melonfacts[ranFactNum];
}


/* Timer countdown */
function startTimer(duration, display) {
    timer = duration;
    var seconds;
    setInterval(function () {

        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds + 's';

        if (--timer < 0) {
            timer = duration;
            checkAnswer(null);
        }
    }, 1000);
}

const melonfacts = [
    "Size of melon depends on the variety. Largest recorded watermelon had 262 pounds of weight. <a href='http://www.softschools.com/facts/plants/melon_facts/609/'>Source</a>.",
    "Melon grows as vine. It has round stem that produces lateral tendrils. Green leaves are oval or circular in shape. They have shallow lobes. <a href='http://www.softschools.com/facts/plants/melon_facts/609/'>Source</a>.",
    "Melon produces two types of flowers: staminate (contains only male reproductive organs) and perfect flowers (contains both male and female reproductive organs). Plant that produces these types of flowers is called andromonoecious. <a href='http://www.softschools.com/facts/plants/melon_facts/609/'>Source</a>.",
    "Size, shape, color, sweetness and texture of the fruit depend on the type of melon. Skin can be either smooth or rough. Color of the skin can be green, yellow, orange, creamy or kaki. Sweetness of the fruit depends on the climate conditions and intensity of photosynthesis (production of sugar from the carbon dioxide and water, with a help of sun). <a href='http://www.softschools.com/facts/plants/melon_facts/609/'>Source</a>.",
    "Seeds are located in the middle of the fruit. They are usually 0.4 inches long, creamy in color and oval in shape. <a href='http://www.softschools.com/facts/plants/melon_facts/609/'>Source</a>.",
    "Watermelons were very popular in the Roman Empire and in the ancient Egypt. Certain rulers, such as Tutankhamen, were even buried with the seeds of watermelons. <a href='http://www.softschools.com/facts/plants/melon_facts/609/'>Source</a>.",
    "Best known varieties of melon are casaba, honeydew, Persian melon and cantaloupe. <a href='http://www.softschools.com/facts/plants/melon_facts/609/'>Source</a>.",
    "Melons have high nutritional value. They are rich source of vitamin C, vitamins of the B group, and minerals such as potassium, manganese, iron and phosphorus. <a href='http://www.softschools.com/facts/plants/melon_facts/609/'>Source</a>.",
    "Watermelon contains more than 92% of water, hence the name. <a href='http://www.softschools.com/facts/plants/melon_facts/609/'>Source</a>.",
    "Melons are usually consumed raw. They can be served as a part of fruit salads, refreshing juices or in the sweet desserts. Some types of melons are used as vegetable when they are not fully ripe, and as fruit when the sugar content reach its maximum level (fully ripe melon). <a href='http://www.softschools.com/facts/plants/melon_facts/609/'>Source</a>.",
    "Roasted and dried seeds are used as snack in the African and Indian culture. <a href='http://www.softschools.com/facts/plants/melon_facts/609/'>Source</a>.",
    "Almost all parts of melon (fruit, seed, leaves and roots) are used in traditional Chinese medicine. <a href='http://www.softschools.com/facts/plants/melon_facts/609/'>Source</a>.",
    "Scientists created cube-shaped melon. Packaging and transportation of this type of melon requires less effort compared to rounded types of melon. Cube-shaped melon is far more expensive than conventional melons. <a href='http://www.softschools.com/facts/plants/melon_facts/609/'>Source</a>.",
    "25% of globally consumed melons originate from China. It produces over 8 million tons of melons each year. <a href='http://www.softschools.com/facts/plants/melon_facts/609/'>Source</a>.",
    "Melon is annual plant, which means that it finishes its life cycle in one year. <a href='http://www.softschools.com/facts/plants/melon_facts/609/'>Source</a>.",
    "Melon is a member of the Cucurbitaceae family. Its closest relatives are squashes and cucumbers. <a href='http://justfunfacts.com/interesting-facts-about-melons/'>Source</a>.",
    "Melons originate from Africa and southwestern parts of Asia. <a href='http://justfunfacts.com/interesting-facts-about-melons/'>Source</a>.",
    "After they become widely spread and popular in Europe, melons were introduced to America by the Spanish settlers during the 15th and 16th century. <a href='http://justfunfacts.com/interesting-facts-about-melons/'>Source</a>.",
    "Melon is annual plant, which means that it finishes its life cycle in one year. <a href='http://justfunfacts.com/interesting-facts-about-melons/'>Source</a>.",
    "Melon produces two types of flowers: staminate (contains only male reproductive organs) and perfect flowers (contains both male and female reproductive organs). Plant that produces these types of flowers is called andromonoecious. <a href='http://justfunfacts.com/interesting-facts-about-melons/'>Source</a>.",
    "Seeds are located in the middle of the fruit. They are usually 0.4 inches long, creamy in color and oval in shape. <a href='http://justfunfacts.com/interesting-facts-about-melons/'>Source</a>.",
    "Size, shape, color, sweetness and texture of the fruit depend on the type of melon. <a href='http://justfunfacts.com/interesting-facts-about-melons/'>Source</a>.",
    "Best known varieties of melon are casaba, honeydew, Persian melon and cantaloupe. <a href='http://justfunfacts.com/interesting-facts-about-melons/'>Source</a>.",
    "Melon grows as vine. It has round stem that produces lateral tendrils. Green leaves are oval or circular in shape. They have shallow lobes. <a href='http://justfunfacts.com/interesting-facts-about-melons/'>Source</a>.",
    "It takes cantaloupes 3-4 months to grow before they are mature enough to be picked. <a href='http://justfunfacts.com/interesting-facts-about-melons/'>Source</a>.",
    "Melons have high nutritional value. They are rich source of vitamin C, vitamin A, vitamins of the B group, and minerals such as manganese, iron and phosphorus. <a href='http://justfunfacts.com/interesting-facts-about-melons/'>Source</a>.",
    "They are also rich in potassium, a nutrient that may help control blood pressure, regulate heart beat, and possibly prevent strokes. <a href='http://justfunfacts.com/interesting-facts-about-melons/'>Source</a>.",
    "Melons offer a decent dose of fiber, which helps fill you up. As a snack for dieters, melons can’t be beat. Their juicy sweetness is just the substitute for high-calorie snacks and desserts. <a href='http://justfunfacts.com/interesting-facts-about-melons/'>Source</a>.",
    "The Yubari King melons are the most expensive melons in the world. They are only grown in a small region of Japan. Due to this they are very hard to find making them very expensive.The fruit is said to be the juiciest and sweetest melon in the world, and its orange flesh is coveted for its tenderness.Often given as gifts after being bought at auctions, a perfectly proportioned pair of these juicy melons can easily set you back well over $20,000. <a href='http://justfunfacts.com/interesting-facts-about-melons/'>Source</a>.",
    "Melons are symbol of fertility and vitality, but also of luxury because they were expensive and scarce in the past. <a href='http://justfunfacts.com/interesting-facts-about-melons/'>Source</a>.",
    "25% of globally consumed melons originate from China. It produces over 8 million tons of melons each year. <a href='http://justfunfacts.com/interesting-facts-about-melons/'>Source</a>.",
    "Melons does not ripen after it is picked, so once a cantaloupe is removed from the vine it will not sweeten any further. <a href='http://justfunfacts.com/interesting-facts-about-melons/'>Source</a>.",
    "Almost all parts of melon (fruit, seed, leaves and roots) are used in traditional Chinese medicine. <a href='http://justfunfacts.com/interesting-facts-about-melons/'>Source</a>.",
    "Roasted and dried (melon) seeds are used as snack in the African and Indian culture. <a href='http://justfunfacts.com/interesting-facts-about-melons/'>Source</a>.",
    "Ancient Egyptians have been cultivated melons 2000 years BC. <a href='http://justfunfacts.com/interesting-facts-about-melons/'>Source</a>.",
    "Watermelons have remained popular for thousands of years. Pictures of them can even be seen in ancient Egyptian hieroglyphics. <a href='https://www.aarp.org/food/diet-nutrition/info-2017/melons-food-fact-trivia.html'>Source</a>.",
    "Stainless steel and plastic water bottles are all the rage now, but early explorers used watermelons as canteens. <a href='https://www.aarp.org/food/diet-nutrition/info-2017/melons-food-fact-trivia.html'>Source</a>.",
    "The cantaloupe was first cultivated in the 1700s, in the Italian papal village of Cantalup. <a href='https://www.aarp.org/food/diet-nutrition/info-2017/melons-food-fact-trivia.html'>Source</a>.",
    "To pick the perfect watermelon, experts recommend flipping it over to make sure that the underside has a creamy yellow spot from sitting on the ground to ripen in the sun. <a href='https://www.aarp.org/food/diet-nutrition/info-2017/melons-food-fact-trivia.html'>Source</a>.",
    "We typically picture the flesh of a honeydew melon as green, but there is also an orange variety, aka the temptation melon. <a href='https://www.aarp.org/food/diet-nutrition/info-2017/melons-food-fact-trivia.html'>Source</a>."
];
