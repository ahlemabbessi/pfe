import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import './tabone.css'

const TabOne = () => {
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    parm:"",
    demande1: "",
    trouve1: "",
    ecart1: "",
    demande2: "",
    trouve2: "",
    ecart2: "",
    demande3: "",
    trouve3: "",
    ecart3: ""
  });

  const [editFormData, setEditFormData] = useState({
    
    parm:"",
    demande1: "",
    trouve1: "",
    ecart1: "",
    demande2: "",
    trouve2: "",
    ecart2: "",
    demande3: "",
    trouve3: "",
    ecart3: ""
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      parm:     addFormData.parm,
      demande1: addFormData.demande1,
      trouve1:  addFormData.trouve1,
      ecart1:   addFormData.ecart1,
      demande2: addFormData.demande2,
      trouve2:  addFormData.trouve2,
      ecart2:   addFormData.ecart2,
      demande3: addFormData.demande3,
      trouve3:  addFormData.trouve3,
      ecart3:   addFormData.ecart3
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
        id: editContactId,
        parm:editFormData.parm,
        demande1: editFormData.demande1,
        trouve1: editFormData.trouve1,
        ecart1: editFormData.ecart1,
        demande2: editFormData.demande2,
        trouve2: editFormData.trouve2,
        ecart2: editFormData.ecart2,
        demande3: editFormData.demande3,
        trouve3: editFormData.trouve3,
        ecart3: editFormData.ecart3,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
        parm:contact.parm,
        demande1: contact.demande1,
        trouve1: contact.trouve1,
        ecart1: contact.ecart1,
        demande2: contact.demande2,
        trouve2: contact.trouve2,
        ecart2: contact.ecart2,
        demande3: contact.demande3,
        trouve3: contact.trouve3,
        ecart3: contact.ecart3,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
<div className="app-container">
        <h1 className="title"> Ligne Confection</h1>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
            <td className="add"></td>
            <td colspan="3">piece1</td>
            <td colspan="3">piece2</td>
            <td colspan="3">piece3</td>
            <td style={{background:"white" , border:"0px"}}></td>
            </tr>
            <tr>
            <th>Parametre a mesurer</th>
            <th>Demande1</th>
            <th>Trouve1</th>
            <th>Ecart1</th>
            <th>Demande2</th>
            <th>Trouve2</th>
            <th>Ecart2</th>
            <th>Demande3</th>
            <th>Trouve3</th>
            <th>Ecart3</th>
            <th className="add">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2 className="add">Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>

      <select name="parm" onChange={handleAddFormChange}>
      <option value="">(Vide)</option>
      <option value="1/2 taille en bas">1/2 taille en bas</option>
      <option value="1/2 taille en haut">1/2 taille en haut</option>
      <option value="bassin">bassin</option>
      <option value="cuisse">cuisse</option>
      </select>
      
      <input 
          type="text"
          name="demande1"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="trouve1"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="ecart1"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
      
         {/* pice2 */}
         <input
          type="text"
          name="demande2"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="trouve2"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="ecart2"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        {/* pice3 */}
        <br/>
        <input
          type="text"
          name="demande3"
          required="required"
          placeholder="Enter demande3..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="trouve3"
          required="required"
          placeholder="Enter trouve3..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="ecart3"
          required="required"
          placeholder="Enter ecart3..."
          onChange={handleAddFormChange}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TabOne;
