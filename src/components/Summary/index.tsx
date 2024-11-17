import { useToDos } from '../../hooks/useToDos';
import { Badge } from '../Badge';
import * as S from './styles';

export function Summary() {
  const { count, numberOfCompleted } = useToDos();

  return (
    <S.Summary>
      <S.BadgeWrapper variant="created">
        <span>Criadas</span> <Badge value={count} />
      </S.BadgeWrapper>
      <S.BadgeWrapper variant="completed">
        <span>Concluídas</span>{' '}
        <Badge value={count > 0 ? `${numberOfCompleted} de ${count}` : 0} />
      </S.BadgeWrapper>
    </S.Summary>
  );
}
