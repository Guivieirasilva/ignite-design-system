import {styled} from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite700',
  borderRadius: '$md',
  padding: '$4',
  height: '$10'
})

export function App() {
  return (
    <Button>Hello World</Button>
  )
}
