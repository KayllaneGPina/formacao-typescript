import { useState } from 'react';
import { Header } from '../Header/Header';
import { WelcomeButton } from '../Button/WelcomeButton';
import { login } from "../../Services/login"
import { api } from "../../api";
import {
    Box,
    ChakraProvider,
    Center,
    Input
} from '@chakra-ui/react';
import { useEffect } from 'react';



interface UserData {
    email: string
    passaword: string
    name: string
}

export const Card = () => {
    const [email, setEmail] = useState<string>('')
    const [userData, setUserData] = useState<null | UserData>()

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    console.log(userData)

    return (
        <ChakraProvider>
            <Box
                minHeight='100vh'
                backgroundColor='#9413dc'
                padding='25px'
            >
                <Header />
                <Box
                    backgroundColor='#FFFFFF'
                    borderRadius='25px'
                    padding='90px'
                    marginTop='50px'>
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