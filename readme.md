# dev-cli

[https://res.cloudinary.com/drps6uoe4/image/upload/c_scale,w_200/v1584835701/Paystack-CeruleanBlue-StackBlue-HL_2_neik7g.png](https://paystack.com)

The Paystack CLI helps you build, test, and manage your Paystack integration right from the terminal.

With the Paystack CLI, you can:

Securely test webhooks without relying on third-party tunneling software
Trigger webhook events to easily test your integration
Create, retrieve, update, and delete API objects
Clone real life sample applications with fully integrated payment channels.


And of course the Paystack CLI is open source with a [public repository](https://github.com/lukman-paystack/paystack-cli)
 on GitHub. Contributions, features, sample apps from developers are encouraged.

## Installation

Paystack requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies and start the instance.

```sh
$ npm install -g @paystack-oss/dev-cli
$ paystack-cli
$ login
```


## Get started

### API

Paystack CLI allows you to make API calls to the Paystack API right from the terminal, for example to initialize a transaction, run 

```sh
$ transaction initialize --amount 1000 --email customer@email.com
```
The terminal's output would look like this 

```sh
authorization_url - - - -- - -- - - - - - -  - - - -  - https://checkout.paystack.com/9wvzhxlk66uylzp
access_code - - - -- - -- - - - - - -  - - - -  - 9wvzhxlk66uylzp
reference - - - -- - -- - - - - - -  - - - -  - se8b1ty80b
```

#### Another example

```sh
$ transaction verify --reference T394541625653843 --domain live
```

#### output
```sh
id - - - -- - -- - - - - - -  - - - -  - 521587687
domain - - - -- - -- - - - - - -  - - - -  - live
status - - - -- - -- - - - - - -  - - - -  - success
reference - - - -- - -- - - - - - -  - - - -  - T394541625653843
amount - - - -- - -- - - - - - -  - - - -  - 100000
gateway_response - - - -- - -- - - - - - -  - - - -  - Approved
paid_at - - - -- - -- - - - - - -  - - - -  - 2020-02-27T17:28:14.000Z
created_at - - - -- - -- - - - - - -  - - - -  - 2020-02-27T17:27:31.000Z
channel - - - -- - -- - - - - - -  - - - -  - card
currency - - - -- - -- - - - - - -  - - - -  - NGN
ip_address - - - -- - -- - - - - - -  - - - -  - 102.67.15.8
fees - - - -- - -- - - - - - -  - - - -  - 1500
plan - - - -- - -- - - - - - -  - - - -  - PLN_q34mm97ac7pnqj1
paidAt - - - -- - -- - - - - - -  - - - -  - 2020-02-27T17:28:14.000Z
createdAt - - - -- - -- - - - - - -  - - - -  - 2020-02-27T17:27:31.000Z
requested_amount - - - -- - -- - - - - - -  - - - -  - 100000
transaction_date - - - -- - -- - - - - - -  - - - -  - 2020-02-27T17:27:31.000Z

```


### Webhook
You can tunnel Paystack webhook events directly to your localhost without any third party software directly from your terminal

```
 $ webhook listen localhost:8995/pay/pstk-webhook?country=ng
```

#### output

```sh
> Tunelling webhook events to localhost:8995/pay/pstk-webhook?country=ng
> Webhook events would now be received at localhost:8995/pay/pstk-webhook?country=ng
```
NOTE - This command is only avalaible in test mode, and by using this command, the CLI would automatically make changes to the Test Webhook URL set on your Paystack dashboard.

You can also run an health check on your live/test webhook endpoint from your terminal

```sh
$ webhook ping --domain live
```

#### output
```sh
-  - - - - - - -  - - -  - - - -   - - - --  -- - - - - - - 
Sending sample charge.success event payload to https://paycash.pstk.xyz/pay/pstk-webhook?country=ng
401 - - Unauthorized
Unauthorized

```


### Sample Apps
We have built different sample apps and embedded them in the CLI, you can setup a sample project in your terminal by running

```sh
$ sample sample-react "~/Desktop/Work"
```

### Development

Want to contribute? Great!


By default, all commands are run in test mode, to switch to live, append the flag *"--domain live"* at the end of your command




License
----

MIT


