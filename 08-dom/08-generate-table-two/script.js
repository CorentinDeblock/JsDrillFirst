/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function createTh(value){
        let th = document.createElement("th");
        th.innerText = value;
        return th;
    }

    function createTd(value){
        let td = document.createElement("td");
        td.innerText = value;
        return td;
    }
    function createTr(){
        return document.createElement("tr");
    }
    let table = document.getElementById("target");
    let head = createTr();

    head.appendChild(createTh("Nombre"));
    table.appendChild(head);
    for(let i = 1; i <= 10;i++){
        let tr = createTr();
        tr.appendChild(createTd(i));
        for(let j = 1; j <=10;j++){
            let td = createTd();
            td.innerText = i * j;
            tr.appendChild(td);    
        }
        head.appendChild(createTh(`x${i}`));
        table.appendChild(tr);
    }
})();
