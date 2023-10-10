import { useDeleteContactMutation } from 'redux/contactsSlice';
import { Box, Text, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

export const ContactItem = ({ id, name, number }) => {
  const [deleteContact, deleteContactResult] = useDeleteContactMutation();
  const { isLoading: deleteIsLoading, isSuccess: deleteIsSuccess } =
    deleteContactResult;

  return (
    <Box
      key={id}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text>{name}</Text>
      <Text marginLeft={'auto'} marginRight={'3'}>
        {number}
      </Text>
      <IconButton
        isLoading={deleteIsLoading || deleteIsSuccess}
        aria-label="Delete contact"
        icon={<DeleteIcon />}
        onClick={() => deleteContact(id)}
        variant="outline"
        size="xs"
      />
      {/* <Button
        disabled={deleteIsLoading || deleteIsSuccess}
        type="button"
        onClick={() => deleteContact(id)}
        variant="outline"
        size="xs"
      >
        Delete
      </Button> */}
    </Box>
  );
};
