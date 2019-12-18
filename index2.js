let displayusername = document.getElementById ("displayusername");
let myday = document.getElementById ("myday");
let todo = document.getElementById ("todo");
let taskmyday = document.getElementById("taskmyday");
let tasktodo = document.getElementById("tasktodo");
let taskdone = document.getElementById("taskdone")
let datemyday = document.getElementById("datemyday");
let datetodo = document.getElementById("datetodo");
let mydaydiv = document.getElementById("mydaydiv");
let tododiv = document.getElementById("tododiv");
let donediv = document.getElementById("donediv");
let deletetask1 = document.getElementById("deletetask1");

//localStorage.removeItem("arraymyday")
displayusername.innerHTML = localStorage.getItem("username");
let array = []
let arraydone= []
let counter = 1

for(let i=0;i<array.length;i++){
    taskmyday.innerHTML = taskmyday.innerHTML + '<li id="taskmyday"> <div style="width: 100%;">'+ array[i] + '<span style="float: right;"><i class="fa fa-trash jarak" aria-hidden="true"></i></span> <span style="float: right;"><input class="button5 kanan" type="submit" value="Done"></span> </div> </li>'
    
}

function myday2(){
    let popup = prompt("masukkan task anda")
    array.push(popup)
    localStorage.setItem("arraymyday",array)
    taskmyday.innerHTML = taskmyday.innerHTML + '<li id="taskmyday'+ counter +'"> <div style="width: 100%;">'+ popup + '<span style="float: right;"><i class="fa fa-trash jarak" aria-hidden="true"onclick="hapus('+ 'taskmyday' + counter +')"></i></span> <span style="float: right;"><input class="button5 kanan" type="submit" value="Done"onclick="selesai('+ 'taskmyday' + counter +')"></span> </div> </li>'
    counter++
}
function todo2(){
    let popup = prompt("masukkan task anda")
    tasktodo.innerHTML = tasktodo.innerHTML + '<li id="tasktodo"> <div style="width: 100%;">'+ popup +'<span style="float: right;"><i class="fa fa-trash jarak" aria-hidden="true"></i></span> <span style="float: right;"><input class="button8 kanan" type="submit" value="Done"></span> </div> </li>'
}
function mydaybutton(){
    mydaydiv.style.display = "inline"
    tododiv.style.display = "none"
    donediv.style.display = "none"
} 
function todobutton(){
    mydaydiv.style.display = "none"
    tododiv.style.display = "inline"
    donediv.style.display = "none"
}
function donebutton(){
    mydaydiv.style.display = "none"
    tododiv.style.display = "none"
    donediv.style.display = "inline"

    for(let i=0;i<arraydone.length;i++){
        taskdone.innerHTML = taskdone.innerHTML + '<li id="taskmyday"> <div style="width: 100%;">'+ arraydone[i] + '</div> </li>'
        
    }
}
function hapus(x){
    x.remove()
}

function selesai(x){
    arraydone.push(x.value)
    x.remove()
}