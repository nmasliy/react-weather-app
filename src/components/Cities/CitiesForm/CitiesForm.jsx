import styled from "styled-components";
import { Form, Formik, ErrorMessage } from "formik";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import * as yup from "yup";
import { useState } from 'react';

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
    const [isBlur, setIsBlur] = useState(true);
    const [status, setStatus] = useState('');
    
    const validationSchema = yup.object().shape({
        city: yup
            .string()
            .strict()
            .matches(/^[A-Za-z]+$/, 'Please enter a city name, without numbers')
            .typeError('Please enter a city name, without numbers')
            .required('')
            .max(58)
            .min(2)
    });

    const addCity = (values, errors, submitProps) => {
        const isCityAlreadyExist = props.cities.some((item) => item.name === values.city);

        if (!isCityAlreadyExist) {
            props.addAndPickCity(values.city, props.requestStatus);
            values.city = '';
            // props.addAndPickCity(values.city, submitProps.setSubmitting, props.requestStatus);
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
                    handleBlur,
                    isSubmitting
                }) => (
                    <Form>
                        <Input
                            onBlur={(e) => {
                                handleBlur(e);
                                setIsBlur(true);
                            }}
                            onFocus={() => setIsBlur(false)}
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
                        <div className='error'>{touched.city && errors.city}</div>
                    </Form>
                )}
            </Formik>
        </CitiesFormWrapper>
    );
};

export default CitiesForm;