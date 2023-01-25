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
      <option value="1/2 taille en bas">1/2 taille en bas</option>
      <option value="1/2 taille en haut">1/2 taille en haut</option>
      <option value="bassin">bassin</option>
      <option value="cuisse">cuisse</option>
      </select>

      </td>


      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="demande1"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="trouve1"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="ecart1"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>

      {/* piece2 */}
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="demande2"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="t2 ..."
          name="trouve2"
          value={editFormData.address}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="ecart2"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        />
      </td>
      {/* piece3 */}
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="demande3"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="t2 ..."
          name="trouve3"
          value={editFormData.address}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="ecart3"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        />
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
