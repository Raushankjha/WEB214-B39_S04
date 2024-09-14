// Q1:--


function greeting(name,language="English"){
    console.log(`Hello, ${name} and ${language}`);
}
greeting("ram","spanish");


// Q2 --->

const greetings={
    English:"Hello",
    Spanish:"Halo",
    French:"Bonjour"
}
function greet(greetings,language="English"){
    
    if(greetings[language]){
        console.log(greetings[language]);
    }
    else{
        console.log("Hello");
    }
}   
greet(greetings,"Spanish")



// Q3: -->

function greetingBasedOnLanguage(name,language="English"){
    if(language ==="French"){
        console.log(`Bonjour, ${name}`);
    }else if(language === "Spanish"){
        console.log(`Hola,${name}`);
    }else{
        console.log(`Hello, ${name}`);
    }
}
greetingBasedOnLanguage("ram","Spanish");

