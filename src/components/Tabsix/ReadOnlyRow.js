import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <>
    <tr>
     
      <td>{contact.problems}</td>
      <td>{contact.action}</td>
      <td className="add">
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
    
    </>
  );
};

export default ReadOnlyRow;
