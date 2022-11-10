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

//showing the removing the loading
  document.getElementById("start").style.display = "none";
  document.getElementById("loading").style.display = "block";
  setTimeout(()=> {document.getElementById("loading").style.display = "none";
  document.getElementById('game').style.display='block';} ,4800);

//dipalying the game
  let lives = 10; //the user has 10 lives in the begining
  
  const alphabetDiv = document.getElementById("alphabetDiv");

  for (let i = 0; i < alphabet.length; i++) {
    let btn = document.createElement("button");
    btn.setAttribute("class", "alphabet");
    btn.innerText = alphabet[i];
    alphabetDiv.appendChild(btn);
  }
  document.getElementById('lives').innerText =lives;
  
 

  //fetch Api 
fetch("https://random-word-api.herokuapp.com/word?number=1")
.then(res => res.json())
.then((data) =>{
  let newdata = data[0];

  let word = newdata.split("");
  console.log(word);
  const together = document.querySelector("#place_word")
  for(let i = 0; i < word.length; i++){
      const blank = document.createElement("span");
      blank.textContent = "_ ";
      blank.setAttribute('id',i);
      together.appendChild(blank);
  }

  
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
}
})
