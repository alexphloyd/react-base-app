import { FunctionComponent } from 'react';
import { Navigate } from 'react-router-dom';
import { Role } from '@shared/types';

const SUPER_ROLES = ['ADMIN'] satisfies Role[];

export function withGuard(
  Component: FunctionComponent,
  permissibleRoles: ExcludeStrict<Role, (typeof SUPER_ROLES)[number]>[],
  redirectTo?: RoutePath
) {
  return function RouteElement(props: Record<string, unknown>) {
    const sessionRole = 'USER'; // TODO: replace to role from authModel

    if (!isAccessGranted(sessionRole, permissibleRoles)) {
      return (
        <Navigate
          to={redirectTo || '/access-denied'}
          replace
        />
      );
    }

    return <Component {...props} />;
  };
}

const isAccessGranted = (
  sessionRole: Role,
  permissibleRoles: ExcludeStrict<Role, (typeof SUPER_ROLES)[number]>[]
) => {
  return (
    SUPER_ROLES.some((permissibleRole) => permissibleRole === sessionRole) ||
    permissibleRoles.some((permissibleRole) => permissibleRole === sessionRole)
  );
};
