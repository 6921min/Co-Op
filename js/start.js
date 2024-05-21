const main=document.querySelector("#main");
const qna=document.querySelector("#qna");

function addanswer(answertext){
    var a=document.querySelectorAll('.answerbox');
    var answer=document.createElement('button');
    a.appendChild(answer);
    answer.innerHTML=answertext;
}
function gonext(qidx){
    var q=document.querySelector('.qbox');
    q.innerHTML=qnalist[qidx].q;
    for(let i in qnalist[qidx].a){
        addanswer(qnalist[qidx].a[i].answer);
    }
}
function begin(){
    main.style.WebkitAnimation="fadeout 1s";
    main.style.animation="fadeout 1s";
    
    setTimeout(() => {
        qna.style.display="block";
        qna.style.WebkitAnimation="fadein 1s";
        qna.style.animation="fadein 1s";
        setTimeout(() => {main.style.display="none",qna.style.display="block";},450)
        let qidx=0;
        gonext(qidx);
    },450);
}