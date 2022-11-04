/* FILTRO DE PRODUCTOS */
function hideAndShow(id1) {
    let div = document.getElementsByClassName('productCard');
    for (i = 0; i < div.length; i++) {
        if (!div[i].classList.contains(id1)) {
            div[i].style.display = 'none';
        } else if (div[i].classList.contains(id1)) {
            div[i].style.display = 'flex';
        }
    }
    if(id1=='all'){
        showPaginator();
    }else{
        hidePaginator();
    };
    sameSelection(id1);
}
// FILTRO PRODUCTOS EN SELECT
function hideAndShowSelect() {
    let div = document.getElementsByClassName('productCard');
    let sel=document.getElementById('filter').value;
    let main=document.getElementsByClassName('main');
    let pager=document.getElementsByClassName("link");
    for (i = 0; i < div.length; i++) {
        if (!div[i].classList.contains(sel)) {
            div[i].style.display = 'none';
        } else if (div[i].classList.contains(sel)) {
            div[i].style.display = 'flex';
        }
    }
    if(sel=='all'){
        showPaginator();
    }else{
        hidePaginator();
    };
    main[0].scrollTop=0;
}

//MOSTRAR PAGINADOR
function showPaginator(){
    let paginator=document.getElementsByClassName("pager");
    for(i=0; i< paginator[0].childElementCount; i++){
        paginator[0].children[i].style.display='flex';
    }
}
//ESCONDER PAGINADOR
function hidePaginator(){
    let paginator=document.getElementsByClassName("pager");
    for(i=0; i< paginator[0].childElementCount; i++){
        paginator[0].children[i].style.display='none';
    }
}
//IGUALAR SELECCION DE MENU Y SELECT
function sameSelection(seleccion){
    let sel=document.getElementById('filter');
    sel.value=seleccion;
}

//PAGINADOR
function paginator(page){
    let productCards=document.getElementsByClassName('productCard');
    for (i = 0; i < productCards.length; i++) {
        if ((page==1 && productCards[i].classList.contains('page2')) || (page==2 && !productCards[i].classList.contains('page2')) || (page==0 && productCards[i].classList.contains('page2')) || (page==3 && !productCards[i].classList.contains('page2'))) {
            productCards[i].style.display = 'none';
        };
        if ((page==1 && !productCards[i].classList.contains('page2')) || (page==2 && productCards[i].classList.contains('page2')) || (page==0 && !productCards[i].classList.contains('page2')) || (page==3 && productCards[i].classList.contains('page2'))) {
            productCards[i].style.display = 'flex';
        };
    };

}






















