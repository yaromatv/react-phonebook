import { NavLink } from 'react-router-dom';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <div>
      <nav>
        <Breadcrumb separator="" spacing="0">
          <BreadcrumbItem>
            <BreadcrumbLink
              as={NavLink}
              to="/register"
              padding="3"
              _activeLink={{
                fontWeight: 'bold',
              }}
            >
              Register
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={NavLink}
              to="/login"
              padding="3"
              _activeLink={{
                fontWeight: 'bold',
              }}
            >
              Login
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </nav>
    </div>
  );
};
