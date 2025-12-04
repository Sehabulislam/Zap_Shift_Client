import React from 'react';
import { Link } from 'react-router';

const PaymentCancel = () => {
    return (
        <div>
             <h1 className='text-9xl font-bold text-red-500'>Payment Cancelled. Please try again.</h1>
             <Link to={'/dashboard/myParcels'}>
             <button className='btn btn-error'>Try Again</button>
             </Link>
        </div>
    );
};

export default PaymentCancel;