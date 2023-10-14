import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

import { Container, Flex, VStack } from '@chakra-ui/react';

const ContactsPage = () => {
  return (
    <Container maxW="container.lg" h="min" marginBottom={'4'}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify={{ md: 'space-between' }}
        alignItems={{ base: 'center', md: 'start' }}
      >
        <ContactForm />

        <VStack
          w={{ base: 'xs', md: '2xl' }}
          h="min"
          marginLeft={{ base: '0', md: '20' }}
          marginTop={{ base: '10', md: '0' }}
          spacing={{ base: '5', md: '10' }}
          alignItems="flex-start"
        >
          <Filter />

          <ContactList />
        </VStack>
      </Flex>
    </Container>
  );
};

export default ContactsPage;
