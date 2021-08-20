import styled from "styled-components";
import { Form, Formik, ErrorMessage } from "formik";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import * as yup from "yup";

const CitiesFormWrapper = styled.div`
    margin-bottom: 30px;

    input {
        width: 66.666%;
        &.invalid {
            border: 1px solid red;
        }
    }

    button {
        width: 33.333%;

        &:disabled {
            opacity: .5;
        }
    }

    .error {
        color: red;
        margin-top: 10px;
        font-size: 16px;
    }
`;

const CitiesForm = (props) => {
    const validationSchema = yup.object().shape({
        city: yup
            .string()
            .matches(/^[a-zA-Z]/, 'Value must be a text')
            .typeError('Value must be a text')
            .required('')
            .max(58)
            .min(2)
    });

    const addCity = (values, submitProps) => {
        const isCityExist = props.cities.some((item) => item.name === values.city);
        if (!isCityExist) {
            props.addAndPickCity(values.city, submitProps.setSubmitting);
            values.city = '';
        }
    };
    return (
        <CitiesFormWrapper className="CitiesForm">
            <Formik 
                initialValues={{ city: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, submitProps) => {addCity(values, submitProps)}}>
                {({
                    values,
                    errors,
                    isValid,
                    dirty,
                    touched,
                    handleChange,
                    isSubmitting
                }) => (
                    <Form>
                        <Input
                            name="city"
                            type="text"
                            value={values.city}
                            placeholder="Enter city name"
                            itemBackground={props.theme.input.background}
                            itemColor={props.theme.input.color}
                            onChange={handleChange}
                            className={touched.city && errors.city && 'invalid'}
                        />
                        <Button
                            disabled={!isValid && !dirty}
                            type="submit"
                            itemBackground={props.theme.button.background}
                            itemColor={props.theme.button.color}
                            shadow={props.theme.shadow}
                        >
                            Добавить
                        </Button>
                        <ErrorMessage className='error' name="city" component="div" />
                        <div>{props.requestStatus}</div>
                    </Form>
                )}
            </Formik>
        </CitiesFormWrapper>
    );
};

export default CitiesForm;
