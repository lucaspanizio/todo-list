import { PlusCircle as PlusIcon } from '@phosphor-icons/react';
import * as S from './styles';

export function Form() {
  return (
    <S.Form>
      <input placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar <PlusIcon size={20} />
      </button>
    </S.Form>
  );
}
