import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const TabFive = () => {
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    parm:"",
    enHaut: "",
    enBas: "",
    bassin: "",
    cuisse: "",
    dos: "",
    genou: "",
    bas: "",
    long: "",
   
  });

  const [editFormData, setEditFormData] = useState({
    
    parm:"",
    enHaut: "",
    enBas: "",
    bassin: "",
    cuisse: "",
    dos: "",
    genou: "",
    bas: "",
    long: "",
   
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
      enHaut: addFormData.enHaut,
      enBas:  addFormData.enBas,
      bassin:   addFormData.bassin,
      cuisse: addFormData.cuisse,
      dos:  addFormData.dos,
      genou:   addFormData.genou,
      bas: addFormData.bas,
      long:  addFormData.long,

    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
        id: editContactId,
        parm:editFormData.parm,
        enHaut: editFormData.enHaut,
        enBas: editFormData.enBas,
        bassin: editFormData.bassin,
        cuisse: editFormData.cuisse,
        dos: editFormData.dos,
        genou: editFormData.genou,
        bas: editFormData.bas,
        long: editFormData.long,
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
        enHaut: contact.enHaut,
        enBas: contact.enBas,
        bassin: contact.bassin,
        cuisse: contact.cuisse,
        dos: contact.dos,
        genou: contact.genou,
        bas: contact.bas,
        long: contact.long,
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
      <h1 className="title"> Ligne Confection tab5</h1>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
            <th>Parametre a mesurer</th>
            <th>en haut  </th>
            <th>en bas </th>
            <th>bassin</th>
            <th>cuisse</th>
            <th>dos</th>
            <th>genou</th>
            <th>bas</th>
            <th>long</th>
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
      <option value="Demande">Demande</option>
      <option value="Trouve">Trouve</option>
      <option value="ecart">ecart</option>
      
      </select>
      
      <input 
          type="text"
          name="enHaut"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="enBas"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="bassin"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
      
         {/* pice2 */}
         <input
          type="text"
          name="cuisse"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="dos"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="genou"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        {/* pice3 */}
        <br/>
        <input
          type="text"
          name="bas"
          required="required"
          placeholder="Enter bas..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="long"
          required="required"
          placeholder="Enter long..."
          onChange={handleAddFormChange}
        />
      

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TabFive;
