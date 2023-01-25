import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const TabThree = () => {
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    parm:"",
    signature: "",
    remarque: "",
    
  });

  const [editFormData, setEditFormData] = useState({
    
    parm:"",
    signature: "",
    remarque: "",
    
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
      signature: addFormData.signature,
      remarque:  addFormData.remarque,
      
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
        id: editContactId,
        parm:editFormData.parm,
        signature: editFormData.signature,
        remarque: editFormData.remarque,
        
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
        signature: contact.signature,
        remarque: contact.remarque,
       
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
      <h1 className="title" > Ligne Validation</h1>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
           
            <tr>
            <th>Service concerné</th>
            <th>Signature</th>
            <th>Remarque</th>
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
      <option value="service qualite">service qualite</option>
      <option value="service methode">service methode</option>
      <option value="service maintenance">Service maintenance</option>
      <option value="service production">service production</option>
      <option value="service externe">service externe</option>
      </select>
      
      <input 
          type="text"
          name="signature"
          placeholder="Enter a signature..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="remarque"
          required="required"
          placeholder="Enter an remarque..."
          onChange={handleAddFormChange}
        />
        

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TabThree;
