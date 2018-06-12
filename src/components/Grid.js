import styled from 'react-emotion'

const Grid = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  grid-template-rows: 75px 85px 85px 50px auto;
  grid-template-areas:
    'goal goal goal'
    'date date date'
    'hours hours hours'
    '. save .'
    'placeholder placeholder placeholder';
  background: lightblue;
  color: white;
  font-size: 18px;
`

export default Grid
