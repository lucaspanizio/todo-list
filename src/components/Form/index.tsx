import { FormEvent, useState } from 'react';
import { PlusCircle as PlusIcon } from '@phosphor-icons/react';
import { useToDos } from '@/hooks/useToDos';
import * as S from './styles';

export function Form() {
  const { toDos, addToDo } = useToDos(({ toDos, addToDo }) => ({
    toDos,
    addToDo,
  }));

  const [task, setTask] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const taskWithoutWhitespace = task.trim();

    if (!taskWithoutWhitespace) return;
    if (taskWithoutWhitespace.length < 6) {
      setError('A tarefa deve ter pelo menos 6 caracteres');
      return;
    }
    if (toDos.find((toDo) => toDo.title === taskWithoutWhitespace)) {
      setError('Não é permitido criar duas tarefas com mesma descrição');
      return;
    }

    addToDo(task);
    setTask('');
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <div>
        <S.Input
          name="task"
          value={task}
          $hasError={!!error}
          autoComplete="off"
          placeholder="Adicione uma nova tarefa"
          onBlur={() => setError('')}
          onChange={(e) => setTask(e.target.value)}
        />
        <S.ErrorLabel
          htmlFor="task"
          style={{ visibility: error ? 'visible' : 'hidden' }}
        >
          {error}
        </S.ErrorLabel>
      </div>
      <S.Button type="submit" disabled={!task}>
        Criar <PlusIcon size={20} />
      </S.Button>
    </S.Form>
  );
}
