function stopWatch(){
    let count = 0;
    return function (){
        count ++;
        return count;
    }
}

// kono akta function thake  onno akta function call korle o akta closed invironment creat kore fele trpr 
