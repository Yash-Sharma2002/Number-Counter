

    let  count =0
function decre(){
    let num = document.getElementById("display")
    let hide = document.getElementById("hidden")
    if(count==0){
        hide.innerHTML = "Not Allowed to decrease."
    }
    else{
        count=count-1
        num.innerText=count
    console.log(count)
    }
}
function save(memo={}){
    let sve = document.getElementById("previous")
    sve.textContent+=" ["+count+"]"+" - "
    
    let num = document.getElementById("display")
    num.innerHTML=0
    count=0
}


function incre(){
    let num = document.getElementById("display")
    let hide = document.getElementsByClassName("hidden")
        count=count+1
        num.innerText=count
    console.log(count)
}