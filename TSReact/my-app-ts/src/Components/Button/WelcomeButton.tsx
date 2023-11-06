import { Center, Button } from "@chakra-ui/react"
import { login } from "../../Services/login";

export const WelcomeButton = () => {
  return (
    <Center>
      <Button
        onClick={login}
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