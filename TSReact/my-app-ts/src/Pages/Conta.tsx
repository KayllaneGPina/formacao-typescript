import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import CardInfo from "../Components/Card/CardInfo"
import { useEffect, useState } from "react"
import { api } from "../api"

interface UserData {
    email: string
    passaword: string
    name: string
    balance: number
    id: string
}

const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>()


    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    const actualData = new Date()

    const { id } = useParams()
    const navigate = useNavigate()

    if(userData && id !== userData.id) {
        navigate('/')
    }

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ?
                    (
                        <Center>
                            <Spinner size='xl' color='white'/>
                        </Center>
                    ) : (
                        <>
                            <CardInfo mainContent={`Bem-vinda ${userData?.name}`} content={`${actualData.getDay()}/${actualData.getMonth()}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}/>
                            <CardInfo mainContent='Saldo' content={`R$ ${userData.balance}`}/>
                        </>
                    )
                }
            </SimpleGrid>
        </Center>
    )
}

export default Conta