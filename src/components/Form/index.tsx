import { FormEvent, useState } from 'react';
import { PlusCircle as PlusIcon } from '@phosphor-icons/react';
import { useToDos } from '@/hooks/useToDos';
import * as S from './styles';

export function Form() {
  const { addToDo } = useToDos();
  const [task, setTask] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!task.trim()) return;

    addToDo(task);
    setTask('');
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <input
        value={task}
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">
        Criar <PlusIcon size={20} />
      </button>
    </S.Form>
  );
}
