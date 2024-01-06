function bin2dec() {
    let binValue = String(document.getElementById("inputField").value); 
     
    if(binValue.length == '') {
       return alert("Por favor, digite algum número binário.");
    } 
    var binN = '';
    for (let i = 0; i < binValue.length; i++) {
        if(binValue[i] === "0" || binValue[i] === "1") {
            binN +=  binValue[i];
        } else {            
            alert('Digite apenas 0 ou 1 !!!');
            binValue.clear(); 
        }
    }
    let decValue = parseInt(binN, 2)
    alert(`O binário ${binN} em decimal é: \n ${decValue}`);
    binValue.clear();
};