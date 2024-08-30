import { useState } from 'react';
import './App.css';
import { FloatingLabel, Form, Dropdown, Button } from 'react-bootstrap';

function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [course, setCourse] = useState('');

  const [isNameValid, setIsNameValid] = useState(true);
  const [isAddressValid, setIsAddressValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isGenderValid, setIsGenderValid] = useState(true);
  const [isDobValid, setIsDobValid] = useState(true);
  const [isCourseValid, setIsCourseValid] = useState(true);

  const validateInput = (inputTag) => {
    const { name, value } = inputTag;

    if (name === 'name') {
      setName(value);
      setIsNameValid(!!value.match(/^[A-Za-z\s]+$/));
    } else if (name === 'address') {
      setAddress(value);
      setIsAddressValid(value.trim() !== '');
    } else if (name === 'phone') {
      setPhone(value);
      setIsPhoneValid(!!value.match(/^\d+$/));
    } else if (name === 'email') {
      setEmail(value);
      setIsEmailValid(value.endsWith('@gmail.com'));
    } else if (name === 'gender') {
      setGender(value);
      setIsGenderValid(true);
    } else if (name === 'dob') {
      setDob(value);
      setIsDobValid(value !== '');
    }
  };

  const handleCourseSelect = (eventKey) => {
    setCourse(eventKey);
    setIsCourseValid(!!eventKey);
  };

  const handleSubmit = () => {
    // Validate all fields
    const nameValid = !!name.match(/^[A-Za-z\s]+$/);
    const addressValid = address.trim() !== '';
    const phoneValid = !!phone.match(/^\d+$/);
    const emailValid = email.endsWith('@gmail.com');
    const genderValid = !!gender;
    const dobValid = dob !== '';
    const courseValid = !!course;

    setIsNameValid(nameValid);
    setIsAddressValid(addressValid);
    setIsPhoneValid(phoneValid);
    setIsEmailValid(emailValid);
    setIsGenderValid(genderValid);
    setIsDobValid(dobValid);
    setIsCourseValid(courseValid);

    if (nameValid && addressValid && phoneValid && emailValid && genderValid && dobValid && courseValid) {
      alert('Registration successful!');
    } else {
      alert('Please fill out all fields correctly.');
    }
  };

  const handleClear = () => {
    // Reset all form fields
    setName('');
    setAddress('');
    setPhone('');
    setEmail('');
    setGender('');
    setDob('');
    setCourse('');

    // Reset all validation states
    setIsNameValid(true);
    setIsAddressValid(true);
    setIsPhoneValid(true);
    setIsEmailValid(true);
    setIsGenderValid(true);
    setIsDobValid(true);
    setIsCourseValid(true);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center m-4">
        <div className="bg-info w-75 p-5 border rounded text-center d-flex flex-column justify-content-center align-items-center">
          <h2>Fill The Form</h2>
          <FloatingLabel controlId="floatingInputName" label="Name" className="mb-3 w-75">
            <Form.Control value={name} onChange={(e) => validateInput(e.target)} name="name" type="text" placeholder="Name" />
          </FloatingLabel>
          {!isNameValid && <div className="mb-3 text-danger fw-bolder">Invalid name. Only letters and spaces are allowed.</div>}

          <FloatingLabel controlId="floatingInputAddress" label="Address" className="mb-3 w-75">
            <Form.Control value={address} onChange={(e) => validateInput(e.target)} name="address" type="text" placeholder="Address" />
          </FloatingLabel>
          {!isAddressValid && <div className="mb-3 text-danger fw-bolder">Address cannot be empty.</div>}

          <FloatingLabel controlId="floatingInputPhone" label="Phone No" className="mb-3 w-75">
            <Form.Control value={phone} onChange={(e) => validateInput(e.target)} name="phone" type="tel" placeholder="Phone No" />
          </FloatingLabel>
          {!isPhoneValid && <div className="mb-3 text-danger fw-bolder">Invalid Phone Number. Only digits are allowed.</div>}

          <FloatingLabel controlId="floatingInputEmail" label="Email address" className="mb-3 w-75">
            <Form.Control value={email} onChange={(e) => validateInput(e.target)} name="email" type="email" placeholder="name@example.com" />
          </FloatingLabel>
          {!isEmailValid && <div className="mb-3 text-danger fw-bolder">Invalid E-mail. Must end with @gmail.com.</div>}

          <Form>
            <h6 className='fw-bolder'>Gender</h6>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Female"
                  name="gender"
                  type={type}
                  id={`inline-${type}-1`}
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => validateInput(e.target)}
                />
                <Form.Check
                  inline
                  label="Male"
                  name="gender"
                  type={type}
                  id={`inline-${type}-2`}
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => validateInput(e.target)}
                />
                <Form.Check
                  inline
                  label="Other"
                  name="gender"
                  type={type}
                  id={`inline-${type}-3`}
                  value="Other"
                  checked={gender === "Other"}
                  onChange={(e) => validateInput(e.target)}
                />
              </div>
            ))}
          </Form>
          {!isGenderValid && <div className="mb-3 text-danger fw-bolder">Please select a gender.</div>}

          <FloatingLabel controlId="floatingInputDOB" label="DOB" className="mb-3 w-75">
            <Form.Control value={dob} onChange={(e) => validateInput(e.target)} name="dob" type="date" />
          </FloatingLabel>
          {!isDobValid && <div className="mb-3 text-danger fw-bolder">Please select a date.</div>}

          <Dropdown onSelect={handleCourseSelect}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {course || 'Course'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Biology">Biology</Dropdown.Item>
              <Dropdown.Item eventKey="Computer Science">Computer Science</Dropdown.Item>
              <Dropdown.Item eventKey="Humanities">Humanities</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {!isCourseValid && <div className="mb-3 text-danger fw-bolder">Please select a course.</div>}

          <div className="d-flex mt-3">
            <Button className="me-3" variant="primary" onClick={handleSubmit}>
              Register
            </Button>
            <Button variant="primary" onClick={handleClear}>
              Clear
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
