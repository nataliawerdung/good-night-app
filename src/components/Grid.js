import styled from 'react-emotion'

const Grid = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  grid-template-rows: 15vh 12vh 12vh 10vh 30vh 15vh;
  grid-template-areas:
    'goal goal goal'
    'date date date'
    'hours hours hours'
    '. save .'
    'placeholder placeholder placeholder'
    'nav nav nav';
  background: rgb(133, 172, 249);
  color: rgb(29, 54, 73);
  font-size: 20px;
  transition: transform 1s;
`

export default Grid
