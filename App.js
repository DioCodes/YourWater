import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./src/store/store";
import { CustomAppNavigation } from "./src/navigation/CustomAppNavigation";

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CustomAppNavigation />
      </PersistGate>
    </Provider>
  );
}
