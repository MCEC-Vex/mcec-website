const fetch = require('node-fetch')

// Based on https://dev.to/skatkov/jamstack-progressive-mailchimp-sign-up-form-with-netlify-13m3
// and https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget/
const {MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID} = process.env;

exports.handler = async event =>
{
    console.log(event);
    
    const payload = JSON.parse(event.body).payload;
    if(payload['form_name'] !== 'newsletter')
    {
        return;
    }
    
    if(!payload.email)
    {
        console.log('missing email');
        return {
            statusCode: 400,
            body: JSON.stringify({
                error: 'missing email'
            })
        };
    }
    
    if(!MAILCHIMP_API_KEY)
    {
        console.log('missing mailChimpAPI key');
        return {
            statusCode: 400,
            body: JSON.stringify({
                error: 'missing mailChimpAPI key'
            })
        };
    }
    
    if(!MAILCHIMP_LIST_ID)
    {
        console.log('missing mailChimpListID key');
        return {
            statusCode: 400,
            body: JSON.stringify({
                error: 'missing mailChimpListID key'
            })
        };
    }
    
    const data = {
        email_address: payload.email,
        status: 'pending',
        merge_fields: {}
    };
    
    const subscriber = JSON.stringify(data);
    console.log('Sending data to mailchimp', subscriber);
    
    return fetch(`https://us14.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members/`, {
        method: 'POST',
        headers: {
            Authorization: 'Basic ' + Buffer.from('apikey:' + MAILCHIMP_API_KEY).toString('base64'),
            'Content-Type': 'application/json',
        },
        body: subscriber
    }).then(response => response.json()).then(data =>
    {
        console.log(`Submitted! \n ${data}`)
    }).catch(error =>
    {
        console.log('Error!');
        console.log(error);
        return {statusCode: 422, body: String(error)}
    });
};
