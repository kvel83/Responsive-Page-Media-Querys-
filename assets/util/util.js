/* FILTRO DE PRODUCTOS */
function hideAndShow(id1) {
    let div = document.getElementsByClassName('productCard');
    for (i = 0; i < div.length; i++) {
        if (!div[i].classList.contains(id1)) {
            div[i].style.display = 'none';
        } else if (div[i].classList.contains(id1)) {
            div[i].style.display = 'flex';
            // if(id1!= 'all'){
                // div[i].style.maxHeight='calc((100%/10)*7)';
            // }
        }
    }
}
// FILTRO PRODUCTOS EN SELECT
function hideAndShowSelect() {
    let div = document.getElementsByClassName('productCard');
    let sel=document.getElementById('filter').value;
    for (i = 0; i < div.length; i++) {
        if (!div[i].classList.contains(sel)) {
            div[i].style.display = 'none';
        } else if (div[i].classList.contains(sel)) {
            div[i].style.display = 'flex';
            // if(id1!= 'all'){
                // div[i].style.maxHeight='calc((100%/10)*7)';
            // }
        }
    }
}

//PAGINADOR
function paginator(page){
    let productCards=document.getElementsByClassName('productCard');
    for (i = 0; i < productCards.length; i++) {
        if ((page==1 && productCards[i].classList.contains('page2')) || (page==2 && !productCards[i].classList.contains('page2'))) {
            productCards[i].style.display = 'none';
        };
        if ((page==1 && !productCards[i].classList.contains('page2')) || (page==2 && productCards[i].classList.contains('page2'))) {
            productCards[i].style.display = 'flex';
        };
    }
}






















