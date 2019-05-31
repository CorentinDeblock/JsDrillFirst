/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    function randomKey(arr){
        return arr[Math.round(Math.random() * (arr.length - 1))]
    }
    
    function fromEntries(){
        let obj = {
            key: randomKey(keys),
            value: randomKey(values)
        }
        console.log(obj);
    }

    document.getElementById("run").addEventListener('click',() => {
        fromEntries();
    })
})();
