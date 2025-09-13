document.getElementById('employee-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const employee = {
    id: Date.now(),
    firstName: document.getElementById('firstName').value.trim(),
    lastName: document.getElementById('lastName').value.trim(),
    email: document.getElementById('email').value.trim(),
    department: document.getElementById('department').value.trim(),
    role: document.getElementById('role').value.trim()
  };

  if (!validateEmail(employee.email)) {
    alert("Invalid email!");
    return;
  }

  // Save to mockEmployees
  mockEmployees.push(employee);
  // Update UI
});
