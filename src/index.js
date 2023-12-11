import React from 'react';
import { createRoot } from "react-dom/client";
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import Home from './pages/Home';
import Employee from './pages/EmployeesList';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

