'use client';

import { createContext, useContext, useState } from 'react';

type LayoutContextType = {
  isOpen: boolean;
  toggle: () => void;
};

const LayoutContext = createContext<LayoutContextType>({
  isOpen: true,
  toggle: () => {},
});

import { PropsWithChildren } from 'react';

export const LayoutProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(o => !o);

  return (
    <LayoutContext.Provider value={{ isOpen, toggle }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useSidebar = () => useContext(LayoutContext);
