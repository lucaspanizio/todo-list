import { useContextSelector } from 'use-context-selector';
import { AppContext, AppContextType } from '@/store/context';

export function useToDos<T>(selector: (context: AppContextType) => T): T {
  const value = useContextSelector(AppContext, selector);

  if (value === undefined) {
    throw new Error('useToDos must be used within an AppProvider');
  }

  return value;
}
