import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick }) => {

  return (
    <tr>
      <td>
      <select name="parm" onChange={handleEditFormChange}>
      <option value="1/2 taille en bas">1/2 taille en bas</option>
      <option value="1/2 taille en haut">1/2 taille en haut</option>
      <option value="bassin">bassin</option>
      <option value="cuisse">cuisse</option>
      </select>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter signature..."
          name="signature"
          // value={editFormData.fullName}
          // onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="remarque"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
