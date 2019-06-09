/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class promiseMe{
        constructor(element){
            this.button = document.getElementById(element);
            this.onError = (error) => {
                console.error(error);
            }
        }
        when(value,pred,...param){
            if(this[value] != undefined){
                this[value](param).then(pred,false).catch(this.onError);
            }else{
                pred(`L'attribut retourné de ${value} n'est pas défini dans le script`,true);
            }
        }
        addFunction(field,value){
            this[field] = value;
        }
        changeError(pred){
            this.onError = pred;
        }
        call(pred){
            this.button.addEventListener("click",pred)
        }
    }

    let promise = new promiseMe("run");
    promise.addFunction("post",window.lib.getPosts);
    promise.addFunction("comment",window.lib.getComments);

    promise.changeError((error) => {
        console.error("Une erreur est survenue : " + error);
    });

    promise.call(()=>{
        promise.when("post",(table)=>{
            table.forEach(element => {
                promise.when("comment",(value) => {
                    element.comment = value;
                },element.id)
            });
            console.log(table);
        })
    })}
)();
