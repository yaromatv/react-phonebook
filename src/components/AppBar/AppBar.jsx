import { Navigation } from './Navigation';
import { UserBar } from './UserBar';
import { AuthNav } from './AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Container, Box, Hide } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box borderBottom={'1px'} borderColor={'gray.400'} marginBottom={4}>
      <Container
        maxW={{ base: 'xs', md: '1024px' }}
        display={'flex'}
        justifyContent={{ base: 'flex-end', md: 'space-between' }}
        paddingRight={{ base: '0', md: '4' }}
        paddingLeft={{ base: '0', md: '4' }}
      >
        <Hide breakpoint="(max-width: 767px)">
          <Navigation />
        </Hide>
        {isLoggedIn ? <UserBar /> : <AuthNav />}
      </Container>
    </Box>
  );
};
