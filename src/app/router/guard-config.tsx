import { withGuard } from './with-guard';

import Home from '@pages/home';
import Settings from '@pages/settings';

export const ProtectedPages = {
  Home: withGuard(Home, ['USER']),
  Settings: withGuard(Settings, ['CLIENT']),
};
