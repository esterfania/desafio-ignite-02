import { createContext, ReactNode, useState } from 'react';

export const SidebarContext = createContext({} as SidebarContextData);

interface SidebarContextData {
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
}

interface SidaberProviderProps {
  children: ReactNode;
  selectedGenreId: number;
}

export function SidebarProvider({ children, ...rest }: SidaberProviderProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(rest.selectedGenreId);

  return (
    <SidebarContext.Provider
      value={{
        selectedGenreId,
        setSelectedGenreId,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
