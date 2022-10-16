import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';

var todoList = []

function App() {

  async function soemthing() {
    const models = await DataStore.query(Todo);

    let list = document.getElementById("myList");
    list.replaceChildren();

    let tr = document.createElement("tr");

    var titles = ["Name", "Description"]
    titles.forEach(function(el) {
      let th = document.createElement("th");
      th.innerText = el;
      tr.appendChild(th);
    });

    list.appendChild(tr);

    todoList = models;
    todoList.forEach((item) => {
      let tr = document.createElement("tr");
      let thName = document.createElement("th");
      thName.innerText = item.name;
      let thDecs = document.createElement("th");
      thDecs.innerText = item.description;
      tr.appendChild(thName);
      tr.appendChild(thDecs);
      list.appendChild(tr);
    });
  }

  function what() {
    const form = document.getElementById("myForm");
    if (form){
      form.addEventListener("submit", async(event) => {
        event.preventDefault();
        await DataStore.save(
          new Todo({
          "name": form.elements["nameInput"].value,
          "description": form.elements["decsInput"].value,
          })
        );
        event.target.reset();
        
        await soemthing();
      })
    }
    
    
    
  }

  async function deleteTodo() {
    const models = await DataStore.query(Todo);
    //models.forEach(element => DataStore.delete("Long"));
    for (var i = 0; i < models.length; i++) {
      DataStore.delete(models[i]);
    }
    await soemthing()
  }
  
  

  

  async function createTodo() {

    await DataStore.save(
      new Todo({
      "name": "Do Homwork",
      "description": "Create Database"
      })
    );
    await soemthing();
  }
  
  return (
    <div>
      <h3>Hello world</h3>
      <form id="myForm">
        <input name="nameInput"></input>
        <input name="decsInput"></input>
        <button type="submit" onClick={what}>Create Todo</button>
      </form>
      <button onClick={createTodo} >Create Dummy Todo</button>
      {todoList}
      <button onClick={soemthing}> Query Todo</button>
      <button onClick={deleteTodo}> Delete </button>
      <table id="myList">
        <tr><th>Name</th><th>Description</th></tr>
      </table>
    </div>
  );
}

export default App;