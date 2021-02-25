import React from 'react'
import { useFormik } from 'formik'

function YoutubeForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''
        },

        onSubmit: values => {
            console.log('form data:', values);
        }
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
                        value = { formik.values.name }
                    />
                </div>

                <div className = "form-group" >
                    <label htmlFor="email" >E-mail </label> 
                    <input 
                        className = "form-control"
                        type = "email"
                        id = "email"
                        name = "email"
                        onChange = { formik.handleChange }
                        value = { formik.values.email }
                    /> 
                </div>

                <div className = "form-group" >
                    <label htmlFor="channel">Channel </label> 
                    <input 
                        className = "form-control"
                        type = "text"
                        id = "channel"
                        name = "channel"
                        onChange = { formik.handleChange }
                        value = { formik.values.channel }
                    />
                </div>

                <button className="btn btn-primary" type="submit">Submit</button> 
            </form>
        </div>
    )
}

export default YoutubeForm