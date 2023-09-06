import { StyledFilter } from "./Filter.styled"

export const Filter = ({ onChange, value }) => {
    return (
            <StyledFilter> Find contacts by name
                <input type="text" value={value} onChange={onChange}/>
            </StyledFilter>
    )
}