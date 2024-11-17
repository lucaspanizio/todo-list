import { useToDos } from '../../hooks/useToDos';
import { Card } from '../Card';
import * as S from './styles';

export function List() {
  const { toDos } = useToDos();

  return (
    <S.Wrapper>
      {toDos.length > 0 ? (
        <>
          {toDos.map((toDo) => (
            <Card key={toDo.uuid} data={toDo} />
          ))}
        </>
      ) : (
        <S.Empty>
          <img
            src="/clipboard.png"
            alt="Clipboard"
            draggable="false"
            width={56}
          />
          <div>
            <h1>Você ainda não tem tarefas cadastradas</h1>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </S.Empty>
      )}
    </S.Wrapper>
  );
}
