import { PropsWithChildren } from 'react';
import * as S from './styles';

export function Content({ children }: PropsWithChildren<{}>) {
  return <S.Content>{children}</S.Content>;
}
