import styled from "styled-components";
import { shade } from "polished";

export const DivPortifolioList = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 0px) and (max-width: 719px) {
        margin-top: 70px;
    }
    @media (min-width: 720px) {
        margin-top: 80px;
    }
`;

export const DivPortifolioTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const DivPortifolioButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    #buttons-category {
        display: flex;
        align-items: center;
        justify-content: center;
        @media (min-width: 0px) and (max-width: 719px) {
            flex-direction: column;
            button + button {
                margin-top: 20px;
            }
        }
        width: 50vw;
        justify-content: space-around;
        margin-top: 80px;
    }
    @media (min-width: 0px) and (max-width: 719px) {
        margin-bottom: 50px;
    }
`;

export const ButtonsCategory = styled.button`
    width: 185px;
    height: 40px;
    border: 1px solid;
    align-items: center;
    justify-content: center;
    padding: 5px;
    font-size: 18px;
    box-shadow: 4px 4px 1px ${props => props.color};
    background-color: white;
    cursor: pointer;
    &:hover {
        box-shadow: 4px 4px 1px ${shade(0.2, "#f0f0f5")};
    }
`;

export const TitlePortifolio = styled.h3`
    @media (min-width: 0px) and (max-width: 719px) {
        font-size: 20px;
    }
`;

export const PortifolioButton = styled.div`
    border: 1px solid;
    @media (min-width: 0px) and (max-width: 719px) {
        display: flex;
        width: 115px;
        height: 40px;
        border: 1px solid;
        align-items: center;
        justify-content: center;
        padding: 5px;
        font-size: 18px;
        box-shadow: 4px 4px 1px ${props => props.color};
    }
    @media (min-width: 720px) {
        display: flex;
        justify-content: center;
        border: 1px solid;
        padding: 10px;
        width: 140px;
        height: 50px;
        box-shadow: 4px 4px 1px ${props => props.color};
        background-color: white;
        color: black;
    }
`;

export const DivPortifolioBottom = styled.div`
    width: 100%;
`;



export const NomeProjeto = styled.h2`
    font-size: 18px;
    border-bottom: 3px solid ${props => props.color};
    margin-bottom: 10px;
    text-align: center;
    height: 48px;
    padding-bottom: 5px;
`;

export const BorderColor = styled.div`
    box-shadow: 6px 6px 1px ${props => props.color};
`;
