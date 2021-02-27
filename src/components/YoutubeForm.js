import React from 'react'
import { useFormik } from 'formik'
import './YoutubeForm.css'

const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = values => {
    console.log('form data:', values);
}

const validate = values => {
    // values.name values.email values.channel
    // errors.name errors.email errors.channel
    // errors.name = 'This field is required
    let errors = {}

    if(!values.name){
        errors.name = 'This name field is required';
    }

    if(!values.email){
        errors.email = 'This email field is required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }

    if(!values.channel){
        errors.channel = 'This channel field is required';
    }

    return errors;
}

function YoutubeForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    // console.log('form values:', formik.values);

    return ( 
        <div className="m-auto text-left p-20 border border-primary rounded" style={{ width: '350px', border: '1px solid #000' }} >
            <form onSubmit={formik.handleSubmit}>
                <div className = "form-group" >
                    <label htmlFor = "name" > Name </label> 
                    <input 
                        className = "form-control"
                        type = "text"
                        id = "name"
                        name = "name"
                        onChange = { formik.handleChange }
                        onBlur= {formik.handleBlur}
                        value = { formik.values.name }
                    />
                    {formik.touched.name && formik.errors.name ? (<div className="error">{formik.errors.name}</div>) : null}
                </div>

                <div className = "form-group" >
                    <label htmlFor="email" >E-mail </label> 
                    <input 
                        className = "form-control"
                        type = "email"
                        id = "email"
                        name = "email"
                        onChange = { formik.handleChange }
                        onBlur= {formik.handleBlur}
                        value = { formik.values.email }
                    />
                    {formik.touched.email && formik.errors.email ? (<div className="error">{formik.errors.email}</div>) : null}
                </div>

                <div className = "form-group" >
                    <label htmlFor="channel">Channel </label> 
                    <input 
                        className = "form-control"
                        type = "text"
                        id = "channel"
                        name = "channel"
                        onChange = { formik.handleChange }
                        onBlur= {formik.handleBlur}
                        value = { formik.values.channel }
                    />
                    {formik.touched.channel && formik.errors.channel ? (<div className="error">{formik.errors.channel}</div>) : null}
                </div>

                <button className="btn btn-primary" type="submit">Submit</button> 
            </form>
        </div>
    )
}

export default YoutubeForm