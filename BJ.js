/*
Tee ohjelma jossa käyttäjälle arvotaan kaksi korttia ja 
tietokone-vastustajalle kaksi korttia. Tämän jälkeen edetään siten, 
että käyttäjä saa päättää haluaako nostaa lisää kortteja. 
Hyödynnä korttien nostamisessa funktiota. 

x
Tietokone ei nosta lisää kortteja vaan jää lukemaan 
jonka sai kahdesta ensimmäisestä kortista. Lähemmäs 21 päässyt pelaaja voittaa.
x

Kortteja nostetaan lisää yksi kerrallaan, niin kauan kuin käyttäjä haluaa 
tai kunnes hänen korttiensa lukema ylittää 21, jolloin hän on hävinnyt.
 
Lopuksi tulostetaan voittaja ja korttien yhteenlasketut lukemat funktiota 
hyödyntäen esim. seuraavasti:

Voitit! Sinulla on 20, tietokoneella on 18.

tai
Hävisit! Sinulla on 22, tietokoneella on 12.

Saat vähän lisää haastetta, kun teet tehtävän graafisena.
*/
CardPack = [
    ["1", new Image()],
    ["2", new Image()],
    ["3", new Image()],
    ["4", new Image()],
    ["5", new Image()],
    ["6", new Image()],
    ["7", new Image()],
    ["8", new Image()],
    ["9", new Image()],
    ["10", new Image()],
    ["10", new Image()],
    ["10", new Image()],
    ["10", new Image()],
    ["1", new Image()],
    ["2", new Image()],
    ["3", new Image()],
    ["4", new Image()],
    ["5", new Image()],
    ["6", new Image()],
    ["7", new Image()],
    ["8", new Image()],
    ["9", new Image()],
    ["10", new Image()],
    ["10", new Image()],
    ["10", new Image()],
    ["10", new Image()],
    ["1", new Image()],
    ["2", new Image()],
    ["3", new Image()],
    ["4", new Image()],
    ["5", new Image()],
    ["6", new Image()],
    ["7", new Image()],
    ["8", new Image()],
    ["9", new Image()],
    ["10", new Image()],
    ["10", new Image()],
    ["10", new Image()],
    ["10", new Image()],
    ["1", new Image()],
    ["2", new Image()],
    ["3", new Image()],
    ["4", new Image()],
    ["5", new Image()],
    ["6", new Image()],
    ["7", new Image()],
    ["8", new Image()],
    ["9", new Image()],
    ["10", new Image()],
    ["10", new Image()],
    ["10", new Image()],
    ["10", new Image()]
  ]
  function LoadPics(){
  CardPack[0][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/ace_of_clubs.png?raw=true"
  CardPack[1][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/2_of_clubs.png?raw=true"
  CardPack[2][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/3_of_clubs.png?raw=true"
  CardPack[3][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/4_of_clubs.png?raw=true"
  CardPack[4][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/5_of_clubs.png?raw=true"
  CardPack[5][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/6_of_clubs.png?raw=true"
  CardPack[6][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/7_of_clubs.png?raw=true"
  CardPack[7][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/8_of_clubs.png?raw=true"
  CardPack[8][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/9_of_clubs.png?raw=true"
  CardPack[9][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/10_of_clubs.png?raw=true"
  CardPack[10][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/jack_of_clubs.png?raw=true"
  CardPack[11][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/queen_of_clubs.png?raw=true"
  CardPack[12][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/king_of_clubs.png?raw=true"
  
  CardPack[13][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/ace_of_hearts.png?raw=true"
  CardPack[14][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/2_of_hearts.png?raw=true"
  CardPack[15][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/3_of_hearts.png?raw=true"
  CardPack[16][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/4_of_hearts.png?raw=true"
  CardPack[17][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/5_of_hearts.png?raw=true"
  CardPack[18][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/6_of_hearts.png?raw=true"
  CardPack[19][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/7_of_hearts.png?raw=true"
  CardPack[20][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/8_of_hearts.png?raw=true"
  CardPack[21][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/9_of_hearts.png?raw=true"
  CardPack[22][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/10_of_hearts.png?raw=true"
  CardPack[23][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/jack_of_hearts.png?raw=true"
  CardPack[24][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/queen_of_hearts.png?raw=true"
  CardPack[25][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/king_of_hearts.png?raw=true"
  
  CardPack[26][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/ace_of_spades.png?raw=true"
  CardPack[27][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/2_of_spades.png?raw=true"
  CardPack[28][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/3_of_spades.png?raw=true"
  CardPack[29][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/4_of_spades.png?raw=true"
  CardPack[30][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/5_of_spades.png?raw=true"
  CardPack[31][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/6_of_spades.png?raw=true"
  CardPack[32][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/7_of_spades.png?raw=true"
  CardPack[33][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/8_of_spades.png?raw=true"
  CardPack[34][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/9_of_spades.png?raw=true"
  CardPack[35][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/10_of_spades.png?raw=true"
  CardPack[36][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/jack_of_spades.png?raw=true"
  CardPack[37][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/queen_of_spades.png?raw=true"
  CardPack[38][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/king_of_spades.png?raw=true"
  
  CardPack[39][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/ace_of_diamonds.png?raw=true"
  CardPack[40][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/2_of_diamonds.png?raw=true"
  CardPack[41][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/3_of_diamonds.png?raw=true"
  CardPack[42][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/4_of_diamonds.png?raw=true"
  CardPack[43][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/5_of_diamonds.png?raw=true"
  CardPack[44][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/6_of_diamonds.png?raw=true"
  CardPack[45][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/7_of_diamonds.png?raw=true"
  CardPack[46][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/8_of_diamonds.png?raw=true"
  CardPack[47][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/9_of_diamonds.png?raw=true"
  CardPack[48][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/10_of_diamonds.png?raw=true"
  CardPack[49][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/jack_of_diamonds.png?raw=true"
  CardPack[50][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/queen_of_diamonds.png?raw=true"
  CardPack[51][1].src = "https://github.com/jooapa/Playing-Card-Texture-set/blob/main/tex/king_of_diamonds.png?raw=true"

  }
var RandomCard	= undefined
PlayerHand = []
AIHand = []
MainCardCount= []
PLCombnine = 0
AICombnine = 0
suffledDeck = []
var AIHandPick = 0

function Suffle(){
    suffledDeck = [...CardPack];
    suffledDeck.sort(() => Math.random() - 0.5);
}




function Start(){
    console.log("Ladataan Kuvia...")
    document.getElementById("Lataus").innerHTML = "Ladataan Kuvia..."
    
    LoadPics();
    
    console.clear()
    document.getElementById("Lataus").innerHTML = ""
    document.getElementById("MainCards").innerHTML = "";
    document.getElementById("AICards").innerHTML = "";
    PlayerHand = []
    AIHand = []
    PLCombnine = 0
    AICombnine = 0
    Suffle();
    AIHitCard();
    AIHitCard();
    HitCard();
    HitCard();  
    document.getElementById("restart").style.visibility='hidden';
    document.getElementById("standbutton").style.visibility='visible';
    document.getElementById("hitbutton").style.visibility='visible';
    document.getElementById("PLCombCards").style.visibility='hidden';
    document.getElementById("AICombCards").style.visibility='hidden'; 
    CheckWinCon();
    
    


    
}



function AIHitCard(){
    let card = suffledDeck.pop()
    AIHand.push(card) 
    card[1].style.width = '156px';
    card[1].style.height = 'auto';
    AICards.appendChild(card[1]);
    Calc();
    document.getElementById("AIyht").innerHTML = AICombnine;
   
}

function HitCard(){
    let card = suffledDeck.pop()
    PlayerHand.push(card) 
    card[1].style.width = '156px';
    card[1].style.height = 'auto';
    MainCards.appendChild(card[1]);
    Calc();
    document.getElementById("Plyht").innerHTML = PLCombnine;
    CheckWinCon();

}

function CheckWinCon(){

    if (AICombnine > 21){
        StandCalc();
    }
    else if(AICombnine == 21){
        StandCalc();
    }

     if (PLCombnine > 21){
        StandCalc();

    }
    else if(PLCombnine == 21){
        StandCalc();
    }
    
}

function Calc(){
    PLCombnine = 0
    AICombnine = 0

    for (i = 0; i < PlayerHand.length; i++){
        PLCombnine = PLCombnine +  Number(PlayerHand[i][0])
    
    }
    for (i = 0; i < AIHand.length; i++){
        AICombnine = AICombnine +  Number(AIHand[i][0])
    
    }

}
function StandCalc(){
    PLCombnine = 0
    AICombnine = 0

    for (i = 0; i < PlayerHand.length; i++){
        PLCombnine = PLCombnine +  Number(PlayerHand[i][0])
    
    }
    for (i = 0; i < AIHand.length; i++){
        AICombnine = AICombnine +  Number(AIHand[i][0])
    
    }
    Stand();
}




function Stand(){
    let text = ""
    let text1 = ""
    let Check = true

    console.log("tulee")
    if (PLCombnine > 21 && AICombnine < 21){
        
        text = "Hävisit, Sinulla on "
        text1 = " Tietokoneella on "
    }



    else if(PLCombnine > AICombnine && Check == true){
        text = "Voitit, Sinulla on "
        text1 = " Tietokoneella on "
        Check = false
    }
    else if (AICombnine > 21 && Check == true){
        text = "Voitit, Sinulla on "
        text1 = " Tietokoneella on "
        Check = false
    }
    else if(PLCombnine < AICombnine && Check == true){
        text = "Hävisit, Sinulla on "
        text1 = " Tietokoneella on "
        Check = false
    }
    
    else if(PLCombnine == AICombnine && Check == true){
        text = "Tasapeli, Sinulla on "
        text1 = " Tietokoneella on "
        Check = false
    }
    else if(PLCombnine>21 && AICombnine>21 && Check == true){
        text = "Tasapeli, Sinulla on "
        text1 = " Tietokoneella on "
        Check = false
    }
    


    document.getElementById("PLCombCards").innerHTML =text + PLCombnine + text1 + AICombnine;
    document.getElementById("PLCombCards").style.visibility='visible';
    document.getElementById("AICombCards").style.visibility='visible';
    
    document.getElementById("standbutton").style.visibility='hidden';
    document.getElementById("hitbutton").style.visibility='hidden';
    document.getElementById("restart").style.visibility='visible';



}

