import React, { createContext, useState } from 'react';

export const ApplicationModalContext = createContext();

export const ApplicationModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ApplicationModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ApplicationModalContext.Provider>
  );
};
