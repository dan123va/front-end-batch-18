import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { styled } from 'styled-components';

let TituloPagina = styled.h1`
  width: 200px;
  height: 200px;
  color: purple;
`;

let NewAvatar = styled(Avatar)`
    width: 80px;
    background-color: green;
`

let NewStack = styled(Stack)`
  border: 3px solid;
`

export default function test() {
  return (
    <NewStack direction="row" spacing={2}>
      <Avatar>H</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      <NewAvatar>Daniel</NewAvatar>
      <TituloPagina>Hola</TituloPagina>
    </NewStack>
  );
}