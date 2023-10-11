import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import {
  Input,
  VStack,
  Button,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import {
  AtSignIcon,
  EmailIcon,
  LockIcon,
  ArrowForwardIcon,
} from '@chakra-ui/icons';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const userData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(register(userData)).then(res => {
      // console.log(res);
      if (res.meta.requestStatus === 'fulfilled') {
        toast.success(`User ${userData.name} created!`);
        form.reset();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
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
            <AtSignIcon color="gray.400" />
          </InputLeftElement>
          <Input type="text" name="name" placeholder="Username" />
        </InputGroup>

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
          Register
        </Button>
      </VStack>
    </form>
  );
};
