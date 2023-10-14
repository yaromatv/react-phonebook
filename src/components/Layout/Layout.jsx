import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';

import { Spinner, Center, Text } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <Center flexDirection="column" w="100vw" h="85vh">
            <Spinner size="xl" />
            <Text marginTop={4}>Loading</Text>
          </Center>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
