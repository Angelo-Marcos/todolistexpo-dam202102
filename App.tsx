import React, { Fragment } from 'react';
import {View, Text, StatusBar} from 'react-native';

import { Home } from './src/screens/Home'

export default function App(){
  return (
    <Fragment>
      <StatusBar 
        barStyle='light-content'
        backgroundColor= '#121015' 

      />
      <Home />
    </Fragment>
    
  )
}

// JSX deve retornar apenas um elemento. Caso tenha mais de um
// no nível mais exerno (parent), pode-se usar o componente 
// Fragment, ou tag vazia <> ... </>