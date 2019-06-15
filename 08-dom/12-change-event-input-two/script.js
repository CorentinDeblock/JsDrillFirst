/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let input = document.getElementById("pass-one");
    let span = document.getElementById("validity");
    
    let checkVictory = (input) => {
        if(input.length >= 8){
            let check = input.match(/[0-9]/g).length

            if(check >= 2)
                return true;
        }
        return false;
    }

    function changeSpan(condition) {
        if(condition){
            span.innerText = "Ok";
        }else{
            span.innerText = "Pas ok";
        }
    }
    input.addEventListener("keyup",() => {
        let value = input.value;
        changeSpan(checkVictory(value));
    })
})();
