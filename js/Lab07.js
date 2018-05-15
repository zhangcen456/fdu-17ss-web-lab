var allTable=new Array();
var allInput=new Array();
var d1=document.getElementById("d1");
var ds=document.getElementById("ds");
var d2=document.getElementById("d2");
var s1=document.getElementById("s1");
var s2=document.getElementById("s2");
var input2=new Array();
var input3=new Array();
var commit=document.createElement("button");
commit.innerHTML="Commit";
var input=new Array();
var tablenum=0;
var col;

function change1(){
    ds.innerHTML="";
    var index = s1.selectedIndex;
    switch(index){
        case 1:createTable();break;
        case 2:addrow();break;
        case 3:deleterow();break;
        case 4:deletetable();break;
    }
}

function createTable(){
    allInput.length=0;
    allInput[0]=document.createElement("input");
    allInput[0].type="text";
    allInput[0].placeholder="Table Name";
    allInput[0].onchange=createTable2;
    allInput[1]=document.createElement("input");
    allInput[1].type="number";
    allInput[1].placeholder="Columns Numbers";
    allInput[1].step="1";
    allInput[1].onchange=createTable2;
    commit.onclick=createTable3;
    ds.appendChild(allInput[0]);
    ds.appendChild(allInput[1]);
    var br=document.createElement("br");
    ds.appendChild(br);
}

function createTable2(){
    if(ds.children.length>=4){
        for(let i=0;i<col;i++){
            ds.removeChild(input[i]);
        }
        ds.removeChild(commit);
    }
    input.length=0;
    if(ds.children.length>=4){
        var br=ds.children[3];
        ds.removeChild(br);
    }
    col=allInput[1].value;
    if(col>0&&isInteger(col)){
        if(allInput[0].value!=""){
            for(let i=0;i<col;i++){
                input[i]=document.createElement("input");
                input[i].type="text";
                input[i].placeholder="Attribute";
                ds.appendChild(input[i]);
            }
            var br=document.createElement("br");
            ds.appendChild(br);
            ds.appendChild(commit);
        }
    }
    else{
        allInput[1].value="";
    }
}

function isInteger(obj) {
    return obj%1 === 0
}

function createTable3(){
    var k=true;
    for(let i=0;i<input.length;i++){
        if(input[i].value==="") k=false;
    }
    if(k){
        allTable[tablenum]=document.createElement("table");
        var thead=document.createElement("thead");
        thead.insertRow(0);
        for(let i=0;i<input.length;i++){
            thead.rows[0].insertCell(i);
            thead.rows[0].cells[i].appendChild(document.createTextNode(input[i].value));
        }
        allTable[tablenum].appendChild(thead);
        if(d2.children.length>=2){
            let table=d2.children[1];
            d2.removeChild(table);
        }
        d2.appendChild(allTable[tablenum]);
        tablenum++;
        var option=document.createElement("option");
        option.innerHTML=allInput[0].value;
        option.value=tablenum;
        s2.appendChild(option);
        s2.value=tablenum;
    }
}

function addrow(){
    if(d2.children.length>=2){
        col=d2.children[1].children[0].rows[0].cells.length;
        for(let i=0;i<col;i++){
            input2[i]=document.createElement("input");
            input2[i].type="text";
            input2[i].placeholder=d2.children[1].children[0].rows[0].cells[i].innerHTML;
            ds.appendChild(input2[i]);
        }
        var br=document.createElement("br");
        ds.appendChild(br);
        commit.onclick=addrow2;
        ds.appendChild(commit);
    }
}

function addrow2(){
    var k=false;
    for(let i=0;i<input2.length;i++){
        if(input2[i].value!="") k=true;
    }
    if(k){
        var table=d2.children[1];
        if(table.children.length>=2){
            let tbody=table.children[1];
            let row=tbody.rows.length;
            tbody.insertRow(row);
            for(let i=0;i<col;i++){
                tbody.rows[row].insertCell(i);
                tbody.rows[row].cells[i].appendChild(document.createTextNode(input2[i].value));
            }
        }
        else{
            let tbody=document.createElement("tbody");
            table.appendChild(tbody);
            tbody.insertRow(0);
            for(let i=0;i<col;i++){
                tbody.rows[0].insertCell(i);
                tbody.rows[0].cells[i].appendChild(document.createTextNode(input2[i].value));
            }
        }
    }
}

function changeTable(){
    var index=s2.selectedIndex;
    if(d2.children.length>=2){
        let table=d2.children[1];
        d2.removeChild(table);
    }
    if(index>0){
        d2.appendChild(allTable[index-1]);
        col=d2.children[1].children[0].rows[0].cells.length;
    }

}

function deleterow(){
    if(d2.children.length>=2){
        col=d2.children[1].children[0].rows[0].cells.length;
        for(let i=0;i<col;i++){
            input3[i]=document.createElement("input");
            input3[i].type="text";
            input3[i].placeholder=d2.children[1].children[0].rows[0].cells[i].innerHTML;
            ds.appendChild(input3[i]);
        }
        var br=document.createElement("br");
        ds.appendChild(br);
        commit.onclick=deleterow2;
        ds.appendChild(commit);
    }
}

function deleterow2() {
    if(d2.children[1].children.length>=2){
        var tbody=d2.children[1].children[1];
        l:for(let i=0;i<tbody.rows.length;i++){
            for(let j=0;j<col;j++){
                if(input3[j].value!==""){
                    if(tbody.rows[i].cells[j].innerHTML!==input3[j].value){
                        continue l;
                    }
                }
            }
            tbody.deleteRow(i);
            i--;
        }
    }
}

function deletetable(){
    alert("WARNING: You cannot undo this action!");
    commit.onclick=deletetable2;
    ds.appendChild(commit);
}

function deletetable2(){
    var index=s2.selectedIndex;
    if(index>0){
        allTable.splice(index-1,1);
        s2.removeChild(s2.children[index]);
        if(s2.children.length>1){
            s2.value=s2.children[1].value;
            changeTable();
        }
        else{
            s2.value="default";
            changeTable();
        }
    }
}
