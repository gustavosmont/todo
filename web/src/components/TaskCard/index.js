import React, {useMemo} from 'react';
import {format} from 'date-fns';
import * as S from './styles';

import iconDefault from '../../assets/default.svg';

function TaskCard({type, title, when}) {
  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
  const hour = useMemo(() => format(new Date(when), 'HH:mm'));

  return(
    <S.Container>
        <S.TopCard>
            <img src={iconDefault} alt='icone tarefa'/>
            <h4>{title}</h4>
        </S.TopCard>
        <S.BottomCard>
            <strong>{date}</strong>
            <span>{hour}</span>
        </S.BottomCard>
    </S.Container>
  )
}

export default TaskCard;