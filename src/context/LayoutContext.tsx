'use client';

import { createContext, useContext, useState } from 'react';

type LayoutContextType = {
  isOpen: boolean;
  messageOpen: boolean;
  alertOpen: boolean;
  profileOpen: boolean;
  toggle: () => void;
  toggleMessage: () => void;
  toggleAlert: () => void;
  toggleProfile?: () => void;
};

const LayoutContext = createContext<LayoutContextType>({
  isOpen: true,
  messageOpen: false,
  alertOpen: false,
  profileOpen: false,
  toggle: () => {},
  toggleMessage: () => {},
  toggleAlert: () => {},
  toggleProfile: () => {},
});

import { PropsWithChildren } from 'react';

export const LayoutProvider = ({ children }: PropsWithChildren) => {

  const [isOpen, setIsOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const toggle = () => {
    if(!isOpen){
      setIsOpen(true);
      setMessageOpen(false);
      setAlertOpen(false);
      setProfileOpen(false);
    }
    else {
      setIsOpen(false);
    }
  }
  const toggleMessage = () => {
    if (!messageOpen) {
      setMessageOpen(true);
      setAlertOpen(false);
      setProfileOpen(false);
    } else {
      setMessageOpen(false);
    }
  };

  const toggleAlert = () => {
    if (!alertOpen) {
      setAlertOpen(true);
      setMessageOpen(false);
      setProfileOpen(false);
    } else {
      setAlertOpen(false);
    }
  };

  const toggleProfile = () => {
    if (!profileOpen) {
      setProfileOpen(true);
      setAlertOpen(false);
      setMessageOpen(false);
    } else {
      setProfileOpen(false);
    }
  }

  return (
    <LayoutContext.Provider value={{ isOpen, toggle, messageOpen,toggleMessage, alertOpen, toggleAlert, profileOpen, toggleProfile }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const Context = () => useContext(LayoutContext);