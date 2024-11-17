import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { v4 as uuid } from 'uuid';

export type ToDo = {
  uuid: string;
  title: string;
  completed: boolean;
};

type AppContextType = {
  count: number;
  numberOfCompleted: number;
  toDos: ToDo[];
  addToDo: (title: string) => void;
  removeToDo: (uuid: string) => void;
  toogleCheckToDo: (uuid: string) => void;
};

export const AppContext = createContext({} as AppContextType);

export const AppProvider = ({ children }: PropsWithChildren<{}>) => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const numberOfCompleted = useMemo(
    () => toDos.filter((toDo) => toDo.completed).length,
    [toDos],
  );

  const addToDo = useCallback((title: string) => {
    const newToDo = {
      uuid: uuid(),
      title,
      completed: false,
    };
    setToDos((prevToDos) => [...prevToDos, newToDo]);
  }, []);

  const removeToDo = useCallback((uuid: string) => {
    setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.uuid !== uuid));
  }, []);

  const toogleCheckToDo = useCallback((uuid: string) => {
    const findToDo = toDos.find((toDo) => toDo.uuid === uuid)!;
    findToDo.completed = !findToDo.completed;
    setToDos((prevToDos) => [...prevToDos, findToDo]);
  }, []);

  return (
    <AppContext.Provider
      value={{
        count: toDos.length,
        numberOfCompleted,
        toDos,
        addToDo,
        removeToDo,
        toogleCheckToDo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
