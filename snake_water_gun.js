let esnake = document.getElementById("snake");
let ewater = document.getElementById("water");
let egun = document.getElementById("gun");
let ans = document.getElementById("ans");
let val = document.getElementById("value");

let arr = ["snake","water","gun"];
let cntuser=0,cntcpu=0,num=0;

function snake() {
    val.innerHTML = "snake";
}
function water() {
    val.innerHTML = "water";
}
function gun() {
    val.innerHTML = "gun";
}

function submit() {
    let user = val.innerText;
    let cpu = arr[Math.floor(Math.random()*3)];

    // alert(user);
    // alert(cpu);
    if(user=="snake" && cpu=="water" ||user=="gun" && cpu=="snake" || user=="water" && cpu=="gun"){
        cntuser++;
        num++;
    }
    if(user=="water" && cpu=="snake" ||user=="snake" && cpu=="gun" || user=="gun" && cpu=="water"){
        cntcpu++;
        num++;
    }
    if(user=="water" && cpu=="water" ||user=="snake" && cpu=="snake" || user=="gun" && cpu=="gun"){
        cntcpu=cntcpu;
        cntuser=cntuser;
        num++;
        
    }
    // alert(cntcpu);
    // alert(cntuser);
    // alert(num);
    if (num<10) {
        ans.innerHTML="Play again " +num;
    }
    else{
        clearInterval(interval);
        esnake.style.visibility = "hidden";
        ewater.style.visibility = "hidden";
        egun.style.visibility = "hidden";
        if(cntuser>cntcpu){
            ans.innerHTML="Congratulation! Winner is user";
        }
        else if(cntcpu==cntuser){
            ans.innerHTML="Game is Tie. better luck next time";
        }
        else{
            ans.innerHTML="Winner is CPU. Better luck next time";
        }
    }
}
let interval = setInterval(function(){
    setTimeout(submit(),8000);
    if(num<10){
        setTimeout(function() {
            ans.innerHTML="Click button and choose one "+num;
        },2000)
    }
},10000);