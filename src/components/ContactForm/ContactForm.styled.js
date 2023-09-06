import styled from 'styled-components'

import { Form, ErrorMessage } from "formik";

export const StyledForm = styled(Form)`
    padding: 20px;
    border: 1px solid black;
    width: 200px;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

`
export const InputTitle = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
    letter-spacing: 0.02em;
`

export const StyledErrorMessage = styled(ErrorMessage)`
    color: red;
    font-size: 12px;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap:5px;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0.02em;
`

export const AddContactBtn = styled.button`
    font-weight: 500;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: white;
    background-color: blue;
    cursor: pointer;
    padding: 5px 7px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border: 1px solid darkblue;
`
