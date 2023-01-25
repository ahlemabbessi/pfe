import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const TabSix = () => {
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    parm:"",
    problems: "",
    action: "",
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
    problems: "",
    action: "",
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
      
      problems: addFormData.problems,
      action:   addFormData.action,
      
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
        id: editContactId,
      
        problems: editFormData.problems,
        action: editFormData.action,
        
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
        
        problems: contact.problems,
        action: contact.action,
        
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
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
           
            <tr>
            <th>problems</th>
            <th>action</th>
            <th className="add">edit/delete</th>
            
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

      <h2 className="add">Add a action and problems</h2>
      <form onSubmit={handleAddFormSubmit}>

      <textarea 
          type="text"
          name="problems"
          required="required"
          placeholder="Enter problems..."
          onChange={handleAddFormChange}
        />
        <textarea
          type="text"
          name="action"
          required="required"
          placeholder="Enter an action..."
          onChange={handleAddFormChange}
        />
        

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TabSix;
