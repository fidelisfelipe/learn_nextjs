async function tempo(request, response){
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();
    const subscriberResponse = await fetch(`https://api.convertkit.com/v3/account?api_secret=${apiSecret}`);
    const subscriberResponseJson = await subscriberResponse.json();
    const email = subscriberResponseJson.primary_email_address;

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString(),
        email: email
    });
}

export default tempo;