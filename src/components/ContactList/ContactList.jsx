import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { ContactItem } from 'components/ContactItem';

import { Text, Heading, VStack, StackDivider } from '@chakra-ui/react';

export const ContactList = () => {
  const { data: contacts } = useGetContactsQuery();
  // const { data: contacts, error, isLoading } = useGetContactsQuery();

  const filter = useSelector(state => state.filter);
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts =
    contacts?.length > 0
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
      : contacts;
  // console.log(filteredContacts);

  return (
    <>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing="0"
        align="stretch"
        borderWidth="1px"
        borderRadius="2xl"
        w="full"
        marginLeft="0"
        padding="10"
        gap="3"
      >
        <Heading
          size="sm"
          fontWeight="bold"
          textTransform="uppercase"
          marginBottom="5 "
        >
          Contacts
        </Heading>

        {filteredContacts?.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
        {contacts?.length > 0 || (
          <Text color="gray.300">It's empty here, add any contact</Text>
        )}
        {contacts?.length > 0 && filteredContacts?.length === 0 && (
          <Text color="orange.400">No contact found with your query</Text>
        )}
      </VStack>
    </>
  );
};
