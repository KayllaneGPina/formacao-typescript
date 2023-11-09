import { Box } from "@chakra-ui/react";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 2.5em;
    text-align: center;
    color: #FFF;
    padding-top: 10px;
`

export const Header = () => {
    return (
        <Box minHeight='100%' backgroundColor='#000' height='100px'>
            <Title>
                Welcome to DIO BANK
            </Title>
        </Box>
    );
}