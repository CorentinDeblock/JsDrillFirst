/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class button{
        constructor(id){
            this.id = document.getElementById(id);
        }
        listen(pred){
            this.id.addEventListener("click",pred);
        }
    }

    let target = new button("run");

    async function receive(){
        try{
            let promise = await window.lib.getPersons();
            console.log(promise);
        }catch(error){
            console.error("L'information n'a pas été trouvée");
        }
    }

    target.listen(() => {
        receive();
    })
})();
