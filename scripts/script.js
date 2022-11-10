document.addEventListener("DOMContentLoaded", ()=>{ 
  const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", lunchGame);

function lunchGame() {
  
  
//playing audio in loading
  const audiLoading=document.getElementById("audio-loding");
  audiLoading.volume=0.05;
  audiLoading.play();

//showing then removing the loading
  document.getElementById("start").style.display = "none";
  document.getElementById("loading").style.display = "block";
  setTimeout(()=> {document.getElementById("loading").style.display = "none";
  document.getElementById('game').style.display='flex';} ,4300);

//dipalying the game

  let lives = 10; //the user has 10 lives in the begining
 // let charDiv=document.getElementById("alphabetDiv");

  let alphabetDiv = document.createElement('div');
  alphabetDiv.setAttribute('id','alphabetDiv');
  for (let i = 0; i < alphabet.length; i++) {
    let btn = document.createElement("button");
    btn.setAttribute("class", "alphabet");
    btn.innerText = alphabet[i];
    alphabetDiv.appendChild(btn);
  }
  document.getElementById("alphabetDiv").append(alphabetDiv);
  document.getElementById('lives').innerText =lives;
  
 

  //fetch Api 

fetch("https://random-word-api.herokuapp.com/word?number=1")
.then(res => res.json())
.then((data) =>{
  let newdata = data[0];

let spanDiv=document.createElement('div');
spanDiv.setAttribute('id','spanDiv');

  let word = newdata.split("");
  console.log(data);
  let placeWord = document.querySelector("#place_word")
  for(let i = 0; i < word.length; i++){
      let blank = document.createElement("span");
      blank.textContent = "_ ";
      blank.setAttribute('id',i);
      spanDiv.appendChild(blank);
  }
placeWord.appendChild(spanDiv);



  document.querySelector('#alphabetDiv').addEventListener('click',(e)=> {
    if(e.target.tagName === 'BUTTON')
    {
      if(lives >= 0)
      {
        e.target.classList.add('disable')
        if(word.find((value)=> value === e.target.innerText))
        {
          let selectedChar = [];
          word.map((value,index)=> {
            if(value === e.target.innerText)
            {
              selectedChar.push(index)
            }
          })
            for(let i =0;i<selectedChar.length;i++)
            {
              document.getElementById(selectedChar[i]).innerText = e.target.innerText
            }
        }else{
          lives=lives-1
          if(lives >= 0)
          { 
            let img = 1;
            let newImg = document.querySelector(".km"+ lives)
            newImg.setAttribute("src","./video/kishimoto"+lives+".PNG")
            

            document.getElementById('lives').innerText =lives;
            img = img + 1

          }
        }
    }   
  } 

  } )
});

  //restart function:
  document.getElementById('restart').addEventListener('click',()=>{
    window.location.reload();

    // document.querySelector('#spanDiv').remove();
    // document.querySelector('#alphabetDiv').remove();
    // restart()
  });
}

})
