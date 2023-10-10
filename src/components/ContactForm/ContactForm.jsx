import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';

import { Input, Button, VStack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

export const ContactForm = () => {
  const { data: contacts } = useGetContactsQuery();
  // const { data: contacts, error, isLoading } = useGetContactsQuery();

  const [addContact, { isLoading: addIsLoading }] = useAddContactMutation();

  //  const [addContact, addResult] = useAddContactMutation();
  // const { isError: addError, isLoading: addLoading, isSuccess: addisSuccess } = addResult;

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const existingContact = contacts?.find(
      contact => contact.name === name || contact.number === number
    );

    if (existingContact) {
      if (existingContact.name === name) {
        window.alert(`${existingContact.name} is already in contacts`);
      }

      if (existingContact.number === number) {
        window.alert(`${existingContact.number} is already in contacts`);
      }

      return;
    }

    try {
      await addContact({ name, number });
      //FIX ONLY IF SUCCESS
      form.reset();
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack
        w="xs"
        h="min"
        borderWidth="1px"
        borderRadius="2xl"
        padding="10"
        space="5"
        alignItems="flex-end"
      >
        {/* <FormLabel>Type new contact data</FormLabel> */}
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
        />
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Number"
        />
        <Button
          isLoading={addIsLoading}
          leftIcon={<AddIcon />}
          type="submit"
          variant="solid"
          w="min"
          marginTop="2.5"
        >
          Add contact
        </Button>
      </VStack>
    </form>
  );
};
