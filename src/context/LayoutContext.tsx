'use client';

import { createContext, useContext, useState } from 'react';

type LayoutContextType = {
  isOpen: boolean;
  messageOpen: boolean;
  alertOpen: boolean;
  toggle: () => void;
  toggleMessage: () => void;
  toggleAlert: () => void;
};

const LayoutContext = createContext<LayoutContextType>({
  isOpen: true,
  messageOpen: false,
  alertOpen: false,
  toggle: () => {},
  toggleMessage: () => {},
  toggleAlert: () => {},
});

import { PropsWithChildren } from 'react';

export const LayoutProvider = ({ children }: PropsWithChildren) => {

  const [isOpen, setIsOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const toggle = () => setIsOpen(o => !o);
  const toggleMessage = () => {
    if (!messageOpen) {
      setMessageOpen(true);
      setAlertOpen(false);
    } else {
      setMessageOpen(false);
    }
  };

  const toggleAlert = () => {
    if (!alertOpen) {
      setAlertOpen(true);
      setMessageOpen(false);
    } else {
      setAlertOpen(false);
    }
  };

  return (
    <LayoutContext.Provider value={{ isOpen, toggle, messageOpen,toggleMessage, alertOpen, toggleAlert }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const context = () => useContext(LayoutContext);