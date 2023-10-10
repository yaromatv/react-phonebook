import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';
import { useGetContactsQuery } from 'redux/contactsSlice';

import { Input, FormLabel, Box } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const { data: contacts } = useGetContactsQuery();
  const contactsAreEmpty = contacts.length === 0;

  const handleChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <Box borderWidth="1px" borderRadius="2xl" w="full" h="min" padding="10">
      <FormLabel color={contactsAreEmpty && 'gray.300'}>
        Find contact by name
      </FormLabel>
      <Input
        isDisabled={contactsAreEmpty}
        type="text"
        onChange={handleChange}
        placeholder="Name search"
      ></Input>
    </Box>
  );
};
