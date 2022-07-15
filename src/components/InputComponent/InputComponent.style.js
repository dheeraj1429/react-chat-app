import styled from "styled-components";

export const div = styled.div`
    .user-box {
        position: relative;
    }

    .user-box input {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
    }
    .user-box label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: 0.5s;
    }

    .user-box input:focus ~ label,
    .user-box input:valid ~ label {
        top: -20px;
        left: 120px;
        color: #03e9f4;
        font-size: 12px;
    }
`;
