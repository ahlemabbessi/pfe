import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick, }) => {
  return (
    <tr>
      <td>{contact.parm}</td>
      <td>{contact.enHaut}</td>
      <td>{contact.enBas}</td>
      <td>{contact.bassin}</td>
      <td>{contact.cuisse}</td>
      <td>{contact.dos}</td>
      <td>{contact.genou}</td>
      <td>{contact.bas}</td>
      <td>{contact.long}</td>
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
