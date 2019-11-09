import styled, { css, keyframes } from 'styled-components/macro';
import { COLORS, QUERIES } from '../../Styling';

export const SlideOut = keyframes`
0%{
    transform: translate(0,0) rotate(0deg)
}

70%{
    transform: translate(90%,0) matrix(1.00,0.00,0.050,1.00,0,0);
}
100%{
    transform: translate(92%,0)  matrix(1.00,0.00,0.00,1.00,0,0);
}
`;

export const SlideIn = keyframes`
0%{
    transform: translate(92%,0)  matrix(1.00,0.00,0.00,1.00,0,0);
}

70%{
    transform: translate(5%,0) matrix(1.00,0.00,0.050,1.00,0,0);
}
100%{
    transform: translate(0,0) rotate(0deg)
}
`;

export const Block = styled.div`
    width: 10%;
    height: 100vh;
    background-color: ${COLORS.deepBlue};
    position: fixed;
    right: 0;
    top: 0;
    display: none;
    animation: ${props =>
        props.minimizeAnim
            ? css`
                  ${SlideOut} .8s forwards ease-out
              `
            : css`
                  ${SlideIn} .8s forwards ease-out
              `};

    @media (${QUERIES.medium}) {
        width: 30%;
        display: block;
    }
`;

export const ScrollCont = styled.div`
    transform: rotate(90deg);
    position: absolute;
    right: -5%;
    bottom: 250px;
    height: 30px;
    color: white;
    display: none;
    transition: opacity 0.5s 0.3s;

    p {
        display: inline-block;
        padding: 0;
    }

    @media (${QUERIES.medium}) {
        display: block;
    }
`;

export const Line = styled.div`
    width: 150px;
    height: 1px;
    background-color: white;
    display: inline-block;
    margin: 0 30px 3px 0;
`;