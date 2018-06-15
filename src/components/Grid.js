import styled from 'react-emotion'

const Grid = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  grid-template-rows: 15vh 15vh 15vh 10vh 30vh 15vh;
  grid-template-areas:
    'goal goal goal'
    'date date date'
    'hours hours hours'
    '. save .'
    'placeholder placeholder placeholder'
    'nav nav nav';
  background: steelblue;
  color: white;
  font-size: 20px;
`

export default Grid
