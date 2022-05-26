import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleChange = event => {
    const id = event.target.id;
    const value = event.target.value;

    switch (id) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input  id='name'
              type='text'
              placeholder='Name'
              value={name} 
              onChange={handleChange} />
      <input  id='phone'
              type='tel'
              pattern = '^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$'
              placeholder='Phone Number'
              value={phone}
              onChange={handleChange}/>
      <input  id='email'
              type='email'
              placeholder='Email'
              value={email}
              onChange={handleChange}/>
      <input  type='submit'
              value="Submit"/>
    </form>
  );
};
