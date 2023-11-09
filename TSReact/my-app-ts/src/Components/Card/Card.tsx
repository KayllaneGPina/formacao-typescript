import { useState } from 'react';
import { WelcomeButton } from '../Button/WelcomeButton';
import { login } from "../../Services/login"
import {
    Box,
    ChakraProvider,
    Center,
    Input
} from '@chakra-ui/react';


export const Card = () => {
    const [email, setEmail] = useState<string>('')
    
    return (
        <ChakraProvider>
            <Box
                minHeight='100vh'
                backgroundColor='#9413dc'
                padding='50px 150px'
            >
                <Box
                    backgroundColor='#FFFFFF'
                    borderRadius='25px'
                    padding='50px'
                    margin='10px'>
                    <Center>
                        <h1>Faça Login</h1>
                    </Center>
                    <Center>
                        <Input
                            placeholder='email'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            width='50%'
                            marginBottom='10px' />
                    </Center>
                    <Center>
                        <Input
                            placeholder='password'
                            width='50%' />
                    </Center>
                    <WelcomeButton
                        onClick={() => login(email)}
                    />
                </Box>

            </Box>
        </ChakraProvider>
    );
}