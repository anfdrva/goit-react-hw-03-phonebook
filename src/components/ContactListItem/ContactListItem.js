import { ContactItem, DeleteContactBtn } from "./ContactListItem.styled";


export const ContactListItem = ({ person, id, onDelete }) => {
    return (
        <ContactItem>
            <p>{person.name}</p>
            <p>{person.number}</p>
            <DeleteContactBtn onClick={() => onDelete(id)}>Delete</DeleteContactBtn>
        </ContactItem>
    )
}