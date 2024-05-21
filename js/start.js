const main=document.querySelector("#main");
const qna=document.querySelector("#qna");

function gonext(){
    var q=document.querySelector('.qbox');
    q.innerHTML=qnalist[0].q;
}
function begin(){
    main.style.WebkitAnimation="fadeout 1s";
    main.style.animation="fadeout 1s";
    
    setTimeout(() => {
        qna.style.display="block";
        qna.style.WebkitAnimation="fadein 1s";
        qna.style.animation="fadein 1s";
        setTimeout(() => {main.style.display="none",qna.style.display="block";},450)
    },gonext(); 450);

    //main.style.display="none";
    //qna.style.display="block";
}