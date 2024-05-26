const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function goNext(){
    var q=document.querySelector('.qBox');
    q.innerHTML=qnaList[0].q;
}

function begin(){
    setTimeout(() => {
        //에니메이션
        //애니메이션
        setTimeout(() => {//애니메이션//애니메이션
        },450);
        goNext();
    },450);
}