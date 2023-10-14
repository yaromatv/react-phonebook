import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

import toast from 'react-hot-toast';
import {
  Input,
  VStack,
  Button,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon, ArrowForwardIcon } from '@chakra-ui/icons';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const userData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(login(userData)).then(res => {
      if (res.meta.requestStatus === 'fulfilled') {
        toast.success(`User ${userData.email} successfully loged in!`);
        form.reset();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <VStack
        w="xs"
        h="min"
        borderWidth="1px"
        borderRadius="2xl"
        padding="10"
        spacing="5"
        alignItems="flex-end"
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <EmailIcon color="gray.400" />
          </InputLeftElement>
          <Input type="email" name="email" placeholder="Email" />
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <LockIcon color="gray.400" />
          </InputLeftElement>
          <Input type="password" name="password" placeholder="Password" />
        </InputGroup>

        <Button type="submit" marginTop="2.5" rightIcon={<ArrowForwardIcon />}>
          Log in
        </Button>
      </VStack>
    </form>
  );
};
