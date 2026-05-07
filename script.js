let employees = [];
let addBtn = document.getElementById("addBtn");
let message = document.getElementById("message");
let employeeDiv = document.getElementById("employee-div");

addBtn.addEventListener("click",()=>{
    let name = document.getElementById("name").value;
    let profession = document.getElementById("profession").value;
    let age = document.getElementById("age").value;
    if(name === ""|| profession === ""|| age === ""){
        message.style.color= "#FF4343";
        message.innerText = "Error : Please Make sure All the fields are filled before adding in an employee !";
        return;
    }
    message.style.color = "lime"
    message.innerText = "Success : Employee Added!";
    
    let employee =  {
        id:employees.length + 1,
        name,
        profession,
        age
    }
    employees.push(employee);
    showEmployee();
    document.getElementById("name").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("age").value = "";
})
function showEmployee(){
    employeeDiv.innerHTML = "";

    employees.forEach((emp,index)=>{
        let div = document.createElement("div");
        div.classList.add("employee");
        div.innerHTML = `
            <div class="employee-data">
                ${index+1}.
                Name : ${emp.name}
                &nbsp;&nbsp;&nbsp   
                Profession : ${emp.profession}
                &nbsp;&nbsp;&nbsp  
                Age : ${emp.age}      
            </div>

            <button id="deleteBtn" onclick="deleteEmployee(${index})">
            Delete User
            </button>
        `
        employeeDiv.appendChild(div);
    })

}
function deleteEmployee(index){
    employees.splice(index,1);
    showEmployee();
    if(employees.length === 0){
        employeeDiv.innerHTML = `
        <p style="color: #808080;">You have 0 Employees.</p>
        `
    }
}