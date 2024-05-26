const main=document.querySelector("#main");
const qna=document.querySelector("#qna");

function addAnswer(answerText,qIdx){
    var a=document.querySelector('.answerBox');
    var answer=document.createElement('button');
    answer.classList.add('answerList');
    a.appendChild(answer);
    answer.innerHTML=answerText;
    
    
}
function goNext(qIdx){
    var q=document.querySelector('q.Box');
    q.innerHTML=qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer,qIdx);
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
        let qIdx=0;
        goNext(qIdx);
    },450);
}