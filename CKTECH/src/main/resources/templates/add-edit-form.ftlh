<form id="employee-form" method="post" action="/employees/save">
    <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
    <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
    <input type="email" id="email" name="email" placeholder="Email" required />
    <input type="text" id="department" name="department" placeholder="Department" required />
    <input type="text" id="role" name="role" placeholder="Role" required />
    <button type="submit">Save</button>
    <button type="button" id="cancel-btn" onclick="window.location.href='/employees';">Cancel</button>
</form>
