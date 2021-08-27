import styled from "styled-components";
import { Form, Formik } from "formik";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import * as yup from "yup";
import {useState} from "react";

const CitiesFormWrapper = styled.div`
    margin-bottom: 30px;

    input {
        width: 66.666%;
        box-shadow: ${props => props.theme.shadow};
        border: 1px transparent;
          &.invalid {
                border-color: red;
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
        line-height: 1;
        font-size: 16px;
        min-height: 25px;
        font-style: italic;
    }
`;

const CitiesForm = (props) => {
    const [status, setStatus] = useState('');

    const validationSchema = yup.object().shape({
        city: yup
            .string()
            .strict()
            .matches(/^[A-Za-z]+$/, 'Please enter a city name, without numbers (In english)')
            .typeError('Please enter a city name, without numbers')
            .required('')
            .max(58, 'City must be at most 58 characters')
            .min(2, 'City must be at least 2 characters')
    });

    const addCity = (values, submitProps) => {
        const isCityAlreadyExist = props.cities.some((item) => item.name.toUpperCase() === values.city.toUpperCase());

        if (!isCityAlreadyExist) {
            props.getWeatherDataAndAddCity(values.city, submitProps.setSubmitting, setStatus);
            values.city = '';
            setStatus('');
        } else {
            submitProps.setSubmitting(false);
            setStatus(`The ${values.city} is already added to your cities`);
        }
    };

    return (
        <CitiesFormWrapper className="CitiesForm" theme={props.theme}>
            <Formik
                initialValues={{ city: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, submitProps) => addCity(values, submitProps)}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    updateStatus = (e) => {
                        handleChange(e);
                        setStatus('');
                    },
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
                            onChange={updateStatus}
                            onBlur={() => setStatus('')}
                            className={touched.city && errors.city && 'invalid'}
                        />
                        <Button
                            disabled={isSubmitting}
                            type="submit"
                            itemBackground={props.theme.button.background}
                            itemColor={props.theme.button.color}
                            shadow={props.theme.shadow}
                        >
                            Add
                        </Button>
                        <div className="error">{status || errors.city}</div>
                    </Form>
                )}
            </Formik>
        </CitiesFormWrapper>
    );
};

export default CitiesForm;