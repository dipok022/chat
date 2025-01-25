const getContacts = async (req, res) => {};

const findContact = async (req, res) => {
  const { contactId } = req.params;
};

const addContact = async (req, res) => {
  const { name, email, phone } = req.body;
};

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
};

export { getContacts, findContact, addContact, deleteContact };
