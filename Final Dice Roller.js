function rolldice(){

    
    const dicenum = document.getElementById("dicenum").value;

    const result = document.getElementById("rollresult");

    const side6 = document.getElementById("sixside");

    const side20 = document.getElementById("twentyside");

    const side100 = document.getElementById("hundredside");

    const side2 = document.getElementById("twoside");

    const side4 = document.getElementById("fourside");

    const side8 = document.getElementById("eightside");

    const side12 = document.getElementById("twelveside");

    const values = [];

    if(side6.checked){
        for(let i = 0 ; i < dicenum ; i++){
            const value = Math.floor(Math.random() * 6) + 1;
            values.push(value);
            result.textContent = `Dice: ${values.join(`, `)}`;
        }
    
    }
    
    else if(side20.checked){
        for(let i = 0 ; i < dicenum ; i++){
            const value = Math.floor(Math.random() * 20) + 1;
            values.push(value);
            result.textContent = `Dice: ${values.join(`, `)}`;
        }
    }

    else if(side100.checked){
        for(let i = 0 ; i < dicenum ; i++){
            const value = Math.floor(Math.random() * 100) + 1;
            values.push(value);
            result.textContent = `Dice: ${values.join(`, `)}`;
        }
    }

    else if(side4.checked){
        for(let i = 0 ; i < dicenum ; i++){
            const value = Math.floor(Math.random() * 4) + 1;
            values.push(value);
            result.textContent = `Dice: ${values.join(`, `)}`;
        }
    }

    else if(side8.checked){
        for(let i = 0 ; i < dicenum ; i++){
            const value = Math.floor(Math.random() * 8) + 1;
            values.push(value);
            result.textContent = `Dice: ${values.join(`, `)}`;
        }
    }

    else if(side12.checked){
        for(let i = 0 ; i < dicenum ; i++){
            const value = Math.floor(Math.random() * 12) + 1;
            values.push(value);
            result.textContent = `Dice: ${values.join(`, `)}`;
        }
    }

    else if(side2.checked){
        for(let i = 0 ; i < dicenum ; i++){
            const value = Math.floor(Math.random() * 2) + 1;
            values.push(value);

            if(value === 1){
                result.textContent = `Heads`;
            }
    
            else{
                result.textContent = `Tails`;
            }
            
        }

        
    }

    else{
        result.textContent = `Dice not selected.`
    }
    
    
    
}
