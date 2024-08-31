#!/usr/bin/env node

export default {
  subaccount: [
    {
      api: 'update',
      endpoint: 'https://api.paystack.co/subaccount',
      method: 'PUT',
      params: [],
      description: null,
    },
    {
      api: 'fetch',
      endpoint: 'https://api.paystack.co/subaccount/{ID}',
      method: 'GET',
      params: [],
      description: null,
    },
    {
      api: 'list',
      endpoint: 'https://api.paystack.co/subaccount',
      method: 'GET',
      params: [
        {
          parameter: 'perPage',
          required: false,
          type: 'String',
        },
        {
          parameter: 'page',
          required: false,
          type: 'Number',
        },
      ],
      description:
        '**Query Params**\n- **perPage** - Specify how many records you want to retrieve per page\n- **page** - Specify exactly what page you want to retrieve',
    },
    {
      api: 'create',
      endpoint: 'https://api.paystack.co/subaccount',
      method: 'POST',
      params: [
        {
          parameter: 'business_name',
          required: true,
          type: 'String',
        },
        {
          parameter: 'settlement_bank',
          required: true,
          type: 'String',
        },
        {
          parameter: 'account_number',
          required: true,
          type: 'String',
        },
        {
          parameter: 'percentage_charge',
          required: true,
          type: 'String',
        },
        {
          parameter: 'primary_contact_email',
          required: false,
          type: 'String',
        },
        {
          parameter: 'primary_contact_name',
          required: false,
          type: 'String',
        },
        {
          parameter: 'primary_contact_phone',
          required: false,
          type: 'String',
        },
        {
          parameter: 'metadata',
          required: false,
          type: 'String',
        },
        {
          parameter: 'settlement_schedule',
          required: false,
          type: 'String',
        },
        {
          parameter:
            'eceive payments for the created subaccount by providing their code when doing a transaction. More details here: [Split Payments Overview](https://developers.paystack.co/v1.0/docs/splitpaymentsoverview',
          required: false,
          type: 'String',
        },
      ],
      description:
        '**Body Params**\n- **business_name** (_required_) - Name of business for subaccount\n- **settlement_bank** (_required_) - Name of Bank (see list of accepted names by calling [List Banks](https://developers.paystack.co/v1.0/docs/list-banks)\n- **account_number** (_required_) - NUBAN Bank Account Number\n- **percentage_charge** (_required_) - What is the default percentage charged when receiving on behalf of this subaccount?\n- **primary_contact_email** - A contact email for the subaccount\n- **primary_contact_name** - A name for the contact person for this subaccount\n- **primary_contact_phone** - A phone number to call for this subaccount\n- **metadata** - Stringified JSON object\n- **settlement_schedule** - Any of `auto`, `weekly`, `monthly`, `manual`. Auto means payout is T+1 and manual means payout to the subaccount should only be made when requested.\n\nReceive payments for the created subaccount by providing their code when doing a transaction. More details here: [Split Payments Overview](https://developers.paystack.co/v1.0/docs/split-payments-overview)',
    },
  ],
  page: [
    {
      api: 'update',
      endpoint: 'https://api.paystack.co/page/',
      method: 'PUT',
      params: [
        {
          parameter: 'name',
          required: false,
          type: 'String',
        },
        {
          parameter: 'description',
          required: false,
          type: 'String',
        },
        {
          parameter: 'amount',
          required: false,
          type: 'Number',
        },
        {
          parameter: 'active',
          required: false,
          type: 'String',
        },
      ],
      description:
        '**Body Params**\n- **name** - Name of page\n- **description** - Short description of page\n- **amount** - Amount to be charged in kobo. Will override the amount for existing subscriptions.\n- **active** - Set to false to deactivate page url.',
    },
    {
      api: 'fetch',
      endpoint: 'https://api.paystack.co/page/id_or_plan_code',
      method: 'GET',
      params: [],
      description: null,
    },
    {
      api: 'list',
      endpoint: 'https://api.paystack.co/page',
      method: 'GET',
      params: [
        {
          parameter: 'perPage',
          required: false,
          type: 'String',
        },
        {
          parameter: 'page',
          required: false,
          type: 'Number',
        },
        {
          parameter: 'interval',
          required: false,
          type: 'String',
        },
        {
          parameter: 'amount',
          required: false,
          type: 'Number',
        },
      ],
      description:
        '**Query Params**\n- **perPage** - Specify how many records you want to retrieve per page\n- **page** - Specify exactly what page you want to retrieve\n- **interval** - Filter list by plans with specified interval\n- **amount** - Filter list by plans with specified amount (in kobo)',
    },
    {
      api: 'check',
      endpoint: 'https://api.paystack.co/page/check_slug_availability/slug',
      method: 'GET',
      params: [
        {
          parameter: 'slug',
          required: true,
          type: 'String',
        },
      ],
      description:
        '**Path Params**\n- **slug** (_required_) - URL slug to be confirmed',
    },
    {
      api: 'create',
      endpoint: 'https://api.paystack.co/page',
      method: 'POST',
      params: [
        {
          parameter: 'name',
          required: true,
          type: 'String',
        },
        {
          parameter: 'description',
          required: false,
          type: 'String',
        },
        {
          parameter: 'amount',
          required: false,
          type: 'Number',
        },
        {
          parameter: 'slug',
          required: false,
          type: 'String',
        },
        {
          parameter: 'redirect_url',
          required: false,
          type: 'String',
        },
        {
          parameter: 'send_invoices',
          required: false,
          type: 'String',
        },
        {
          parameter: 'custom_fields',
          required: false,
          type: 'String',
        },

        {
          parameter:
            'end pages created to your customers by giving out a link in this format https://paystack.com/pay/:slug. For instance, a valid link for the page above would be https://paystack.com/pay/5nApBwZkv',
          required: false,
          type: 'String',
        },
      ],
      description:
        "**Body Params**\n- **name** (_required_) - Name of page\n- **description** - Short description of page\n- **amount** - Default amount you want to accept using this page. If none is set, customer is free to provide any amount of their choice. The latter scenario is useful for accepting donations\n- **slug** - URL slug you would like to be associated with this page. Page will be accessible at https://paystack.com/pay/[slug]\n- **redirect_url** - If you would like Paystack to redirect someplace upon successful payment, specify the URL here.\n- **send_invoices** - Set to false if you don't want invoices to be sent to your customers\n- **custom_fields** - If you would like to accept custom fields, specify them here. See sample code for details.\n\nSend pages created to your customers by giving out a link in this format https://paystack.com/pay/:slug. For instance, a valid link for the page above would be https://paystack.com/pay/5nApBwZkvY",
    },
  ],
  transfer: [
    {
      api: 'list',
      endpoint: 'https://api.paystack.co/transfer',
      method: 'GET',
      params: [
        {
          parameter: 'perPage',
          required: false,
          type: 'String',
        },
        {
          parameter: 'page',
          required: false,
          type: 'Number',
        },
      ],
      description:
        '**Query Params**\n- **perPage** - Specify how many records you want to retrieve per page\n- **page** - Specify exactly what page you want to retrieve',
    },
    {
      api: 'finalize',
      endpoint: 'https://api.paystack.co/transfer/finalize_transfer',
      method: 'POST',
      params: [
        {
          parameter: 'transfer_code',
          required: true,
          type: 'String',
        },
        {
          parameter: 'otp',
          required: true,
          type: 'String',
        },
      ],
      description:
        '**Body Params**\n- **transfer_code** (_required_) - Transfer code\n- **otp** (_required_) - OTP sent to business phone to verify transfer.',
    },
    {
      api: 'initiate',
      endpoint: 'https://api.paystack.co/transfer',
      method: 'POST',
      params: [
        {
          parameter: 'Body Params',
          required: false,
          type: 'String',
        },
        {
          parameter: 'source',
          required: true,
          type: 'String',
        },
        {
          parameter: 'amount',
          required: false,
          type: 'Number',
        },
        {
          parameter: 'currency',
          required: false,
          type: 'String',
        },
        {
          parameter: 'reason',
          required: false,
          type: 'String',
        },
        {
          parameter: 'recipient',
          required: true,
          type: 'String',
        },
        {
          parameter: 'reference',
          required: false,
          type: 'String',
        },
      ],
      description:
        'Status of transfer object returned will be ‘pending’ if OTP is disabled. In the event that an OTP is required, status will read ‘otp’.\n\n**Body Params**\n- **source** (_required_) - Where should we transfer from? Only balance for now\n- **amount** - Amount to transfer in kobo\n- **currency** - NGN\n- **reason**\n- **recipient** (_required_) - Code for transfer recipient\n- **reference** - If specified, the field should be a unique identifier (in lowercase) for the object. Only `-` `,` `_` and alphanumeric characters allowed.',
    },
    {
      api: 'verify',
      endpoint: 'https://api.paystack.co/transfer/{reference}',
      method: 'GET',
      params: [
        {
          parameter: 'perPage',
          required: false,
          type: 'String',
        },
        {
          parameter: 'reference',
          required: true,
          type: 'String',
        },
        {
          parameter: 'page',
          required: false,
          type: 'Number',
        },
      ],
      description:
        '**Query Params**\n- **perPage** - Specify how many records you want to retrieve per page\n- **page** - Specify exactly what page you want to retrieve',
    },
    {
      api: 'disable',
      endpoint: 'https://api.paystack.co/transfer/disable_otp',
      method: 'POST',
      params: [
        {
          parameter:
            'n the event that you want to be able to complete transfers programmatically without use of OTPs, this endpoint helps disable that….with an OTP. No arguments required. An OTP is sent to you on your business phone',
          required: true,
          type: 'String',
        },
      ],
      description:
        'In the event that you want to be able to complete transfers programmatically without use of OTPs, this endpoint helps disable that….with an OTP. No arguments required. You will get an OTP.\n\nIn the event that you want to be able to complete transfers programmatically without use of OTPs, this endpoint helps disable that….with an OTP. No arguments required. An OTP is sent to you on your business phone.',
    },
    {
      api: 'enable',
      endpoint: 'https://api.paystack.co/transfer/enable_otp',
      method: 'POST',
      params: [],
      description:
        'In the event that a customer wants to stop being able to complete transfers programmatically, this endpoint helps turn OTP requirement back on. No arguments required.',
    },
    {
      api: 'initiate',
      endpoint: 'https://api.paystack.co/transfer/bulk',
      method: 'POST',
      params: [
        {
          parameter: 'Body Params',
          required: false,
          type: 'String',
        },
        {
          parameter: '(no name)',
          required: false,
          type: 'String',
        },

        {
          parameter:
            'tatus of transfer object returned will be ‘pending’ if OTP is disabled. In the event that an OTP is required, status will read ‘otp’',
          required: true,
          type: 'String',
        },
      ],
      description:
        'You need to disable the Transfers OTP requirement to use this endpoint.\n\n**Body Params**\n- **(no name)**\n\nStatus of transfer object returned will be ‘pending’ if OTP is disabled. In the event that an OTP is required, status will read ‘otp’.',
    },
    {
      api: 'finalize',
      endpoint: 'https://api.paystack.co/transfer/disable_otp_finalize',
      method: 'POST',
      params: [
        {
          parameter: 'otp',
          required: true,
          type: 'String',
        },
      ],
      description:
        '**Body Params**\n- **otp** (_required_) - OTP sent to business phone to verify disabling OTP requirement\n\n',
    },
    {
      api: 'fetch',
      endpoint: 'https://api.paystack.co/transfer/id',
      method: 'GET',
      params: [
        {
          parameter: 'id_or_code',
          required: true,
          type: 'String',
        },
      ],
      description:
        '**Path Params**\n- **id_or_code** (_required_) - An ID or code for the transfer whose details you want to retrieve.',
    },
    {
      api: 'list',
      endpoint: 'https://api.paystack.co/transfer/id_or_code',
      method: 'GET',
      params: [
        {
          parameter: 'perPage',
          required: false,
          type: 'String',
        },
        {
          parameter: 'page',
          required: false,
          type: 'Number',
        },
      ],
      description:
        'This lists all bulk charge batches created by the integration. Statuses can be `active`, `paused`, or `complete`.\n\n**Query Params**\n- **perPage** - Specify how many records you want to retrieve per page\n- **page** - Specify exactly what page you want to retrieve',
    },
    {
      api: 'resend',
      endpoint: 'https://api.paystack.co/transfer/resend_otp',
      method: 'POST',
      params: [
        {
          parameter: 'Body Params',
          required: false,
          type: 'String',
        },
        {
          parameter: 'transfer_code',
          required: true,
          type: 'String',
        },
        {
          parameter: 'reason',
          required: true,
          type: 'String',
        },
      ],
      description:
        'Creates a new recipient. An duplicate account number will lead to the retrieval of the existing record.\n\n**Body Params**\n- **transfer_code** (_required_) - Transfer code\n- **reason** (_required_) - either `resend_otp` or `transfer`',
    },
  ],
  paymentrequest: [
    {
      api: 'create',
      endpoint: 'https://api.paystack.co/paymentrequest',
      method: 'POST',
      params: [
        {
          parameter: 'customer',
          required: true,
          type: 'String',
        },
        {
          parameter: 'due_date',
          required: true,
          type: 'String',
        },
        {
          parameter: 'amount',
          required: true,
          type: 'Number',
        },
        {
          parameter: 'description',
          required: false,
          type: 'String',
        },
        {
          parameter: 'line_items',
          required: false,
          type: 'String',
        },
        {
          parameter: 'tax',
          required: false,
          type: 'String',
        },
        {
          parameter: 'currency',
          required: false,
          type: 'String',
        },
        {
          parameter: 'send_notification',
          required: false,
          type: 'String',
        },
        {
          parameter: 'draft',
          required: false,
          type: 'String',
        },
        {
          parameter: 'send_notification',
          required: false,
          type: 'String',
        },
        {
          parameter: 'has_invoice',
          required: false,
          type: 'String',
        },
        {
          parameter: 'invoice_number',
          required: false,
          type: 'String',
        },
      ],
      description:
        '**Body Params**\n- **customer** (_required_) - Customer ID or code\n- **due_date** (_required_) - ISO 8601 representation of request due date\n- **amount** (_required_) - Invoice amount. Only useful if line items and tax values are ignored. endpoint will throw a friendly warning if neither is available.\n- **description**\n- **line_items** - Array of line items in the format `[{"name":"item 1", "amount":2000}]`\n- **tax** - Array of taxes to be charged in the format `[{"name":"VAT", "amount":2000}]`\n- **currency** - Defaults to Naira\n- **send_notification** - Indicates whether Paystack sends an email notification to customer. Defaults to `true`.\n- **draft** - Indicate if request should be saved as draft. Defaults to `false` and overrides send_notification.\n- **send_notification** - Indicates whether Paystack sends an email notification to customer. Defaults to `true`.\n- **has_invoice** - Set to `true` to create a draft invoice (adds an auto incrementing invoice number if none is provided) even if there are no `line_items` or `tax` passed.\n- **invoice_number** - Numeric value of invoice. Invoice will start from 1 and auto increment from there. This field is to help override whatever value Paystack decides. Auto increment for subsequent invoices continue from this point.',
    },
    {
      api: 'finalize',
      endpoint: 'https://api.paystack.co/paymentrequest/finalize/ID_OR_CODE',
      method: 'POST',
      params: [
        {
          parameter: 'Body Params',
          required: false,
          type: 'String',
        },
        {
          parameter: 'send_notification',
          required: false,
          type: 'String',
        },
      ],
      description:
        'Publishes invoice that is draft by sending customer the invoice via email\n\n**Body Params**\n- **send_notification** - Indicates whether Paystack sends an email notification to customer. Defaults to `true`',
    },
    {
      api: 'send',
      endpoint: 'https://api.paystack.co/paymentrequest/notify/ID_OR_CODE',
      method: 'POST',
      params: [
        {
          parameter: 'id',
          required: false,
          type: 'String',
        },
      ],
      description:
        '**Path Params**\n- **id** - Invoice code for which you want to send a notification for',
    },
    {
      api: 'list',
      endpoint: 'https://api.paystack.co/paymentrequest',
      method: 'GET',
      params: [
        {
          parameter: 'customer',
          required: false,
          type: 'String',
        },
        {
          parameter: 'status',
          required: false,
          type: 'String',
        },
        {
          parameter: 'currency',
          required: false,
          type: 'String',
        },
        {
          parameter: 'paid',
          required: false,
          type: 'String',
        },
        {
          parameter: 'include_archive',
          required: false,
          type: 'String',
        },
        {
          parameter: 'payment_request',
          required: false,
          type: 'String',
        },
      ],
      description:
        "**Query Params**\n- **customer** - Specify an ID for the customer whose requests you want to retrieve\n- **status** - Filter requests by status ('failed', 'success', 'abandoned')\n- **currency** - Filter requests sent in a particular currency.\n- **paid** - Filter requests that have been paid for \n- **include_archive** - Includes archived requests in the response\n- **payment_request** - Filter specific invoice by passing invoice code",
    },
    {
      api: 'view',
      endpoint: 'https://api.paystack.co/paymentrequest/REQUEST_ID_OR_CODE',
      method: 'GET',
      params: [
        {
          parameter: 'id',
          required: true,
          type: 'String',
        },
      ],
      description:
        '**Path Params**\n- **id** _(required)_ - An ID for the Invoice',
    },
    {
      api: 'invoice',
      endpoint: 'https://api.paystack.co/paymentrequest/totals',
      method: 'GET',
      params: [],
      description: null,
    },
    {
      api: 'update',
      endpoint: 'https://api.paystack.co/paymentrequest/ID_OR_CODE',
      method: 'PUT',
      params: [
        {
          parameter: 'description',
          required: false,
          type: 'String',
        },
        {
          parameter: 'amount',
          required: false,
          type: 'Number',
        },
        {
          parameter: 'line_item',
          required: false,
          type: 'String',
        },
        {
          parameter: 'tax',
          required: false,
          type: 'String',
        },
        {
          parameter: 'due_date',
          required: false,
          type: 'String',
        },
        {
          parameter: 'metadata',
          required: false,
          type: 'String',
        },
        {
          parameter: 'send_notification',
          required: false,
          type: 'String',
        },
        {
          parameter: 'currency',
          required: false,
          type: 'String',
        },
        {
          parameter: 'customer',
          required: false,
          type: 'String',
        },
      ],
      description:
        '**Body Params**\n- **description**\n- **amount**\n- **line_item**\n- **tax**\n- **due_date**\n- **metadata**\n- **send_notification**\n- **currency** - only works in draft mode\n- **customer** - only works in draft mode',
    },
    {
      api: 'verify',
      endpoint: 'https://api.paystack.co/paymentrequest/verify/{ID}',
      method: 'GET',
      params: [
        {
          parameter: 'ID',
          required: false,
          type: 'String',
        },

        {
          parameter:
            'ote that a key is added called `pending_amount` when you fetch an invoice. This is because when paying for an invoice, you can choose to pay part but not all.  Whenever a successful transaction is made, the key updates to reveal what’s left of the invoice to pay',
          required: false,
          type: 'String',
        },
      ],
      description:
        '**Path Params**\n- **ID** - The invoice code for the Payment Request to be verified\n\nNote that a key is added called `pending_amount` when you fetch an invoice. This is because when paying for an invoice, you can choose to pay part but not all.  Whenever a successful transaction is made, the key updates to reveal what’s left of the invoice to pay.',
    },
  ],
  transferrecipient: [
    {
      api: 'create',
      endpoint: 'https://api.paystack.co/transferrecipient',
      method: 'POST',
      params: [
        {
          parameter: 'Body Params',
          required: false,
          type: 'String',
        },
        {
          parameter: 'type',
          required: true,
          type: 'String',
        },
        {
          parameter: 'name',
          required: true,
          type: 'String',
        },
        {
          parameter: 'metadata',
          required: false,
          type: 'String',
        },
        {
          parameter: 'bank_code',
          required: true,
          type: 'String',
        },
        {
          parameter: 'account_number',
          required: true,
          type: 'String',
        },
        {
          parameter: 'currency',
          required: false,
          type: 'String',
        },
        {
          parameter: 'description',
          required: false,
          type: 'String',
        },
      ],
      description:
        'Creates a new recipient. An duplicate account number will lead to the retrieval of the existing record.\n\n**Body Params**\n- **type** (_required_) - Recipient Type (Only nuban at this time)\n- **name** (_required_) - A name for the recipient\n- **metadata** - Store additional information about your recipient in a structured format. JSON\n- **bank_code** (_required_) - Required if type is nuban. You can find a list of bank codes at [api.paystack.co/bank](https://api.paystack.co/bank)\n- **account_number** (_required_) - Required if type is `nuban`\n- **currency** - Currency for the account receiving the transfer.\n- **description**',
    },
    {
      api: 'delete',
      endpoint: 'https://api.paystack.co/transferrecipient',
      method: 'DELETE',
      params: [],
      description: null,
    },
    {
      api: 'list',
      endpoint: 'https://api.paystack.co/transferrecipient',
      method: 'GET',
      params: [
        {
          parameter: 'perPage',
          required: false,
          type: 'String',
        },
        {
          parameter: 'page',
          required: false,
          type: 'Number',
        },
      ],
      description:
        '**Query Params**\n- **perPage** - Specify how many records you want to retrieve per page\n- **page** - Specify exactly what page you want to retrieve',
    },
    {
      api: 'update',
      endpoint: '{recipient_code_or_id}',
      method: 'PUT',
      params: [],
      description: null,
    },
  ],
  subscription: [
    {
      api: 'disable',
      endpoint: 'https://api.paystack.co/subscription/disable',
      method: 'POST',
      params: [
        {
          parameter: 'code',
          required: true,
          type: 'String',
        },
        {
          parameter: 'token',
          required: true,
          type: 'String',
        },
      ],
      description:
        '**Body Params**\n- **code** (_required_) - Subscription code\n- **token** (_required_) - Email token',
    },
    {
      api: 'fetch',
      endpoint: ':id_or_subscription_code',
      method: 'GET',
      params: [],
      description: null,
    },
    {
      api: 'create',
      endpoint: 'https://api.paystack.co/subscription',
      method: 'POST',
      params: [
        {
          parameter: 'customer',
          required: true,
          type: 'String',
        },
        {
          parameter: 'plan',
          required: true,
          type: 'String',
        },
        {
          parameter: 'authorization',
          required: false,
          type: 'String',
        },
        {
          parameter: 'start_date',
          required: false,
          type: 'String',
        },

        {
          parameter:
            'ote the `email_token` attribute for the subscription object. We create one on each subscription so customers can cancel their subscriptions from within the invoices sent to their mailboxes. Since they are not authorized, the email tokens are what we use to authenticate the requests over the API',
          required: false,
          type: 'String',
        },
      ],
      description:
        "**Body Params**\n- **customer** (_required_) - Customer's email address or customer code\n- **plan** (_required_) - Plan code\n- **authorization** - If customer has multiple authorizations, you can set the desired authorization you wish to use for this subscription here. If this is not supplied, the customer's most recent authorization would be used\n- **start_date** - Set the date for the first debit. (ISO 8601 format)\n\nNote the `email_token` attribute for the subscription object. We create one on each subscription so customers can cancel their subscriptions from within the invoices sent to their mailboxes. Since they are not authorized, the email tokens are what we use to authenticate the requests over the API.",
    },
    {
      api: 'list',
      endpoint: 'https://api.paystack.co/subscription',
      method: 'GET',
      params: [
        {
          parameter: 'perPage',
          required: false,
          type: 'String',
        },
        {
          parameter: 'page',
          required: false,
          type: 'Number',
        },
        {
          parameter: 'customer',
          required: false,
          type: 'String',
        },
        {
          parameter: 'plan',
          required: false,
          type: 'String',
        },
      ],
      description:
        '**Query Params**\n- **perPage** - Specify how many records you want to retrieve per page\n- **page** - Specify exactly what page you want to retrieve\n- **customer** - Filter by Customer ID\n- **plan** - Filter by Plan ID',
    },
    {
      api: 'enable',
      endpoint: 'https://api.paystack.co/subscription/enable',
      method: 'POST',
      params: [
        {
          parameter: 'code',
          required: true,
          type: 'String',
        },
        {
          parameter: 'token',
          required: true,
          type: 'String',
        },
      ],
      description:
        '**Body Params**\n- **code** (_required_) - Subscription code\n- **token** (_required_) - Email token',
    },
  ],
  bulkcharge: [
    {
      api: 'fetch',
      endpoint: 'https://api.paystack.co/bulkcharge/id_or_code',
      method: 'GET',
      params: [
        {
          parameter: 'Path Params',
          required: false,
          type: 'String',
        },
        {
          parameter: 'id_or_code',
          required: true,
          type: 'String',
        },
      ],
      description:
        'This endpoint retrieves a specific batch code. It also returns useful information on its progress by way of the `total_charges` and `pending_charges` attributes.\n\n**Path Params**\n- **id_or_code** (_required_) - An ID or code for the transfer whose details you want to retrieve.',
    },
    {
      api: 'fetch',
      endpoint: 'https://api.paystack.co/bulkcharge/id_or_code/charges',
      method: 'GET',
      params: [
        {
          parameter: 'Path Params',
          required: false,
          type: 'String',
        },
        {
          parameter: 'id_or_code',
          required: true,
          type: 'String',
        },

        {
          parameter: 'status',
          required: false,
          type: 'String',
        },
        {
          parameter: 'perPage',
          required: false,
          type: 'String',
        },
        {
          parameter: 'page',
          required: false,
          type: 'Number',
        },
      ],
      description:
        'This endpoint retrieves the charges associated with a specified batch code. Pagination parameters are available. You can also filter by status. Charge statuses can be `pending`, `success` or `failed`.\n\n**Path Params**\n- **id_or_code** (_required_) - An ID or code for the batch whose charges you want to retrieve.\n\n**Query Params**\n- **status** - `pending`, `success` or `failed`\n- **perPage**\n- **page**\n',
    },
    {
      api: 'initiate',
      endpoint: 'https://api.paystack.co/bulkcharge',
      method: 'POST',
      params: [
        {
          parameter: 'Body Params',
          required: false,
          type: 'String',
        },
        {
          parameter: '(no_name)',
          required: false,
          type: 'String',
        },
      ],
      description:
        'Send an array of objects with authorization codes and amount in kobo so we can process transactions as a batch.\n\n**Body Params**\n- **(no_name)**',
    },
    {
      api: 'resume',
      endpoint: 'https://api.paystack.co/bulkcharge/resume/batch_code',
      method: 'GET',
      params: [
        {
          parameter: 'Path Params',
          required: false,
          type: 'String',
        },
        {
          parameter: 'batch_code',
          required: true,
          type: 'String',
        },
      ],
      description:
        'Use this endpoint to pause processing a batch\n\n**Path Params**\n- **batch_code** (_required_)',
    },
    {
      api: 'pause',
      endpoint: 'https://api.paystack.co/bulkcharge/pause/batch_code',
      method: 'GET',
      params: [
        {
          parameter: 'Path Params',
          required: false,
          type: 'String',
        },
        {
          parameter: 'batch_code',
          required: true,
          type: 'String',
        },
      ],
      description:
        'Use this endpoint to pause processing a batch\n\n**Path Params**\n- **batch_code** (_required_)',
    },
  ],
  bank: [
    {
      api: 'list',
      endpoint: 'https://api.paystack.co/bank',
      method: 'GET',
      params: [],
      description: null,
    },
    {
      api: 'resolve',
      endpoint: '?account_number=ACCOUNT_NUMBER&bank_code=BANK_CODE',
      method: 'GET',
      params: [
        {
          parameter: 'account_number',
          required: false,
          type: 'String',
        },
        {
          parameter: 'bank_code',
          required: false,
          type: 'String',
        },
      ],
      description:
        '**Path Params**\n- **account_number** - Account Number\n- **bank_code** - Bank Code',
    },
    {
      api: 'resolve',
      endpoint: '{BVN}',
      method: 'GET',
      params: [
        {
          parameter: 'bvn',
          required: true,
          type: 'String',
        },
      ],
      description: '**Path Params**\n- **bvn** (_required_) - 11 digit BVN',
    },
    {
      api: 'match',
      endpoint: '{ACCOUNT_NUMBER}&bank_code={BANK_CODE}&bvn={BVN}',
      method: 'GET',
      params: [
        {
          parameter: 'Path Params',
          required: false,
          type: 'String',
        },
        {
          parameter: '*account_number* _(required)_  Bank account numbe',
          required: true,
          type: 'String',
        },
        {
          parameter:
            '*bank_code* _(required)_  Bank code from [List Bank endpoint](https://api.paystack.co/bank',
          required: true,
          type: 'String',
        },
        {
          parameter: '*bvn* _(required)_  11 digit BV',
          required: true,
          type: 'String',
        },
      ],
      description:
        "The Match BVN endpoint checks if the account number for a bank belongs to a user's BVN\n\n**Path Params**\n- *account_number* _(required)_ - Bank account number\n- *bank_code* _(required)_ - Bank code from [List Bank endpoint](https://api.paystack.co/bank)\n- *bvn* _(required)_ - 11 digit BVN",
    },
  ],
  charge: [
    {
      api: 'submit',
      endpoint: 'https://api.paystack.co/charge/submit_otp',
      method: 'POST',
      params: [
        {
          parameter: 'Body Params',
          required: false,
          type: 'String',
        },
        {
          parameter: 'otp',
          required: true,
          type: 'String',
        },
        {
          parameter: 'reference',
          required: true,
          type: 'String',
        },
      ],
      description:
        'Submit OTP to complete a charge\n\n**Body Params**\n- **otp** (_required_) - OTP submitted by user\n- **reference** (_required_) - reference for ongoing transaction',
    },
    {
      api: 'submit',
      endpoint: 'https://api.paystack.co/charge/submit_pin',
      method: 'POST',
      params: [
        {
          parameter: 'pin',
          required: true,
          type: 'String',
        },
        {
          parameter: 'reference',
          required: true,
          type: 'String',
        },
      ],
      description:
        '**Body Params**\n- **pin** (_required_) - PIN submitted by user\n- **reference** (_required_) - reference for transaction that requested pin',
    },
    {
      api: 'submit',
      endpoint: 'https://api.paystack.co/charge/submit_birthday',
      method: 'POST',
      params: [
        {
          parameter: 'Body Params',
          required: false,
          type: 'String',
        },
        {
          parameter: 'birthday',
          required: true,
          type: 'String',
        },
        {
          parameter: 'reference',
          required: true,
          type: 'String',
        },
      ],
      description:
        'Submit Birthday when requested\n\n**Body Params**\n- **birthday** (_required_) - Birthday number submitted by user\n- **reference** (_required_) - reference for ongoing transaction',
    },
    {
      api: 'tokenize',
      endpoint: 'https://api.paystack.co/charge/tokenize',
      method: 'POST',
      params: [
        {
          parameter: 'Body Params',
          required: false,
          type: 'String',
        },
        {
          parameter: 'email',
          required: true,
          type: 'String',
        },
        {
          parameter: 'card',
          required: true,
          type: 'String',
        },
        {
          parameter: 'card.number',
          required: true,
          type: 'String',
        },
        {
          parameter: 'card.cvv',
          required: true,
          type: 'String',
        },
        {
          parameter: 'card.expiry_month',
          required: true,
          type: 'String',
        },
        {
          parameter: 'card.expiry_year',
          required: true,
          type: 'String',
        },
      ],
      description:
        "Send an array of objects with authorization codes and amount in kobo so we can process transactions as a batch.\n\n**Body Params**\n- **email** (_required_) - Customer's email address\n- **card** (_required_) - Card to tokenize\n- **card.number** (_required_) - Card to tokenize\n- **card.cvv** (_required_) - Card security code\n- **card.expiry_month** (_required_) - Expiry month of card\n- **card.expiry_year** (_required_) - Expiry year of card\n",
    },
    {
      api: 'check',
      endpoint: 'https://api.paystack.co/charge/reference',
      method: 'GET',
      params: [
        {
          parameter: 'Body Params',
          required: false,
          type: 'String',
        },
        {
          parameter: 'reference',
          required: true,
          type: 'String',
        },
      ],
      description:
        'When you get "pending" as a charge status, wait 30 seconds or more, then make a check to see if its status has changed. Don\'t call too early as you may get a lot more pending than you should.\n\n**Body Params**\n- **reference** (_required_) - The reference to check',
    },
    {
      api: 'charge',
      endpoint: 'https://api.paystack.co/charge',
      method: 'POST',
      params: [
        {
          parameter:
            'imple guide to charging cards directly https://developers.paystack.co/docs/chargingfromyourbacken',
          required: false,
          type: 'String',
        },

        {
          parameter: 'Body Params',
          required: false,
          type: 'String',
        },
        {
          parameter: 'email',
          required: true,
          type: 'String',
        },
        {
          parameter: 'amount',
          required: true,
          type: 'Number',
        },
        {
          parameter: 'card',
          required: true,
          type: 'String',
        },
        {
          parameter: 'card.number',
          required: true,
          type: 'String',
        },
        {
          parameter: 'card.cvv',
          required: true,
          type: 'String',
        },
        {
          parameter: 'card.expiry_month',
          required: true,
          type: 'String',
        },
        {
          parameter: 'card.expiry_year',
          required: true,
          type: 'String',
        },
        {
          parameter: 'bank',
          required: false,
          type: 'String',
        },
        {
          parameter: 'bank.code',
          required: true,
          type: 'String',
        },
        {
          parameter: 'bank.account_number',
          required: true,
          type: 'String',
        },
        {
          parameter: 'authorization_code',
          required: false,
          type: 'String',
        },
        {
          parameter: 'pin',
          required: false,
          type: 'String',
        },
        {
          parameter: 'metadata',
          required: false,
          type: 'String',
        },
      ],
      description:
        "Send card details or bank details or authorization code to start a charge.\nSimple guide to charging cards directly https://developers.paystack.co/docs/charging-from-your-backend\n\n**Body Params**\n- **email** (_required_) - Customer's email address\n- **amount** (_required_) - Amount in kobo\n- **card** (_required_) - Card number\n- **card.number** (_required_) - Card to tokenize\n- **card.cvv** (_required_) - Card security code\n- **card.expiry_month** (_required_) - Expiry month of card\n- **card.expiry_year** (_required_) - Expiry year of card\n- **bank** - Bank account to charge (don't send if charging an authorization code or card)\n- **bank.code** (_required_) - A code for the [bank](https://developers.paystack.co/v1.0/ref/banks) (check banks for the banks supported). Only the ones for which paywithbank is true will work.\n- **bank.account_number** (_required_) - 10 digit nuban for the account to charge\n- **authorization_code** - An authorization code to charge (don't send if charging a card or bank account)\n- **pin** - 4-digit PIN (send with a non-reusable authorization code)\n- **metadata** - A JSON object",
    },
    {
      api: 'submit',
      endpoint: 'https://api.paystack.co/charge/submit_phone',
      method: 'POST',
      params: [
        {
          parameter: 'Body Params',
          required: false,
          type: 'String',
        },
        {
          parameter: 'phone',
          required: true,
          type: 'String',
        },
        {
          parameter: 'reference',
          required: true,
          type: 'String',
        },
      ],
      description:
        'Submit Phone when requested\n\n**Body Params**\n- **phone** (_required_) - Phone number submitted by user\n- **reference** (_required_) - reference for ongoing transaction',
    },
  ],
  transaction: [
    {
      api: 'verify',
      endpoint: 'https://api.paystack.co/transaction/verify/{reference}',
      method: 'GET',
      params: [
        {
          parameter: 'reference',
          required: true,
          type: 'String',
        },
      ],
      description: '**Path Params**\n- **reference** (_required_)',
    },
    {
      api: 'list',
      endpoint: 'https://api.paystack.co/transaction',
      method: 'GET',
      params: [
        {
          parameter: 'perPage',
          required: false,
          type: 'String',
        },
        {
          parameter: 'page',
          required: false,
          type: 'Number',
        },
        {
          parameter: 'customer',
          required: false,
          type: 'String',
        },
        {
          parameter: 'status',
          required: false,
          type: 'String',
        },
        {
          parameter: 'from',
          required: false,
          type: 'String',
        },
        {
          parameter: 'to',
          required: false,
          type: 'String',
        },
        {
          parameter: 'amount',
          required: false,
          type: 'Number',
        },
      ],
      description:
        "**Query Params**\n- **perPage** - Specify how many records you want to retrieve per page\n- **page** - Specify exactly what page you want to retrieve\n- **customer** - Specify an ID for the customer whose transactions you want to retrieve\n- **status** - Filter transactions by status ('failed', 'success', 'abandoned')\n- **from** - A timestamp from which to start listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21\n- **to** - A timestamp at which to stop listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21\n- **amount** - Filter transactions by amount. Specify the amount in kobo.",
    },
    {
      api: 'view',
      endpoint: ':id_or_reference',
      method: 'GET',
      params: [],
      description: null,
    },
    {
      api: 'charge',
      endpoint: 'https://api.paystack.co/transaction/charge_authorization',
      method: 'POST',
      params: [
        {
          parameter: 'reference',
          required: false,
          type: 'String',
        },
        {
          parameter: 'authorization_code',
          required: true,
          type: 'String',
        },
        {
          parameter: 'amount',
          required: true,
          type: 'Number',
        },
        {
          parameter: 'plan',
          required: false,
          type: 'String',
        },
        {
          parameter: 'currency',
          required: false,
          type: 'String',
        },
        {
          parameter: 'email',
          required: true,
          type: 'String',
        },
        {
          parameter: 'metadata',
          required: false,
          type: 'String',
        },
        {
          parameter: 'subaccount',
          required: false,
          type: 'String',
        },
        {
          parameter: 'transaction_charge',
          required: false,
          type: 'String',
        },
        {
          parameter: 'bearer',
          required: false,
          type: 'String',
        },
        {
          parameter: 'invoice_limit',
          required: false,
          type: 'String',
        },
      ],
      description:
        "**Body Params**\n- **reference** - Unique transaction reference. Only `-` `,` `.` `,` `=` and alphanumeric characters allowed. System will generate one if none is provided\n- **authorization_code** - (_required_) Valid authorization code to charge\n- **amount** - (_required_) Amount in kobo\n- **plan** - If transaction is to create a subscription to a predefined plan, provide plan code here\n- **currency** - Currency in which amount should be charged\n- ** email** (_required_) - Customer's email address\n- **metadata** - Add a `custom_fields` attribute which has an array of objects if you would like the fields to be added to your transaction when displayed on the dashboard.\n- **subaccount** - The code for the subaccount that owns the payment.\n- **transaction_charge** - A flat fee to charge the subaccount for this transaction, in kobo. This overrides the split percentage set when the subaccount was created. Ideally, you will need to use this if you are splitting in flat rates (since subaccount creation only allows for percentage split).\n- **bearer** - Who bears Paystack charges? `account` or `subaccount`?\n- **invoice_limit** - Number of invoices to raise during the subscription. Overrides `invoice_limit` set on plan.",
    },
    {
      api: 'export',
      endpoint: 'https://api.paystack.co/transaction/export',
      method: 'GET',
      params: [
        {
          parameter: 'from',
          required: false,
          type: 'String',
        },
        {
          parameter: 'to',
          required: false,
          type: 'String',
        },
        {
          parameter: 'settled',
          required: false,
          type: 'String',
        },
        {
          parameter: 'payment_page',
          required: false,
          type: 'String',
        },
        {
          parameter: 'customer',
          required: false,
          type: 'String',
        },
        {
          parameter: 'currency',
          required: false,
          type: 'String',
        },
        {
          parameter: 'settlement',
          required: false,
          type: 'String',
        },
        {
          parameter: 'amount',
          required: false,
          type: 'Number',
        },
        {
          parameter: 'status',
          required: false,
          type: 'String',
        },
      ],
      description:
        "**Query Params**\n- **from** - Lower bound of date range. Leave undefined to export transactions from day one.\n- **to** - Upper bound of date range. Leave undefined to export transactions till date.\n- **settled** - Set to `true` to export only settled transactions. `false` for pending transactions. Leave undefined to export all transactions\n- **payment_page** - Specify a payment page's id to export only transactions conducted on said page\n- **customer** - Specify customer id.\n- **currency** - Currency in which you are charging the customer in.\n- **settlement** - An ID for the settlement whose transactions we should export\n- **amount** - Amount for transactions to export\n- **status** - Status for transactions to export",
    },
    {
      api: 'check',
      endpoint: 'https://api.paystack.co/transaction/check_authorization',
      method: 'POST',
      params: [
        {
          parameter: 'authorization_code',
          required: true,
          type: 'String',
        },
        {
          parameter: 'amount',
          required: true,
          type: 'Number',
        },
        {
          parameter: 'email',
          required: true,
          type: 'String',
        },
        {
          parameter: 'currency',
          required: false,
          type: 'String',
        },
      ],
      description:
        "All mastercard and visa authorizations can be checked with this endpoint to know if they have funds for the payment you seek.\n\n**Body Params**\n- **authorization_code** (_required_) - Authorization code for mastercard or VISA authorization belonging to email.\n- **amount** (_required_) - Amount in kobo\n- **email** (_required_) - Customer's email address\n- **currency** - A currency for the amount we want to check\n\nIn test mode, we will return insufficient funds for an amount greater than or equal 500,000 naira.",
    },
    {
      api: 'transaction',
      endpoint: 'https://api.paystack.co/transaction/totals',
      method: 'GET',
      params: [
        {
          parameter: 'from',
          required: false,
          type: 'String',
        },
        {
          parameter: 'to',
          required: false,
          type: 'String',
        },
      ],
      description:
        'Total amount received on your account\n\n**Query Params**\n- **from** - Lower bound of date range. Leave undefined to show totals from day one.\n- **to** - Upper bound of date range. Leave undefined to show totals till date.',
    },
    {
      api: 'initialize',
      endpoint: 'https://api.paystack.co/transaction/initialize',
      method: 'POST',
      params: [
        {
          parameter: 'email',
          required: true,
          type: 'String',
        },
        {
          parameter: 'amount',
          required: true,
          type: 'Number',
        },
        {
          parameter: 'reference',
          required: false,
          type: 'String',
        },
        {
          parameter: 'callback_url',
          required: false,
          type: 'String',
        },
        {
          parameter: 'plan',
          required: false,
          type: 'String',
        },
        {
          parameter: 'invoice_limit',
          required: false,
          type: 'String',
        },
        {
          parameter: 'metadata',
          required: false,
          type: 'String',
        },
        {
          parameter: 'subaccount',
          required: false,
          type: 'String',
        },
        {
          parameter: 'transaction_charge',
          required: false,
          type: 'String',
        },
        {
          parameter: 'bearer',
          required: false,
          type: 'String',
        },
        {
          parameter: 'channels',
          required: false,
          type: 'String',
        },
      ],
      description:
        "**Body Params**\n- **email** (_required_) - Customer's email address\n- **amount** (_required_) - Amount in kobo\n- **reference** - Generate a reference or leave this param blank for Paystack to generate one for you\n- **callback_url** - Overrides the callback URL set on Paystack dashboard.\n- **plan** - If transaction is to create a subscription to a predefined plan, provide plan code here. This would invalidate the value provided in `amount`\n- **invoice_limit** - Number of times to charge customer during subscription to plan\n- **metadata** - Stringified JSON object. Add a `custom_fields` attribute which has an array of objects if you would like the fields to be added to your transaction when displayed on the dashboard.\n- **subaccount** - The code for the subaccount that owns the payment.\n- **transaction_charge** - A flat fee to charge the subaccount for this transaction, in kobo. This overrides the split percentage set when the subaccount was created. Ideally, you will need to use this if you are splitting in flat rates (since subaccount creation only allows for percentage split).\n- **bearer** - Who bears Paystack charges? `account` or `subaccount` (defaults to `account`).\n- **channels** - Send us 'card' or 'bank' or 'card','bank' as an array to specify what options to show the user paying",
    },
    {
      api: 'fetch',
      endpoint: 'https://api.paystack.co/transaction/id',
      method: 'GET',
      params: [
        {
          parameter: 'id',
          required: true,
          type: 'String',
        },
      ],
      description:
        '**Path Params**\n- **id** (_required_) - An ID for the transaction to fetch',
    },
  ],
  plan: [
    {
      api: 'update',
      endpoint: ':id_or_plan_code',
      method: 'PUT',
      params: [
        {
          parameter: 'name',
          required: false,
          type: 'String',
        },
        {
          parameter: 'description',
          required: false,
          type: 'String',
        },
        {
          parameter: 'amount',
          required: false,
          type: 'Number',
        },
        {
          parameter: 'interval',
          required: false,
          type: 'String',
        },
        {
          parameter: 'send_invoices',
          required: false,
          type: 'String',
        },
        {
          parameter: 'send_sms',
          required: false,
          type: 'String',
        },
        {
          parameter: 'currency',
          required: false,
          type: 'String',
        },
        {
          parameter: 'invoice_limit',
          required: false,
          type: 'String',
        },
      ],
      description:
        "**Body Params**\n- **name** - Name of plan\n- **description** - Short description of plan\n- **amount** - Amount to be charged in kobo. Will override the amount for existing subscriptions.\n- **interval** - Interval in words. Valid intervals are `hourly`, `daily`, `weekly`, `monthly`, `annually`.\n- **send_invoices** - Set to false if you don't want invoices to be sent to your customers.\n- **send_sms** - Set to false if you don't want text messages to be sent to your customers\n- **currency** - Currency in which amount is set\n- **invoice_limit** - Number of invoices to raise during subscription to this plan. Will not override `invoice_limit` set on active subscriptions.",
    },
    {
      api: 'create',
      endpoint: 'https://api.paystack.co/plan',
      method: 'POST',
      params: [
        {
          parameter: 'name',
          required: true,
          type: 'String',
        },
        {
          parameter: 'description',
          required: false,
          type: 'String',
        },
        {
          parameter: 'amount',
          required: true,
          type: 'Number',
        },
        {
          parameter: 'interval',
          required: true,
          type: 'String',
        },
        {
          parameter: 'send_invoices',
          required: false,
          type: 'String',
        },
        {
          parameter: 'currency',
          required: false,
          type: 'String',
        },
        {
          parameter: 'invoice_limit',
          required: false,
          type: 'String',
        },
      ],
      description:
        "**Body Params**\n- **name** (_required_) - Name of plan\n- **description** - Short description of plan\n- **amount** (_required_) - Amount to be charged in kobo\n- **interval** (_required_) - Interval in words. Valid intervals are `hourly`, `daily`, `weekly`, `monthly`, `annually`.\n- **send_invoices** - Set to false if you don't want invoices to be sent to your customers\n- **currency** - Currency in which amount is set\n- **invoice_limit** - Number of invoices to raise during subscription to this plan. Can be overridden by specifying an `invoice_limit` while subscribing.",
    },
    {
      api: 'list',
      endpoint: 'https://api.paystack.co/plan',
      method: 'GET',
      params: [
        {
          parameter: 'perPage',
          required: false,
          type: 'String',
        },
        {
          parameter: 'page',
          required: false,
          type: 'Number',
        },
        {
          parameter: 'interval',
          required: false,
          type: 'String',
        },
        {
          parameter: 'amount',
          required: false,
          type: 'Number',
        },
      ],
      description:
        '**Query Params**\n- **perPage** - Specify how many records you want to retrieve per page\n- **page** - Specify exactly what page you want to retrieve\n- **interval** - Filter list by plans with specified interval\n- **amount** - Filter list by plans with specified amount (in kobo)',
    },
    {
      api: 'fetch',
      endpoint: 'https://api.paystack.co/plan/id_or_plan_code',
      method: 'GET',
      params: [],
      description: null,
    },
  ],
  customer: [
    {
      api: 'update',
      endpoint: 'https://api.paystack.co/customer/:ID_OR_CUSTOMER_CODE',
      method: 'PUT',
      params: [
        {
          parameter: 'first_name',
          required: false,
          type: 'String',
        },
        {
          parameter: 'last_name',
          required: false,
          type: 'String',
        },
        {
          parameter: 'phone',
          required: false,
          type: 'String',
        },
        {
          parameter: 'metadata',
          required: false,
          type: 'String',
        },
      ],
      description:
        "**Body Params**\n- **first_name** - Customer's first name\n- **last_name** - Customer's last name\n- **phone** - Customer's phone number\n- **metadata** - A set of key/value pairs that you can attach to the customer. It can be used to store additional information in a structured format.",
    },
    {
      api: 'list',
      endpoint: 'https://api.paystack.co/customer',
      method: 'GET',
      params: [
        {
          parameter: 'perPage',
          required: false,
          type: 'String',
        },
        {
          parameter: 'page',
          required: false,
          type: 'Number',
        },
      ],
      description:
        '**Query Params**\n- **perPage** - Specify how many records you want to retrieve per page\n- **page** - Specify exactly what page you want to retrieve',
    },
    {
      api: 'create',
      endpoint: 'https://api.paystack.co/customer',
      method: 'POST',
      params: [
        {
          parameter: 'email',
          required: true,
          type: 'String',
        },
        {
          parameter: 'first_name',
          required: false,
          type: 'String',
        },
        {
          parameter: 'last_name',
          required: false,
          type: 'String',
        },
        {
          parameter: 'phone',
          required: false,
          type: 'String',
        },
        {
          parameter: 'metadata',
          required: false,
          type: 'String',
        },
      ],
      description:
        "**Body Params**\n- **email** (_required_) - Customer's email address\n- **first_name** - Customer's first name\n- **last_name** - Customer's last name\n- **phone** - Customer's phone number\n- **metadata** - A set of key/value pairs that you can attach to the customer. It can be used to store additional information in a structured format.",
    },
    {
      api: 'fetch',
      endpoint: ':id_or_customer_code',
      method: 'GET',
      params: [
        {
          parameter: 'exclude_transactions',
          required: false,
          type: 'String',
        },
      ],
      description:
        '**Query Params**\n- **exclude_transactions** - By default, fetching a customer returns all their transactions. Set this to true to disable this behaviour.',
    },
    {
      api: 'set_risk_action',
      endpoint: 'https://api.paystack.co/customer/set_risk_action',
      method: 'POST',
      params: [
        {
          parameter: 'customer',
          required: false,
          type: 'String',
        },
        {
          parameter: 'risk_action',
          required: false,
          type: 'String',
        },
      ],
      description:
        "**Body Params**\n- **customer** - Customer's ID, code, or email address\n- **risk_action** - One of the possible risk actions. `allow` to whitelist. `deny` to blacklist.",
    },
    {
      api: 'deactivate',
      endpoint: 'https://api.paystack.co/customer/deactivate_authorization',
      method: 'POST',
      params: [
        {
          parameter: 'authorization_code',
          required: true,
          type: 'String',
        },
      ],
      description:
        'For when the card needs to be forgotten...\n\n**Body Params**\n- **authorization_code** (_required_) - Authorization code to be deactivated\n\n',
    },
  ],
  refund: [
    {
      api: 'create',
      endpoint: 'https://api.paystack.co/refund',
      method: 'POST',
      params: [
        {
          parameter: 'Body Params',
          required: false,
          type: 'String',
        },
        {
          parameter: 'transaction',
          required: true,
          type: 'String',
        },
        {
          parameter: 'amount',
          required: false,
          type: 'Number',
        },
        {
          parameter: 'currency',
          required: false,
          type: 'String',
        },
        {
          parameter: 'customer_note',
          required: false,
          type: 'String',
        },
        {
          parameter: 'merchant_note',
          required: false,
          type: 'String',
        },
      ],
      description:
        'This creates a refund which is then processed by the Paystack team\n\n**Body Params**\n- **transaction** _(required)_: Identifier for transaction to be refunded\n- **amount** _(optional)_: How much in kobo to be refunded to the customer. Amount is optional(defaults to original transaction amount) and cannot be more than the original transaction amount.\n- **currency**: Three-letter ISO currency\n- **customer_note** _(optional)_: customer reason\n- **merchant_note** _(optional)_: merchant reason',
    },
    {
      api: 'fetch',
      endpoint: ':id',
      method: 'GET',
      params: [
        {
          parameter: 'id',
          required: false,
          type: 'String',
        },
      ],
      description:
        '**Path Params**\n- **id** - ID of the transaction to be refunded',
    },
    {
      api: 'fetch',
      endpoint: ':id',
      method: 'GET',
      params: [
        {
          parameter: 'id',
          required: false,
          type: 'String',
        },
      ],
      description:
        '**Path Params**\n- **id** - ID of the transaction to be refunded',
    },
    {
      api: 'list',
      endpoint: 'https://api.paystack.co/refund',
      method: 'GET',
      params: [
        {
          parameter: 'transaction',
          required: false,
          type: 'String',
        },
        {
          parameter: 'currency',
          required: false,
          type: 'String',
        },
      ],
      description: '**Query Parameters**\n\n- **transaction**\n- **currency**',
    },
    {
      api: 'list',
      endpoint: 'https://api.paystack.co/refund',
      method: 'GET',
      params: [
        {
          parameter: 'transaction',
          required: false,
          type: 'String',
        },
        {
          parameter: 'currency',
          required: false,
          type: 'String',
        },
      ],
      description: '**Query Parameters**\n\n- **transaction**\n- **currency**',
    },
  ],
  integration: [
    {
      api: 'update',
      endpoint: 'https://api.paystack.co/integration/payment_session_timeout',
      method: 'PUT',
      params: [
        {
          parameter: 'timeout',
          required: false,
          type: 'String',
        },
      ],
      description:
        '**Query Params**\n- **timeout** - Time before stopping session (in seconds). Set to 0 to cancel session timeouts',
    },
    {
      api: 'fetch',
      endpoint: 'https://api.paystack.co/integration/payment_session_timeout',
      method: 'GET',
      params: [],
      description: null,
    },
  ],
  balance: [
    {
      api: 'check',
      endpoint: 'https://api.paystack.co/balance',
      method: 'GET',
      params: [],
      description: 'You can only transfer from what you have',
    },
    {
      api: 'balance',
      endpoint: 'https://api.paystack.co/balance/ledger',
      method: 'GET',
      params: [],
      description:
        'Returns all activity carried out from and to the Paystack Balance',
    },
  ],
  settlement: [
    {
      api: 'fetch',
      endpoint: 'https://api.paystack.co/settlement',
      method: 'GET',
      params: [
        {
          parameter: 'from',
          required: false,
          type: 'String',
        },
        {
          parameter: 'to',
          required: false,
          type: 'String',
        },
        {
          parameter: 'subaccount',
          required: false,
          type: 'String',
        },
      ],
      description:
        'Settlements made to your bank accounts and the bank accounts for your subaccounts\n\n**Query Params**\n- **from** - Lower bound of date range. Leave undefined to export settlement from day one.\n- **to** - Upper bound of date range. Leave undefined to export settlements till date.\n- **subaccount** - Provide a subaccount code to export only settlements for that subaccount. Set to `none` to export only transactions for the account.',
    },
  ],
  decision: [
    {
      api: 'resolve',
      endpoint: '{BIN)',
      method: 'GET',
      params: [
        {
          parameter: 'bin',
          required: true,
          type: 'String',
        },
      ],
      description:
        '**Path Params**\n- **bin** (_required_) - First 6 characters of card',
    },
  ],
  invoice: [
    {
      api: 'archive',
      endpoint: ':id_or_code',
      method: 'POST',
      params: [],
      description:
        'Used to archive an invoice. Invoice will no longer be fetched on list or returned on verify.',
    },
  ],
  verifications: [
    {
      api: 'resolve',
      endpoint: 'https://api.paystack.co/verifications',
      method: 'POST',
      params: [
        {
          parameter: 'Body Parameters',
          required: false,
          type: 'String',
        },
        {
          parameter: 'verification_type',
          required: true,
          type: 'String',
        },
        {
          parameter: 'phone',
          required: true,
          type: 'String',
        },
        {
          parameter: 'callback_url',
          required: false,
          type: 'String',
        },
      ],
      description:
        "Using the Truecaller API you can verify the authenticity of a customer. It returns the customer's name, phone number, email, social media handles and organization as available on their Truecaller profile.\n\n**Body Parameters**\n- **verification_type** _(required)_\n- **phone** _(required)_ - Customer phone number starting with country code (without the + prefix)\n- **callback_url** - Link on server to receive the truecaller details",
    },
  ],
};
