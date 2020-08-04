//generate pin
document.getElementById('pin').addEventListener('click',function(){
            
    var pin = Math.floor(Math.random() * 9000) + 1000;
    document.getElementById('pinDigit').value = pin;

    var notification1 =document.getElementById('notMatch');
    notification1.style.display = 'none';
    var notification2 = document.getElementById('match');
    notification2.style.display = 'none';

})


// input number
function buttonInput(num){
    let screen = document.getElementById('inputScreen');
        screen.value += num;
            if(num ==''){
                screen.value = num;
            }
        
    document.getElementById('inputScreen').value = screen.value;
} 


function backSpace(){
                var screen = document.getElementById('inputScreen').value;
                var backSpace = screen.slice(0,- 1);
                document.getElementById('inputScreen').value = backSpace;

}




//submit event

const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click',function(){ 


    const screenDigit = document.getElementById('inputScreen').value;
    var pin = document.getElementById('pinDigit').value;

    if(screenDigit == pin && pin != "" && screenDigit != ""){  

        const match = document.getElementById("match");
        match.style.display = "block";
        const notMatch = document.getElementById("notMatch");
         notMatch.style.display = "none";

         const submitBtn = document.getElementById('submit');
         submitBtn.disabled = true;
         submitBtn.style.backgroundColor ="green";

         document.getElementById('inputScreen').value = "";
         document.getElementById('pinDigit').value ="";

         document.getElementById('leftAction').innerText = "";


        
    }
    else
    {
        const notMatch = document.getElementById("notMatch");
         notMatch.style.display = "block";
         const match = document.getElementById("match");
        match.style.display = "none";

         const submitBtn = document.getElementById('submit');
         
    }
     
    var defaultNumber = document.getElementById('tryNumber').innerText;
    var tryNumber     = defaultNumber -  1;

    if(tryNumber<=3&& tryNumber>0){
        document.getElementById('tryNumber').innerText = tryNumber;

    }

    else{


        document.getElementById('leftAction').innerText = "plz reload page again and  generate new pin";
         const submitBtn = document.getElementById('submit');
         submitBtn.disabled = true;
         submitBtn.style.backgroundColor ="#A0A6AB";

    }


})