 # Usage

  <!-- usage -->
```sh-session
$ npm install -g @paystack-oss/dev-cli
$ paystack COMMAND
running command...
$ paystack (-v|--version|version)
@paystack-oss/dev-cli/1.0.0-nightly.0 darwin-x64 node-v12.18.1
$ paystack --help [COMMAND]
USAGE
  $ paystack COMMAND
...
```
<!-- usagestop -->

  # Commands

  <!-- commands -->
* [`paystack autocomplete [SHELL]`](#paystack-autocomplete-shell)
* [`paystack avs ENDPOINT`](#paystack-avs-endpoint)
* [`paystack balance ENDPOINT`](#paystack-balance-endpoint)
* [`paystack bank ENDPOINT`](#paystack-bank-endpoint)
* [`paystack bulkcharge ENDPOINT`](#paystack-bulkcharge-endpoint)
* [`paystack card ENDPOINT`](#paystack-card-endpoint)
* [`paystack charge ENDPOINT`](#paystack-charge-endpoint)
* [`paystack country ENDPOINT`](#paystack-country-endpoint)
* [`paystack customer ENDPOINT`](#paystack-customer-endpoint)
* [`paystack dedicatedaccount ENDPOINT`](#paystack-dedicatedaccount-endpoint)
* [`paystack dispute ENDPOINT`](#paystack-dispute-endpoint)
* [`paystack help [COMMAND]`](#paystack-help-command)
* [`paystack identity ENDPOINT`](#paystack-identity-endpoint)
* [`paystack info`](#paystack-info)
* [`paystack integration ENDPOINT`](#paystack-integration-endpoint)
* [`paystack invoice ENDPOINT`](#paystack-invoice-endpoint)
* [`paystack login`](#paystack-login)
* [`paystack logout`](#paystack-logout)
* [`paystack open [PAGE]`](#paystack-open-page)
* [`paystack page ENDPOINT`](#paystack-page-endpoint)
* [`paystack paymentrequest ENDPOINT`](#paystack-paymentrequest-endpoint)
* [`paystack paymentsessiontimeout ENDPOINT`](#paystack-paymentsessiontimeout-endpoint)
* [`paystack plan ENDPOINT`](#paystack-plan-endpoint)
* [`paystack product ENDPOINT`](#paystack-product-endpoint)
* [`paystack refund ENDPOINT`](#paystack-refund-endpoint)
* [`paystack sample [SAMPLE] [FILEPATH]`](#paystack-sample-sample-filepath)
* [`paystack settlement ENDPOINT`](#paystack-settlement-endpoint)
* [`paystack split ENDPOINT`](#paystack-split-endpoint)
* [`paystack subaccount ENDPOINT`](#paystack-subaccount-endpoint)
* [`paystack subscription ENDPOINT`](#paystack-subscription-endpoint)
* [`paystack transaction ENDPOINT`](#paystack-transaction-endpoint)
* [`paystack transfer ENDPOINT`](#paystack-transfer-endpoint)
* [`paystack transferrecipient ENDPOINT`](#paystack-transferrecipient-endpoint)
* [`paystack update [CHANNEL]`](#paystack-update-channel)
* [`paystack verifications ENDPOINT`](#paystack-verifications-endpoint)
* [`paystack version`](#paystack-version)
* [`paystack webhook [SUBCOMMAND]`](#paystack-webhook-subcommand)
* [`paystack whoami`](#paystack-whoami)

## `paystack autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ paystack autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ paystack autocomplete
  $ paystack autocomplete bash
  $ paystack autocomplete zsh
  $ paystack autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.3.0/src/commands/autocomplete/index.ts)_

## `paystack avs ENDPOINT`

list avs

```
USAGE
  $ paystack avs ENDPOINT

OPTIONS
  --country=country
  --currency=currency
  --domain=domain
  --type=type
```

_See code: [src/commands/avs.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/avs.js)_

## `paystack balance ENDPOINT`

fetch, ledger balance

```
USAGE
  $ paystack balance ENDPOINT

OPTIONS
  --domain=domain
  --from=from
  --page=page
  --perPage=perPage
  --to=to
```

_See code: [src/commands/balance.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/balance.js)_

## `paystack bank ENDPOINT`

list, resolve bank

```
USAGE
  $ paystack bank ENDPOINT

OPTIONS
  --account_number=account_number
  --bank_code=bank_code
  --country=country
  --domain=domain
  --gateway=gateway
  --next=next
  --pay_with_bank_transfer=pay_with_bank_transfer
  --perPage=perPage
  --previous=previous
  --use_cursor=use_cursor
```

_See code: [src/commands/bank.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/bank.js)_

## `paystack bulkcharge ENDPOINT`

fetch, fetch_charges, initiate, list, pause, resume bulkcharge

```
USAGE
  $ paystack bulkcharge ENDPOINT

OPTIONS
  --code=code
  --domain=domain
  --from=from
  --page=page
  --perPage=perPage
  --to=to
```

_See code: [src/commands/bulkcharge.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/bulkcharge.js)_

## `paystack card ENDPOINT`

resolve card

```
USAGE
  $ paystack card ENDPOINT

OPTIONS
  --bin=bin
  --domain=domain
```

_See code: [src/commands/card.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/card.js)_

## `paystack charge ENDPOINT`

create, submit_pin, submit_otp, submit_phone, submit_birthday, submit_address, check_pending charge

```
USAGE
  $ paystack charge ENDPOINT

OPTIONS
  --address=address
  --amount=amount
  --authorization_code=authorization_code
  --bank=bank
  --bearer=bearer
  --birthday=birthday
  --city=city
  --currency=currency
  --domain=domain
  --email=email
  --metadata=metadata
  --mobile_money=mobile_money
  --otp=otp
  --phone=phone
  --pin=pin
  --reference=reference
  --split_code=split_code
  --state=state
  --subaccount=subaccount
  --transaction_charge=transaction_charge
  --ussd=ussd
  --zipcode=zipcode
```

_See code: [src/commands/charge.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/charge.js)_

## `paystack country ENDPOINT`

list country

```
USAGE
  $ paystack country ENDPOINT

OPTIONS
  --domain=domain
```

_See code: [src/commands/country.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/country.js)_

## `paystack customer ENDPOINT`

fetch, update, validate, create, list, white/blacklist, deactivate_authorization customer

```
USAGE
  $ paystack customer ENDPOINT

OPTIONS
  --account_number=account_number
  --authorization_code=authorization_code
  --bank_code=bank_code
  --bvn=bvn
  --code=code
  --country=country
  --customer=customer
  --domain=domain
  --email=email
  --first_name=first_name
  --from=from
  --last_name=last_name
  --metadata=metadata
  --next=next
  --page=page
  --perPage=perPage
  --phone=phone
  --previous=previous
  --risk_action=risk_action
  --to=to
  --type=type
  --use_cursor=use_cursor
  --value=value
```

_See code: [src/commands/customer.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/customer.js)_

## `paystack dedicatedaccount ENDPOINT`

fetch, deactivate, create, list, providers, split dedicatedaccount

```
USAGE
  $ paystack dedicatedaccount ENDPOINT

OPTIONS
  --account_id=account_id
  --account_number=account_number
  --active=active
  --bank_id=bank_id
  --currency=currency
  --customer=customer
  --domain=domain
  --page=page
  --perPage=perPage
  --preferred_bank=preferred_bank
  --provider_slug=provider_slug
  --split_code=split_code
  --subaccount=subaccount
```

_See code: [src/commands/dedicatedaccount.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/dedicatedaccount.js)_

## `paystack dispute ENDPOINT`

fetch, update, get_upload_url, resolve_a, add_evidence, list, export, list_transaction dispute

```
USAGE
  $ paystack dispute ENDPOINT

OPTIONS
  --customer_email=customer_email
  --customer_name=customer_name
  --customer_phone=customer_phone
  --delivery_address=delivery_address
  --delivery_date=delivery_date
  --domain=domain
  --evidence=evidence
  --from=from
  --id=id
  --message=message
  --page=page
  --perPage=perPage
  --refund_amount=refund_amount
  --resolution=resolution
  --service_details=service_details
  --status=status
  --to=to
  --transaction=transaction
  --uploaded_filename=uploaded_filename
```

_See code: [src/commands/dispute.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/dispute.js)_

## `paystack help [COMMAND]`

display help for paystack

```
USAGE
  $ paystack help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.18/src/commands/help.ts)_

## `paystack identity ENDPOINT`

resolve_bvn, resolve_bvn_premium, match_bvn, resolve_card_bin identity

```
USAGE
  $ paystack identity ENDPOINT

OPTIONS
  --account_number=account_number
  --bank_code=bank_code
  --bin=bin
  --bvn=bvn
  --domain=domain
  --first_name=first_name
  --last_name=last_name
```

_See code: [src/commands/identity.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/identity.js)_

## `paystack info`

Get device info

```
USAGE
  $ paystack info
```

_See code: [src/commands/info.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/info.js)_

## `paystack integration ENDPOINT`

update, fetch integration

```
USAGE
  $ paystack integration ENDPOINT

OPTIONS
  --domain=domain
  --timeout=timeout
```

_See code: [src/commands/integration.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/integration.js)_

## `paystack invoice ENDPOINT`

archive invoice

```
USAGE
  $ paystack invoice ENDPOINT

OPTIONS
  --domain=domain
```

_See code: [src/commands/invoice.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/invoice.js)_

## `paystack login`

Sign in to the CLI

```
USAGE
  $ paystack login
```

_See code: [src/commands/login.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/login.js)_

## `paystack logout`

Open Paystack docs, API reference or dashboard

```
USAGE
  $ paystack logout
```

_See code: [src/commands/logout.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/logout.js)_

## `paystack open [PAGE]`

Open Paystack docs, API reference or dashboard

```
USAGE
  $ paystack open [PAGE]
```

_See code: [src/commands/open.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/open.js)_

## `paystack page ENDPOINT`

fetch, update, add_products, create, list, check_slug_availability page

```
USAGE
  $ paystack page ENDPOINT

OPTIONS
  --active=active
  --amount=amount
  --description=description
  --domain=domain
  --from=from
  --id=id
  --metadata=metadata
  --name=name
  --page=page
  --perPage=perPage
  --product=product
  --redirect_url=redirect_url
  --slug=slug
  --to=to
```

_See code: [src/commands/page.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/page.js)_

## `paystack paymentrequest ENDPOINT`

fetch, update, create, list, verify, send_notification, totals, finalize, archive paymentrequest

```
USAGE
  $ paystack paymentrequest ENDPOINT

OPTIONS
  --amount=amount
  --currency=currency
  --customer=customer
  --description=description
  --domain=domain
  --draft=draft
  --due_date=due_date
  --from=from
  --has_invoice=has_invoice
  --id=id
  --invoice_number=invoice_number
  --page=page
  --perPage=perPage
  --send_notification=send_notification
  --split_code=split_code
  --status=status
  --to=to
```

_See code: [src/commands/paymentrequest.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/paymentrequest.js)_

## `paystack paymentsessiontimeout ENDPOINT`

fetch, update paymentsessiontimeout

```
USAGE
  $ paystack paymentsessiontimeout ENDPOINT

OPTIONS
  --domain=domain
  --timeout=timeout
```

_See code: [src/commands/paymentsessiontimeout.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/paymentsessiontimeout.js)_

## `paystack plan ENDPOINT`

fetch, update, create, list plan

```
USAGE
  $ paystack plan ENDPOINT

OPTIONS
  --amount=amount
  --code=code
  --currency=currency
  --description=description
  --domain=domain
  --from=from
  --interval=interval
  --invoice_limit=invoice_limit
  --name=name
  --page=page
  --perPage=perPage
  --send_invoices=send_invoices
  --send_sms=send_sms
  --to=to
```

_See code: [src/commands/plan.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/plan.js)_

## `paystack product ENDPOINT`

fetch, update, delete, create, list product

```
USAGE
  $ paystack product ENDPOINT

OPTIONS
  --active=active
  --currency=currency
  --description=description
  --domain=domain
  --from=from
  --id=id
  --limited=limited
  --name=name
  --page=page
  --perPage=perPage
  --price=price
  --quantity=quantity
  --to=to
```

_See code: [src/commands/product.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/product.js)_

## `paystack refund ENDPOINT`

create, list, fetch refund

```
USAGE
  $ paystack refund ENDPOINT

OPTIONS
  --amount=amount
  --currency=currency
  --customer_note=customer_note
  --domain=domain
  --from=from
  --id=id
  --merchant_note=merchant_note
  --page=page
  --perPage=perPage
  --to=to
  --transaction=transaction
```

_See code: [src/commands/refund.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/refund.js)_

## `paystack sample [SAMPLE] [FILEPATH]`

Get started quickly with a Paystack sample project.  Available samples are sample_vue,sample_react,gift_store,sneaker_store

```
USAGE
  $ paystack sample [SAMPLE] [FILEPATH]
```

_See code: [src/commands/sample.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/sample.js)_

## `paystack settlement ENDPOINT`

fetch, transactions settlement

```
USAGE
  $ paystack settlement ENDPOINT

OPTIONS
  --domain=domain
  --id=id
  --page=page
  --perPage=perPage
```

_See code: [src/commands/settlement.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/settlement.js)_

## `paystack split ENDPOINT`

fetch, update, create, list split

```
USAGE
  $ paystack split ENDPOINT

OPTIONS
  --active=active
  --bearer_subaccount=bearer_subaccount
  --bearer_type=bearer_type
  --currency=currency
  --domain=domain
  --from=from
  --id=id
  --name=name
  --page=page
  --perPage=perPage
  --sort_by=sort_by
  --subaccounts=subaccounts
  --to=to
  --type=type
```

_See code: [src/commands/split.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/split.js)_

## `paystack subaccount ENDPOINT`

fetch, update, create, list subaccount

```
USAGE
  $ paystack subaccount ENDPOINT

OPTIONS
  --account_number=account_number
  --active=active
  --business_name=business_name
  --code=code
  --description=description
  --domain=domain
  --from=from
  --metadata=metadata
  --page=page
  --perPage=perPage
  --percentage_charge=percentage_charge
  --primary_contact_email=primary_contact_email
  --primary_contact_name=primary_contact_name
  --primary_contact_phone=primary_contact_phone
  --settlement_bank=settlement_bank
  --to=to
```

_See code: [src/commands/subaccount.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/subaccount.js)_

## `paystack subscription ENDPOINT`

fetch, create, list, disable, enable subscription

```
USAGE
  $ paystack subscription ENDPOINT

OPTIONS
  --authorization=authorization
  --code=code
  --customer=customer
  --domain=domain
  --from=from
  --page=page
  --perPage=perPage
  --plan=plan
  --start_date=start_date
  --to=to
  --token=token
```

_See code: [src/commands/subscription.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/subscription.js)_

## `paystack transaction ENDPOINT`

fetch, get_event, get_session, list, initialize, verify, fetch_timeline, totals, export, charge_authorization, check_authorization, partial_debit transaction

```
USAGE
  $ paystack transaction ENDPOINT

OPTIONS
  --amount=amount
  --at_least=at_least
  --authorization_code=authorization_code
  --bearer=bearer
  --callback_url=callback_url
  --channels=channels
  --currency=currency
  --domain=domain
  --email=email
  --from=from
  --id=id
  --id_or_reference=id_or_reference
  --invoice_limit=invoice_limit
  --metadata=metadata
  --page=page
  --perPage=perPage
  --plan=plan
  --queue=queue
  --reference=reference
  --split_code=split_code
  --subaccount=subaccount
  --to=to
  --transaction_charge=transaction_charge
```

_See code: [src/commands/transaction.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/transaction.js)_

## `paystack transfer ENDPOINT`

initiate, list, finalize, initiate_bulk, fetch, verify, export, resend_otp_for, disable_otp_requirement_for, finalize_disabling_of_otp_requirement_for, enable_otp_requirement_for transfer

```
USAGE
  $ paystack transfer ENDPOINT

OPTIONS
  --amount=amount
  --code=code
  --currency=currency
  --domain=domain
  --from=from
  --otp=otp
  --page=page
  --perPage=perPage
  --reason=reason
  --recipient=recipient
  --reference=reference
  --source=source
  --status=status
  --to=to
  --transfer_code=transfer_code
  --transfers=transfers
```

_See code: [src/commands/transfer.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/transfer.js)_

## `paystack transferrecipient ENDPOINT`

fetch, update, delete, create, list, bulk transferrecipient

```
USAGE
  $ paystack transferrecipient ENDPOINT

OPTIONS
  --account_number=account_number
  --authorization_code=authorization_code
  --bank_code=bank_code
  --batch=batch
  --code=code
  --currency=currency
  --description=description
  --domain=domain
  --email=email
  --from=from
  --metadata=metadata
  --name=name
  --page=page
  --perPage=perPage
  --to=to
  --type=type
```

_See code: [src/commands/transferrecipient.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/transferrecipient.js)_

## `paystack update [CHANNEL]`

update the paystack CLI

```
USAGE
  $ paystack update [CHANNEL]

OPTIONS
  -a, --available        Install a specific version.
  -i, --interactive      Interactively select version to install. This is ignored if a channel is provided.
  -v, --version=version  Install a specific version.
  --force                Force a re-download of the requested version.

EXAMPLES
  [object Object]
  [object Object]
  [object Object]
  [object Object]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v3.0.0/src/commands/update.ts)_

## `paystack verifications ENDPOINT`

resolve verifications

```
USAGE
  $ paystack verifications ENDPOINT

OPTIONS
  --Body Parameters=Body Parameters
  --callback_url=callback_url
  --domain=domain
  --phone=phone
  --verification_type=verification_type
```

_See code: [src/commands/verifications.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/verifications.js)_

## `paystack version`

```
USAGE
  $ paystack version
```

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v1.0.4/src/commands/version.ts)_

## `paystack webhook [SUBCOMMAND]`

Listen for webhook events locally, and ping your webhook URL from the CLI

```
USAGE
  $ paystack webhook [SUBCOMMAND]

OPTIONS
  --domain=domain
  --forward=forward
```

_See code: [src/commands/webhook.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/webhook.js)_

## `paystack whoami`

Display the current logged in user

```
USAGE
  $ paystack whoami
```

_See code: [src/commands/whoami.js](https://github.com/PaystackOSS/paystack-cli/blob/v1.0.0-nightly.0/src/commands/whoami.js)_
<!-- commandsstop -->
