import React from "react";

export const ContactPicker = (props) => {
  const contacts = props.contacts;
  const onChange = props.onChange;

  return (
    <select onChange={onChange}>
      <option selected="selected" key="" value="No contact selected">No contact selected</option>
      {
        contacts.map((item, index) => {
          return <option key= {index} value= {item.name}>{item.name}</option>
        })
      }
    </select>
  );
};
