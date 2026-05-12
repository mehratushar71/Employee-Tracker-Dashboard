import React, { useState } from 'react';

const EmployeeDashboard = () => {

  const [employees, setEmployees] = useState([
    { id: 101, name: 'Tushar Mehra', role: 'Frontend Developer', salary: '₹50,000' },
    { id: 102, name: 'Amit Kumar', role: 'React Developer', salary: '₹45,000' },
    { id: 103, name: 'Sandeep Singh', role: 'UI Designer', salary: '₹48,000' },
    { id: 104, name: 'Karan Mehra', role: 'Backend Developer', salary: '₹40,000' }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = employees.filter((val) => {
    if (searchTerm === "") return val;
    return val.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4 text-primary">Employee Tracker</h2>
        
        { }
        <input 
          type="text" 
          className="form-control mb-4" 
          placeholder="Search by name..." 
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        { }
        <table className="table table-hover border">
          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeDashboard;