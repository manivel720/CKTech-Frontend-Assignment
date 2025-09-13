document.addEventListener('DOMContentLoaded', () => {
  let employees = [...mockEmployees];
  let filteredEmployees = [...employees];
  let currentPage = 1;
  let itemsPerPage = 10;

  const renderEmployees = () => {
    const container = document.getElementById('employee-list-container');
    container.innerHTML = '';
    const paginated = paginate(filteredEmployees, currentPage, itemsPerPage);
    paginated.forEach(emp => {
      container.innerHTML += `
        <div class="employee-card" data-id="${emp.id}">
          <h3>${emp.firstName} ${emp.lastName}</h3>
          <p>${emp.email}</p>
          <p>${emp.department} - ${emp.role}</p>
          <button class="edit-btn" data-id="${emp.id}">Edit</button>
          <button class="delete-btn" data-id="${emp.id}">Delete</button>
        </div>`;
    });
    updatePaginationControls(filteredEmployees.length, currentPage, itemsPerPage);
  };

  const paginate = (data, page, perPage) =>
    data.slice((page - 1) * perPage, page * perPage);

  const updatePaginationControls = (total, currentPage, perPage) => {
    const totalPages = Math.ceil(total / perPage);
    const container = document.getElementById('pagination-controls');
    container.innerHTML = `
      <button ${currentPage === 1 ? "disabled" : ""} onclick="goToPage(${currentPage - 1})">Prev</button>
      Page ${currentPage} of ${totalPages}
      <button ${currentPage === totalPages ? "disabled" : ""} onclick="goToPage(${currentPage + 1})">Next</button>
    `;
  };

  window.goToPage = (page) => {
    currentPage = page;
    renderEmployees();
  };

  document.getElementById('search-input').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    filteredEmployees = employees.filter(emp =>
      `${emp.firstName} ${emp.lastName}`.toLowerCase().includes(query) ||
      emp.email.toLowerCase().includes(query)
    );
    currentPage = 1;
    renderEmployees();
  });

  renderEmployees();
});
