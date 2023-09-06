import { Formik, Field} from "formik";
import * as Yup from 'yup';
import { StyledForm, StyledErrorMessage, Label, AddContactBtn } from "./ContactForm.styled";

const SignupSchema = Yup.object().shape({
   name: Yup.string().matches( /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required('Required'),
   number: Yup.string().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required('Required'),
 });

export const ContactForm = ({onAdd}) => {
    return (
        <Formik
            initialValues={{
                name: "",
                number: ""
            }}
        validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
                onAdd(values);
                actions.resetForm();
        }}
      >
            <StyledForm>
                <Label>
                    Name
                    <Field name="name" type="text" />
                    <StyledErrorMessage name="name" component="div"/>
                </Label>
                <Label>
                    Number
                    <Field name="number" type="tel" />
                    <StyledErrorMessage name="number" component="div"/>
                </Label>
          <AddContactBtn type="submit">Add contact</AddContactBtn>
        </StyledForm>
      </Formik>
    )
}