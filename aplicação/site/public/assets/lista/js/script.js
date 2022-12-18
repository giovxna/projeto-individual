class App {
  constructor() {
    this.id = 1;
    this.productArray = [];
    this.editId = null;
  }

  save() {
    let product = this.getData();

    this.validation(product)
      ? this.editId == null
        ? this.add(product)
        : this.update(this.editId, product)
      : null;

    this.createTable();
    // this.clearFields();
  }

  createTable() {
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";

    for (let i = 0; i < this.productArray.length; i++) {
      let tRow = tbody.insertRow();

      let tData_id = tRow.insertCell();
      let tData_name = tRow.insertCell();
      let tData_actions = tRow.insertCell();

      tData_id.innerText = this.productArray[i].id;
      tData_name.innerText = this.productArray[i].name;

      tData_id.classList.add("center");
      tData_actions.classList.add("center");

      let editIcon = document.createElement("img");
      editIcon.src = "assets/lista/images/edit-button.png";
      editIcon.setAttribute(
        "onclick",
        `app.setEdit(
          ${JSON.stringify(this.productArray[i])}
        )`
      );

      let deleteIcon = document.createElement("img");
      deleteIcon.src = "assets/lista/images/delete-button.png";
      deleteIcon.setAttribute(
        "onclick",
        `app.delete(
          ${JSON.stringify(this.productArray[i])}
        )`
      );

      tData_actions.appendChild(editIcon);
      tData_actions.appendChild(deleteIcon);
    }
  }

  add(product) {
    this.productArray.push(product);
    this.id++;
  }

  update(id, product) {
    for (let i = 0; i < this.productArray.length; i++) {
      if (this.productArray[i].id == id) {
        this.productArray[i].name = product.name;
      }
    }
  }

  setEdit(data) {
    this.editId = data.id;

    document.getElementById("product").value = data.name;
    document.getElementById("saveData").innerText = "atualizar";
  }

  getData() {
    let product = {};

    product.id = this.id;
    product.name = document.getElementById("product").value;

    return product;
  }

  validation(product) {
    let message = "";

    if (product.name === "") {
      message += "insira alguma atividade.";
    }

    if (message !== "") {
      alert(message);
      return false;
    }

    return true;
  }

  cancel() {
    this.clearFields();
  }

  clearFields() {
    document.getElementById("product").value = "";
   
    document.getElementById("saveData").innerText = "salvar";
    this.editId = null;
  }

  delete(data) {
    if (confirm(`tem certeza que deseja deletar a atividade?`)) {
      let tbody = document.getElementById("tbody");

      for (let i = 0; i < this.productArray.length; i++) {
        if (this.productArray[i].id == data.id) {
          this.productArray.splice(i, 1);
          tbody.deleteRow(i);
        }
      }
    }
  }
}

const app = new App();
