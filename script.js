const blocks = document.querySelectorAll(".block");
for(let i = 0 ; i<blocks.length ; i++){
    blocks[i].onclick=function(){
        for(let i = 0 ;i<blocks.length ; i++){
            blocks[i].classList.remove("open")
        }
        blocks[i].classList.add("open")
    }
}