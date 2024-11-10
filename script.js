var allName = [];
var newIndex = 0; 
function toast(message = 'Welcome', colour = 'red', duration = 3000) {
    Toastify({
        text: message,
        duration: duration,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: colour
        },
        onClick: function () { }
    }).showToast();
}
function addMe() {
    if (nameForm.value == '') {
        toast('Input Your full name', 'red', 1000)
    } else {
        allName.push(nameForm.value);
        console.log(allName);
        document.getElementById('nameForm').value = '';
        displayAllNames();
    }
}
function displayAllNames() {
    displayName.innerHTML = '';
    displayName.innerHTML = `
    <table class="table table-bordered table-success" id="table">
    <tr>
        <th>S/N</th>
        <th>FULLNAME</th>
        <th>Matric-no</th>
        <th>Actions</th>
    </tr>
    </table>
    `;
    for (var i = 0; i < allName.length; i++) {
        console.log(allName[i]);
        table.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${allName[i]}</td>
            <td>17215${i}</td> 
            <td>
                <div class="btn-toolbar mx-3" role="toolbar" aria-label="Toolbar with button groups">
                    <div class="btn-group" role="group" aria-label="Third group">
                        <button type="button" class="btn btn-sm btn-warning mx-4" onclick="editButton(${i})"><img src="./photo/edit2.png" width="30" alt="" title="Edit"></button>
                        <button type="button" class="btn btn-sm btn-danger mx-3" onclick="delButton(${i})"><img class="img-danger" src="./photo/del.png" width="30" alt="" title="Delete"></button>
                    </div>
                </div>
            </td>
        </tr>
        `;
    }
}
function delName() {
    if (allName.length < 1) {
        toast('No input in your form', 'danger')
    } else {
        var indexToDel = Number(prompt('Enter the S/n to delete'));
        console.log(indexToDel);
        if (indexToDel > allName.length) {
            toast('S/n not found', 'danger')
        } else {
            allName.splice(indexToDel - 1, 1);
            displayAllNames();
        }
    }
}
function editName() {
    if (allName.length < 1) {
        toast('No input to edit in your form', 'danger')
    } else {
        var indexToEdit = Number(prompt('Enter which number to edit'));
        console.log(indexToEdit);
        if (indexToEdit > allName.length) {
            toast('Invalid entering', 'red')
        } else {
            var newName = prompt('Enter your fullname');
            allName.splice(indexToEdit - 1, 1, newName);
            displayAllNames();
        }
    }
}
function editButton(index) {
    newIndex = index;
    var newName = prompt('Enter your fullname');
    if (newName) {
        allName.splice(newIndex, 1, newName);
        displayAllNames();
    }
}
function delButton(index) {
    var confirmDelete = confirm('Confirm to delete name');
    if (confirmDelete) {
        allName.splice(index, 1);
        displayAllNames();
    }
}
