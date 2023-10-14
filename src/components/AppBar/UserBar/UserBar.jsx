import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import toast from 'react-hot-toast';
import { Button, Text, Flex } from '@chakra-ui/react';

export const UserBar = () => {
  const dispatch = useDispatch();
  const { userName } = useAuth();

  const handleLogout = () => {
    dispatch(logout()).then(res => {
      if (res.meta.requestStatus === 'fulfilled') {
        toast.success(`You loged out successfully`);
      }
    });
  };

  return (
    <Flex padding={3} paddingRight={0} gap={3}>
      <Text>
        <Text as="b">{userName}</Text>
      </Text>

      <Button type="button" onClick={handleLogout} size="xs" variant="outline">
        Logout
      </Button>
    </Flex>
  );
};
