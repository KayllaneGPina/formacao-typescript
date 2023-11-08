import styled from "styled-components";

const Title = styled.h1`
    font-size: 2.5em;
    text-align: center;
    color: #FFF;
    padding: 15px;
`

export const Header = () => {
    return (
        <Title>
            Welcome to DIO BANK
        </Title>
    );
}