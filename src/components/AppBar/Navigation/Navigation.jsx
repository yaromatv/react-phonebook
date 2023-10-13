import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <nav>
        <Breadcrumb separator="" spacing="0">
          <BreadcrumbItem>
            <BreadcrumbLink
              as={NavLink}
              to="/"
              _activeLink={{
                fontWeight: 'bold',
              }}
              padding="3"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          {isLoggedIn && (
            <BreadcrumbItem>
              <BreadcrumbLink
                as={NavLink}
                to="/contacts"
                _activeLink={{
                  fontWeight: 'bold',
                }}
                padding="3"
              >
                Contacts
              </BreadcrumbLink>
            </BreadcrumbItem>
          )}
        </Breadcrumb>
      </nav>
    </div>
  );
};
