const texts=document.querySelector('.texts');
window.SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition=new window.SpeechRecognition();
recognition.interimResults=true;
let p=document.createElement('p');
recognition.addEventListener("result",(e)=>{
    const text=Array.from(e.results).map(result[0]).map(result.transcript).join('');
    p.innerText=text;
    texts.appendChild(p);
    if(e.results[0].isFinal){
        if(text.includes('hello')){
        p=document.createElement('p');
        p.classList('replay');
        p.innerText='HI';
        texts.appendChild(p);
        }
        if(text.includes('open youtube')){
            p=document.createElement('p');
            p.classList('replay');
            p.innerText='openining app';
            texts.appendChild(p);
            window.open('http://youbtube.com')
            }
        p=document.createElement('p');
    }

    console.log(text);
    
})
recognition.addEventListener('end',()=>{
    recognition.start();
})
recognition.start();

