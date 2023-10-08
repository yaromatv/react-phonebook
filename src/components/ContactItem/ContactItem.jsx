import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const [deleteContact, deleteContactResult] = useDeleteContactMutation();
  const { isLoading: deleteIsLoading, isSuccess: deleteIsSuccess } =
    deleteContactResult;

  return (
    <li key={id}>
      <span>
        {name}: {number}
      </span>
      <button
        disabled={deleteIsLoading || deleteIsSuccess}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};
