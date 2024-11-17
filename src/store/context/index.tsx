import { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { createContext } from 'use-context-selector';
import { v4 as uuid } from 'uuid';

export type ToDo = {
  uuid: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

export type AppContextType = {
  count: number;
  numberOfCompleted: number;
  toDos: ToDo[];
  addToDo: (title: string) => void;
  removeToDo: (uuid: string) => void;
  toggleCheckToDo: (uuid: string) => void;
};

export const AppContext = createContext({} as AppContextType);

export const AppProvider = ({ children }: PropsWithChildren<{}>) => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const numberOfCompleted = useMemo(
    () => toDos.filter((toDo) => toDo.completed).length,
    [toDos],
  );

  function orderToDos(toDos: ToDo[]) {
    return toDos.sort((a, b) => {
      if (a.completed === b.completed) {
        //  Ordenação decrescente por createdAt
        return b.createdAt.getTime() - a.createdAt.getTime();
      }
      // Concluídos vão para o final
      return a.completed ? 1 : -1;
    });
  }

  const addToDo = useCallback((title: string) => {
    const newToDo = {
      uuid: uuid(),
      title,
      completed: false,
      createdAt: new Date(),
    };

    setToDos((prevToDos) => orderToDos([...prevToDos, newToDo]));
  }, []);

  const removeToDo = useCallback((uuid: string) => {
    setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.uuid !== uuid));
  }, []);

  const toggleCheckToDo = useCallback((uuid: string) => {
    setToDos((prevToDos) => {
      const updatedToDos = prevToDos.map((toDo) =>
        toDo.uuid === uuid ? { ...toDo, completed: !toDo.completed } : toDo,
      );

      return orderToDos(updatedToDos);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        count: toDos.length,
        numberOfCompleted,
        toDos,
        addToDo,
        removeToDo,
        toggleCheckToDo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
