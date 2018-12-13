var pinNumber = '';
var amount = [];

function IntialLoad(){
    var tmpHTML = '';

    tmpHTML += '<h1>Bank of Mr. Awesome</h1>';

    tmpHTML += '<div class="wrapper">';
    tmpHTML += '<div class="top"></div>';
    tmpHTML += '<div class="herocolor">';
    // Display screen
    tmpHTML += '<div class="heroscreen" style="color: white;" id="mainScreen"></div>';
    
        
    tmpHTML += '<div class="sidebutton">';
    tmpHTML += '<button  onclick="pinNumber();" style="display: block;width: 70px;height: 40px;margin-bottom: 34px;margin-left: 20px;"value="1">1</button>';
    tmpHTML += '<button  onclick="pinScreen();" style="width: 70px;height: 40px;margin-left: 20px;" value="2" id="answer2">2</button>';
    tmpHTML += '</div>';
        
    tmpHTML += '<div class="cardslot">';
    tmpHTML += '<hr class="hr1" onclick="pinScreen();" width="500px">';
    tmpHTML += '<hr class="hr2" onclick="pinNumber();" width="500px" style="cursor:pointer;">';
    tmpHTML += '<hr class="hr3" onclick="pinNumber();" width="500px"  style="cursor:pointer;">';
    tmpHTML += '<p>Slide the Weems card here</p>';
    tmpHTML += '<p onclick="pinNumber();" style="position: absolute;padding-top: 20px;padding-left: 930px; cursor:pointer;">Grab the cash and give it to Weems</p>';
    tmpHTML += '</div>';
    tmpHTML += '</div>';
    
    tmpHTML += '<div class="keypad">';
    tmpHTML += '<button class="k1 keypad" id="numberOne" value="1" onclick="NumberDisplay(1);">1</button>';
    tmpHTML += '<button class="k2 keypad" id="numberTwo" value="2" onclick="NumberDisplay(2);">2</button>';
    tmpHTML += '<button class="k3 keypad" id="numberThree" value="3" onclick="NumberDisplay(3);">3</button>';
    tmpHTML += '<button class="k4 keypad" id="numberFour" value="4" onClick="NumberDisplay(4);">4</button>';
    tmpHTML += '<button class="k5 keypad" id="numberFive" value="5" onClick="NumberDisplay(5);">5</button>';
    tmpHTML += '<button class="k6 keypad" id="numberSix" value="6" onClick="NumberDisplay(6);">6</button>';
    tmpHTML += '<button class="k7 keypad" id="numberSeven" value="7" onClick="NumberDisplay(7);">7</button>';
    tmpHTML += '<button class="k8 keypad" id="numberEight" value="8" onClick="NumberDisplay(8);">8</button>';
    tmpHTML += '<button class="k9 keypad" id="numberNine" value="9" onClick="NumberDisplay(9);">9</button>';
    tmpHTML += '<button class="kg keypad" id="numberZero" value="0" onClick="NumberDisplay(0)">0</button>';
    tmpHTML += '<button class="k0 keypad" id="decimalPoint" value="." onClick="NumberDisplay(\'decimal\')">.</button>';
    tmpHTML += '<button class="kl keypad" id="greaterThan" value=">" onClick="NumberDisplay(>)">></button>';
    tmpHTML += '<button class="CLEAR keypad" id="clearButton" value="delete" onClick="NumberDisplay(\'clear\')">CLEAR</button>';
    tmpHTML += '<button class="CANCEL keypad" id="cancelButton" value="cancel" onClick="Cancel"();">CANCEL</button>';
    tmpHTML += '<button class="ENTER keypad" id="enterButton" value="enter" onClick="enterButton(1)">ENTER</button>';
    tmpHTML += '</div>';
    tmpHTML += '<hr class="hr4" <p></p>';
    

    document.getElementById('homePage').innerHTML = tmpHTML;
    document.getElementById('homePage').style.display = 'block';
    
    //document.getElementById('withdrawlPage').style.display = 'none';
    MainScreen();

}

function MainScreen(){
    var tmpHTML = 'Please Insert Card';

    document.getElementById('mainScreen').innerHTML = tmpHTML;
    document.getElementById('mainScreen').style.display = 'block';
}



function pinScreen(){
    var tmpHTML = 'Please Enter Pin';
    tmpHTML += '<input type="text" id="pinNumber" />';
    document.getElementById('mainScreen').innerHTML = tmpHTML;
    document.getElementById('mainScreen').style.display = 'block';
}


function checkOrWith(){
    var tmpHTML ='';
    pinNumber = document.getElementById('pinNumber').value;
    if (pinNumber == '1234') {
        WithdrawTransDisplay();
    }
    else {
        tmpHTML += 'Wrong Pin Try Again'
    }
}



/*function pinNumber(){
    var tmpHTML = 'Please Enter Pin';
    

    document.getElementById('mainScreen').innerHTML = tmpHTML;
    document.getElementById('mainScreen').style.display = 'block';
}
*/




/*function enterPin(){
    if (pinNumber == 'valid'){
        withdrawTrans();
        var output=document.getElementById('pinscreen');
        output.innerHTML = '<input type= "password"> id="pin" placeholder="Enter Pin" class="enterpin">';
    }
    
}*/



function NumberDisplay(button){
    if (button == '1'){
        amount.push('1');
        document.getElementById('mainScreen').innerHTML = amount.join('');
    }
    else if (button == '2'){
        amount.push('2');
        document.getElementById('mainScreen').innerHTML = amount.join('');
    }
    else if (button == '3'){
        amount.push('3');
        document.getElementById('mainScreen').innerHTML = amount.join('');
    }
    else if (button == '4'){
        amount.push('4');
        document.getElementById('mainScreen').innerHTML = amount.join('');
    }
    else if (button == '5'){
        amount.push('5');
        document.getElementById('mainScreen').innerHTML = amount.join('');
    }
    else if (button == '6'){
        amount.push('6');
        document.getElementById('mainScreen').innerHTML = amount.join('');
    }
    else if (button == '7'){
        amount.push('7');
        document.getElementById('mainScreen').innerHTML = amount.join('');
    }
    else if (button == '8'){
        amount.push('8');
        document.getElementById('mainScreen').innerHTML = amount.join('');
    }
    else if (button == '9'){
        amount.push('9');
        document.getElementById('mainScreen').innerHTML = amount.join('');
    }
    else if (button == '0'){
        amount.push('0');
        document.getElementById('mainScreen').innerHTML = amount.join('');
    }
    else if (button == 'clear'){
        //amount.push('Clear');
        amount = [];
        document.getElementById('mainScreen').innerHTML = amount.join('');    
    }
    else if (button == 'cancel'){
        //amount.push('');
        //document.getElementById('mainScreen').innerHTML = amount;
    }
    else if(button == 'enter'){
        amount = ('');
        document.getElementById('mainScreen').innerHTML = amount.join('enter');
    }

}  

/*function withdrawTrans() {
    var tmpHTML = ('How much would you like to withdrawal?');
    var tmpHTML = '';
    document.getElementById('mainScreen').innerHTML = tmpHTML;
    if (isNaN(withdrawal) || withdrawal === '') {
        withdrawTrans();
    } else {
        balance -= withdrawal;
        get_balance();
    }
}*/

function enterButton(tmpMode){
    var tmpHTML = '';
    if(tmpMode == '1'){
        // pin number this is also how to set up the withdrawl and transfer
        if (document.getElementById('pinNumber').value == '1234'){
            WithdrawTransDisplay();
        }
        else{
           tmpHTML += 'Invalid pin number. Please press button 2 to try again.'; 
        }

    }
    else if(tmpMode == '2'){
        // amount
        TextReceipt();
    }
    else if(tmpHTML == '3'){
        // phone number
        ThankYou();
    }
}


function withdrawal(){
    var tmpHTML = '';
    if (tmpMode == '1'){
        if(document.getElementById('1'){
        tmpHTML = 'Which account would you like to withdraw from';
    }


}



function TextReceipt(){
    var tmpHTML = '';
    tmpHTML += 'Please enter phone number to recieve your receipt.';
    tmpHTML += '<input type="text" onclick="enterButton(3);" />'

    document.getElementById('mainScreen').innerHTML = tmpHTML;
    document.getElementById('mainScreen').style.display = 'block';
}


function ThankYou(){
    var tmpHTML = '';
     tmpHTML += 'Thank you!';

    document.getElementById('mainScreen').innerHTML = tmpHTML;
    document.getElementById('mainScreen').style.display = 'block';
}


function WithdrawTransDisplay(){
    var tmpHTML = 'What would you like to do today';
     
    
    tmpHTML += '<span> Withdrawal</span><br /><span>or Transfer Click the 1 or 2 button </span>';

    

    document.getElementById('mainScreen').innerHTML = tmpHTML;
    
} 



/*function transaction(tempNUM){
    if (tempNUM == '1'){
    withdrawMoney();
    } else {
        transferMoney();
    }
}*/
