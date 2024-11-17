import * as S from './styles';
import { Trash as TrashIcon } from '@phosphor-icons/react';

export function Card() {
  return (
    <S.Card>
      <input type="checkbox" />
      <span>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </span>
      <button>
        <TrashIcon size={24} />
      </button>
    </S.Card>
  );
}
