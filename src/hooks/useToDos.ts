import { useContext } from 'react';
import { AppContext } from '../store/context';

export function useToDos() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useToDos must be used within an AppProvider');
  }

  return { ...context };
}
