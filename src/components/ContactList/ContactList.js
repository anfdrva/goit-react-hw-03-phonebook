import { ContactListItem } from "components/ContactListItem/ContactListItem";
import { StyledContactList } from "./ContactList.styled";


export const ContactList = ({ items, onDelete }) => {
    return (
        <StyledContactList>
            {items.map(item => (
                <ContactListItem key={item.id} person={item} id={item.id} onDelete={onDelete}/>
            ))}
        </StyledContactList>
    )
}
