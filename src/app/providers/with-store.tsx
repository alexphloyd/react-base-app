import { appStore } from '@app/store';
import { Provider as ReduxProvider } from 'react-redux';

export const withStore = (component: () => React.ReactNode) => () => {
  return <ReduxProvider store={appStore}>{component()}</ReduxProvider>;
};
