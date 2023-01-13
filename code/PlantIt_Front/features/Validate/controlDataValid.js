function controlDataValid(data) {

    //   console.log("data" == data)

    let valid = true

    if(data.minSoilmoisute!= ''){
        // console.log('soilmoisture')
        if(parseInt(data.minSoilmoisute) == NaN){
            valid = false;
        }
    } 
    //  c

    if(data.maxSoilmoisute!= ''){
        if(parseInt(data.maxSoilmoisute) == NaN){
            valid = false;
        }
    }
    


    if(data.minTemp!= ''){
        if(parseInt(data.minTemp) == NaN){
            valid = false;
        }
    }
    
    if(data.maxTemp!= ''){
        if(parseInt(data.maxTemp) == NaN){
            valid = false;
        }
    }
    
    if(data.minlightingHours!= ''){
        if(parseInt(data.minlightingHours) == NaN){
            valid = false;
        }
    }
    
    if(data.maxlightingHours!= ''){
        if(parseInt(data.maxlightingHours) == NaN){
            valid = false;
        }
    }
    
    if(data.minHumidity!= ''){
        if(parseInt(data.minHumidity) == NaN){
            valid = false;
        }
    }
    
    if(data.maxHumidity!= ''){
        if(parseInt(data.maxHumidity) == NaN){
            valid = false;
        }
    }

    // console.log(valid)

    let validNumber = true

    if(valid){
    if(parseInt(data.minSoilmoisute)<0 || parseInt(data.minSoilmoisute)>70 ){
        // console.log('soilmoisture')
        validNumber = false;
    } 
    // console.log(validNumber)

    if(parseInt(data.maxSoilmoisute)<0 || parseInt(data.maxSoilmoisute)>70){
        validNumber = false;
    }
    
     //console.log(parseInt(data.minTemp)<0)

    if(parseInt(data.minTemp)<0 || parseInt(data.maxTemp)>70){
        validNumber = false;
    }

    //console.log(validNumber)
    
    if(parseInt(data.minTemp)<0 || parseInt(data.maxTemp)>70){
        validNumber = false;
    }
    // console.log(validNumber)
    if(parseInt(data.minlightingHours)<0){
        validNumber = false;
    }
    // console.log(validNumber)
    if(parseInt(data.maxlightingHours)<0){
        validNumber = false;
    }
    // console.log(validNumber)
    
    if(parseInt(data.minHumidity)<0 || parseInt(data.minHumidity)>100){
        validNumber = false;
    }
    // console.log(validNumber)
    if(parseInt(data.maxHumidity)<0 || parseInt(data.maxHumidity)>100){
        validNumber = false;
    }
}
     //console.log(validNumber)


    return valid && validNumber

}
module.exports=controlDataValid;