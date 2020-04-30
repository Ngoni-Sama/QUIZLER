const coAns=['D','D','E','E','E','C','C','D','B','B'];
const form =document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit',e=>{
    e.preventDefault();
    let score=0;
    const usAns=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value];
    usAns.forEach((answer,index)=>{
if(answer===coAns[index]){
score+=10;
}
    });
//result publishing
scrollTo(0,0);

result.classList.remove('d-none');
let output=0;
const timer=setInterval(()=>{
    result.querySelector('span').textContent=`${output}%`;
    if(output===score){
        clearInterval(timer)
    }else{
        output++
    }

},15);
});

