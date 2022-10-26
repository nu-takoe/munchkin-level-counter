import { Provider } from 'react-redux';
import store, { persistor } from './redux/index';
import NavigatorElement from './NavigatorElement';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigatorElement />
      </PersistGate>
    </Provider>
  );
}