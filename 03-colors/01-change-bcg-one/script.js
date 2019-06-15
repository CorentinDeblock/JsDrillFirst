/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let body = document.querySelector("body");

    function changeBgColor(...bgColor){
        bgColor.forEach(value =>{
            document.getElementById(value).addEventListener("click",() =>{
                body.style.backgroundColor = value;
            })
        })
    }
    changeBgColor("red","green","yellow","blue");
})();
