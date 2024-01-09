import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'

interface ComplexFormValues {
	text: string;
	number: number;
	date: Date;
	checkbox: boolean;
	radio: string
}

interface ComplexFormError {
	text: string;
	number: string;
	radio: string;
}

const initialValues: ComplexFormValues = {
	text: '',
	number: 0,
	date: new Date(),
	checkbox: false,
	radio: '',
}

const ReactFormikNew = () => {

	const handleSubmit = (values: ComplexFormValues) => {
		console.log("Submit");
		console.log(values);
	}

	const validate = (values: ComplexFormValues) => {
		// Partial đưa những property ko phải optional thành optional
		const errors: Partial<ComplexFormError> = {};

		if(!values.text) {
			errors.text = "Required field";
		}
		
		if(values.number <= 0) {
			errors.number = "Must be greater than zero";
		}

		if(!values.radio) {
			errors.radio = "Please select radio group";
		}

		console.log("Validating");
		return errors
	}

	

	return (
		<Formik
			onSubmit={handleSubmit}
			validate={validate}
			initialValues={initialValues}
		>
			{({values}) => (
				<Form>
					{/* Text Field */}
					<div>
						<label htmlFor="text">Text:</label>
						<Field type='text' id='text' name='text'/>
						<ErrorMessage className='text-danger' name='text' component='div'/>
					</div>

					{/* Number Field */}
					<div>
						<label htmlFor="number">Number:</label>
						<Field type='number' id='number' name='number'></Field>
						<ErrorMessage className='text-danger' name='number' component='div'/>
					</div>

					{/* Date Field */}
					<div>
						<label htmlFor="date">Date: </label>
						<Field type='date' id='date' name='date'/>
						<ErrorMessage className='text-danger' name='date' component='div'/>
					</div>

					{/* Radio group Field */}
					<div role='group'>
						<label >
							<Field type='radio' name='radio' value="One"/>
							One
						</label>
						<label >
							<Field type='radio' name='radio' value="Two"/>
							Two
						</label>
						<label >
							<Field type='radio' name='radio' value="Three"/>
							Three
						</label>
						<ErrorMessage className='text-danger' name='radio' component='div'/>


					</div>

					{/* Submit button */}
					<div>
						<button className='btn btn-primary' type='submit' >Submit</button>
					</div>

				</Form>
			)}
		</Formik>
	)
}

export default ReactFormikNew