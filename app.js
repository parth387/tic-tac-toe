let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno =true;//playerx,playery
let winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () => {
    let turno =true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=> // to interract with events.
    {
        if(turno){ //player O's turn
            box.innerText="O";//it will print if its turn of 'O'.
            turno=false;//it will not appear if button of 'O' clicked and turn 'O' is completed.
        }
        else{ //player X's turn:
            box.innerText="X";//it will print if its turn of 'X'.
            turno=true;//it will not appear if button of 'X' clicked and turn 'X' is completed.
        }
        box.disabled=true;
        checkwinner();
    });

});

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
let winner;
const showWinner = () =>{
    msg.innerText = `Congratulation, Winner!!`;
    msgcontainer.classList.remove("hide");//this will remove class hide from class list.
    //message container will visible.
    disableboxes();

}
 checkwinner = () =>{ // to check all boxes
    for (let pattern of winpatterns){ // to calculate the position / index value.
         
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val & pos2val == pos3val){
                
                showWinner();
            }
            
        }
    }
}

resetbtn.addEventListener("click",resetgame);
newgamebtn.addEventListener("click",resetgame);