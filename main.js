
var experimentlist = [];

var nameimput = document.getElementById("exp-name");
var addbutton = document.getElementById("addbutton");
console.log(addbutton);

nameimput.addEventListener('keyup', function(){

    if(nameimput.innerText != 'null'){
        addbutton.removeAttribute("disabled");

}
})


/*
if(localStorage.getItem("product") == null){

    var experimentlist = [];
}

else{

    var experimentliststring = localStorage.getItem("product");
    var experimentlistjson = JSON.parse(experimentliststring);
    display();
} */ 



function createexpriment() {
    
    var name = document.getElementById("exp-name");
    var category = document.getElementById("exp-id");
    var price = document.getElementById("exp-materials");
    var description = document.getElementById("exp-sample");  
    
    var product = {
        pname: name.value,
        pcategory: category.value,
        pprice: price.value,
        pdescription: description.value

    }

    
    experimentlist.push(product)

    //addtolocalstorage()
    

    console.log(experimentlist)

    display();
    
    

    name.value = ""
    category.value = ""
    price.value = ""
    description.value = ""

    
}

function display(){

    var trs = '';
    var tablebody = document.getElementById("table-rows");

    for( var i=0; i < experimentlist.length; i++){

        trs += `<tr>
        <th scope="row">${i+1}</th>
        <td>${experimentlist[i].pname}</td>
        <td>${experimentlist[i].pcategory}</td>
        <td>${experimentlist[i].pprice}</td>
        <td>${experimentlist[i].pdescription}</td>
      </tr>`

      //console.log(trs);
      tablebody.innerHTML = trs;


    }
}
/*
function deleteproduct(index){

    alert("Confirm Delete");

    experimentlist.splice(index,1)

    display();

}*/
/*
function addtolocalstorage(){

    var x = JSON.stringify(experimentlist);    
    localStorage.setItem('product', x);
} */
/*
function search(){

    var name = document.getElementById("exp-name").value;
    var search = document.getElementById("search").value;

    console.log(search);

    for( var i=0; i < experimentlist.length; i++){

        if(experimentlist[i].pname.toLowerCase().includes(search.toLowerCase()
         || experimentlist[i].pcategory.toLowerCase().includes(search.toLowerCase()
         || experimentlist[i].pprice >= 1000 && experimentlist[i].pprice < 2000 ()
         ))){

            var trs = '';
            var tablebody = document.getElementById("table-rows");
            trs += `<tr>
        <th scope="row">${i+1}</th>
        <td>${experimentlist[i].pname}</td>
        <td>${experimentlist[i].pcategory}</td>
        <td>${experimentlist[i].pprice}</td>
        <td>${experimentlist[i].pdescription}</td>
        <td>
          <button class="btn btn btn-warning">
            <i class="fa-solid fa-pen"></i>
        </button>
        </td>
            <td>
            <button class="btn btn-danger"  onclick="deleteproduct(${i})">
                <i class="fa-solid fa-trash-can"></i>
            </button>
            </td>
      </tr>`

      //console.log(trs);
      tablebody.innerHTML = trs;

        }
    }

    
} */
/*
function retriveforupdate(index){

    var name = document.getElementById("product-name");
    var category = document.getElementById("product-category");
    var price = document.getElementById("product-price");
    var description = document.getElementById("product-description");
    var addbutton = document.getElementById("addbutton"); 

    experimentlist[index].pcategory = category.value
    addbutton.innerHTML = "Update Product"


} */
/*
function update(){

    
} */

function Convert() {
    var table = document.getElementById("experimenttable");
    var header = [];
    var rows = [];
    var jsonstringified = JSON.stringify(rows);

    for (var i = 0; i < table.rows[0].cells.length; i++) {
        header.push(table.rows[0].cells[i].innerHTML);
    }

    for (var i = 1; i < table.rows.length; i++) {
        var row = {};
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            row[header[j]] = table.rows[i].cells[j].innerHTML;
        }
        rows.push(row);
    }

    //alert(JSON.stringify(rows));
    //convertedjson.innerHTML = rows;
    //stringifiedjson.innerHTML = JSON.stringify(rows);
    jsoncontainer.innerHTML = `<label for="jsonaobjects" class="form-label text-capitalize font-weight-bold" id="jsonarea">JSON Objects</label>
    <div class="mb-3 m-auto" id="convertedjson">${row} </div>
    <label for="jsonaobjects" class="form-label text-capitalize font-weight-bold" id="jsonstringarea">JSON Sringified</label>
    <div class="mb-3 m-auto" id="stringifiedjson">${JSON.stringify(row)} </div> `
}

function disable(){
    alert('Are you sure you want to send the experiment details to SMW and lock the modification here?')
    //document.getElementsByClassName('disbleinputs').disabled = "true";
    document.getElementById("exp-name").disabled = "true";
    document.getElementById("exp-id").disabled = "true";
    document.getElementById("exp-materials").disabled = "true";
    document.getElementById("exp-sample").disabled = "true";
  }

  function enable(){
    document.getElementById("exp-name").disabled = "";
    document.getElementById("exp-id").disabled = "";
    document.getElementById("exp-materials").disabled = "";
    document.getElementById("exp-sample").disabled = "";

  }