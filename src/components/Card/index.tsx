import { Trash as TrashIcon } from '@phosphor-icons/react';
import { useToDos } from '../../hooks/useToDos';
import { ToDo } from '../../store/context';
import * as S from './styles';

interface ICardProps {
  data: ToDo;
}

export function Card({ data: { uuid, title } }: ICardProps) {
  const { removeToDo, toogleCheckToDo } = useToDos();

  function handleRemove() {
    removeToDo(uuid);
  }

  function handleCheck() {
    toogleCheckToDo(uuid);
  }

  return (
    <S.Card>
      <input type="checkbox" onChange={handleCheck} />
      <span>{title}</span>
      <button onClick={handleRemove}>
        <TrashIcon size={24} />
      </button>
    </S.Card>
  );
}
