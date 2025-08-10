let boxes=document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0 =true;//playerX,player0

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const reset = ()=>{
    turn0 =true;
    enbleBoxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach( (box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            //playerO
            box.innerText="O";
            turn0=false;
        }
        else{
            //playerX
            box.innerText="X";
            turn0=true;
        }
        box.disabled =true;
        checkWinner();
       
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enbleBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner =(winner) => {
    msg.innerText=`Congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = ()=>{
    for ( let patterns of winPatterns) {
        let pos1val=boxes[patterns[0]].innerText;
        let pos2val=boxes[patterns[1]].innerText;
        let pos3val=boxes[patterns[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !="" ){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    
    
    }

};

newGameBtn.addEventListener("click", reset);
resetbtn.addEventListener("click" ,reset);


