import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useElements, useStripe, CardElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key-here'); // Replace with your Stripe public key



