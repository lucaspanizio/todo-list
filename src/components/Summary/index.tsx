import { Badge } from '../Badge';
import * as S from './styles';

export function Summary() {
  return (
    <S.Summary>
      <S.BadgeWrapper variant="created">
        <span>Criadas</span> <Badge value={2} />
      </S.BadgeWrapper>
      <S.BadgeWrapper variant="completed">
        <span>Concluídas</span> <Badge value="2 de 5" />
      </S.BadgeWrapper>
    </S.Summary>
  );
}
