import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick }) => {

  return (
    <tr>
   
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="problems"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="action"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
      <td className="add">
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
