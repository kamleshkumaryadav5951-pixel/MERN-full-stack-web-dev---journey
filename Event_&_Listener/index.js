// function changetext(event){
//     console.log(event);
//     let fpara = document.getElementById('fpara');
//     fpara.textContent="the world is crule"
// }
// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', changetext);
// // fpara.removeEventListener('click', changetext)


// let anchorElement = document.getElementById('fanchor');

// anchorElement.addEventListener('click', function (event){
//     event.preventDefault();
//     anchorElement.textContent='click done jii'
// });
// let paras = document.querySelectorAll('p');

// for(let i = 0; i < paras.length;i++){
//     let para = paras[i];
//     para.addEventListener('click',function(){
//         alert("you have clicked para:"+ (i+1));
//     })
// }

function alertPara(event){
        if(event.target.nodeName === 'SPAN'){
            alert("you have clicked para:"+ event.target.textContent);
        }
        
}

let mydiv = document.getElementById('wrapper');

document.addEventListener('click',alertPara)