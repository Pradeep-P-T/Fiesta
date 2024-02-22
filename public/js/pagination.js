let thisPage =1;
let limit = 8;
let list = document.querySelectorAll('.box');

function loadItem(){
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage -1;
    list.forEach((box, key)=>{
        if(key >= beginGet && key <= endGet){
            box.style.display = 'block';
        }else{
            box.style.display = 'none';
        }
    })
    listPage();
}

loadItem();

function listPage(){
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = '';

    if(thisPage != 1){
        let prev = document.createElement('li');
        prev.innerText = 'PREV';
    }

    for(i=1; i<=count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }
}

function changePage(i){
    thisPage = i;
    loadItem();
}