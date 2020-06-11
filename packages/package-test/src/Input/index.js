import React from "react";
import styled from 'styled-components';

const StyledInput = styled.input`
    border-radius: 5px;
    border: 1px solid #333;
`

const Input = () => (
    <StyledInput type="text" name="test" />
)


export default Input;