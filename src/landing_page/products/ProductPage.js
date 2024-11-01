import React from 'react';
import Hero from './Hero';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import Universe from './Universe';
function ProductPage() {
    return (
        <>
        <Hero/>
        <LeftSide src={"media/images/kite.png"} head={"Kite"} para={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."} tryDemo={"Try demo "} learnMore={"Learn more "} google={"media/images/googlePlayBadge.svg"} appStore={"media/images/appstoreBadge.svg"} />
        <RightSide  src={"media/images/products-console.png"} head={"Console"} para={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."} link={"Learn more "} />
        <LeftSide src={"media/images/products-coin.png"} head={"Coin"} para={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."} tryDemo={"coin"} google={"media/images/googlePlayBadge.svg"} appStore={"media/images/appstoreBadge.svg"} learnMore={"Learn more"} />
        <RightSide src={"media/images/products-kiteconnect.png"} head={"Kite Connect API"} para={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."} link={'Kite Connect '} />
        <LeftSide src={"media/images/varsity.png"} para={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."} head={"Varsity mobile"} tryDemo={"Try demo "} learnMore={"Learn more "} google={"media/images/googlePlayBadge.svg"} appStore={"media/images/appstoreBadge.svg"}/>
        <p style={{fontSize:'20px', wordSpacing:'4px'}} className='text-center mt-4'>Want to know more about our technology stack? Check out the <a style={{textDecoration:'none'}} href=''>Zerodha.tech</a> blog.</p>
        <Universe/>
        </>
    );
}

export default ProductPage;