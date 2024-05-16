//1. generate superhero name
//2. generate supervillian name
//3. generate two random number varrying from 1-100.

const hero_adj = ["Flying","Spider-","God of","Super","Silver","Dashing"]
const hero_noun = ["Man","Woman","Boy","Girl","Dog","Cat","Mouse","potato","pokemon"]

const villain_adj = ["Dark","Poisonous","Emperor of","Ruthless","Flaming","Abyss"]
const villain_noun = ["Mansnipe","boot","fish","demon","Dog","king","fox","carrot","plague"]


function start(){

const a= Math.floor(Math.random()*123);
const b= Math.floor(Math.random()*123);


const hero = hero_adj[Math.floor(Math.random() * hero_adj.length)]+" "+hero_noun[Math.floor(Math.random() * hero_noun.length)];;
document.querySelector(".hero").innerHTML=hero +"( "+a+")";

const villain = villain_adj[Math.floor(Math.random() * villain_adj.length)]+" "+villain_noun[Math.floor(Math.random() * villain_noun.length)];;
document.querySelector(".villain").innerHTML=villain +"( "+b+")";

if(a>b){
    document.querySelector(".res").innerHTML="Our hero has sucessfully defeated the "+villain+". Justice served!!";
    
}
else{
    document.querySelector(".res").innerHTML="Oh no! We lost to "+villain+". Will we ever get justice?";
}


}
