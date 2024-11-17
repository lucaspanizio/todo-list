import * as S from './styles';

interface IBadgeProps {
  value: string | number;
}

export function Badge({ value }: IBadgeProps) {
  return <S.Badge>{value}</S.Badge>;
}
