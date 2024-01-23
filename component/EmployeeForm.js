import React, { useState } from 'react';

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [department, setDepartment] = useState('IT');
  const [designation, setDesignation] = useState('');
  const [salary, setSalary] = useState('');
  const [status, setStatus] = useState('active');

  const departments = {
    IT: [
      'Frontend Developer',
      'Backend Developer',
      'Full Stack Developer',
      'Software Development Engineer',
      'Manager',
      'Senior Developer',
      'Chief Technology Officer',
    ],
    // Add more departments and their designations here
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'joiningDate':
        setJoiningDate(value);
        break;
      case 'designation':
        setDesignation(value);
        break;
      case 'salary':
        setSalary(value);
        break;
      case 'status':
        setStatus(value);
        break;
      default:
        break;
    }
  };

  const handleDepartmentChange = (e) => {
    const selectedDepartment = e.target.value;
    setDepartment(selectedDepartment);
    setDesignation(departments[selectedDepartment][0]); // Set designation to first one in the list
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className='h-screen w-screen flex bg-red-500 gap-4'>

   
    <form onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleInputChange} />
      </label>

      <label>
        Email:
        <input type="email" name="email" value={email} onChange={handleInputChange} />
      </label>

      <label>
        Phone:
        <input type="tel" name="phone" value={phone} onChange={handleInputChange} />
      </label>

      <label>
        Date of Joining:
        <input type="date" name="joiningDate" value={joiningDate} onChange={handleInputChange} />
      </label>

      <label>
        Department:
        <select name="department" value={department} onChange={handleDepartmentChange}>
          {Object.keys(departments).map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </label>

      <label>
        Designation:
        <select name="designation" value={designation} onChange={handleInputChange}>
          {departments[department].map((designation) => (
            <option key={designation} value={designation}>
              {designation}
            </option>
          ))}
        </select>
      </label>

      <label>
        Salary:
        <input type="number" name="salary" value={salary} onChange={handleInputChange} />
      </label>

      <label>
        Status:
        <select name="status" value={status} onChange={handleInputChange}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </label>

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default EmployeeForm;
