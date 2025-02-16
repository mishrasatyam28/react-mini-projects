import React from 'react'
import CheckoutStepper from './CheckoutStepper';

const STEPPER_DATA = [
    {
      name: 'Contact Details',
      Component: () => <div>Add contact details for further communications.</div>,
    },
    {
      name: 'Shipping Address',
      Component: () => <div>Add shipping address for successful delivery.</div>,
    },
    {
      name: 'Payment',
      Component: () => <div>Complete Payment to complete the order.</div>,
    },
    {
      name: 'Delivered',
      Component: () => <div>Ready to get delivered!</div>,
    },
  ];

function CheckoutStepperTest() {
  return (
      <div>
          <h1>Checkout</h1>
          <CheckoutStepper stepConfig={STEPPER_DATA} />
    </div>
  )
}

export default CheckoutStepperTest