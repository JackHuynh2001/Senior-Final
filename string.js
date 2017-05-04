var exports = module.exports = {};

function PasswordMessage(m){

this.name="Password Message";
this.message=m;
}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    if(unicode>= min&&unicode<=max){
        return true;
    }
    else{
        return false;
    }
}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}


exports.containsUpper =function(str){
    var count=0
for(var i=0;i<str.length;i++){
    if(inRange(str[i],65,90)){
        count++;
    }
}
if(count==str.length){
    return true;
}
}


exports.containsLower =function(str){
    var count=0
for(var i=0;i<str.length;i++){
    if(inRange(str[i],97,122)){
        count++;
    }
}
if(count==str.length){
    return true;
}
}


exports.containsNumerical =function(str){
    var count=0
for(var i=0;i<str.length;i++){
    if(inRange(str[i],48,57)){
        count++;
    }
}
if(count==str.length){
    return true;
}
}


exports.containsSpecial =function(str){
    var count=0
    var special=[33,64,35,36,37,38,94,42]
    for(var i=0;i<str.length;i++){
        for(var j=0;j<special.length;j++){
            if(str[i].charCodeAt(0)==special[j]){
                count++;
            }
        }
    }
    var valid2 = (count == 0)
    try{
    if(!count == 0){
        throw new PasswordMessage("Your meets the rquirements.")
    }
    else{
        throw new PasswordMessage("No special characters. Yes, we're that kind of a-holes.")
    }
}
catch(e){
    console.log(e.name+": "+e.message);
    return valid2;
}
}
