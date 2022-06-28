import styled from "styled-components"


export const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-transform: uppercase;
    color: #5D6368;
    justify-content: center;
    margin-top: 17px;
    margin-bottom: 33px;
    font-size: 23px;
`;

export const StatList = styled.ul`
    display: flex;
    justify-content: center;
`;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: #fff;
    width: 80px;
    height: 60px;
    text-align: center;
    background-color: ${p => getRandomHexColor()};
`;

export const Label = styled.span``;

export const Percentage = styled.span``;