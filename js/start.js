const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint =12;
const selct=[];


function goResult(){
    qna.style.WebkitAnimation="fadeout 1s";
    qna.style.animation="fadeout 1s";
    setTimeout(() => {
        result.style.WebkitAnimation="fadein 1s";
        result.style.animation="fadein 1s";
        setTimeout(() => {        
            qna.style.display="none";
            result.stlye.display="block"
        },450)})

        console.log(select);
}

function addAnswer(answerText,qIdx,idx) {
    var a=document.querySelector('.answerBox');
    var answer=document.createElement('button');
    answer.classList.add('answerList');
    a.appendChild(answer);
    answer.innerHTML=answerText;
    
    answer.addEventListener("click",function(){
        var children = document.querySelectorAll('.answerList');
        for(let i=0;i<children.length;i++){
            children[i].disabled='true';
            children[i].style.display='none';
        }
        
        setTimeout(()=>{
            //for(let i=0;i<children.length;i++){
            //    children[i].stylee.display='none';
            //}
            goNext(++qIdx);
        },450)
    },false);
}

function goNext(qIdx){
    if(qIdx===endPoint){goResult();}
    var q=document.querySelector('.qBox');
    q.innerHTML=qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer,qIdx,i);
    }
}

function begin(){
    main.style.WebkitAnimation="fadeout 1s";
    main.style.animation="fadeout 1s";
    setTimeout(() => {
        qna.style.WebkitAnimation="fadein 1s";
        qna.style.animation="fadein 1s";
        setTimeout(() => {        
            main.style.display="none";
            qna.stlye.display="block"
        },450);
        let qIdx=0;
        goNext(qIdx);
    },450);
}