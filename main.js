let click = 0;
let clickLeft=0;
btnRight.onclick=()=>{
    if(click === 0){
        shoeBasic.style.display="none";
        shoeGreen.style.display="flex";
        click = 1;
    } else if(click === 1){
        shoeOrange.style.display="flex";
        shoeGreen.style.display="none";
        click = 2;
    } else if(click === 2){
        shoeDarkblue.style.display="flex";
        shoeOrange.style.display="none";
        click = 3;
    } else if(click === 3){
        shoeBasic.style.display="flex";
        shoeDarkblue.style.display="none";
        click = 0;
    }
}
btnLeft.onclick=()=>{
    if(clickLeft === 0){
        shoeDarkblue.style.display="flex";
        shoeBasic.style.display="none";
        clickLeft=1;
    }else if(clickLeft === 1){
        shoeDarkblue.style.display="none";
        shoeOrange.style.display="flex";
        clickLeft=2;
    }else if(clickLeft===2){
        shoeOrange.style.display="none";
        shoeGreen.style.display="flex";
        clickLeft=3;
    }else if(clickLeft===3){
        shoeGreen.style.display="none";
        shoeBasic.style.display="flex";
        clickLeft=0;
    }
}
document.getElementById('card1').onmousemove=()=>{
    shoeBasic.style.display="none";
    shoeGreen.style.display="flex";
}
document.getElementById('card2').onmousemove=()=>{
    shoeOrange.style.display="flex";
    shoeBasic.style.display="none";
}
document.getElementById('card3').onmousemove=()=>{
    shoeDarkblue.style.display="flex";
    shoeBasic.style.display="none";
}
document.getElementById('card1').onmouseout=()=>{
    shoeBasic.style.display="flex";
    shoeGreen.style.display="none";
}
document.getElementById('card2').onmouseout=()=>{
    shoeBasic.style.display="flex";
    shoeOrange.style.display="none";
}
document.getElementById('card3').onmouseout=()=>{
    shoeBasic.style.display="flex";
    shoeDarkblue.style.display="none";
}
