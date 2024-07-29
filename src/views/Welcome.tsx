
import useUser from '@/store/useUser.ts'
import { Button } from 'antd'
const Welcome = () => {
  const bears = useUser((state) => state.bears)
  const increasePopulation = useUser((state) => state.increasePopulation)
  return <div>
    <h1>bears: {bears} around here...</h1>
    <Button onClick={() => increasePopulation()}>bears + 1</Button>
  </div>
}

export default Welcome
