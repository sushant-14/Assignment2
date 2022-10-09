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
    formData["invoicenumber"] = document.getElementById("invoicenumber").value;
    formData["invoicedate"] = document.getElementById("invoicedate").value;
    formData["customername"] = document.getElementById("customername").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("invo").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.invoicenumber;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.invoicedate;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.customername;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("invoicenumber").value = "";
    document.getElementById("invoicedate").value = "";
    document.getElementById("customername").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("invoicenumber").value = selectedRow.cells[0].innerHTML;
    document.getElementById("invoicedate").value = selectedRow.cells[1].innerHTML;
    document.getElementById("customername").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.invoicenumber;
    selectedRow.cells[1].innerHTML = formData.invoicedate;
    selectedRow.cells[2].innerHTML = formData.customername;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("invo").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("invoicenumber").value == "") {
        isValid = false;
        document.getElementById("invoicenumberValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("invoicenumberValidationError").classList.contains("hide"))
            document.getElementById("invoicenumberValidationError").classList.add("hide");
    }
    return isValid;
}