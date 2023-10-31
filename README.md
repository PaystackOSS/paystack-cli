

[![Paystack Logo](https://res.cloudinary.com/drps6uoe4/image/upload/c_scale,w_200/v1584835701/Paystack-CeruleanBlue-StackBlue-HL_2_neik7g.png)](https://paystack.com)

# Paystack CLI


## About

As a developer, your most powerful tools - from basic bash commands, to version control and deployment tools - sit in your terminal. The Paystack CLI to makes it easier to set up, test, and manage your Paystack integrations right from that very same terminal.

With the CLI, you can:

1. Ping your preset webhook URL with sample event data
2. Tunnel Paystack events directly to your local server without installing third party software
3. Set up sample applications with fully integrated payment channels
4. Interact with Paystack API
5. *Interpret Paystack API Errors*

## Installing the Paystack CLI

### Install with npm


Paystack requires **[Node.js](https://nodejs.org/)** v16+ to run, To install with npm, run 

`$ npm install -g @paystack-oss/dev-cli`

## Verify your installation

Check that your installation was successful by running 

`$ paystack --version`

The output should look like

`> @paystack-oss/dev-cli/1.0.0-nightly.0 darwin-x64 node-v16.14.0`

## Getting started with the Paystack CLI

Now that you’re all setup, to access your Paystack account and execute commands, run 

`$ paystack login`

You’ll be required to enter your credentials and choose the business you want to execute commands on its behalf.

### Commands

Run  `$ paystack —help` to see a list of all commands you can use on the CLI. By default, all commands are run in test mode. To switch to live, append *`--domain live`* to the end of your command.

Read on for more information on what you can do with the CLI.

### Manage Webhooks

Whenever actions are carried out on your Paystack account, we trigger events which your application can listen and respond to. Before now, to implement webhook routes like these, you had to:

1. Ping your preset webhook URL with sample event data
2. Login to your Paystack Dashboard and set the webhook URL
3. Make a test payment or transfer
4. Review logs
5. Repeat

The CLI lets you listen to real-time webhook events on your integration and reduces all these steps are reduced to running a single command —

`$ paystack webhook listen localhost:8080/webhook`

This command tunnels all your test webhook events to your local server running on port 8080, making it possible for you to run end-to-end tests on your Paystack integration while in development mode.

You can also run health checks on your webhook URL by sending a sample webhook payload to your server. To do this, run:

`$ paystack webhook ping --event transfer.success --domain test`

 Check our [documentation](https://paystack.com/docs/payments/webhooks/#supported-events) for a list of supported events.

### Use Sample Apps

We’ve built several sample apps showcasing different use cases and how to integrate Paystack with different programming languages.

You can set up any of the sample apps on your local machine — To do this, run:  

`$ paystack sample sample_react ~/Work/Desktop`

### Interact with Paystack APIs

All Paystack public API endpoints are accessible via the Paystack CLI, and you can try out different API calls from the terminal before you start integrating. In this guide, you’ll learn how to

1. Initialize a transaction and get a checkout URL.
2. Verify a transaction
3. Charge a saved card.

First, we’ll call the [Initialize Transaction **API](https://paystack.com/docs/api#transaction-initialize)**  to generate a checkout link. The command to do this is

```bash
 $ paystack transaction initialize --email customer@email.com  --amount 10000 \
 --callback_url https://paystack.com/docs
```

Your output should look like this

```bash
Authorization URL created
{
  authorization_url: 'https://checkout.paystack.com/sf69sk0l6d5iuqm',
  access_code: 'sf69sk0l6d5iuqm',
  reference: 'kpu5vxesc5'
}
```

Great! We’ve created the transaction and can grab the `authorization_url` from the terminal and open it in a browser to complete the transaction.

Now that’s done, let’s verify the transaction by running 

`$ paystack transaction verify --reference kpu5vxesc5`

Your output should look like this

```bash
Verification successful
{
  id: 1693453689,
  domain: 'test',
  status: 'success',
  reference: 'kpu5vxesc5',
  amount: 10000,
  metadata: '',
  log: {
   ...
  },
  fees: 150,
  authorization: {
    authorization_code: 'AUTH_5uy1wm1940',
    bin: '408408',
    last4: '4081',
    exp_month: '12',
    exp_year: '2030',
    channel: 'card',
    card_type: 'visa ',
    bank: 'TEST BANK',
    country_code: 'NG',
    brand: 'visa',
    reusable: true,
    signature: 'SIG_oIPc9Xyv8RuejFCaUi4i',
    account_name: null
  },
  customer: {
   ...
    email: 'customer@email.com',
    customer_code: 'CUS_gnguwml5r732p7y',
   ...
  },
  plan: null,
  split: {},
  order_id: null,
  paidAt: '2022-03-18T14:56:20.000Z',
  createdAt: '2022-03-18T14:54:51.000Z',
  requested_amount: 10000,
  ...
}
```

So far, so good! Now one more thing, we want to recurringly charge the card that was used for this transaction. To do that, we’ll need the customer’s email and authorization code from the verify transaction response. Grab those from ***customer.email*** and **authorization.authorization_code** in the JSON response respectively. 

The command to run will be:

```bash
$ paystack transaction charge_authorization --email customer@email.com \ 

--authorization_code AUTH_5uy1wm1940 --amount 1000
```

Output from this command should look like

```bash
Charge attempted
{
  amount: 10000,
  currency: 'NGN',
  transaction_date: '2022-03-21T15:25:01.000Z',
  status: 'success',
  reference: 'h5ijyl88fau8b1l',
  domain: 'test',
  metadata: '',
  gateway_response: 'Approved',
  message: null,
  channel: 'card',
  ip_address: null,
  log: null,
  fees: 150,
  authorization: {
    authorization_code: 'AUTH_5uy1wm1940',
    bin: '408408',
    last4: '4081',
    exp_month: '12',
    exp_year: '2030',
    channel: 'card',
    card_type: 'visa ',
    bank: 'TEST BANK',
    country_code: 'NG',
    brand: 'visa',
    reusable: true,
    signature: 'SIG_oIPc9Xyv8RuejFCaUi4i',
    account_name: null
  },
  customer: {
    id: 8072602,
    first_name: null,
    last_name: null,
    email: 'customer@email.com',
    customer_code: 'CUS_gnguwml5r732p7y',
    phone: null,
    metadata: null,
    risk_action: 'deny',
    international_format_phone: null
  },
  plan: null,
  id: 1700095471
}
```

... and boom! we’re done.

You can test out all other public endpoints from the CLI. Request body and query parameters should be passed as flags to the command, for example, the Create Customer API requires and `email` param, and optional `phone`, `first_name` and `last_name` params, we can represent this as a command line argument in the following format:

```bash
$ paystack customer create --email customer@email.com --first_name Jane --last_name Doe
```

Use our API reference to check the required parameters for any of the endpoints.

## Uninstall the CLI

`$ npm uninstall -g @paystack-oss/dev-cli`
