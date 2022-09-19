let RATING = null;

const RATING_ARRAY = ["one", "two", "three", "four", "five"];

const RATING_OBJECT = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5
};

const submitButton = document.querySelector(".submit-btn");

const beforeRatingComponent = document.querySelector(".before-rating");

const afterRatingComponent = document.querySelector(".after-rating");

const rateButtons = document.getElementsByClassName("rate-btn");

const ratedText = document.querySelector(".rated-text");

function resetRateButtonStyles() {
  for (let i = 0; i < rateButtons.length; i++) {
    rateButtons[i].style.background = "buttonface";
  }
}

for (let i = 0; i < rateButtons.length; i++) {
  rateButtons[i].addEventListener(
    "click",
    function (event) {
      const rateValue = event.target.className.split(" ")[1];
      resetRateButtonStyles();
      event.target.style.background = "green";
      RATING = RATING_OBJECT[rateValue];
    },
    false
  );
}

submitButton.addEventListener("click", function () {
  if (!RATING) return;
  ratedText.innerText = "You selected " + RATING + " out of 5";
  beforeRatingComponent.style.display = "none";
  afterRatingComponent.style.display = "block";
});


//  document.querySelector('#Rock').onclick = function() {
//         userChoice = "Rock";
//  }

//  let
//         user_choice = document.querySelector('#user-choice')
//         user_choice.addEventListener('click', function() {
        
//         })





// function submit(){
//     document.getElementById('image')
//     .src="images/illustration-thank-you.svg" ;
//     document.getElementById('message')
//     .innerHTML="You selected 5 out of 5";
//     document.getElementById('message1')
//     .innerHTML="Thank You" ;




//     var maincol= document.getElementById('main-column');
//     maincol.style.justifyContent="center";
//     maincol.style.display="flex";
//     maincol.style.padding= "30px 35px 30px 25px";

    

   
//     var image =document.getElementById('image');
//     image.style.display="flex";
//     image.style.width="150px"
//     image.style.height="100px"
//     image.style.height="100px"




//     var headding= document.getElementById('message');
//     headding.style.borderRadius="20px" ;
//     headding.style.backgroundColor= "hsl(216, 12%, 54%, 0.1)";
//     headding.style.padding="2px 10px 2px 10px";
//     headding.style.fontSize="15px";
//     headding.style.display="flex";
//     headding.style.justifyContent="center";
//     headding.style.alignItems="center";
//     headding.style.color="hsl(25, 97%, 53%)";


//     var headding= document.getElementById('message1');
//     headding.style.display="flex";
//     headding.style.color="white";
//     headding.style.textAlign="center";
//     headding.style.fontFamily="Overpass', sans-serif"
//     headding.style.fontWeight="700";
//     headding.style.fontSize="30px"
//     headding.style.margin="30px 10px 15px 10px"
    

//     var rating=document.getElementById('mheadding');
//     rating.style.display="flex";
//     rating.style.justifyContent="center";
//     rating.style.alignItems="center";


//     var rating1=document.getElementById('rating');
//     rating1.style.display="flex";
//     rating1.style.justifyContent="center";
//     rating1.style.alignItems="center";

//     var roundbutton=document.getElementById('round-buttons');
//     roundbutton.innerHTML=" We appreciate you taking the time to give a rating<br>If you ever need more support, don't hesitate to <br> get in touch!" ;
//     roundbutton.style.textAlign="center";
//     roundbutton.style.fontSize="15px";
//     roundbutton.style.paddingTop="0px";

//     roundbutton.style.fontFamily ="Overpass, sans-serif";
//     roundbutton.style.fontweight = "200";
//     roundbutton.style.color = "hsl(217, 12%, 63%)";


    
//     var mobimg = document.getElementById('simage');
//     mobimg.style.justifyContent="center";
//     mobimg.style.display="flex";

    
//     var bgbutton= document.getElementById('imgbg');
//     bgbutton.style.backgroundColor="Transparent"
//     bgbutton.style.backgroundRepeat="no-repeat";
//     bgbutton.style.border="none";

  
// }


// // button 1//

// // function button1 (){
// //     document.getElementById('image')
// //     .src="images/illustration-thank-you.svg" ;
// //     document.getElementById('message')
// //     .innerHTML="You selected 1 out of 5";
// //     document.getElementById('message1')
// //     .innerHTML="Thank You" ;


// //     var maincol= document.getElementById('main-column');
// //     maincol.style.justifyContent="center";
// //     maincol.style.display="flex";
// //     maincol.style.padding= "30px 35px 30px 25px";

    

   
// //     var image =document.getElementById('image');
// //     image.style.display="flex";
// //     image.style.width="150px"
// //     image.style.height="100px"
// //     image.style.height="100px"




// //     var headding= document.getElementById('message');
// //     headding.style.borderRadius="20px" ;
// //     headding.style.backgroundColor= "hsl(216, 12%, 54%, 0.1)";
// //     headding.style.padding="2px 10px 2px 10px";
// //     headding.style.fontSize="15px";
// //     headding.style.display="flex";
// //     headding.style.justifyContent="center";
// //     headding.style.alignItems="center";
// //     headding.style.color="hsl(25, 97%, 53%)";


// //     var headding= document.getElementById('message1');
// //     headding.style.display="flex";
// //     headding.style.color="white";
// //     headding.style.textAlign="center";
// //     headding.style.fontFamily="Overpass', sans-serif"
// //     headding.style.fontWeight="700";
// //     headding.style.fontSize="30px"
// //     headding.style.margin="30px 10px 15px 10px"
    

// //     var rating=document.getElementById('mheadding');
// //     rating.style.display="flex";
// //     rating.style.justifyContent="center";
// //     rating.style.alignItems="center";


// //     var rating1=document.getElementById('rating');
// //     rating1.style.display="flex";
// //     rating1.style.justifyContent="center";
// //     rating1.style.alignItems="center";

// //     var roundbutton=document.getElementById('round-buttons');
// //     roundbutton.innerHTML=" We appreciate you taking the time to give a rating<br>If you ever need more support, don't hesitate to <br> get in touch!" ;
// //     roundbutton.style.textAlign="center";
// //     roundbutton.style.fontSize="15px";
// //     roundbutton.style.paddingTop="0px";

// //     roundbutton.style.fontFamily ="Overpass, sans-serif";
// //     roundbutton.style.fontweight = "200";
// //     roundbutton.style.color = "hsl(217, 12%, 63%)";


    
// //     var mobimg = document.getElementById('simage');
// //     mobimg.style.justifyContent="center";
// //     mobimg.style.display="flex";

    
// //     var bgbutton= document.getElementById('imgbg');
// //     bgbutton.style.backgroundColor="Transparent"
// //     bgbutton.style.backgroundRepeat="no-repeat";
// //     bgbutton.style.border="none";

  

// // }




