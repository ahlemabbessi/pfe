import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const TabFour = () => {
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    parm:"",
    montageSureDossier: "",
    valDemandee: "",
    valPatronage: "",
    
  });

  const [editFormData, setEditFormData] = useState({
    
    parm:"",
    montageSureDossier: "",
    valDemandee: "",
    valPatronage: "",
    
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
      montageSureDossier: addFormData.montageSureDossier,
      valDemandee:  addFormData.valDemandee,
      valPatronage:   addFormData.valPatronage,
     
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
        id: editContactId,
        parm:editFormData.parm,
        montageSureDossier: editFormData.montageSureDossier,
        valDemandee: editFormData.valDemandee,
        valPatronage: editFormData.valPatronage,
        
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
        montageSureDossier: contact.montageSureDossier,
        valDemandee: contact.valDemandee,
        valPatronage: contact.valPatronage,
       
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
      <h1 className="title" > Ligne Confection</h1>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
           
            <tr>
            <th>Parametre a mes</th>
            
            <th>montageSureDossier</th>
            <th>valDemandee</th>
            <th>valPatronage</th>
            <th>Action</th>
            
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
      <option value="1/2 taille en bas">1/2 taille en bas</option>
      <option value="1/2 taille en haut">1/2 taille en haut</option>
      <option value="bassin">bassin</option>
      <option value="cuisse">cuisse</option>
      </select>
      
      <input 
          type="text"
          name="montageSureDossier"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="valDemandee"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="valPatronage"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
      
        

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TabFour;
