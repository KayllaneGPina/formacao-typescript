import { Header } from '../Header/Header';
import { WelcomeButton } from '../Button/WelcomeButton';
import {
    Center,
    Box,
    ChakraProvider,
    Input
} from '@chakra-ui/react';


export const Card = () => {
    return (
        <ChakraProvider>
            <Box
                minHeight='100vh'
                backgroundColor='#9413dc'
                padding='25px'
                >
                <Box
                    backgroundColor='#FFFFFF'
                    borderRadius='25px'
                    padding='90px'
                    marginTop='50px'>
                    <Header />
                    <Center>
                        <Input
                            placeholder='email'
                            width='50%' 
                            marginBottom='10px'/>
                    </Center>
                    <Center>
                        <Input
                            placeholder='password'
                            width='50%' />
                    </Center>
                    <WelcomeButton />
                </Box>
            </Box>
        </ChakraProvider>
    );
}