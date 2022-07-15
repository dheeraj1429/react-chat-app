import styled from "styled-components";

export const div = styled.div`
    width: 100%;
    padding: 1rem;
`;

export const sendDiv = styled.div`
    width: 100%;
    height: 50px;
    border: 1px solid #efefef;
    display: flex;
    align-items: center;

    input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        padding: 1rem;
    }

    .send_icons_div {
        margin-left: 1rem;
        width: 20%;
        display: flex;
        align-items: center;
        align-content: center;
    }

    svg {
        cursor: pointer;
    }
`;
