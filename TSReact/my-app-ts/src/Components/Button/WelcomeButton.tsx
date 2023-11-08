import { Center, Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface IDButton {
  onClick:  MouseEventHandler
}

export const WelcomeButton = ({ onClick}: IDButton) => {
  return (
    <Center>
      <Button
      onClick={onClick}
        colorScheme='teal'
        size='sm'
        width='20%'
        margin='15px'
        border='2px'
        borderColor='green.500'>
        Login
      </Button>
    </Center>
  )
}