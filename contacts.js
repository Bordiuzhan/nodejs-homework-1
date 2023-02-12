const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, '/db/contacts.json');

const genId = async () => {
  try {
    const contacts = await listContacts();
    const contactsId = contacts.map((el) => parseInt(el.id));
    const id = Math.max(...contactsId) + 1;
    return id.toString();
  } catch (error) {
    console.log(error.message);
  }
};
const rewriteContacts = async (data) => {
  try {
    const newContacts = JSON.stringify(data, null, '\t');
    await fs.writeFile(contactsPath, newContacts);
    return;
  } catch (error) {
    console.log(error.messsage);
  }
};

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);

    return contacts;
  } catch (error) {
    console.log(error.message);
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const foundedContact = contacts.find(
      (el) => parseInt(el.id) === Number(contactId)
    );
    return foundedContact;
  } catch (error) {
    console.log(error.message);
  }
};

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex(
      (el) => parseInt(el.id) === Number(contactId)
    );
    if (index === -1) {
      throw new Error(`Contact with ID: ${contactId} not found`);
    }
    contacts.splice(index, 1);
    await rewriteContacts(contacts);
    console.log(
      `The contact with ID: ${contactId} was removed! Contact list: `
    );
    return contacts;
  } catch (error) {
    console.log(error.message);
  }
};

const addContact = async (name, email, phone) => {
  try {
    const contacts = await listContacts();
    const newContact = { id: await genId(), name, email, phone };
    contacts.push(newContact);
    await rewriteContacts(contacts);
    return contacts;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
