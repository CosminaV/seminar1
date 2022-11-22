const url="http://localhost:8080/api"

async function get(url){
    return (await axios.get(url)).data
}

async function post(url, body){
    return (await axios.post(url, JSON.stringify(body), {
        headers: {"Content-Type":"application/json"}
    })).data;
}

async function addTask(){
    let task = document.getElementById("inputTask").value;
    if(!task){
        alert("task nu trebuie sa fie gol")
        return
    }

    await post(url + "/addTask", {title: task, isDone: false})
    await loadTable()
}

async function loadTable2(){
    let data = await get(url + "/getTasks");
    let tableDiv = document.getElementById("tableData");
    if(!data || !tableDiv){
        return
    }
    let table = document.createElement("table");
    tableDiv.append(table);
    table.id="taskTable";

    let thead = document.createElement("thead");
    table.append(thead);
    let headRow = document.createElement("tr");
    thead.append(headRow);
    const addHeadRowTh = (text) => {
        const cel = document.createElement("th");
        cel.innerText=text;
        headRow.append(cel);
    }
    addHeadRowTh("Task");
    addHeadRowTh("isDone");

    let tbody = document.createElement("tbody");
    table.append(tbody);
    for(let item of data){
        const rand = document.createElement("tr");
        tbody.append(rand);
        const cel = document.createElement("td");
        cel.innerText=item.title;
        rand.append(cel);
        let input = document.createElement("input");
        input.type="checkbox";
        input.value=item.title;
        if(item.isDone){
            input.checked=true;
        }
        rand.append(input);
    }
}

async function loadTable(){
    let data = await get(url + "/getTasks");

    let tableDiv = document.getElementById("tableData");
    if(!data || !tableDiv){
        return
    }

    let myHTMLCode = [];
    myHTMLCode.push("<table id='taskTable'>");
    myHTMLCode.push("<thead>")
    myHTMLCode.push("<tr> <th> Task </th> <th> isDone </th> </tr>");
    myHTMLCode.push("</thead>")
    myHTMLCode.push("<tbody>")
    
    for(let item of data){
        myHTMLCode.push("<tr> <td>"+item.title+"</td><td><input type='checkbox' value='"+item.title+"'");
        if(item.isDone){
            myHTMLCode.push("checked");
        }
        myHTMLCode.push("></td></tr>");
    }

    for(var item of data){
        myHTMLCode.push("<tr> <td> "+ item.title + "</td> <td> " + item.isDone + "</td> </tr>")
    }

    myHTMLCode.push("</tbody>")
    myHTMLCode.push("</table>")

    tableDiv.innerHTML=myHTMLCode.join("");
}

loadTable();
//loadTable2();

let about = document.getElementById("menuAbout");
let tasks = document.getElementById("menuTasks");
let contact = document.getElementById("menuContact");

about.onclick = function() {
    document.getElementById("about").style.display = "block";
    document.getElementById("tasks").style.display = "none";
    document.getElementById("contact").style.display = "none";
}

tasks.onclick = function() {
    document.getElementById("about").style.display = "none";
    document.getElementById("tasks").style.display = "block";
    document.getElementById("contact").style.display = "none";
}

contact.onclick = function() {
    document.getElementById("about").style.display = "none";
    document.getElementById("tasks").style.display = "none";
    document.getElementById("contact").style.display = "block";
}