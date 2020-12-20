import './style/buy.css'
import { connect } from 'react-redux'
import { adjustItemQty, removeFromCart } from '../reducers/Add-item-to-cart'
import React, { useState, useEffect } from "react"
import { Formik, useField, Form } from "formik";


import { Link, useHistory } from "react-router-dom";
import { OrderSchema } from "./Validation/validation";


const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text" {...field}{...label} placeholder={props.placeholder} />
            {meta.touched && meta.error ? (<div className="text-error">{meta.error}</div>) : null}
        </>
    )
}


const CustomFinish = (props) => {
    if (props.price == 0) {
        return (
            <>
                <Link to="/fail">
                    <h1>gp to</h1>
                </Link>

            </>)
    } else {
        return (
            <>
                <Link to="/success">
                    <h1>gp to</h1>
                </Link>

            </>
        )
    }
}

function Buy({ cart }) {

    const [totalPrice, setTotalPrice] = useState(0);
    const today = new Date()



    useEffect(() => {
        let price = 0;



        cart.forEach((item) => {
            price += item.qty * item.price;
        });

        setTotalPrice(price)
        console.log(today)
            ;
    }, [cart, totalPrice, setTotalPrice]);
    return (


        <Formik
            initialValues={{
                email: "",
                phoneNumber: "",
                address: "",
                cardNumber: "",
                cvv2: "",
            }}
            validationSchema={OrderSchema}
            onSubmit={() => {

            }}>
            {
                <Form>
                    <div >
                        <h1>
                            Enter your data
                        </h1>
                        <div className="input-form">
                            <div className="email-phone">
                                <CustomInput name="email" type="text" placeholder="example@gmail.com" />
                                <CustomInput name="phoneNumber" type="text" placeholder="Enter your phone number" />
                            </div>
                            <div className="address-card">
                                <CustomInput name="address" type="text" placeholder="Enter your address" />
                                <CustomInput name="cardNumber" type="text" placeholder="Enter your credit" />
                            </div>

                            <div className="card-cvv">
                                <CustomInput name="cvv2" type="text" placeholder="Enter your cvv2" />
                            </div>


                            <CustomFinish price={totalPrice}/>
                        </div>
                        <h1>Total price of order: {totalPrice}</h1>
                    </div>

                </Form>
            }

        </Formik>

    );

}
const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,

    };
};



export default connect(mapStateToProps)(Buy)