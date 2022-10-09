var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["unitprice"] = document.getElementById("unitprice").value;
    formData["quantity"] = document.getElementById("quantity").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("pro").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.unitprice;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.quantity;
    var1=document.getElementById('unitprice').value;
    var2=document.getElementById('quantity').value;
    var3=var1*var2
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = 'Rs'+ ' ' +var3;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("unitprice").value = "";
    document.getElementById("quantity").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("unitprice").value = selectedRow.cells[1].innerHTML;
    document.getElementById("quantity").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.unitprice;
    selectedRow.cells[2].innerHTML = formData.quantity;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("pro").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;
}
