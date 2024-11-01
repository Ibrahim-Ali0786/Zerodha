import React from 'react';
import Hero from './Hero';
import Equity from './Equity';
import BrokerageCalculator from './BrokerageCalculator';
import Brokerage from './Brokerage';
import AoCharges from './AoCharges';
import OvCharges from './OvCharges';
function PricingPage() {
    return (
        <>
        <Hero/>
        <Equity/>
        <BrokerageCalculator/>
        <Brokerage/>
        <AoCharges/>
        <OvCharges/>
        </>
    );
}

export default PricingPage;