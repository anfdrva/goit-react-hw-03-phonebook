import styled from 'styled-components'

export const ContactItem = styled.li`
    display: flex;
    gap: 10px;
    flex-wrap: nowrap;
    flex-direction: row;
    margin: 10px;
    align-items: center;
`

export const DeleteContactBtn = styled.button`
    font-weight: 500;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: black;
    background-color: white;
    cursor: pointer;
    padding: 3px 5px;
    border-radius: 4px;
    border: 1px solid gray;
`