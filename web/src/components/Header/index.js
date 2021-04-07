import React from 'react';
import * as S from './styles';
import Logo from '../../assets/logo.svg';
import Home from '../../assets/home.svg';
import Create from '../../assets/edit-2.svg';
import Sync from '../../assets/refresh-cw.svg';
import Bell from '../../assets/bell.svg';

function Header() {
  return(
    <S.Container>
      <S.LeftSide>
        <img src={Logo} alt="Logo"/>
      </S.LeftSide>
      <S.RightSide>
        <a href="#" class="buttonheader">
          <img src={Home} alt="Home"/>
        </a>
        <a href="#" class="buttonheader">
          <img src={Create} alt="Criação"/>
        </a>
        <a href="#" class="buttonheader">
          <img src={Sync} alt="Sincronização"/>
        </a>
        <a href="#" class="buttonheader">
          <img src={Bell} alt="Notificação"/>
        </a>
      </S.RightSide>
    </S.Container>
  )
}

export default Header;
