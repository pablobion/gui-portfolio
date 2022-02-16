import styled from "styled-components";
import px2vw from "./utils/px2vw";

export const DivApp = styled.div`
    width: 100%;
    @media (min-width: 0px) and (max-width: 719px) {
    }
    @media (min-width: 720px) {
        padding: ${px2vw(70)};
    }
`;

export const DivTopSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 0px) and (max-width: 719px) {
        flex-direction: column;
    }
    @media (min-width: 720px) {
    }
`;

export const DivTopLeft = styled.div``;

export const Logo = styled.img`
    width: 100%;
    @media (min-width: 720px) {
        width: ${px2vw(500)};
    }
`;

export const InsideLogo = styled.div`
    @media (min-width: 720px) {
        position: absolute;
        top: ${px2vw(50)};
        left: ${px2vw(240)};
    }
`;

export const DivTopMid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 0px) and (max-width: 719px) {
        width: 100%;
    }
    @media (min-width: 720px) {
        width: ${px2vw(650)};
        padding-left: ${px2vw(60)};
        padding-right: ${px2vw(60)};
    }
`;

export const DivTopMidLeft = styled.div`
    @media (min-width: 0px) and (max-width: 719px) {
        width: ${px2vw(1000)};
    }
    @media (min-width: 720px) {
        display: flex;
        justify-content: center;
        width: ${px2vw(400)};
    }
`;

export const DivTopMidRight = styled.div`
    @media (min-width: 0px) and (max-width: 719px) {
        width: 100%;
        padding-left: ${px2vw(50)};
        padding-right: ${px2vw(50)};
    }
    @media (min-width: 720px) {
        display: flex;
        justify-content: center;
    }
`;

export const DivTopRight = styled.div`
    @media (min-width: 720px) {
        position: absolute;
        right: 0;
        margin: 100px 50px 0px 0px;
    }
`;

export const DivBottom = styled.div``;

export const CreateBy = styled.div`
    margin-top: 80px;
`;
