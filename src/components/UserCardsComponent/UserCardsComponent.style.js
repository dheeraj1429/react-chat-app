import styled from "styled-components";

export const div = styled.div`
    padding: 1rem;
    cursor: pointer;
    border-bottom: 1px solid #efefef;
`;

export const usrProfile = styled.div`
    display: flex;
    align-items: center;
`;

export const userProfile = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
`;

export const userContent = styled.div`
    padding-left: 1rem;
    max-width: 80%;
    h5 {
        margin: 0;
    }
    p {
        margin: 0;
        font-size: 13px;
    }
`;
