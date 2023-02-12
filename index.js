const actions = require('./contacts');
const { Command } = require('commander');
const program = new Command();

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contacts = await actions.listContacts();
      console.table(contacts);
      break;

    case 'get':
      const contactsById = await actions.getContactById(id);
      console.log(contactsById);
      break;

    case 'add':
      const newContactsList = await actions.addContact(name, email, phone);
      console.table(newContactsList);
      break;

    case 'remove':
      const afterRemoveList = await actions.removeContact(id);
      console.table(afterRemoveList);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

(async function () {
  await invokeAction(argv);
})();
