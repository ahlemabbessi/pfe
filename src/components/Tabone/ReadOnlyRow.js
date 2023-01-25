import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick, }) => {
  return (
    <tr>
      
      <td>{contact.parm}</td>
      <td>{contact.demande1}</td>
      <td>{contact.trouve1}</td>
      <td>{contact.ecart1}</td>
      <td>{contact.demande2}</td>
      <td>{contact.trouve2}</td>
      <td>{contact.ecart2}</td>
      <td>{contact.demande3}</td>
      <td>{contact.trouve3}</td>
      <td>{contact.ecart3}</td>
      
     
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
