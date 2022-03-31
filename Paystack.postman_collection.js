module.exports = {
	"info": {
		"_postman_id": "9b094031-4dd3-4f47-8cae-afb15bad2ea0",
		"name": "Paystack",
		"description": "The OpenAPI specification of the Paystack API that merchants and developers can harness to build financial solutions in Africa.",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "transaction",
			"item": [
				{
					"name": "{id}",
					"item": [
						{
							"name": "Fetch Transaction",
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) The ID of the transaction to fetch"
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/transaction/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transaction",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) The ID of the transaction to fetch"
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/transaction/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transaction",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) The ID of the transaction to fetch"
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/transaction/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transaction",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) The ID of the transaction to fetch"
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/transaction/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transaction",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) The ID of the transaction to fetch"
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						},
						{
							"name": "Get Transaction Event",
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction/:id/event",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										":id",
										"event"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/transaction/:id/event",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transaction",
												":id",
												"event"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/transaction/:id/event",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transaction",
												":id",
												"event"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/transaction/:id/event",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transaction",
												":id",
												"event"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/transaction/:id/event",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transaction",
												":id",
												"event"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						},
						{
							"name": "Get Transaction Session",
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction/:id/session",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										":id",
										"session"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/transaction/:id/session",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transaction",
												":id",
												"session"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/transaction/:id/session",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transaction",
												":id",
												"session"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/transaction/:id/session",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transaction",
												":id",
												"session"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/transaction/:id/session",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transaction",
												":id",
												"session"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						}
					]
				},
				{
					"name": "List Transactions",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/transaction?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transaction"
							],
							"query": [
								{
									"key": "perPage",
									"value": "61647984",
									"description": "Number of records to fetch per page"
								},
								{
									"key": "page",
									"value": "61647984",
									"description": "The section to retrieve"
								},
								{
									"key": "from",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The start date"
								},
								{
									"key": "to",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The end date"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Initialize Transaction",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "email",
									"value": "et non laborum qui",
									"description": "(Required) Customer's email address"
								},
								{
									"key": "amount",
									"value": "-37302623",
									"description": "(Required) Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
								},
								{
									"key": "currency",
									"value": "ZAR",
									"description": "The transaction currency"
								},
								{
									"key": "reference",
									"value": "id irure tempor nisi in",
									"description": "Unique transaction reference. Only -, ., = and alphanumeric characters allowed."
								},
								{
									"key": "callback_url",
									"value": "ipsum id adipisi",
									"description": "Fully qualified url, e.g. https://example.com/ . Use this to override the callback url provided on the dashboard for this transaction"
								},
								{
									"key": "plan",
									"value": "culpa in ex",
									"description": "If transaction is to create a subscription to a predefined plan, provide plan code here. \nThis would invalidate the value provided in amount"
								},
								{
									"key": "invoice_limit",
									"value": "46856861",
									"description": "Number of times to charge customer during subscription to plan"
								},
								{
									"key": "metadata",
									"value": "anim cillum pariatur",
									"description": "Stringified JSON object of custom data"
								},
								{
									"key": "channels",
									"value": "bank_transfer",
									"description": "An array of payment channels to control what channels you want to make available to the user to make a payment with"
								},
								{
									"key": "channels",
									"value": "bank",
									"description": "An array of payment channels to control what channels you want to make available to the user to make a payment with"
								},
								{
									"key": "split_code",
									"value": "commodo id Duis",
									"description": "The split code of the transaction split"
								},
								{
									"key": "subaccount",
									"value": "aliquip nulla voluptate",
									"description": "The code for the subaccount that owns the payment"
								},
								{
									"key": "transaction_charge",
									"value": "irure anim dolor aliquip",
									"description": "A flat fee to charge the subaccount for a transaction. \nThis overrides the split percentage set when the subaccount was created"
								},
								{
									"key": "bearer",
									"value": "account",
									"description": "The bearer of the transaction charge"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/transaction/initialize",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transaction",
								"initialize"
							]
						},
						"description": "Create a new transaction"
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "email",
											"value": "incididunt sunt nulla ei",
											"description": "(Required) Customer's email address"
										},
										{
											"key": "amount",
											"value": "78914357",
											"description": "(Required) Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "currency",
											"value": "NGN",
											"description": "The transaction currency"
										},
										{
											"key": "reference",
											"value": "pariatu",
											"description": "Unique transaction reference. Only -, ., = and alphanumeric characters allowed."
										},
										{
											"key": "callback_url",
											"value": "id aute",
											"description": "Fully qualified url, e.g. https://example.com/ . Use this to override the callback url provided on the dashboard for this transaction"
										},
										{
											"key": "plan",
											"value": "dolor elit minim in",
											"description": "If transaction is to create a subscription to a predefined plan, provide plan code here. \nThis would invalidate the value provided in amount"
										},
										{
											"key": "invoice_limit",
											"value": "18919255",
											"description": "Number of times to charge customer during subscription to plan"
										},
										{
											"key": "metadata",
											"value": "occaecat ea",
											"description": "Stringified JSON object of custom data"
										},
										{
											"key": "channels",
											"value": "ussd",
											"description": "An array of payment channels to control what channels you want to make available to the user to make a payment with"
										},
										{
											"key": "channels",
											"value": "ussd",
											"description": "An array of payment channels to control what channels you want to make available to the user to make a payment with"
										},
										{
											"key": "split_code",
											"value": "irure cillum",
											"description": "The split code of the transaction split"
										},
										{
											"key": "subaccount",
											"value": "sed aute ut nisi",
											"description": "The code for the subaccount that owns the payment"
										},
										{
											"key": "transaction_charge",
											"value": "ad officia dolor est",
											"description": "A flat fee to charge the subaccount for a transaction. \nThis overrides the split percentage set when the subaccount was created"
										},
										{
											"key": "bearer",
											"value": "account",
											"description": "The beare of the transaction charge"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transaction/initialize",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"initialize"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "email",
											"value": "incididunt sunt nulla ei",
											"description": "(Required) Customer's email address"
										},
										{
											"key": "amount",
											"value": "78914357",
											"description": "(Required) Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "currency",
											"value": "NGN",
											"description": "The transaction currency"
										},
										{
											"key": "reference",
											"value": "pariatu",
											"description": "Unique transaction reference. Only -, ., = and alphanumeric characters allowed."
										},
										{
											"key": "callback_url",
											"value": "id aute",
											"description": "Fully qualified url, e.g. https://example.com/ . Use this to override the callback url provided on the dashboard for this transaction"
										},
										{
											"key": "plan",
											"value": "dolor elit minim in",
											"description": "If transaction is to create a subscription to a predefined plan, provide plan code here. \nThis would invalidate the value provided in amount"
										},
										{
											"key": "invoice_limit",
											"value": "18919255",
											"description": "Number of times to charge customer during subscription to plan"
										},
										{
											"key": "metadata",
											"value": "occaecat ea",
											"description": "Stringified JSON object of custom data"
										},
										{
											"key": "channels",
											"value": "ussd",
											"description": "An array of payment channels to control what channels you want to make available to the user to make a payment with"
										},
										{
											"key": "channels",
											"value": "ussd",
											"description": "An array of payment channels to control what channels you want to make available to the user to make a payment with"
										},
										{
											"key": "split_code",
											"value": "irure cillum",
											"description": "The split code of the transaction split"
										},
										{
											"key": "subaccount",
											"value": "sed aute ut nisi",
											"description": "The code for the subaccount that owns the payment"
										},
										{
											"key": "transaction_charge",
											"value": "ad officia dolor est",
											"description": "A flat fee to charge the subaccount for a transaction. \nThis overrides the split percentage set when the subaccount was created"
										},
										{
											"key": "bearer",
											"value": "account",
											"description": "The beare of the transaction charge"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transaction/initialize",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"initialize"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "email",
											"value": "incididunt sunt nulla ei",
											"description": "(Required) Customer's email address"
										},
										{
											"key": "amount",
											"value": "78914357",
											"description": "(Required) Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "currency",
											"value": "NGN",
											"description": "The transaction currency"
										},
										{
											"key": "reference",
											"value": "pariatu",
											"description": "Unique transaction reference. Only -, ., = and alphanumeric characters allowed."
										},
										{
											"key": "callback_url",
											"value": "id aute",
											"description": "Fully qualified url, e.g. https://example.com/ . Use this to override the callback url provided on the dashboard for this transaction"
										},
										{
											"key": "plan",
											"value": "dolor elit minim in",
											"description": "If transaction is to create a subscription to a predefined plan, provide plan code here. \nThis would invalidate the value provided in amount"
										},
										{
											"key": "invoice_limit",
											"value": "18919255",
											"description": "Number of times to charge customer during subscription to plan"
										},
										{
											"key": "metadata",
											"value": "occaecat ea",
											"description": "Stringified JSON object of custom data"
										},
										{
											"key": "channels",
											"value": "ussd",
											"description": "An array of payment channels to control what channels you want to make available to the user to make a payment with"
										},
										{
											"key": "channels",
											"value": "ussd",
											"description": "An array of payment channels to control what channels you want to make available to the user to make a payment with"
										},
										{
											"key": "split_code",
											"value": "irure cillum",
											"description": "The split code of the transaction split"
										},
										{
											"key": "subaccount",
											"value": "sed aute ut nisi",
											"description": "The code for the subaccount that owns the payment"
										},
										{
											"key": "transaction_charge",
											"value": "ad officia dolor est",
											"description": "A flat fee to charge the subaccount for a transaction. \nThis overrides the split percentage set when the subaccount was created"
										},
										{
											"key": "bearer",
											"value": "account",
											"description": "The beare of the transaction charge"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transaction/initialize",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"initialize"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Verify Transaction",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/transaction/verify/:reference",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transaction",
								"verify",
								":reference"
							],
							"variable": [
								{
									"key": "reference",
									"value": "in ipsum qui",
									"description": "(Required) The transaction reference to verify"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction/verify/:reference",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"verify",
										":reference"
									],
									"variable": [
										{
											"key": "reference",
											"value": "in ipsum qui",
											"description": "(Required) The transaction reference to verify"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction/verify/:reference",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"verify",
										":reference"
									],
									"variable": [
										{
											"key": "reference",
											"value": "in ipsum qui",
											"description": "(Required) The transaction reference to verify"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction/verify/:reference",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"verify",
										":reference"
									],
									"variable": [
										{
											"key": "reference",
											"value": "in ipsum qui",
											"description": "(Required) The transaction reference to verify"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction/verify/:reference",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"verify",
										":reference"
									],
									"variable": [
										{
											"key": "reference",
											"value": "in ipsum qui",
											"description": "(Required) The transaction reference to verify"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Fetch Transaction Timeline",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/transaction/timeline/:id_or_reference",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transaction",
								"timeline",
								":id_or_reference"
							],
							"variable": [
								{
									"key": "id_or_reference",
									"value": "in ipsum qui",
									"description": "(Required) "
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction/timeline/:id_or_reference",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"timeline",
										":id_or_reference"
									],
									"variable": [
										{
											"key": "id_or_reference",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction/timeline/:id_or_reference",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"timeline",
										":id_or_reference"
									],
									"variable": [
										{
											"key": "id_or_reference",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction/timeline/:id_or_reference",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"timeline",
										":id_or_reference"
									],
									"variable": [
										{
											"key": "id_or_reference",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction/timeline/:id_or_reference",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"timeline",
										":id_or_reference"
									],
									"variable": [
										{
											"key": "id_or_reference",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Transaction Totals",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/transaction/totals?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transaction",
								"totals"
							],
							"query": [
								{
									"key": "perPage",
									"value": "61647984",
									"description": "Number of records to fetch per page"
								},
								{
									"key": "page",
									"value": "61647984",
									"description": "The section to retrieve"
								},
								{
									"key": "from",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The start date"
								},
								{
									"key": "to",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The end date"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction/totals?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"totals"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction/totals?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"totals"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction/totals?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"totals"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction/totals?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"totals"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Export Transactions",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/transaction/export?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transaction",
								"export"
							],
							"query": [
								{
									"key": "perPage",
									"value": "61647984",
									"description": "Number of records to fetch per page"
								},
								{
									"key": "page",
									"value": "61647984",
									"description": "The section to retrieve"
								},
								{
									"key": "from",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The start date"
								},
								{
									"key": "to",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The end date"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction/export?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"export"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction/export?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"export"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction/export?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"export"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transaction/export?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"export"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Charge Authorization",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "email",
									"value": "cillum fugiat et",
									"description": "(Required) Customer's email address"
								},
								{
									"key": "amount",
									"value": "-8781383",
									"description": "(Required) Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
								},
								{
									"key": "authorization_code",
									"value": "amet aliquip Excepteur ad",
									"description": "(Required) Valid authorization code to charge"
								},
								{
									"key": "reference",
									"value": "Excepteur mollit ut sunt sint",
									"description": "Unique transaction reference. Only -, ., = and alphanumeric characters allowed."
								},
								{
									"key": "currency",
									"value": "NGN",
									"description": "The transaction currency"
								},
								{
									"key": "metadata",
									"value": "elit occaecat",
									"description": "Stringified JSON object of custom data"
								},
								{
									"key": "split_code",
									"value": "c",
									"description": "The split code of the transaction split"
								},
								{
									"key": "subaccount",
									"value": "dolore amet laboris",
									"description": "The code for the subaccount that owns the payment"
								},
								{
									"key": "transaction_charge",
									"value": "occaecat ipsum",
									"description": "A flat fee to charge the subaccount for a transaction. \nThis overrides the split percentage set when the subaccount was created"
								},
								{
									"key": "bearer",
									"value": "account",
									"description": "The beare of the transaction charge"
								},
								{
									"key": "queue",
									"value": "true",
									"description": "If you are making a scheduled charge call, it is a good idea to queue them so the processing system does not get overloaded causing transaction processing errors."
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/transaction/charge_authorization",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transaction",
								"charge_authorization"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "email",
											"value": "cillum fugiat et",
											"description": "(Required) Customer's email address"
										},
										{
											"key": "amount",
											"value": "-8781383",
											"description": "(Required) Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "authorization_code",
											"value": "amet aliquip Excepteur ad",
											"description": "(Required) Valid authorization code to charge"
										},
										{
											"key": "reference",
											"value": "Excepteur mollit ut sunt sint",
											"description": "Unique transaction reference. Only -, ., = and alphanumeric characters allowed."
										},
										{
											"key": "currency",
											"value": "NGN",
											"description": "The transaction currency"
										},
										{
											"key": "metadata",
											"value": "elit occaecat",
											"description": "Stringified JSON object of custom data"
										},
										{
											"key": "split_code",
											"value": "c",
											"description": "The split code of the transaction split"
										},
										{
											"key": "subaccount",
											"value": "dolore amet laboris",
											"description": "The code for the subaccount that owns the payment"
										},
										{
											"key": "transaction_charge",
											"value": "occaecat ipsum",
											"description": "A flat fee to charge the subaccount for a transaction. \nThis overrides the split percentage set when the subaccount was created"
										},
										{
											"key": "bearer",
											"value": "account",
											"description": "The beare of the transaction charge"
										},
										{
											"key": "queue",
											"value": "true",
											"description": "If you are making a scheduled charge call, it is a good idea to queue them so the processing system does not get overloaded causing transaction processing errors."
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transaction/charge_authorization",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"charge_authorization"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "email",
											"value": "cillum fugiat et",
											"description": "(Required) Customer's email address"
										},
										{
											"key": "amount",
											"value": "-8781383",
											"description": "(Required) Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "authorization_code",
											"value": "amet aliquip Excepteur ad",
											"description": "(Required) Valid authorization code to charge"
										},
										{
											"key": "reference",
											"value": "Excepteur mollit ut sunt sint",
											"description": "Unique transaction reference. Only -, ., = and alphanumeric characters allowed."
										},
										{
											"key": "currency",
											"value": "NGN",
											"description": "The transaction currency"
										},
										{
											"key": "metadata",
											"value": "elit occaecat",
											"description": "Stringified JSON object of custom data"
										},
										{
											"key": "split_code",
											"value": "c",
											"description": "The split code of the transaction split"
										},
										{
											"key": "subaccount",
											"value": "dolore amet laboris",
											"description": "The code for the subaccount that owns the payment"
										},
										{
											"key": "transaction_charge",
											"value": "occaecat ipsum",
											"description": "A flat fee to charge the subaccount for a transaction. \nThis overrides the split percentage set when the subaccount was created"
										},
										{
											"key": "bearer",
											"value": "account",
											"description": "The beare of the transaction charge"
										},
										{
											"key": "queue",
											"value": "true",
											"description": "If you are making a scheduled charge call, it is a good idea to queue them so the processing system does not get overloaded causing transaction processing errors."
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transaction/charge_authorization",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"charge_authorization"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "email",
											"value": "cillum fugiat et",
											"description": "(Required) Customer's email address"
										},
										{
											"key": "amount",
											"value": "-8781383",
											"description": "(Required) Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "authorization_code",
											"value": "amet aliquip Excepteur ad",
											"description": "(Required) Valid authorization code to charge"
										},
										{
											"key": "reference",
											"value": "Excepteur mollit ut sunt sint",
											"description": "Unique transaction reference. Only -, ., = and alphanumeric characters allowed."
										},
										{
											"key": "currency",
											"value": "NGN",
											"description": "The transaction currency"
										},
										{
											"key": "metadata",
											"value": "elit occaecat",
											"description": "Stringified JSON object of custom data"
										},
										{
											"key": "split_code",
											"value": "c",
											"description": "The split code of the transaction split"
										},
										{
											"key": "subaccount",
											"value": "dolore amet laboris",
											"description": "The code for the subaccount that owns the payment"
										},
										{
											"key": "transaction_charge",
											"value": "occaecat ipsum",
											"description": "A flat fee to charge the subaccount for a transaction. \nThis overrides the split percentage set when the subaccount was created"
										},
										{
											"key": "bearer",
											"value": "account",
											"description": "The beare of the transaction charge"
										},
										{
											"key": "queue",
											"value": "true",
											"description": "If you are making a scheduled charge call, it is a good idea to queue them so the processing system does not get overloaded causing transaction processing errors."
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transaction/charge_authorization",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"charge_authorization"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Check Authorization",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "email",
									"value": "enim et",
									"description": "(Required) Customer's email address"
								},
								{
									"key": "amount",
									"value": "-33156862",
									"description": "(Required) Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
								},
								{
									"key": "authorization_code",
									"value": "in",
									"description": "Valid authorization code to charge"
								},
								{
									"key": "currency",
									"value": "USD",
									"description": "The transaction currency"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/transaction/check_authorization",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transaction",
								"check_authorization"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "email",
											"value": "enim et",
											"description": "(Required) Customer's email address"
										},
										{
											"key": "amount",
											"value": "-33156862",
											"description": "(Required) Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "authorization_code",
											"value": "in",
											"description": "Valid authorization code to charge"
										},
										{
											"key": "currency",
											"value": "USD",
											"description": "The transaction currency"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transaction/check_authorization",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"check_authorization"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "email",
											"value": "enim et",
											"description": "(Required) Customer's email address"
										},
										{
											"key": "amount",
											"value": "-33156862",
											"description": "(Required) Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "authorization_code",
											"value": "in",
											"description": "Valid authorization code to charge"
										},
										{
											"key": "currency",
											"value": "USD",
											"description": "The transaction currency"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transaction/check_authorization",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"check_authorization"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "email",
											"value": "enim et",
											"description": "(Required) Customer's email address"
										},
										{
											"key": "amount",
											"value": "-33156862",
											"description": "(Required) Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "authorization_code",
											"value": "in",
											"description": "Valid authorization code to charge"
										},
										{
											"key": "currency",
											"value": "USD",
											"description": "The transaction currency"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transaction/check_authorization",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"check_authorization"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Partial Debit",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "email",
									"value": "sint dolor labore consequat",
									"description": "(Required) Customer's email address"
								},
								{
									"key": "amount",
									"value": "-78312582",
									"description": "(Required) Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
								},
								{
									"key": "authorization_code",
									"value": "dolore irure",
									"description": "(Required) Valid authorization code to charge"
								},
								{
									"key": "currency",
									"value": "ZAR",
									"description": "(Required) The transaction currency"
								},
								{
									"key": "reference",
									"value": "aliqua consectetur",
									"description": "Unique transaction reference. Only -, ., = and alphanumeric characters allowed."
								},
								{
									"key": "at_least",
									"value": "ut Excepteur nulla aliquip",
									"description": "Minimum amount to charge"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/transaction/partial_debit",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transaction",
								"partial_debit"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "email",
											"value": "sint dolor labore consequat",
											"description": "(Required) Customer's email address"
										},
										{
											"key": "amount",
											"value": "-78312582",
											"description": "(Required) Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "authorization_code",
											"value": "dolore irure",
											"description": "(Required) Valid authorization code to charge"
										},
										{
											"key": "currency",
											"value": "ZAR",
											"description": "(Required) The transaction currency"
										},
										{
											"key": "reference",
											"value": "aliqua consectetur",
											"description": "Unique transaction reference. Only -, ., = and alphanumeric characters allowed."
										},
										{
											"key": "at_least",
											"value": "ut Excepteur nulla aliquip",
											"description": "Minimum amount to charge"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transaction/partial_debit",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"partial_debit"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "email",
											"value": "sint dolor labore consequat",
											"description": "(Required) Customer's email address"
										},
										{
											"key": "amount",
											"value": "-78312582",
											"description": "(Required) Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "authorization_code",
											"value": "dolore irure",
											"description": "(Required) Valid authorization code to charge"
										},
										{
											"key": "currency",
											"value": "ZAR",
											"description": "(Required) The transaction currency"
										},
										{
											"key": "reference",
											"value": "aliqua consectetur",
											"description": "Unique transaction reference. Only -, ., = and alphanumeric characters allowed."
										},
										{
											"key": "at_least",
											"value": "ut Excepteur nulla aliquip",
											"description": "Minimum amount to charge"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transaction/partial_debit",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"partial_debit"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "email",
											"value": "sint dolor labore consequat",
											"description": "(Required) Customer's email address"
										},
										{
											"key": "amount",
											"value": "-78312582",
											"description": "(Required) Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "authorization_code",
											"value": "dolore irure",
											"description": "(Required) Valid authorization code to charge"
										},
										{
											"key": "currency",
											"value": "ZAR",
											"description": "(Required) The transaction currency"
										},
										{
											"key": "reference",
											"value": "aliqua consectetur",
											"description": "Unique transaction reference. Only -, ., = and alphanumeric characters allowed."
										},
										{
											"key": "at_least",
											"value": "ut Excepteur nulla aliquip",
											"description": "Minimum amount to charge"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transaction/partial_debit",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transaction",
										"partial_debit"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				}
			]
		},
		{
			"name": "split",
			"item": [
				{
					"name": "{id}",
					"item": [
						{
							"name": "subaccount",
							"item": [
								{
									"name": "Add Subaccount to Split",
									"request": {
										"method": "POST",
										"header": [
											{
												"key": "Content-Type",
												"value": "application/x-www-form-urlencoded"
											},
											{
												"key": "Accept",
												"value": "application/json"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "subaccount",
													"value": "irure et enim velit",
													"description": "Subaccount code of the customer or partner"
												},
												{
													"key": "share",
													"value": "nostrud consequat nulla anim",
													"description": "The percentage or flat quota of the customer or partner"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/split/:id/subaccount/add",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"split",
												":id",
												"subaccount",
												"add"
											],
											"variable": [
												{
													"key": "id",
													"value": "application/json",
													"description": "(Required) "
												}
											]
										}
									},
									"response": [
										{
											"name": "Resource created",
											"originalRequest": {
												"method": "POST",
												"header": [
													{
														"description": "Added as a part of security scheme: bearer",
														"key": "Authorization",
														"value": "Bearer <token>"
													}
												],
												"body": {
													"mode": "urlencoded",
													"urlencoded": [
														{
															"key": "subaccount",
															"value": "irure et enim velit",
															"description": "Subaccount code of the customer or partner"
														},
														{
															"key": "share",
															"value": "nostrud consequat nulla anim",
															"description": "The percentage or flat quota of the customer or partner"
														}
													]
												},
												"url": {
													"raw": "{{baseUrl}}/split/:id/subaccount/add",
													"host": [
														"{{baseUrl}}"
													],
													"path": [
														"split",
														":id",
														"subaccount",
														"add"
													],
													"variable": [
														{
															"key": "id",
															"value": "application/json",
															"description": "(Required) "
														}
													]
												}
											},
											"status": "Created",
											"code": 201,
											"_postman_previewlanguage": "json",
											"header": [
												{
													"key": "Content-Type",
													"value": "application/json"
												}
											],
											"cookie": [],
											"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
										},
										{
											"name": "Unauthorized operation",
											"originalRequest": {
												"method": "POST",
												"header": [
													{
														"description": "Added as a part of security scheme: bearer",
														"key": "Authorization",
														"value": "Bearer <token>"
													}
												],
												"body": {
													"mode": "urlencoded",
													"urlencoded": [
														{
															"key": "subaccount",
															"value": "irure et enim velit",
															"description": "Subaccount code of the customer or partner"
														},
														{
															"key": "share",
															"value": "nostrud consequat nulla anim",
															"description": "The percentage or flat quota of the customer or partner"
														}
													]
												},
												"url": {
													"raw": "{{baseUrl}}/split/:id/subaccount/add",
													"host": [
														"{{baseUrl}}"
													],
													"path": [
														"split",
														":id",
														"subaccount",
														"add"
													],
													"variable": [
														{
															"key": "id",
															"value": "application/json",
															"description": "(Required) "
														}
													]
												}
											},
											"status": "Unauthorized",
											"code": 401,
											"_postman_previewlanguage": "json",
											"header": [
												{
													"key": "Content-Type",
													"value": "application/json"
												}
											],
											"cookie": [],
											"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
										},
										{
											"name": "Server error",
											"originalRequest": {
												"method": "POST",
												"header": [
													{
														"description": "Added as a part of security scheme: bearer",
														"key": "Authorization",
														"value": "Bearer <token>"
													}
												],
												"body": {
													"mode": "urlencoded",
													"urlencoded": [
														{
															"key": "subaccount",
															"value": "irure et enim velit",
															"description": "Subaccount code of the customer or partner"
														},
														{
															"key": "share",
															"value": "nostrud consequat nulla anim",
															"description": "The percentage or flat quota of the customer or partner"
														}
													]
												},
												"url": {
													"raw": "{{baseUrl}}/split/:id/subaccount/add",
													"host": [
														"{{baseUrl}}"
													],
													"path": [
														"split",
														":id",
														"subaccount",
														"add"
													],
													"variable": [
														{
															"key": "id",
															"value": "application/json",
															"description": "(Required) "
														}
													]
												}
											},
											"status": "Internal Server Error",
											"code": 500,
											"_postman_previewlanguage": "text",
											"header": [
												{
													"key": "Content-Type",
													"value": "text/plain"
												}
											],
											"cookie": [],
											"body": ""
										}
									]
								},
								{
									"name": "Remove Subaccount from split",
									"request": {
										"method": "POST",
										"header": [
											{
												"key": "Content-Type",
												"value": "application/x-www-form-urlencoded"
											},
											{
												"key": "Accept",
												"value": "application/json"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "subaccount",
													"value": "irure et enim velit",
													"description": "Subaccount code of the customer or partner"
												},
												{
													"key": "share",
													"value": "nostrud consequat nulla anim",
													"description": "The percentage or flat quota of the customer or partner"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/split/:id/subaccount/remove",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"split",
												":id",
												"subaccount",
												"remove"
											],
											"variable": [
												{
													"key": "id",
													"value": "application/json",
													"description": "(Required) "
												}
											]
										}
									},
									"response": [
										{
											"name": "Resource created",
											"originalRequest": {
												"method": "POST",
												"header": [
													{
														"description": "Added as a part of security scheme: bearer",
														"key": "Authorization",
														"value": "Bearer <token>"
													}
												],
												"body": {
													"mode": "urlencoded",
													"urlencoded": [
														{
															"key": "subaccount",
															"value": "irure et enim velit",
															"description": "Subaccount code of the customer or partner"
														},
														{
															"key": "share",
															"value": "nostrud consequat nulla anim",
															"description": "The percentage or flat quota of the customer or partner"
														}
													]
												},
												"url": {
													"raw": "{{baseUrl}}/split/:id/subaccount/remove",
													"host": [
														"{{baseUrl}}"
													],
													"path": [
														"split",
														":id",
														"subaccount",
														"remove"
													],
													"variable": [
														{
															"key": "id",
															"value": "application/json",
															"description": "(Required) "
														}
													]
												}
											},
											"status": "Created",
											"code": 201,
											"_postman_previewlanguage": "json",
											"header": [
												{
													"key": "Content-Type",
													"value": "application/json"
												}
											],
											"cookie": [],
											"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
										},
										{
											"name": "Unauthorized operation",
											"originalRequest": {
												"method": "POST",
												"header": [
													{
														"description": "Added as a part of security scheme: bearer",
														"key": "Authorization",
														"value": "Bearer <token>"
													}
												],
												"body": {
													"mode": "urlencoded",
													"urlencoded": [
														{
															"key": "subaccount",
															"value": "irure et enim velit",
															"description": "Subaccount code of the customer or partner"
														},
														{
															"key": "share",
															"value": "nostrud consequat nulla anim",
															"description": "The percentage or flat quota of the customer or partner"
														}
													]
												},
												"url": {
													"raw": "{{baseUrl}}/split/:id/subaccount/remove",
													"host": [
														"{{baseUrl}}"
													],
													"path": [
														"split",
														":id",
														"subaccount",
														"remove"
													],
													"variable": [
														{
															"key": "id",
															"value": "application/json",
															"description": "(Required) "
														}
													]
												}
											},
											"status": "Unauthorized",
											"code": 401,
											"_postman_previewlanguage": "json",
											"header": [
												{
													"key": "Content-Type",
													"value": "application/json"
												}
											],
											"cookie": [],
											"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
										},
										{
											"name": "Server error",
											"originalRequest": {
												"method": "POST",
												"header": [
													{
														"description": "Added as a part of security scheme: bearer",
														"key": "Authorization",
														"value": "Bearer <token>"
													}
												],
												"body": {
													"mode": "urlencoded",
													"urlencoded": [
														{
															"key": "subaccount",
															"value": "irure et enim velit",
															"description": "Subaccount code of the customer or partner"
														},
														{
															"key": "share",
															"value": "nostrud consequat nulla anim",
															"description": "The percentage or flat quota of the customer or partner"
														}
													]
												},
												"url": {
													"raw": "{{baseUrl}}/split/:id/subaccount/remove",
													"host": [
														"{{baseUrl}}"
													],
													"path": [
														"split",
														":id",
														"subaccount",
														"remove"
													],
													"variable": [
														{
															"key": "id",
															"value": "application/json",
															"description": "(Required) "
														}
													]
												}
											},
											"status": "Internal Server Error",
											"code": 500,
											"_postman_previewlanguage": "text",
											"header": [
												{
													"key": "Content-Type",
													"value": "text/plain"
												}
											],
											"cookie": [],
											"body": ""
										}
									]
								}
							]
						},
						{
							"name": "Fetch Split",
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/split/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"split",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/split/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"split",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/split/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"split",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/split/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"split",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/split/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"split",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						},
						{
							"name": "Update Split",
							"request": {
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/x-www-form-urlencoded"
									},
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "name",
											"value": "pariatur labore ullamco",
											"description": "Name of the transaction split"
										},
										{
											"key": "active",
											"value": "true",
											"description": "Toggle status of split. When true, the split is active, else it's inactive"
										},
										{
											"key": "bearer_type",
											"value": "account",
											"description": "This allows you specify how the transaction charge should be processed"
										},
										{
											"key": "bearer_subaccount",
											"value": "irure dolor non",
											"description": "This is the subaccount code of the customer or partner that would bear the transaction charge if you specified subaccount as the bearer type"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/split/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"split",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "name",
													"value": "pariatur labore ullamco",
													"description": "Name of the transaction split"
												},
												{
													"key": "active",
													"value": "true",
													"description": "Toggle status of split. When true, the split is active, else it's inactive"
												},
												{
													"key": "bearer_type",
													"value": "account",
													"description": "This allows you specify how the transaction charge should be processed"
												},
												{
													"key": "bearer_subaccount",
													"value": "irure dolor non",
													"description": "This is the subaccount code of the customer or partner that would bear the transaction charge if you specified subaccount as the bearer type"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/split/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"split",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "name",
													"value": "pariatur labore ullamco",
													"description": "Name of the transaction split"
												},
												{
													"key": "active",
													"value": "true",
													"description": "Toggle status of split. When true, the split is active, else it's inactive"
												},
												{
													"key": "bearer_type",
													"value": "account",
													"description": "This allows you specify how the transaction charge should be processed"
												},
												{
													"key": "bearer_subaccount",
													"value": "irure dolor non",
													"description": "This is the subaccount code of the customer or partner that would bear the transaction charge if you specified subaccount as the bearer type"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/split/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"split",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "name",
													"value": "pariatur labore ullamco",
													"description": "Name of the transaction split"
												},
												{
													"key": "active",
													"value": "true",
													"description": "Toggle status of split. When true, the split is active, else it's inactive"
												},
												{
													"key": "bearer_type",
													"value": "account",
													"description": "This allows you specify how the transaction charge should be processed"
												},
												{
													"key": "bearer_subaccount",
													"value": "irure dolor non",
													"description": "This is the subaccount code of the customer or partner that would bear the transaction charge if you specified subaccount as the bearer type"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/split/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"split",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "name",
													"value": "pariatur labore ullamco",
													"description": "Name of the transaction split"
												},
												{
													"key": "active",
													"value": "true",
													"description": "Toggle status of split. When true, the split is active, else it's inactive"
												},
												{
													"key": "bearer_type",
													"value": "account",
													"description": "This allows you specify how the transaction charge should be processed"
												},
												{
													"key": "bearer_subaccount",
													"value": "irure dolor non",
													"description": "This is the subaccount code of the customer or partner that would bear the transaction charge if you specified subaccount as the bearer type"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/split/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"split",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						}
					]
				},
				{
					"name": "Create Split",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "dolore elit",
									"description": "(Required) Name of the transaction split"
								},
								{
									"key": "type",
									"value": "percentage",
									"description": "(Required) The type of transaction split you want to create."
								},
								{
									"key": "subaccounts",
									"value": "{\"subaccount\":\"est nulla occaecat ullamco incididunt\",\"share\":\"in dolor\"}",
									"description": "(Required) A list of object containing subaccount code and number of shares"
								},
								{
									"key": "subaccounts",
									"value": "{\"subaccount\":\"ullamco culpa tempor id\",\"share\":\"pariatur\"}",
									"description": "(Required) A list of object containing subaccount code and number of shares"
								},
								{
									"key": "currency",
									"value": "USD",
									"description": "(Required) The transaction currency"
								},
								{
									"key": "bearer_type",
									"value": "all",
									"description": "This allows you specify how the transaction charge should be processed"
								},
								{
									"key": "bearer_subaccount",
									"value": "aliquip",
									"description": "This is the subaccount code of the customer or partner that would bear the transaction charge if you specified subaccount as the bearer type"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/split",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"split"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "name",
											"value": "elit aute",
											"description": "(Required) Name of the transaction split"
										},
										{
											"key": "type",
											"value": "percentage",
											"description": "(Required) The type of transaction split you want to create."
										},
										{
											"key": "subaccounts",
											"value": "{\"subaccount\":\"sunt eu dolore\",\"share\":\"aute ut sint cu\"}",
											"description": "(Required) A list of object containing subaccount code and number of shares"
										},
										{
											"key": "subaccounts",
											"value": "{\"subaccount\":\"nostrud consequat\",\"share\":\"sint adipisicing eiusmod a\"}",
											"description": "(Required) A list of object containing subaccount code and number of shares"
										},
										{
											"key": "currency",
											"value": "ZAR",
											"description": "(Required) The transaction currency"
										},
										{
											"key": "bearer_type",
											"value": "account",
											"description": "This allows you specify how the transaction charge should be processed"
										},
										{
											"key": "bearer_subaccount",
											"value": "velit dolore",
											"description": "This is the subaccount code of the customer or partner that would bear the transaction charge if you specified subaccount as the bearer type"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/split",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"split"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "name",
											"value": "elit aute",
											"description": "(Required) Name of the transaction split"
										},
										{
											"key": "type",
											"value": "percentage",
											"description": "(Required) The type of transaction split you want to create."
										},
										{
											"key": "subaccounts",
											"value": "{\"subaccount\":\"sunt eu dolore\",\"share\":\"aute ut sint cu\"}",
											"description": "(Required) A list of object containing subaccount code and number of shares"
										},
										{
											"key": "subaccounts",
											"value": "{\"subaccount\":\"nostrud consequat\",\"share\":\"sint adipisicing eiusmod a\"}",
											"description": "(Required) A list of object containing subaccount code and number of shares"
										},
										{
											"key": "currency",
											"value": "ZAR",
											"description": "(Required) The transaction currency"
										},
										{
											"key": "bearer_type",
											"value": "account",
											"description": "This allows you specify how the transaction charge should be processed"
										},
										{
											"key": "bearer_subaccount",
											"value": "velit dolore",
											"description": "This is the subaccount code of the customer or partner that would bear the transaction charge if you specified subaccount as the bearer type"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/split",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"split"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "name",
											"value": "elit aute",
											"description": "(Required) Name of the transaction split"
										},
										{
											"key": "type",
											"value": "percentage",
											"description": "(Required) The type of transaction split you want to create."
										},
										{
											"key": "subaccounts",
											"value": "{\"subaccount\":\"sunt eu dolore\",\"share\":\"aute ut sint cu\"}",
											"description": "(Required) A list of object containing subaccount code and number of shares"
										},
										{
											"key": "subaccounts",
											"value": "{\"subaccount\":\"nostrud consequat\",\"share\":\"sint adipisicing eiusmod a\"}",
											"description": "(Required) A list of object containing subaccount code and number of shares"
										},
										{
											"key": "currency",
											"value": "ZAR",
											"description": "(Required) The transaction currency"
										},
										{
											"key": "bearer_type",
											"value": "account",
											"description": "This allows you specify how the transaction charge should be processed"
										},
										{
											"key": "bearer_subaccount",
											"value": "velit dolore",
											"description": "This is the subaccount code of the customer or partner that would bear the transaction charge if you specified subaccount as the bearer type"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/split",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"split"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "List Splits",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/split?name=in ipsum qui&active=in ipsum qui&sort_by=in ipsum qui&from=in ipsum qui&to=in ipsum qui&perPage=in ipsum qui&page=in ipsum qui",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"split"
							],
							"query": [
								{
									"key": "name",
									"value": "in ipsum qui"
								},
								{
									"key": "active",
									"value": "in ipsum qui"
								},
								{
									"key": "sort_by",
									"value": "in ipsum qui"
								},
								{
									"key": "from",
									"value": "in ipsum qui"
								},
								{
									"key": "to",
									"value": "in ipsum qui"
								},
								{
									"key": "perPage",
									"value": "in ipsum qui"
								},
								{
									"key": "page",
									"value": "in ipsum qui"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/split?name=in ipsum qui&active=in ipsum qui&sort_by=in ipsum qui&from=in ipsum qui&to=in ipsum qui&perPage=in ipsum qui&page=in ipsum qui",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"split"
									],
									"query": [
										{
											"key": "name",
											"value": "in ipsum qui"
										},
										{
											"key": "active",
											"value": "in ipsum qui"
										},
										{
											"key": "sort_by",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "in ipsum qui"
										},
										{
											"key": "to",
											"value": "in ipsum qui"
										},
										{
											"key": "perPage",
											"value": "in ipsum qui"
										},
										{
											"key": "page",
											"value": "in ipsum qui"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/split?name=in ipsum qui&active=in ipsum qui&sort_by=in ipsum qui&from=in ipsum qui&to=in ipsum qui&perPage=in ipsum qui&page=in ipsum qui",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"split"
									],
									"query": [
										{
											"key": "name",
											"value": "in ipsum qui"
										},
										{
											"key": "active",
											"value": "in ipsum qui"
										},
										{
											"key": "sort_by",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "in ipsum qui"
										},
										{
											"key": "to",
											"value": "in ipsum qui"
										},
										{
											"key": "perPage",
											"value": "in ipsum qui"
										},
										{
											"key": "page",
											"value": "in ipsum qui"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/split?name=in ipsum qui&active=in ipsum qui&sort_by=in ipsum qui&from=in ipsum qui&to=in ipsum qui&perPage=in ipsum qui&page=in ipsum qui",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"split"
									],
									"query": [
										{
											"key": "name",
											"value": "in ipsum qui"
										},
										{
											"key": "active",
											"value": "in ipsum qui"
										},
										{
											"key": "sort_by",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "in ipsum qui"
										},
										{
											"key": "to",
											"value": "in ipsum qui"
										},
										{
											"key": "perPage",
											"value": "in ipsum qui"
										},
										{
											"key": "page",
											"value": "in ipsum qui"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/split?name=in ipsum qui&active=in ipsum qui&sort_by=in ipsum qui&from=in ipsum qui&to=in ipsum qui&perPage=in ipsum qui&page=in ipsum qui",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"split"
									],
									"query": [
										{
											"key": "name",
											"value": "in ipsum qui"
										},
										{
											"key": "active",
											"value": "in ipsum qui"
										},
										{
											"key": "sort_by",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "in ipsum qui"
										},
										{
											"key": "to",
											"value": "in ipsum qui"
										},
										{
											"key": "perPage",
											"value": "in ipsum qui"
										},
										{
											"key": "page",
											"value": "in ipsum qui"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				}
			]
		},
		{
			"name": "customer",
			"item": [
				{
					"name": "{code}",
					"item": [
						{
							"name": "Fetch Customer",
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/customer/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"customer",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/customer/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"customer",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/customer/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"customer",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/customer/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"customer",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/customer/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"customer",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						},
						{
							"name": "Update Customer",
							"request": {
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/x-www-form-urlencoded"
									},
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "first_name",
											"value": "amet qui",
											"description": "Customer's first name"
										},
										{
											"key": "last_name",
											"value": "adipisicing velit",
											"description": "Customer's last name"
										},
										{
											"key": "phone",
											"value": "Ut proident enim",
											"description": "Customer's phone number"
										},
										{
											"key": "metadata",
											"value": "ea quis ",
											"description": "Stringified JSON object of custom data"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/customer/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"customer",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "first_name",
													"value": "amet qui",
													"description": "Customer's first name"
												},
												{
													"key": "last_name",
													"value": "adipisicing velit",
													"description": "Customer's last name"
												},
												{
													"key": "phone",
													"value": "Ut proident enim",
													"description": "Customer's phone number"
												},
												{
													"key": "metadata",
													"value": "ea quis ",
													"description": "Stringified JSON object of custom data"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/customer/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"customer",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "first_name",
													"value": "amet qui",
													"description": "Customer's first name"
												},
												{
													"key": "last_name",
													"value": "adipisicing velit",
													"description": "Customer's last name"
												},
												{
													"key": "phone",
													"value": "Ut proident enim",
													"description": "Customer's phone number"
												},
												{
													"key": "metadata",
													"value": "ea quis ",
													"description": "Stringified JSON object of custom data"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/customer/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"customer",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "first_name",
													"value": "amet qui",
													"description": "Customer's first name"
												},
												{
													"key": "last_name",
													"value": "adipisicing velit",
													"description": "Customer's last name"
												},
												{
													"key": "phone",
													"value": "Ut proident enim",
													"description": "Customer's phone number"
												},
												{
													"key": "metadata",
													"value": "ea quis ",
													"description": "Stringified JSON object of custom data"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/customer/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"customer",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "first_name",
													"value": "amet qui",
													"description": "Customer's first name"
												},
												{
													"key": "last_name",
													"value": "adipisicing velit",
													"description": "Customer's last name"
												},
												{
													"key": "phone",
													"value": "Ut proident enim",
													"description": "Customer's phone number"
												},
												{
													"key": "metadata",
													"value": "ea quis ",
													"description": "Stringified JSON object of custom data"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/customer/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"customer",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						},
						{
							"name": "Validate Customer",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/x-www-form-urlencoded"
									},
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "type",
											"value": "bvn",
											"description": "(Required) Predefined types of identification."
										},
										{
											"key": "country",
											"value": "Lorem ex",
											"description": "(Required) Two-letter country code of identification issuer"
										},
										{
											"key": "bvn",
											"value": "sit fugiat",
											"description": "(Required) Customer's Bank Verification Number"
										},
										{
											"key": "bank_code",
											"value": "sint in",
											"description": "(Required) You can get the list of bank codes by calling the List Banks endpoint (https://api.paystack.co/bank)."
										},
										{
											"key": "account_number",
											"value": "sunt",
											"description": "(Required) Customer's bank account number."
										},
										{
											"key": "value",
											"value": "aute pariatur dolore",
											"description": "Customer's identification number. Required if type is bvn"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/customer/:code/identification",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"customer",
										":code",
										"identification"
									],
									"variable": [
										{
											"key": "code"
										}
									]
								},
								"description": "Validate a customer's identity"
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "POST",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "type",
													"value": "bvn",
													"description": "(Required) Predefined types of identification."
												},
												{
													"key": "country",
													"value": "Lorem ex",
													"description": "(Required) Two-letter country code of identification issuer"
												},
												{
													"key": "bvn",
													"value": "sit fugiat",
													"description": "(Required) Customer's Bank Verification Number"
												},
												{
													"key": "bank_code",
													"value": "sint in",
													"description": "(Required) You can get the list of bank codes by calling the List Banks endpoint (https://api.paystack.co/bank)."
												},
												{
													"key": "account_number",
													"value": "sunt",
													"description": "(Required) Customer's bank account number."
												},
												{
													"key": "value",
													"value": "aute pariatur dolore",
													"description": "Customer's identification number. Required if type is bvn"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/customer/:code/identification",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"customer",
												":code",
												"identification"
											],
											"variable": [
												{
													"key": "code"
												}
											]
										}
									},
									"status": "Created",
									"code": 201,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "POST",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "type",
													"value": "bvn",
													"description": "(Required) Predefined types of identification."
												},
												{
													"key": "country",
													"value": "Lorem ex",
													"description": "(Required) Two-letter country code of identification issuer"
												},
												{
													"key": "bvn",
													"value": "sit fugiat",
													"description": "(Required) Customer's Bank Verification Number"
												},
												{
													"key": "bank_code",
													"value": "sint in",
													"description": "(Required) You can get the list of bank codes by calling the List Banks endpoint (https://api.paystack.co/bank)."
												},
												{
													"key": "account_number",
													"value": "sunt",
													"description": "(Required) Customer's bank account number."
												},
												{
													"key": "value",
													"value": "aute pariatur dolore",
													"description": "Customer's identification number. Required if type is bvn"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/customer/:code/identification",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"customer",
												":code",
												"identification"
											],
											"variable": [
												{
													"key": "code"
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "POST",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "type",
													"value": "bvn",
													"description": "(Required) Predefined types of identification."
												},
												{
													"key": "country",
													"value": "Lorem ex",
													"description": "(Required) Two-letter country code of identification issuer"
												},
												{
													"key": "bvn",
													"value": "sit fugiat",
													"description": "(Required) Customer's Bank Verification Number"
												},
												{
													"key": "bank_code",
													"value": "sint in",
													"description": "(Required) You can get the list of bank codes by calling the List Banks endpoint (https://api.paystack.co/bank)."
												},
												{
													"key": "account_number",
													"value": "sunt",
													"description": "(Required) Customer's bank account number."
												},
												{
													"key": "value",
													"value": "aute pariatur dolore",
													"description": "Customer's identification number. Required if type is bvn"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/customer/:code/identification",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"customer",
												":code",
												"identification"
											],
											"variable": [
												{
													"key": "code"
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						}
					]
				},
				{
					"name": "Create Customer",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/customer",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"customer"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/customer",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"customer"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/customer",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"customer"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/customer",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"customer"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "List Customers",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/customer?use_cursor=false&next=in ipsum qui&previous=in ipsum qui&from=in ipsum qui&to=in ipsum qui&perPage=in ipsum qui&page=in ipsum qui",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"customer"
							],
							"query": [
								{
									"key": "use_cursor",
									"value": "false"
								},
								{
									"key": "next",
									"value": "in ipsum qui"
								},
								{
									"key": "previous",
									"value": "in ipsum qui"
								},
								{
									"key": "from",
									"value": "in ipsum qui"
								},
								{
									"key": "to",
									"value": "in ipsum qui"
								},
								{
									"key": "perPage",
									"value": "in ipsum qui"
								},
								{
									"key": "page",
									"value": "in ipsum qui"
								}
							]
						},
						"description": "List customers on your integration"
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/customer?use_cursor=true&next=in ipsum qui&previous=in ipsum qui&from=in ipsum qui&to=in ipsum qui&perPage=in ipsum qui&page=in ipsum qui",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"customer"
									],
									"query": [
										{
											"key": "use_cursor",
											"value": "true"
										},
										{
											"key": "next",
											"value": "in ipsum qui"
										},
										{
											"key": "previous",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "in ipsum qui"
										},
										{
											"key": "to",
											"value": "in ipsum qui"
										},
										{
											"key": "perPage",
											"value": "in ipsum qui"
										},
										{
											"key": "page",
											"value": "in ipsum qui"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/customer?use_cursor=true&next=in ipsum qui&previous=in ipsum qui&from=in ipsum qui&to=in ipsum qui&perPage=in ipsum qui&page=in ipsum qui",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"customer"
									],
									"query": [
										{
											"key": "use_cursor",
											"value": "true"
										},
										{
											"key": "next",
											"value": "in ipsum qui"
										},
										{
											"key": "previous",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "in ipsum qui"
										},
										{
											"key": "to",
											"value": "in ipsum qui"
										},
										{
											"key": "perPage",
											"value": "in ipsum qui"
										},
										{
											"key": "page",
											"value": "in ipsum qui"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/customer?use_cursor=true&next=in ipsum qui&previous=in ipsum qui&from=in ipsum qui&to=in ipsum qui&perPage=in ipsum qui&page=in ipsum qui",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"customer"
									],
									"query": [
										{
											"key": "use_cursor",
											"value": "true"
										},
										{
											"key": "next",
											"value": "in ipsum qui"
										},
										{
											"key": "previous",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "in ipsum qui"
										},
										{
											"key": "to",
											"value": "in ipsum qui"
										},
										{
											"key": "perPage",
											"value": "in ipsum qui"
										},
										{
											"key": "page",
											"value": "in ipsum qui"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/customer?use_cursor=true&next=in ipsum qui&previous=in ipsum qui&from=in ipsum qui&to=in ipsum qui&perPage=in ipsum qui&page=in ipsum qui",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"customer"
									],
									"query": [
										{
											"key": "use_cursor",
											"value": "true"
										},
										{
											"key": "next",
											"value": "in ipsum qui"
										},
										{
											"key": "previous",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "in ipsum qui"
										},
										{
											"key": "to",
											"value": "in ipsum qui"
										},
										{
											"key": "perPage",
											"value": "in ipsum qui"
										},
										{
											"key": "page",
											"value": "in ipsum qui"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "White/blacklist Customer",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "customer",
									"value": "adipisicing cupidatat minim commodo",
									"description": "(Required) Customer's code, or email address"
								},
								{
									"key": "risk_action",
									"value": "deny",
									"description": "One of the possible risk actions [ default, allow, deny ]. allow to whitelist. \ndeny to blacklist. Customers start with a default risk action.\n"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/customer/set_risk_action",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"customer",
								"set_risk_action"
							]
						},
						"description": "Set customer's risk action by whitelisting or blacklisting the customer"
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "customer",
											"value": "adipisicing cupidatat minim commodo",
											"description": "(Required) Customer's code, or email address"
										},
										{
											"key": "risk_action",
											"value": "deny",
											"description": "One of the possible risk actions [ default, allow, deny ]. allow to whitelist. \ndeny to blacklist. Customers start with a default risk action.\n"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/customer/set_risk_action",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"customer",
										"set_risk_action"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "customer",
											"value": "adipisicing cupidatat minim commodo",
											"description": "(Required) Customer's code, or email address"
										},
										{
											"key": "risk_action",
											"value": "deny",
											"description": "One of the possible risk actions [ default, allow, deny ]. allow to whitelist. \ndeny to blacklist. Customers start with a default risk action.\n"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/customer/set_risk_action",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"customer",
										"set_risk_action"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "customer",
											"value": "adipisicing cupidatat minim commodo",
											"description": "(Required) Customer's code, or email address"
										},
										{
											"key": "risk_action",
											"value": "deny",
											"description": "One of the possible risk actions [ default, allow, deny ]. allow to whitelist. \ndeny to blacklist. Customers start with a default risk action.\n"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/customer/set_risk_action",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"customer",
										"set_risk_action"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Deactivate Authorization",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "authorization_code",
									"value": "eiusmod consectetur laborum qui",
									"description": "(Required) Customer's authorization code to be deactivated"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/customer/deactivate_authorization",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"customer",
								"deactivate_authorization"
							]
						},
						"description": "Deactivate a customer's card"
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "authorization_code",
											"value": "eiusmod consectetur laborum qui",
											"description": "(Required) Customer's authorization code to be deactivated"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/customer/deactivate_authorization",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"customer",
										"deactivate_authorization"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "authorization_code",
											"value": "eiusmod consectetur laborum qui",
											"description": "(Required) Customer's authorization code to be deactivated"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/customer/deactivate_authorization",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"customer",
										"deactivate_authorization"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "authorization_code",
											"value": "eiusmod consectetur laborum qui",
											"description": "(Required) Customer's authorization code to be deactivated"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/customer/deactivate_authorization",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"customer",
										"deactivate_authorization"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				}
			]
		},
		{
			"name": "dedicated account",
			"item": [
				{
					"name": "{account id}",
					"item": [
						{
							"name": "Fetch Dedicated Account",
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dedicated_account/:account_id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dedicated_account",
										":account_id"
									],
									"variable": [
										{
											"key": "account_id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/dedicated_account/:account_id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dedicated_account",
												":account_id"
											],
											"variable": [
												{
													"key": "account_id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/dedicated_account/:account_id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dedicated_account",
												":account_id"
											],
											"variable": [
												{
													"key": "account_id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/dedicated_account/:account_id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dedicated_account",
												":account_id"
											],
											"variable": [
												{
													"key": "account_id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/dedicated_account/:account_id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dedicated_account",
												":account_id"
											],
											"variable": [
												{
													"key": "account_id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						},
						{
							"name": "Deactivate Dedicated Account",
							"request": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "{{baseUrl}}/dedicated_account/:account_id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dedicated_account",
										":account_id"
									],
									"variable": [
										{
											"key": "account_id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "Create Dedicated Account",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "customer",
									"value": "labore elit",
									"description": "(Required) Customer ID or code"
								},
								{
									"key": "preferred_bank",
									"value": "ullamco fugiat",
									"description": "The bank slug for preferred bank. To get a list of available banks, use the List Providers endpoint"
								},
								{
									"key": "subaccount",
									"value": "dolore officia sed consectetur",
									"description": "Subaccount code of the account you want to split the transaction with"
								},
								{
									"key": "split_code",
									"value": "enim in laboris nulla",
									"description": "Split code consisting of the lists of accounts you want to split the transaction with"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/dedicated_account",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"dedicated_account"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "customer",
											"value": "labore elit",
											"description": "(Required) Customer ID or code"
										},
										{
											"key": "preferred_bank",
											"value": "ullamco fugiat",
											"description": "The bank slug for preferred bank. To get a list of available banks, use the List Providers endpoint"
										},
										{
											"key": "subaccount",
											"value": "dolore officia sed consectetur",
											"description": "Subaccount code of the account you want to split the transaction with"
										},
										{
											"key": "split_code",
											"value": "enim in laboris nulla",
											"description": "Split code consisting of the lists of accounts you want to split the transaction with"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/dedicated_account",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dedicated_account"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "customer",
											"value": "labore elit",
											"description": "(Required) Customer ID or code"
										},
										{
											"key": "preferred_bank",
											"value": "ullamco fugiat",
											"description": "The bank slug for preferred bank. To get a list of available banks, use the List Providers endpoint"
										},
										{
											"key": "subaccount",
											"value": "dolore officia sed consectetur",
											"description": "Subaccount code of the account you want to split the transaction with"
										},
										{
											"key": "split_code",
											"value": "enim in laboris nulla",
											"description": "Split code consisting of the lists of accounts you want to split the transaction with"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/dedicated_account",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dedicated_account"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "customer",
											"value": "labore elit",
											"description": "(Required) Customer ID or code"
										},
										{
											"key": "preferred_bank",
											"value": "ullamco fugiat",
											"description": "The bank slug for preferred bank. To get a list of available banks, use the List Providers endpoint"
										},
										{
											"key": "subaccount",
											"value": "dolore officia sed consectetur",
											"description": "Subaccount code of the account you want to split the transaction with"
										},
										{
											"key": "split_code",
											"value": "enim in laboris nulla",
											"description": "Split code consisting of the lists of accounts you want to split the transaction with"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/dedicated_account",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dedicated_account"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "List Dedicated Accounts",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/dedicated_account?account_number=in ipsum qui&customer=in ipsum qui&active=true&currency=in ipsum qui&provider_slug=in ipsum qui&bank_id=in ipsum qui&perPage=in ipsum qui&page=in ipsum qui",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"dedicated_account"
							],
							"query": [
								{
									"key": "account_number",
									"value": "in ipsum qui"
								},
								{
									"key": "customer",
									"value": "in ipsum qui"
								},
								{
									"key": "active",
									"value": "true"
								},
								{
									"key": "currency",
									"value": "in ipsum qui"
								},
								{
									"key": "provider_slug",
									"value": "in ipsum qui"
								},
								{
									"key": "bank_id",
									"value": "in ipsum qui"
								},
								{
									"key": "perPage",
									"value": "in ipsum qui"
								},
								{
									"key": "page",
									"value": "in ipsum qui"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dedicated_account?account_number=in ipsum qui&customer=in ipsum qui&active=true&currency=in ipsum qui&provider_slug=in ipsum qui&bank_id=in ipsum qui&perPage=in ipsum qui&page=in ipsum qui",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dedicated_account"
									],
									"query": [
										{
											"key": "account_number",
											"value": "in ipsum qui"
										},
										{
											"key": "customer",
											"value": "in ipsum qui"
										},
										{
											"key": "active",
											"value": "true"
										},
										{
											"key": "currency",
											"value": "in ipsum qui"
										},
										{
											"key": "provider_slug",
											"value": "in ipsum qui"
										},
										{
											"key": "bank_id",
											"value": "in ipsum qui"
										},
										{
											"key": "perPage",
											"value": "in ipsum qui"
										},
										{
											"key": "page",
											"value": "in ipsum qui"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dedicated_account?account_number=in ipsum qui&customer=in ipsum qui&active=true&currency=in ipsum qui&provider_slug=in ipsum qui&bank_id=in ipsum qui&perPage=in ipsum qui&page=in ipsum qui",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dedicated_account"
									],
									"query": [
										{
											"key": "account_number",
											"value": "in ipsum qui"
										},
										{
											"key": "customer",
											"value": "in ipsum qui"
										},
										{
											"key": "active",
											"value": "true"
										},
										{
											"key": "currency",
											"value": "in ipsum qui"
										},
										{
											"key": "provider_slug",
											"value": "in ipsum qui"
										},
										{
											"key": "bank_id",
											"value": "in ipsum qui"
										},
										{
											"key": "perPage",
											"value": "in ipsum qui"
										},
										{
											"key": "page",
											"value": "in ipsum qui"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dedicated_account?account_number=in ipsum qui&customer=in ipsum qui&active=true&currency=in ipsum qui&provider_slug=in ipsum qui&bank_id=in ipsum qui&perPage=in ipsum qui&page=in ipsum qui",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dedicated_account"
									],
									"query": [
										{
											"key": "account_number",
											"value": "in ipsum qui"
										},
										{
											"key": "customer",
											"value": "in ipsum qui"
										},
										{
											"key": "active",
											"value": "true"
										},
										{
											"key": "currency",
											"value": "in ipsum qui"
										},
										{
											"key": "provider_slug",
											"value": "in ipsum qui"
										},
										{
											"key": "bank_id",
											"value": "in ipsum qui"
										},
										{
											"key": "perPage",
											"value": "in ipsum qui"
										},
										{
											"key": "page",
											"value": "in ipsum qui"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dedicated_account?account_number=in ipsum qui&customer=in ipsum qui&active=true&currency=in ipsum qui&provider_slug=in ipsum qui&bank_id=in ipsum qui&perPage=in ipsum qui&page=in ipsum qui",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dedicated_account"
									],
									"query": [
										{
											"key": "account_number",
											"value": "in ipsum qui"
										},
										{
											"key": "customer",
											"value": "in ipsum qui"
										},
										{
											"key": "active",
											"value": "true"
										},
										{
											"key": "currency",
											"value": "in ipsum qui"
										},
										{
											"key": "provider_slug",
											"value": "in ipsum qui"
										},
										{
											"key": "bank_id",
											"value": "in ipsum qui"
										},
										{
											"key": "perPage",
											"value": "in ipsum qui"
										},
										{
											"key": "page",
											"value": "in ipsum qui"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Fetch Bank Providers",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/dedicated_account/available_providers",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"dedicated_account",
								"available_providers"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dedicated_account/available_providers",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dedicated_account",
										"available_providers"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dedicated_account/available_providers",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dedicated_account",
										"available_providers"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dedicated_account/available_providers",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dedicated_account",
										"available_providers"
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dedicated_account/available_providers",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dedicated_account",
										"available_providers"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Split Dedicated Account Transaction",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "account_number",
									"value": "commodo in anim",
									"description": "(Required) Valid Dedicated virtual account"
								},
								{
									"key": "subaccount",
									"value": "Duis ullamco pariatur sit esse",
									"description": "Subaccount code of the account you want to split the transaction with"
								},
								{
									"key": "split_code",
									"value": "id",
									"description": "Split code consisting of the lists of accounts you want to split the transaction with"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/dedicated_account/split",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"dedicated_account",
								"split"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "account_number",
											"value": "commodo in anim",
											"description": "(Required) Valid Dedicated virtual account"
										},
										{
											"key": "subaccount",
											"value": "Duis ullamco pariatur sit esse",
											"description": "Subaccount code of the account you want to split the transaction with"
										},
										{
											"key": "split_code",
											"value": "id",
											"description": "Split code consisting of the lists of accounts you want to split the transaction with"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/dedicated_account/split",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dedicated_account",
										"split"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "account_number",
											"value": "commodo in anim",
											"description": "(Required) Valid Dedicated virtual account"
										},
										{
											"key": "subaccount",
											"value": "Duis ullamco pariatur sit esse",
											"description": "Subaccount code of the account you want to split the transaction with"
										},
										{
											"key": "split_code",
											"value": "id",
											"description": "Split code consisting of the lists of accounts you want to split the transaction with"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/dedicated_account/split",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dedicated_account",
										"split"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "account_number",
											"value": "commodo in anim",
											"description": "(Required) Valid Dedicated virtual account"
										},
										{
											"key": "subaccount",
											"value": "Duis ullamco pariatur sit esse",
											"description": "Subaccount code of the account you want to split the transaction with"
										},
										{
											"key": "split_code",
											"value": "id",
											"description": "Split code consisting of the lists of accounts you want to split the transaction with"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/dedicated_account/split",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dedicated_account",
										"split"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				}
			]
		},
		{
			"name": "subaccount",
			"item": [
				{
					"name": "{code}",
					"item": [
						{
							"name": "Fetch Subaccount",
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/subaccount/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subaccount",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/subaccount/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"subaccount",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/subaccount/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"subaccount",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/subaccount/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"subaccount",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/subaccount/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"subaccount",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						},
						{
							"name": "Update Subaccount",
							"request": {
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/x-www-form-urlencoded"
									},
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "business_name",
											"value": "Lorem veniam dolor",
											"description": "Name of business for subaccount"
										},
										{
											"key": "settlement_bank",
											"value": "voluptate dolor Excepteur tempor",
											"description": "Bank code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint."
										},
										{
											"key": "account_number",
											"value": "dolor ",
											"description": "Bank account number"
										},
										{
											"key": "active",
											"value": "true",
											"description": "Activate or deactivate a subaccount"
										},
										{
											"key": "percentage_charge",
											"value": "82324574.6558654",
											"description": "Customer's phone number"
										},
										{
											"key": "description",
											"value": "sunt occaecat",
											"description": "A description for this subaccount"
										},
										{
											"key": "primary_contact_email",
											"value": "fugiat eiusmod ipsum i",
											"description": "A contact email for the subaccount"
										},
										{
											"key": "primary_contact_name",
											"value": "Excepteu",
											"description": "The name of the contact person for this subaccount"
										},
										{
											"key": "primary_contact_phone",
											"value": "ex",
											"description": "A phone number to call for this subaccount"
										},
										{
											"key": "metadata",
											"value": "in deserunt",
											"description": "Stringified JSON object of custom data"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/subaccount/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subaccount",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "business_name",
													"value": "Lorem veniam dolor",
													"description": "Name of business for subaccount"
												},
												{
													"key": "settlement_bank",
													"value": "voluptate dolor Excepteur tempor",
													"description": "Bank code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint."
												},
												{
													"key": "account_number",
													"value": "dolor ",
													"description": "Bank account number"
												},
												{
													"key": "active",
													"value": "true",
													"description": "Activate or deactivate a subaccount"
												},
												{
													"key": "percentage_charge",
													"value": "82324574.6558654",
													"description": "Customer's phone number"
												},
												{
													"key": "description",
													"value": "sunt occaecat",
													"description": "A description for this subaccount"
												},
												{
													"key": "primary_contact_email",
													"value": "fugiat eiusmod ipsum i",
													"description": "A contact email for the subaccount"
												},
												{
													"key": "primary_contact_name",
													"value": "Excepteu",
													"description": "The name of the contact person for this subaccount"
												},
												{
													"key": "primary_contact_phone",
													"value": "ex",
													"description": "A phone number to call for this subaccount"
												},
												{
													"key": "metadata",
													"value": "in deserunt",
													"description": "Stringified JSON object of custom data"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/subaccount/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"subaccount",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "business_name",
													"value": "Lorem veniam dolor",
													"description": "Name of business for subaccount"
												},
												{
													"key": "settlement_bank",
													"value": "voluptate dolor Excepteur tempor",
													"description": "Bank code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint."
												},
												{
													"key": "account_number",
													"value": "dolor ",
													"description": "Bank account number"
												},
												{
													"key": "active",
													"value": "true",
													"description": "Activate or deactivate a subaccount"
												},
												{
													"key": "percentage_charge",
													"value": "82324574.6558654",
													"description": "Customer's phone number"
												},
												{
													"key": "description",
													"value": "sunt occaecat",
													"description": "A description for this subaccount"
												},
												{
													"key": "primary_contact_email",
													"value": "fugiat eiusmod ipsum i",
													"description": "A contact email for the subaccount"
												},
												{
													"key": "primary_contact_name",
													"value": "Excepteu",
													"description": "The name of the contact person for this subaccount"
												},
												{
													"key": "primary_contact_phone",
													"value": "ex",
													"description": "A phone number to call for this subaccount"
												},
												{
													"key": "metadata",
													"value": "in deserunt",
													"description": "Stringified JSON object of custom data"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/subaccount/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"subaccount",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "business_name",
													"value": "Lorem veniam dolor",
													"description": "Name of business for subaccount"
												},
												{
													"key": "settlement_bank",
													"value": "voluptate dolor Excepteur tempor",
													"description": "Bank code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint."
												},
												{
													"key": "account_number",
													"value": "dolor ",
													"description": "Bank account number"
												},
												{
													"key": "active",
													"value": "true",
													"description": "Activate or deactivate a subaccount"
												},
												{
													"key": "percentage_charge",
													"value": "82324574.6558654",
													"description": "Customer's phone number"
												},
												{
													"key": "description",
													"value": "sunt occaecat",
													"description": "A description for this subaccount"
												},
												{
													"key": "primary_contact_email",
													"value": "fugiat eiusmod ipsum i",
													"description": "A contact email for the subaccount"
												},
												{
													"key": "primary_contact_name",
													"value": "Excepteu",
													"description": "The name of the contact person for this subaccount"
												},
												{
													"key": "primary_contact_phone",
													"value": "ex",
													"description": "A phone number to call for this subaccount"
												},
												{
													"key": "metadata",
													"value": "in deserunt",
													"description": "Stringified JSON object of custom data"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/subaccount/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"subaccount",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "business_name",
													"value": "Lorem veniam dolor",
													"description": "Name of business for subaccount"
												},
												{
													"key": "settlement_bank",
													"value": "voluptate dolor Excepteur tempor",
													"description": "Bank code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint."
												},
												{
													"key": "account_number",
													"value": "dolor ",
													"description": "Bank account number"
												},
												{
													"key": "active",
													"value": "true",
													"description": "Activate or deactivate a subaccount"
												},
												{
													"key": "percentage_charge",
													"value": "82324574.6558654",
													"description": "Customer's phone number"
												},
												{
													"key": "description",
													"value": "sunt occaecat",
													"description": "A description for this subaccount"
												},
												{
													"key": "primary_contact_email",
													"value": "fugiat eiusmod ipsum i",
													"description": "A contact email for the subaccount"
												},
												{
													"key": "primary_contact_name",
													"value": "Excepteu",
													"description": "The name of the contact person for this subaccount"
												},
												{
													"key": "primary_contact_phone",
													"value": "ex",
													"description": "A phone number to call for this subaccount"
												},
												{
													"key": "metadata",
													"value": "in deserunt",
													"description": "Stringified JSON object of custom data"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/subaccount/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"subaccount",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						}
					]
				},
				{
					"name": "Create Subaccount",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "business_name",
									"value": "occaecat qui quis consequat",
									"description": "(Required) Name of business for subaccount"
								},
								{
									"key": "settlement_bank",
									"value": "exercitation aute dolore sunt",
									"description": "(Required) Bank code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint."
								},
								{
									"key": "account_number",
									"value": "ul",
									"description": "(Required) Bank account number"
								},
								{
									"key": "percentage_charge",
									"value": "-55530871.57665537",
									"description": "(Required) Customer's phone number"
								},
								{
									"key": "description",
									"value": "irure laborum",
									"description": "A description for this subaccount"
								},
								{
									"key": "primary_contact_email",
									"value": "id",
									"description": "A contact email for the subaccount"
								},
								{
									"key": "primary_contact_name",
									"value": "adipisicing labo",
									"description": "The name of the contact person for this subaccount"
								},
								{
									"key": "primary_contact_phone",
									"value": "sint dolore adipisicing sunt",
									"description": "A phone number to call for this subaccount"
								},
								{
									"key": "metadata",
									"value": "sunt",
									"description": "Stringified JSON object of custom data"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/subaccount",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"subaccount"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "business_name",
											"value": "occaecat qui quis consequat",
											"description": "(Required) Name of business for subaccount"
										},
										{
											"key": "settlement_bank",
											"value": "exercitation aute dolore sunt",
											"description": "(Required) Bank code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint."
										},
										{
											"key": "account_number",
											"value": "ul",
											"description": "(Required) Bank account number"
										},
										{
											"key": "percentage_charge",
											"value": "-55530871.57665537",
											"description": "(Required) Customer's phone number"
										},
										{
											"key": "description",
											"value": "irure laborum",
											"description": "A description for this subaccount"
										},
										{
											"key": "primary_contact_email",
											"value": "id",
											"description": "A contact email for the subaccount"
										},
										{
											"key": "primary_contact_name",
											"value": "adipisicing labo",
											"description": "The name of the contact person for this subaccount"
										},
										{
											"key": "primary_contact_phone",
											"value": "sint dolore adipisicing sunt",
											"description": "A phone number to call for this subaccount"
										},
										{
											"key": "metadata",
											"value": "sunt",
											"description": "Stringified JSON object of custom data"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/subaccount",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subaccount"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "business_name",
											"value": "occaecat qui quis consequat",
											"description": "(Required) Name of business for subaccount"
										},
										{
											"key": "settlement_bank",
											"value": "exercitation aute dolore sunt",
											"description": "(Required) Bank code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint."
										},
										{
											"key": "account_number",
											"value": "ul",
											"description": "(Required) Bank account number"
										},
										{
											"key": "percentage_charge",
											"value": "-55530871.57665537",
											"description": "(Required) Customer's phone number"
										},
										{
											"key": "description",
											"value": "irure laborum",
											"description": "A description for this subaccount"
										},
										{
											"key": "primary_contact_email",
											"value": "id",
											"description": "A contact email for the subaccount"
										},
										{
											"key": "primary_contact_name",
											"value": "adipisicing labo",
											"description": "The name of the contact person for this subaccount"
										},
										{
											"key": "primary_contact_phone",
											"value": "sint dolore adipisicing sunt",
											"description": "A phone number to call for this subaccount"
										},
										{
											"key": "metadata",
											"value": "sunt",
											"description": "Stringified JSON object of custom data"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/subaccount",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subaccount"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "business_name",
											"value": "occaecat qui quis consequat",
											"description": "(Required) Name of business for subaccount"
										},
										{
											"key": "settlement_bank",
											"value": "exercitation aute dolore sunt",
											"description": "(Required) Bank code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint."
										},
										{
											"key": "account_number",
											"value": "ul",
											"description": "(Required) Bank account number"
										},
										{
											"key": "percentage_charge",
											"value": "-55530871.57665537",
											"description": "(Required) Customer's phone number"
										},
										{
											"key": "description",
											"value": "irure laborum",
											"description": "A description for this subaccount"
										},
										{
											"key": "primary_contact_email",
											"value": "id",
											"description": "A contact email for the subaccount"
										},
										{
											"key": "primary_contact_name",
											"value": "adipisicing labo",
											"description": "The name of the contact person for this subaccount"
										},
										{
											"key": "primary_contact_phone",
											"value": "sint dolore adipisicing sunt",
											"description": "A phone number to call for this subaccount"
										},
										{
											"key": "metadata",
											"value": "sunt",
											"description": "Stringified JSON object of custom data"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/subaccount",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subaccount"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "List Subaccounts",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/subaccount?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"subaccount"
							],
							"query": [
								{
									"key": "perPage",
									"value": "61647984",
									"description": "Number of records to fetch per page"
								},
								{
									"key": "page",
									"value": "61647984",
									"description": "The section to retrieve"
								},
								{
									"key": "from",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The start date"
								},
								{
									"key": "to",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The end date"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/subaccount?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subaccount"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/subaccount?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subaccount"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/subaccount?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subaccount"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/subaccount?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subaccount"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				}
			]
		},
		{
			"name": "plan",
			"item": [
				{
					"name": "{code}",
					"item": [
						{
							"name": "Fetch Plan",
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/plan/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"plan",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/plan/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"plan",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/plan/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"plan",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/plan/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"plan",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/plan/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"plan",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						},
						{
							"name": "Update Plan",
							"request": {
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/x-www-form-urlencoded"
									},
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "name",
											"value": "elit adipisicing ipsum irure",
											"description": "Name of plan"
										},
										{
											"key": "amount",
											"value": "52350693",
											"description": "Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "interval",
											"value": "ut sunt dolore",
											"description": "Interval in words. Valid intervals are daily, weekly, monthly,biannually, annually"
										},
										{
											"key": "description",
											"value": "true",
											"description": "A description for this plan"
										},
										{
											"key": "send_invoices",
											"value": "true",
											"description": "Set to false if you don't want invoices to be sent to your customers"
										},
										{
											"key": "send_sms",
											"value": "false",
											"description": "Set to false if you don't want text messages to be sent to your customers"
										},
										{
											"key": "currency",
											"value": "aliqua occaecat",
											"description": "Currency in which amount is set. Allowed values are NGN, GHS, ZAR or USD"
										},
										{
											"key": "invoice_limit",
											"value": "-26508271",
											"description": "Number of invoices to raise during subscription to this plan. \nCan be overridden by specifying an invoice_limit while subscribing."
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/plan/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"plan",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "name",
													"value": "elit adipisicing ipsum irure",
													"description": "Name of plan"
												},
												{
													"key": "amount",
													"value": "52350693",
													"description": "Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
												},
												{
													"key": "interval",
													"value": "ut sunt dolore",
													"description": "Interval in words. Valid intervals are daily, weekly, monthly,biannually, annually"
												},
												{
													"key": "description",
													"value": "true",
													"description": "A description for this plan"
												},
												{
													"key": "send_invoices",
													"value": "true",
													"description": "Set to false if you don't want invoices to be sent to your customers"
												},
												{
													"key": "send_sms",
													"value": "false",
													"description": "Set to false if you don't want text messages to be sent to your customers"
												},
												{
													"key": "currency",
													"value": "aliqua occaecat",
													"description": "Currency in which amount is set. Allowed values are NGN, GHS, ZAR or USD"
												},
												{
													"key": "invoice_limit",
													"value": "-26508271",
													"description": "Number of invoices to raise during subscription to this plan. \nCan be overridden by specifying an invoice_limit while subscribing."
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/plan/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"plan",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "name",
													"value": "elit adipisicing ipsum irure",
													"description": "Name of plan"
												},
												{
													"key": "amount",
													"value": "52350693",
													"description": "Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
												},
												{
													"key": "interval",
													"value": "ut sunt dolore",
													"description": "Interval in words. Valid intervals are daily, weekly, monthly,biannually, annually"
												},
												{
													"key": "description",
													"value": "true",
													"description": "A description for this plan"
												},
												{
													"key": "send_invoices",
													"value": "true",
													"description": "Set to false if you don't want invoices to be sent to your customers"
												},
												{
													"key": "send_sms",
													"value": "false",
													"description": "Set to false if you don't want text messages to be sent to your customers"
												},
												{
													"key": "currency",
													"value": "aliqua occaecat",
													"description": "Currency in which amount is set. Allowed values are NGN, GHS, ZAR or USD"
												},
												{
													"key": "invoice_limit",
													"value": "-26508271",
													"description": "Number of invoices to raise during subscription to this plan. \nCan be overridden by specifying an invoice_limit while subscribing."
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/plan/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"plan",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "name",
													"value": "elit adipisicing ipsum irure",
													"description": "Name of plan"
												},
												{
													"key": "amount",
													"value": "52350693",
													"description": "Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
												},
												{
													"key": "interval",
													"value": "ut sunt dolore",
													"description": "Interval in words. Valid intervals are daily, weekly, monthly,biannually, annually"
												},
												{
													"key": "description",
													"value": "true",
													"description": "A description for this plan"
												},
												{
													"key": "send_invoices",
													"value": "true",
													"description": "Set to false if you don't want invoices to be sent to your customers"
												},
												{
													"key": "send_sms",
													"value": "false",
													"description": "Set to false if you don't want text messages to be sent to your customers"
												},
												{
													"key": "currency",
													"value": "aliqua occaecat",
													"description": "Currency in which amount is set. Allowed values are NGN, GHS, ZAR or USD"
												},
												{
													"key": "invoice_limit",
													"value": "-26508271",
													"description": "Number of invoices to raise during subscription to this plan. \nCan be overridden by specifying an invoice_limit while subscribing."
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/plan/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"plan",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "name",
													"value": "elit adipisicing ipsum irure",
													"description": "Name of plan"
												},
												{
													"key": "amount",
													"value": "52350693",
													"description": "Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
												},
												{
													"key": "interval",
													"value": "ut sunt dolore",
													"description": "Interval in words. Valid intervals are daily, weekly, monthly,biannually, annually"
												},
												{
													"key": "description",
													"value": "true",
													"description": "A description for this plan"
												},
												{
													"key": "send_invoices",
													"value": "true",
													"description": "Set to false if you don't want invoices to be sent to your customers"
												},
												{
													"key": "send_sms",
													"value": "false",
													"description": "Set to false if you don't want text messages to be sent to your customers"
												},
												{
													"key": "currency",
													"value": "aliqua occaecat",
													"description": "Currency in which amount is set. Allowed values are NGN, GHS, ZAR or USD"
												},
												{
													"key": "invoice_limit",
													"value": "-26508271",
													"description": "Number of invoices to raise during subscription to this plan. \nCan be overridden by specifying an invoice_limit while subscribing."
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/plan/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"plan",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						}
					]
				},
				{
					"name": "Create Plan",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "qui consequat",
									"description": "(Required) Name of plan"
								},
								{
									"key": "amount",
									"value": "60501509",
									"description": "(Required) Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
								},
								{
									"key": "interval",
									"value": "dolor",
									"description": "(Required) Interval in words. Valid intervals are daily, weekly, monthly,biannually, annually"
								},
								{
									"key": "description",
									"value": "true",
									"description": "A description for this plan"
								},
								{
									"key": "send_invoices",
									"value": "false",
									"description": "Set to false if you don't want invoices to be sent to your customers"
								},
								{
									"key": "send_sms",
									"value": "true",
									"description": "Set to false if you don't want text messages to be sent to your customers"
								},
								{
									"key": "currency",
									"value": "repreh",
									"description": "Currency in which amount is set. Allowed values are NGN, GHS, ZAR or USD"
								},
								{
									"key": "invoice_limit",
									"value": "-67876093",
									"description": "Number of invoices to raise during subscription to this plan. \nCan be overridden by specifying an invoice_limit while subscribing."
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/plan",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"plan"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "name",
											"value": "qui consequat",
											"description": "(Required) Name of plan"
										},
										{
											"key": "amount",
											"value": "60501509",
											"description": "(Required) Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "interval",
											"value": "dolor",
											"description": "(Required) Interval in words. Valid intervals are daily, weekly, monthly,biannually, annually"
										},
										{
											"key": "description",
											"value": "true",
											"description": "A description for this plan"
										},
										{
											"key": "send_invoices",
											"value": "false",
											"description": "Set to false if you don't want invoices to be sent to your customers"
										},
										{
											"key": "send_sms",
											"value": "true",
											"description": "Set to false if you don't want text messages to be sent to your customers"
										},
										{
											"key": "currency",
											"value": "repreh",
											"description": "Currency in which amount is set. Allowed values are NGN, GHS, ZAR or USD"
										},
										{
											"key": "invoice_limit",
											"value": "-67876093",
											"description": "Number of invoices to raise during subscription to this plan. \nCan be overridden by specifying an invoice_limit while subscribing."
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/plan",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"plan"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "name",
											"value": "qui consequat",
											"description": "(Required) Name of plan"
										},
										{
											"key": "amount",
											"value": "60501509",
											"description": "(Required) Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "interval",
											"value": "dolor",
											"description": "(Required) Interval in words. Valid intervals are daily, weekly, monthly,biannually, annually"
										},
										{
											"key": "description",
											"value": "true",
											"description": "A description for this plan"
										},
										{
											"key": "send_invoices",
											"value": "false",
											"description": "Set to false if you don't want invoices to be sent to your customers"
										},
										{
											"key": "send_sms",
											"value": "true",
											"description": "Set to false if you don't want text messages to be sent to your customers"
										},
										{
											"key": "currency",
											"value": "repreh",
											"description": "Currency in which amount is set. Allowed values are NGN, GHS, ZAR or USD"
										},
										{
											"key": "invoice_limit",
											"value": "-67876093",
											"description": "Number of invoices to raise during subscription to this plan. \nCan be overridden by specifying an invoice_limit while subscribing."
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/plan",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"plan"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "name",
											"value": "qui consequat",
											"description": "(Required) Name of plan"
										},
										{
											"key": "amount",
											"value": "60501509",
											"description": "(Required) Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "interval",
											"value": "dolor",
											"description": "(Required) Interval in words. Valid intervals are daily, weekly, monthly,biannually, annually"
										},
										{
											"key": "description",
											"value": "true",
											"description": "A description for this plan"
										},
										{
											"key": "send_invoices",
											"value": "false",
											"description": "Set to false if you don't want invoices to be sent to your customers"
										},
										{
											"key": "send_sms",
											"value": "true",
											"description": "Set to false if you don't want text messages to be sent to your customers"
										},
										{
											"key": "currency",
											"value": "repreh",
											"description": "Currency in which amount is set. Allowed values are NGN, GHS, ZAR or USD"
										},
										{
											"key": "invoice_limit",
											"value": "-67876093",
											"description": "Number of invoices to raise during subscription to this plan. \nCan be overridden by specifying an invoice_limit while subscribing."
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/plan",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"plan"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "List Plans",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/plan?perPage=61647984&page=61647984&interval=in ipsum qui&amount=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"plan"
							],
							"query": [
								{
									"key": "perPage",
									"value": "61647984",
									"description": "Number of records to fetch per page"
								},
								{
									"key": "page",
									"value": "61647984",
									"description": "The section to retrieve"
								},
								{
									"key": "interval",
									"value": "in ipsum qui",
									"description": "Specify interval of the plan"
								},
								{
									"key": "amount",
									"value": "61647984",
									"description": "The amount on the plans to retrieve"
								},
								{
									"key": "from",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The start date"
								},
								{
									"key": "to",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The end date"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/plan?perPage=61647984&page=61647984&interval=in ipsum qui&amount=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"plan"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "interval",
											"value": "in ipsum qui"
										},
										{
											"key": "amount",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/plan?perPage=61647984&page=61647984&interval=in ipsum qui&amount=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"plan"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "interval",
											"value": "in ipsum qui"
										},
										{
											"key": "amount",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/plan?perPage=61647984&page=61647984&interval=in ipsum qui&amount=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"plan"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "interval",
											"value": "in ipsum qui"
										},
										{
											"key": "amount",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/plan?perPage=61647984&page=61647984&interval=in ipsum qui&amount=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"plan"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "interval",
											"value": "in ipsum qui"
										},
										{
											"key": "amount",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				}
			]
		},
		{
			"name": "subscription",
			"item": [
				{
					"name": "{code}",
					"item": [
						{
							"name": "manage",
							"item": [
								{
									"name": "Generate Update Subscription Link",
									"request": {
										"method": "POST",
										"header": [
											{
												"key": "Accept",
												"value": "application/json"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/subscription/:code/manage/link",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"subscription",
												":code",
												"manage",
												"link"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"response": [
										{
											"name": "Resource created",
											"originalRequest": {
												"method": "POST",
												"header": [
													{
														"description": "Added as a part of security scheme: bearer",
														"key": "Authorization",
														"value": "Bearer <token>"
													}
												],
												"url": {
													"raw": "{{baseUrl}}/subscription/:code/manage/link",
													"host": [
														"{{baseUrl}}"
													],
													"path": [
														"subscription",
														":code",
														"manage",
														"link"
													],
													"variable": [
														{
															"key": "code",
															"value": "in ipsum qui",
															"description": "(Required) "
														}
													]
												}
											},
											"status": "Created",
											"code": 201,
											"_postman_previewlanguage": "json",
											"header": [
												{
													"key": "Content-Type",
													"value": "application/json"
												}
											],
											"cookie": [],
											"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
										},
										{
											"name": "Unauthorized operation",
											"originalRequest": {
												"method": "POST",
												"header": [
													{
														"description": "Added as a part of security scheme: bearer",
														"key": "Authorization",
														"value": "Bearer <token>"
													}
												],
												"url": {
													"raw": "{{baseUrl}}/subscription/:code/manage/link",
													"host": [
														"{{baseUrl}}"
													],
													"path": [
														"subscription",
														":code",
														"manage",
														"link"
													],
													"variable": [
														{
															"key": "code",
															"value": "in ipsum qui",
															"description": "(Required) "
														}
													]
												}
											},
											"status": "Unauthorized",
											"code": 401,
											"_postman_previewlanguage": "json",
											"header": [
												{
													"key": "Content-Type",
													"value": "application/json"
												}
											],
											"cookie": [],
											"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
										},
										{
											"name": "Server error",
											"originalRequest": {
												"method": "POST",
												"header": [
													{
														"description": "Added as a part of security scheme: bearer",
														"key": "Authorization",
														"value": "Bearer <token>"
													}
												],
												"url": {
													"raw": "{{baseUrl}}/subscription/:code/manage/link",
													"host": [
														"{{baseUrl}}"
													],
													"path": [
														"subscription",
														":code",
														"manage",
														"link"
													],
													"variable": [
														{
															"key": "code",
															"value": "in ipsum qui",
															"description": "(Required) "
														}
													]
												}
											},
											"status": "Internal Server Error",
											"code": 500,
											"_postman_previewlanguage": "text",
											"header": [
												{
													"key": "Content-Type",
													"value": "text/plain"
												}
											],
											"cookie": [],
											"body": ""
										}
									]
								},
								{
									"name": "Send Update Subscription Link",
									"request": {
										"method": "POST",
										"header": [
											{
												"key": "Accept",
												"value": "application/json"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/subscription/:code/manage/email",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"subscription",
												":code",
												"manage",
												"email"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"response": [
										{
											"name": "Resource created",
											"originalRequest": {
												"method": "POST",
												"header": [
													{
														"description": "Added as a part of security scheme: bearer",
														"key": "Authorization",
														"value": "Bearer <token>"
													}
												],
												"url": {
													"raw": "{{baseUrl}}/subscription/:code/manage/email",
													"host": [
														"{{baseUrl}}"
													],
													"path": [
														"subscription",
														":code",
														"manage",
														"email"
													],
													"variable": [
														{
															"key": "code",
															"value": "in ipsum qui",
															"description": "(Required) "
														}
													]
												}
											},
											"status": "Created",
											"code": 201,
											"_postman_previewlanguage": "json",
											"header": [
												{
													"key": "Content-Type",
													"value": "application/json"
												}
											],
											"cookie": [],
											"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
										},
										{
											"name": "Unauthorized operation",
											"originalRequest": {
												"method": "POST",
												"header": [
													{
														"description": "Added as a part of security scheme: bearer",
														"key": "Authorization",
														"value": "Bearer <token>"
													}
												],
												"url": {
													"raw": "{{baseUrl}}/subscription/:code/manage/email",
													"host": [
														"{{baseUrl}}"
													],
													"path": [
														"subscription",
														":code",
														"manage",
														"email"
													],
													"variable": [
														{
															"key": "code",
															"value": "in ipsum qui",
															"description": "(Required) "
														}
													]
												}
											},
											"status": "Unauthorized",
											"code": 401,
											"_postman_previewlanguage": "json",
											"header": [
												{
													"key": "Content-Type",
													"value": "application/json"
												}
											],
											"cookie": [],
											"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
										},
										{
											"name": "Server error",
											"originalRequest": {
												"method": "POST",
												"header": [
													{
														"description": "Added as a part of security scheme: bearer",
														"key": "Authorization",
														"value": "Bearer <token>"
													}
												],
												"url": {
													"raw": "{{baseUrl}}/subscription/:code/manage/email",
													"host": [
														"{{baseUrl}}"
													],
													"path": [
														"subscription",
														":code",
														"manage",
														"email"
													],
													"variable": [
														{
															"key": "code",
															"value": "in ipsum qui",
															"description": "(Required) "
														}
													]
												}
											},
											"status": "Internal Server Error",
											"code": 500,
											"_postman_previewlanguage": "text",
											"header": [
												{
													"key": "Content-Type",
													"value": "text/plain"
												}
											],
											"cookie": [],
											"body": ""
										}
									]
								}
							]
						},
						{
							"name": "Fetch Subscription",
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/subscription/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subscription",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/subscription/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"subscription",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/subscription/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"subscription",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/subscription/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"subscription",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/subscription/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"subscription",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						}
					]
				},
				{
					"name": "Create Subscription",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "customer",
									"value": "est consequat aute ipsum magna",
									"description": "(Required) Customer's email address or customer code"
								},
								{
									"key": "plan",
									"value": "eiusmod in non",
									"description": "(Required) Plan code"
								},
								{
									"key": "authorization",
									"value": "adipisicing ex velit labore",
									"description": "If customer has multiple authorizations, you can set the desired authorization you wish to use for this subscription here. \nIf this is not supplied, the customer's most recent authorization would be used"
								},
								{
									"key": "start_date",
									"value": "1961-06-23T17:15:37.747Z",
									"description": "Set the date for the first debit. (ISO 8601 format) e.g. 2017-05-16T00:30:13+01:00"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/subscription",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"subscription"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "customer",
											"value": "est consequat aute ipsum magna",
											"description": "(Required) Customer's email address or customer code"
										},
										{
											"key": "plan",
											"value": "eiusmod in non",
											"description": "(Required) Plan code"
										},
										{
											"key": "authorization",
											"value": "adipisicing ex velit labore",
											"description": "If customer has multiple authorizations, you can set the desired authorization you wish to use for this subscription here. \nIf this is not supplied, the customer's most recent authorization would be used"
										},
										{
											"key": "start_date",
											"value": "1961-06-23T17:15:37.747Z",
											"description": "Set the date for the first debit. (ISO 8601 format) e.g. 2017-05-16T00:30:13+01:00"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/subscription",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subscription"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "customer",
											"value": "est consequat aute ipsum magna",
											"description": "(Required) Customer's email address or customer code"
										},
										{
											"key": "plan",
											"value": "eiusmod in non",
											"description": "(Required) Plan code"
										},
										{
											"key": "authorization",
											"value": "adipisicing ex velit labore",
											"description": "If customer has multiple authorizations, you can set the desired authorization you wish to use for this subscription here. \nIf this is not supplied, the customer's most recent authorization would be used"
										},
										{
											"key": "start_date",
											"value": "1961-06-23T17:15:37.747Z",
											"description": "Set the date for the first debit. (ISO 8601 format) e.g. 2017-05-16T00:30:13+01:00"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/subscription",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subscription"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "customer",
											"value": "est consequat aute ipsum magna",
											"description": "(Required) Customer's email address or customer code"
										},
										{
											"key": "plan",
											"value": "eiusmod in non",
											"description": "(Required) Plan code"
										},
										{
											"key": "authorization",
											"value": "adipisicing ex velit labore",
											"description": "If customer has multiple authorizations, you can set the desired authorization you wish to use for this subscription here. \nIf this is not supplied, the customer's most recent authorization would be used"
										},
										{
											"key": "start_date",
											"value": "1961-06-23T17:15:37.747Z",
											"description": "Set the date for the first debit. (ISO 8601 format) e.g. 2017-05-16T00:30:13+01:00"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/subscription",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subscription"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "List Subscriptions",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/subscription?perPage=61647984&page=61647984&plan=in ipsum qui&customer=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"subscription"
							],
							"query": [
								{
									"key": "perPage",
									"value": "61647984",
									"description": "Number of records to fetch per page"
								},
								{
									"key": "page",
									"value": "61647984",
									"description": "The section to retrieve"
								},
								{
									"key": "plan",
									"value": "in ipsum qui",
									"description": "Plan ID"
								},
								{
									"key": "customer",
									"value": "in ipsum qui",
									"description": "Customer ID"
								},
								{
									"key": "from",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The start date"
								},
								{
									"key": "to",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The end date"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/subscription?perPage=61647984&page=61647984&plan=in ipsum qui&customer=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subscription"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "plan",
											"value": "in ipsum qui"
										},
										{
											"key": "customer",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/subscription?perPage=61647984&page=61647984&plan=in ipsum qui&customer=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subscription"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "plan",
											"value": "in ipsum qui"
										},
										{
											"key": "customer",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/subscription?perPage=61647984&page=61647984&plan=in ipsum qui&customer=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subscription"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "plan",
											"value": "in ipsum qui"
										},
										{
											"key": "customer",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/subscription?perPage=61647984&page=61647984&plan=in ipsum qui&customer=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subscription"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "plan",
											"value": "in ipsum qui"
										},
										{
											"key": "customer",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Disable Subscription",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "code",
									"value": "sed dolore adipisicing",
									"description": "(Required) Subscription code"
								},
								{
									"key": "token",
									"value": "eu culpa ",
									"description": "(Required) Email token"
								},
								{
									"key": "authorization",
									"value": "id magna sit",
									"description": "(Required) "
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/subscription/disable",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"subscription",
								"disable"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "code",
											"value": "sed dolore adipisicing",
											"description": "(Required) Subscription code"
										},
										{
											"key": "token",
											"value": "eu culpa ",
											"description": "(Required) Email token"
										},
										{
											"key": "authorization",
											"value": "id magna sit",
											"description": "(Required) "
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/subscription/disable",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subscription",
										"disable"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "code",
											"value": "sed dolore adipisicing",
											"description": "(Required) Subscription code"
										},
										{
											"key": "token",
											"value": "eu culpa ",
											"description": "(Required) Email token"
										},
										{
											"key": "authorization",
											"value": "id magna sit",
											"description": "(Required) "
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/subscription/disable",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subscription",
										"disable"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "code",
											"value": "sed dolore adipisicing",
											"description": "(Required) Subscription code"
										},
										{
											"key": "token",
											"value": "eu culpa ",
											"description": "(Required) Email token"
										},
										{
											"key": "authorization",
											"value": "id magna sit",
											"description": "(Required) "
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/subscription/disable",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subscription",
										"disable"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Enable Subscription",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "code",
									"value": "sed dolore adipisicing",
									"description": "(Required) Subscription code"
								},
								{
									"key": "token",
									"value": "eu culpa ",
									"description": "(Required) Email token"
								},
								{
									"key": "authorization",
									"value": "id magna sit",
									"description": "(Required) "
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/subscription/enable",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"subscription",
								"enable"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "code",
											"value": "sed dolore adipisicing",
											"description": "(Required) Subscription code"
										},
										{
											"key": "token",
											"value": "eu culpa ",
											"description": "(Required) Email token"
										},
										{
											"key": "authorization",
											"value": "id magna sit",
											"description": "(Required) "
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/subscription/enable",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subscription",
										"enable"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "code",
											"value": "sed dolore adipisicing",
											"description": "(Required) Subscription code"
										},
										{
											"key": "token",
											"value": "eu culpa ",
											"description": "(Required) Email token"
										},
										{
											"key": "authorization",
											"value": "id magna sit",
											"description": "(Required) "
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/subscription/enable",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subscription",
										"enable"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "code",
											"value": "sed dolore adipisicing",
											"description": "(Required) Subscription code"
										},
										{
											"key": "token",
											"value": "eu culpa ",
											"description": "(Required) Email token"
										},
										{
											"key": "authorization",
											"value": "id magna sit",
											"description": "(Required) "
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/subscription/enable",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"subscription",
										"enable"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				}
			]
		},
		{
			"name": "product",
			"item": [
				{
					"name": "{id}",
					"item": [
						{
							"name": "Fetch Product",
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/product/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"product",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/product/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"product",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/product/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"product",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/product/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"product",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/product/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"product",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						},
						{
							"name": "Update product",
							"request": {
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/x-www-form-urlencoded"
									},
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "name",
											"value": "sunt veniam qui",
											"description": "Name of product"
										},
										{
											"key": "description",
											"value": "ullamco veniam enim",
											"description": "The description of the product"
										},
										{
											"key": "price",
											"value": "-99516482",
											"description": "Price should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "currency",
											"value": "incididunt eiusmod minim aliqua",
											"description": "Currency in which price is set. Allowed values are: NGN, GHS, ZAR or USD"
										},
										{
											"key": "limited",
											"value": "true",
											"description": "Set to true if the product has limited stock. Leave as false if the product has unlimited stock"
										},
										{
											"key": "quantity",
											"value": "-71650957",
											"description": "Number of products in stock. Use if limited is true"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/product/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"product",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "name",
													"value": "sunt veniam qui",
													"description": "Name of product"
												},
												{
													"key": "description",
													"value": "ullamco veniam enim",
													"description": "The description of the product"
												},
												{
													"key": "price",
													"value": "-99516482",
													"description": "Price should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
												},
												{
													"key": "currency",
													"value": "incididunt eiusmod minim aliqua",
													"description": "Currency in which price is set. Allowed values are: NGN, GHS, ZAR or USD"
												},
												{
													"key": "limited",
													"value": "true",
													"description": "Set to true if the product has limited stock. Leave as false if the product has unlimited stock"
												},
												{
													"key": "quantity",
													"value": "-71650957",
													"description": "Number of products in stock. Use if limited is true"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/product/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"product",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "name",
													"value": "sunt veniam qui",
													"description": "Name of product"
												},
												{
													"key": "description",
													"value": "ullamco veniam enim",
													"description": "The description of the product"
												},
												{
													"key": "price",
													"value": "-99516482",
													"description": "Price should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
												},
												{
													"key": "currency",
													"value": "incididunt eiusmod minim aliqua",
													"description": "Currency in which price is set. Allowed values are: NGN, GHS, ZAR or USD"
												},
												{
													"key": "limited",
													"value": "true",
													"description": "Set to true if the product has limited stock. Leave as false if the product has unlimited stock"
												},
												{
													"key": "quantity",
													"value": "-71650957",
													"description": "Number of products in stock. Use if limited is true"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/product/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"product",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "name",
													"value": "sunt veniam qui",
													"description": "Name of product"
												},
												{
													"key": "description",
													"value": "ullamco veniam enim",
													"description": "The description of the product"
												},
												{
													"key": "price",
													"value": "-99516482",
													"description": "Price should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
												},
												{
													"key": "currency",
													"value": "incididunt eiusmod minim aliqua",
													"description": "Currency in which price is set. Allowed values are: NGN, GHS, ZAR or USD"
												},
												{
													"key": "limited",
													"value": "true",
													"description": "Set to true if the product has limited stock. Leave as false if the product has unlimited stock"
												},
												{
													"key": "quantity",
													"value": "-71650957",
													"description": "Number of products in stock. Use if limited is true"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/product/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"product",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "name",
													"value": "sunt veniam qui",
													"description": "Name of product"
												},
												{
													"key": "description",
													"value": "ullamco veniam enim",
													"description": "The description of the product"
												},
												{
													"key": "price",
													"value": "-99516482",
													"description": "Price should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
												},
												{
													"key": "currency",
													"value": "incididunt eiusmod minim aliqua",
													"description": "Currency in which price is set. Allowed values are: NGN, GHS, ZAR or USD"
												},
												{
													"key": "limited",
													"value": "true",
													"description": "Set to true if the product has limited stock. Leave as false if the product has unlimited stock"
												},
												{
													"key": "quantity",
													"value": "-71650957",
													"description": "Number of products in stock. Use if limited is true"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/product/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"product",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						},
						{
							"name": "Delete Product",
							"request": {
								"method": "DELETE",
								"header": [
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/product/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"product",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "DELETE",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/product/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"product",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "DELETE",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/product/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"product",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "DELETE",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/product/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"product",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "DELETE",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/product/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"product",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						}
					]
				},
				{
					"name": "Create Product",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "Excepteur dolor",
									"description": "(Required) Name of product"
								},
								{
									"key": "description",
									"value": "officia qui incididunt enim",
									"description": "(Required) The description of the product"
								},
								{
									"key": "price",
									"value": "-91091287",
									"description": "(Required) Price should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
								},
								{
									"key": "currency",
									"value": "Lorem",
									"description": "(Required) Currency in which price is set. Allowed values are: NGN, GHS, ZAR or USD"
								},
								{
									"key": "limited",
									"value": "false",
									"description": "Set to true if the product has limited stock. Leave as false if the product has unlimited stock"
								},
								{
									"key": "quantity",
									"value": "-90846128",
									"description": "Number of products in stock. Use if limited is true"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/product",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"product"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "name",
											"value": "Excepteur dolor",
											"description": "(Required) Name of product"
										},
										{
											"key": "description",
											"value": "officia qui incididunt enim",
											"description": "(Required) The description of the product"
										},
										{
											"key": "price",
											"value": "-91091287",
											"description": "(Required) Price should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "currency",
											"value": "Lorem",
											"description": "(Required) Currency in which price is set. Allowed values are: NGN, GHS, ZAR or USD"
										},
										{
											"key": "limited",
											"value": "false",
											"description": "Set to true if the product has limited stock. Leave as false if the product has unlimited stock"
										},
										{
											"key": "quantity",
											"value": "-90846128",
											"description": "Number of products in stock. Use if limited is true"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/product",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"product"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "name",
											"value": "Excepteur dolor",
											"description": "(Required) Name of product"
										},
										{
											"key": "description",
											"value": "officia qui incididunt enim",
											"description": "(Required) The description of the product"
										},
										{
											"key": "price",
											"value": "-91091287",
											"description": "(Required) Price should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "currency",
											"value": "Lorem",
											"description": "(Required) Currency in which price is set. Allowed values are: NGN, GHS, ZAR or USD"
										},
										{
											"key": "limited",
											"value": "false",
											"description": "Set to true if the product has limited stock. Leave as false if the product has unlimited stock"
										},
										{
											"key": "quantity",
											"value": "-90846128",
											"description": "Number of products in stock. Use if limited is true"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/product",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"product"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "name",
											"value": "Excepteur dolor",
											"description": "(Required) Name of product"
										},
										{
											"key": "description",
											"value": "officia qui incididunt enim",
											"description": "(Required) The description of the product"
										},
										{
											"key": "price",
											"value": "-91091287",
											"description": "(Required) Price should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "currency",
											"value": "Lorem",
											"description": "(Required) Currency in which price is set. Allowed values are: NGN, GHS, ZAR or USD"
										},
										{
											"key": "limited",
											"value": "false",
											"description": "Set to true if the product has limited stock. Leave as false if the product has unlimited stock"
										},
										{
											"key": "quantity",
											"value": "-90846128",
											"description": "Number of products in stock. Use if limited is true"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/product",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"product"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "List Products",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/product?perPage=61647984&page=61647984&active=true&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"product"
							],
							"query": [
								{
									"key": "perPage",
									"value": "61647984"
								},
								{
									"key": "page",
									"value": "61647984"
								},
								{
									"key": "active",
									"value": "true"
								},
								{
									"key": "from",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The start date"
								},
								{
									"key": "to",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The end date"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/product?perPage=61647984&page=61647984&active=true&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"product"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "active",
											"value": "true"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/product?perPage=61647984&page=61647984&active=true&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"product"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "active",
											"value": "true"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/product?perPage=61647984&page=61647984&active=true&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"product"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "active",
											"value": "true"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/product?perPage=61647984&page=61647984&active=true&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"product"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "active",
											"value": "true"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				}
			]
		},
		{
			"name": "page",
			"item": [
				{
					"name": "{id}",
					"item": [
						{
							"name": "Fetch Page",
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/page/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"page",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/page/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"page",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/page/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"page",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/page/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"page",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/page/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"page",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						},
						{
							"name": "Update Page",
							"request": {
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/x-www-form-urlencoded"
									},
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "name",
											"value": "ullamco mollit aliquip",
											"description": "Name of page"
										},
										{
											"key": "description",
											"value": "ipsum deserunt fugiat",
											"description": "The description of the page"
										},
										{
											"key": "amount",
											"value": "12694657",
											"description": "Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "active",
											"value": "false",
											"description": "Set to false to deactivate page url"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/page/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"page",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "name",
													"value": "ullamco mollit aliquip",
													"description": "Name of page"
												},
												{
													"key": "description",
													"value": "ipsum deserunt fugiat",
													"description": "The description of the page"
												},
												{
													"key": "amount",
													"value": "12694657",
													"description": "Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
												},
												{
													"key": "active",
													"value": "false",
													"description": "Set to false to deactivate page url"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/page/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"page",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "name",
													"value": "ullamco mollit aliquip",
													"description": "Name of page"
												},
												{
													"key": "description",
													"value": "ipsum deserunt fugiat",
													"description": "The description of the page"
												},
												{
													"key": "amount",
													"value": "12694657",
													"description": "Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
												},
												{
													"key": "active",
													"value": "false",
													"description": "Set to false to deactivate page url"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/page/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"page",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "name",
													"value": "ullamco mollit aliquip",
													"description": "Name of page"
												},
												{
													"key": "description",
													"value": "ipsum deserunt fugiat",
													"description": "The description of the page"
												},
												{
													"key": "amount",
													"value": "12694657",
													"description": "Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
												},
												{
													"key": "active",
													"value": "false",
													"description": "Set to false to deactivate page url"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/page/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"page",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "name",
													"value": "ullamco mollit aliquip",
													"description": "Name of page"
												},
												{
													"key": "description",
													"value": "ipsum deserunt fugiat",
													"description": "The description of the page"
												},
												{
													"key": "amount",
													"value": "12694657",
													"description": "Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
												},
												{
													"key": "active",
													"value": "false",
													"description": "Set to false to deactivate page url"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/page/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"page",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						},
						{
							"name": "Add Products",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/x-www-form-urlencoded"
									},
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "product",
											"value": "pariatur mollit",
											"description": "(Required) IDs of all products to add to a page"
										},
										{
											"key": "product",
											"value": "ullamco",
											"description": "(Required) IDs of all products to add to a page"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/page/:id/product",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"page",
										":id",
										"product"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "POST",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "product",
													"value": "labore",
													"description": "(Required) IDs of all products to add to a page"
												},
												{
													"key": "product",
													"value": "nostrud quis cillum",
													"description": "(Required) IDs of all products to add to a page"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/page/:id/product",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"page",
												":id",
												"product"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Created",
									"code": 201,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "POST",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "product",
													"value": "labore",
													"description": "(Required) IDs of all products to add to a page"
												},
												{
													"key": "product",
													"value": "nostrud quis cillum",
													"description": "(Required) IDs of all products to add to a page"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/page/:id/product",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"page",
												":id",
												"product"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "POST",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "product",
													"value": "labore",
													"description": "(Required) IDs of all products to add to a page"
												},
												{
													"key": "product",
													"value": "nostrud quis cillum",
													"description": "(Required) IDs of all products to add to a page"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/page/:id/product",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"page",
												":id",
												"product"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						}
					]
				},
				{
					"name": "Create Page",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "sint fugiat enim",
									"description": "(Required) Name of page"
								},
								{
									"key": "description",
									"value": "ex eiusmod pariatur",
									"description": "The description of the page"
								},
								{
									"key": "amount",
									"value": "4883351",
									"description": "Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
								},
								{
									"key": "slug",
									"value": "consectetur in dolore",
									"description": "URL slug you would like to be associated with this page. Page will be accessible at https://paystack.com/pay/[slug]"
								},
								{
									"key": "metadata",
									"value": "mollit occaecat",
									"description": "Stringified JSON object of custom data"
								},
								{
									"key": "redirect_url",
									"value": "elit eiusmod quis laboris",
									"description": "If you would like Paystack to redirect to a URL upon successful payment, specify the URL here."
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/page",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"page"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "name",
											"value": "elit in",
											"description": "(Required) Name of page"
										},
										{
											"key": "description",
											"value": "Ut dolore aliqua",
											"description": "The description of the page"
										},
										{
											"key": "amount",
											"value": "-49202239",
											"description": "Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "slug",
											"value": "reprehenderit eiusmod",
											"description": "URL slug you would like to be associated with this page. Page will be accessible at https://paystack.com/pay/[slug]"
										},
										{
											"key": "metadata",
											"value": "do consectetur",
											"description": "Stringified JSON object of custom data"
										},
										{
											"key": "redirect_url",
											"value": "enim voluptate exercitation",
											"description": "If you would like Paystack to redirect to a URL upon successful payment, specify the URL here."
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/page",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"page"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "name",
											"value": "elit in",
											"description": "(Required) Name of page"
										},
										{
											"key": "description",
											"value": "Ut dolore aliqua",
											"description": "The description of the page"
										},
										{
											"key": "amount",
											"value": "-49202239",
											"description": "Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "slug",
											"value": "reprehenderit eiusmod",
											"description": "URL slug you would like to be associated with this page. Page will be accessible at https://paystack.com/pay/[slug]"
										},
										{
											"key": "metadata",
											"value": "do consectetur",
											"description": "Stringified JSON object of custom data"
										},
										{
											"key": "redirect_url",
											"value": "enim voluptate exercitation",
											"description": "If you would like Paystack to redirect to a URL upon successful payment, specify the URL here."
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/page",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"page"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "name",
											"value": "elit in",
											"description": "(Required) Name of page"
										},
										{
											"key": "description",
											"value": "Ut dolore aliqua",
											"description": "The description of the page"
										},
										{
											"key": "amount",
											"value": "-49202239",
											"description": "Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "slug",
											"value": "reprehenderit eiusmod",
											"description": "URL slug you would like to be associated with this page. Page will be accessible at https://paystack.com/pay/[slug]"
										},
										{
											"key": "metadata",
											"value": "do consectetur",
											"description": "Stringified JSON object of custom data"
										},
										{
											"key": "redirect_url",
											"value": "enim voluptate exercitation",
											"description": "If you would like Paystack to redirect to a URL upon successful payment, specify the URL here."
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/page",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"page"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "List Pages",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/page?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"page"
							],
							"query": [
								{
									"key": "perPage",
									"value": "61647984",
									"description": "Number of records to fetch per page"
								},
								{
									"key": "page",
									"value": "61647984",
									"description": "The section to retrieve"
								},
								{
									"key": "from",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The start date"
								},
								{
									"key": "to",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The end date"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/page?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"page"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/page?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"page"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/page?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"page"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/page?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"page"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Check Slug Availability",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/page/check_slug_availability/:slug",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"page",
								"check_slug_availability",
								":slug"
							],
							"variable": [
								{
									"key": "slug",
									"value": "in ipsum qui",
									"description": "(Required) "
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/page/check_slug_availability/:slug",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"page",
										"check_slug_availability",
										":slug"
									],
									"variable": [
										{
											"key": "slug",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/page/check_slug_availability/:slug",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"page",
										"check_slug_availability",
										":slug"
									],
									"variable": [
										{
											"key": "slug",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/page/check_slug_availability/:slug",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"page",
										"check_slug_availability",
										":slug"
									],
									"variable": [
										{
											"key": "slug",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/page/check_slug_availability/:slug",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"page",
										"check_slug_availability",
										":slug"
									],
									"variable": [
										{
											"key": "slug",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				}
			]
		},
		{
			"name": "paymentrequest",
			"item": [
				{
					"name": "{id}",
					"item": [
						{
							"name": "Fetch Payment Request",
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/paymentrequest/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"paymentrequest",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/paymentrequest/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"paymentrequest",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/paymentrequest/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"paymentrequest",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/paymentrequest/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"paymentrequest",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						},
						{
							"name": "Update Payment Request",
							"request": {
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/x-www-form-urlencoded"
									},
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "customer",
											"value": "in elit eu incididunt",
											"description": "Customer id or code"
										},
										{
											"key": "amount",
											"value": "6239718",
											"description": "Payment request amount. Only useful if line items and tax values are ignored. \nThe endpoint will throw a friendly warning if neither is available."
										},
										{
											"key": "currency",
											"value": "in quis in",
											"description": "Specify the currency of the invoice. Allowed values are NGN, GHS, ZAR and USD. Defaults to NGN"
										},
										{
											"key": "due_date",
											"value": "1970-06-02T00:42:29.541Z",
											"description": "ISO 8601 representation of request due date"
										},
										{
											"key": "description",
											"value": "reprehenderit ut dolore",
											"description": "A short description of the payment request"
										},
										{
											"key": "send_notification",
											"value": "true",
											"description": "Indicates whether Paystack sends an email notification to customer. Defaults to true"
										},
										{
											"key": "draft",
											"value": "true",
											"description": "Indicate if request should be saved as draft. Defaults to false and overrides send_notification"
										},
										{
											"key": "has_invoice",
											"value": "true",
											"description": "Set to true to create a draft invoice (adds an auto incrementing invoice number if none is provided) \neven if there are no line_items or tax passed"
										},
										{
											"key": "invoice_number",
											"value": "79113994",
											"description": "Numeric value of invoice. Invoice will start from 1 and auto increment from there. This field is to help \noverride whatever value Paystack decides. Auto increment for subsequent invoices continue from this point."
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/paymentrequest/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "customer",
													"value": "cillum",
													"description": "Customer id or code"
												},
												{
													"key": "amount",
													"value": "-8237148",
													"description": "Payment request amount. Only useful if line items and tax values are ignored. \nThe endpoint will throw a friendly warning if neither is available."
												},
												{
													"key": "currency",
													"value": "do",
													"description": "Specify the currency of the invoice. Allowed values are NGN, GHS, ZAR and USD. Defaults to NGN"
												},
												{
													"key": "due_date",
													"value": "1950-09-04T22:17:26.571Z",
													"description": "ISO 8601 representation of request due date"
												},
												{
													"key": "description",
													"value": "dolor Excepteur tempor",
													"description": "A short description of the payment request"
												},
												{
													"key": "send_notification",
													"value": "true",
													"description": "Indicates whether Paystack sends an email notification to customer. Defaults to true"
												},
												{
													"key": "draft",
													"value": "true",
													"description": "Indicate if request should be saved as draft. Defaults to false and overrides send_notification"
												},
												{
													"key": "has_invoice",
													"value": "true",
													"description": "Set to true to create a draft invoice (adds an auto incrementing invoice number if none is provided) \neven if there are no line_items or tax passed"
												},
												{
													"key": "invoice_number",
													"value": "28960351",
													"description": "Numeric value of invoice. Invoice will start from 1 and auto increment from there. This field is to help \noverride whatever value Paystack decides. Auto increment for subsequent invoices continue from this point."
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/paymentrequest/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"paymentrequest",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "customer",
													"value": "cillum",
													"description": "Customer id or code"
												},
												{
													"key": "amount",
													"value": "-8237148",
													"description": "Payment request amount. Only useful if line items and tax values are ignored. \nThe endpoint will throw a friendly warning if neither is available."
												},
												{
													"key": "currency",
													"value": "do",
													"description": "Specify the currency of the invoice. Allowed values are NGN, GHS, ZAR and USD. Defaults to NGN"
												},
												{
													"key": "due_date",
													"value": "1950-09-04T22:17:26.571Z",
													"description": "ISO 8601 representation of request due date"
												},
												{
													"key": "description",
													"value": "dolor Excepteur tempor",
													"description": "A short description of the payment request"
												},
												{
													"key": "send_notification",
													"value": "true",
													"description": "Indicates whether Paystack sends an email notification to customer. Defaults to true"
												},
												{
													"key": "draft",
													"value": "true",
													"description": "Indicate if request should be saved as draft. Defaults to false and overrides send_notification"
												},
												{
													"key": "has_invoice",
													"value": "true",
													"description": "Set to true to create a draft invoice (adds an auto incrementing invoice number if none is provided) \neven if there are no line_items or tax passed"
												},
												{
													"key": "invoice_number",
													"value": "28960351",
													"description": "Numeric value of invoice. Invoice will start from 1 and auto increment from there. This field is to help \noverride whatever value Paystack decides. Auto increment for subsequent invoices continue from this point."
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/paymentrequest/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"paymentrequest",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "customer",
													"value": "cillum",
													"description": "Customer id or code"
												},
												{
													"key": "amount",
													"value": "-8237148",
													"description": "Payment request amount. Only useful if line items and tax values are ignored. \nThe endpoint will throw a friendly warning if neither is available."
												},
												{
													"key": "currency",
													"value": "do",
													"description": "Specify the currency of the invoice. Allowed values are NGN, GHS, ZAR and USD. Defaults to NGN"
												},
												{
													"key": "due_date",
													"value": "1950-09-04T22:17:26.571Z",
													"description": "ISO 8601 representation of request due date"
												},
												{
													"key": "description",
													"value": "dolor Excepteur tempor",
													"description": "A short description of the payment request"
												},
												{
													"key": "send_notification",
													"value": "true",
													"description": "Indicates whether Paystack sends an email notification to customer. Defaults to true"
												},
												{
													"key": "draft",
													"value": "true",
													"description": "Indicate if request should be saved as draft. Defaults to false and overrides send_notification"
												},
												{
													"key": "has_invoice",
													"value": "true",
													"description": "Set to true to create a draft invoice (adds an auto incrementing invoice number if none is provided) \neven if there are no line_items or tax passed"
												},
												{
													"key": "invoice_number",
													"value": "28960351",
													"description": "Numeric value of invoice. Invoice will start from 1 and auto increment from there. This field is to help \noverride whatever value Paystack decides. Auto increment for subsequent invoices continue from this point."
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/paymentrequest/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"paymentrequest",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "customer",
													"value": "cillum",
													"description": "Customer id or code"
												},
												{
													"key": "amount",
													"value": "-8237148",
													"description": "Payment request amount. Only useful if line items and tax values are ignored. \nThe endpoint will throw a friendly warning if neither is available."
												},
												{
													"key": "currency",
													"value": "do",
													"description": "Specify the currency of the invoice. Allowed values are NGN, GHS, ZAR and USD. Defaults to NGN"
												},
												{
													"key": "due_date",
													"value": "1950-09-04T22:17:26.571Z",
													"description": "ISO 8601 representation of request due date"
												},
												{
													"key": "description",
													"value": "dolor Excepteur tempor",
													"description": "A short description of the payment request"
												},
												{
													"key": "send_notification",
													"value": "true",
													"description": "Indicates whether Paystack sends an email notification to customer. Defaults to true"
												},
												{
													"key": "draft",
													"value": "true",
													"description": "Indicate if request should be saved as draft. Defaults to false and overrides send_notification"
												},
												{
													"key": "has_invoice",
													"value": "true",
													"description": "Set to true to create a draft invoice (adds an auto incrementing invoice number if none is provided) \neven if there are no line_items or tax passed"
												},
												{
													"key": "invoice_number",
													"value": "28960351",
													"description": "Numeric value of invoice. Invoice will start from 1 and auto increment from there. This field is to help \noverride whatever value Paystack decides. Auto increment for subsequent invoices continue from this point."
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/paymentrequest/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"paymentrequest",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) "
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						}
					]
				},
				{
					"name": "Create Payment Request",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "customer",
									"value": "anim eiu",
									"description": "(Required) Customer id or code"
								},
								{
									"key": "amount",
									"value": "-52204690",
									"description": "Payment request amount. Only useful if line items and tax values are ignored. \nThe endpoint will throw a friendly warning if neither is available."
								},
								{
									"key": "currency",
									"value": "eu laborum dolore id",
									"description": "Specify the currency of the invoice. Allowed values are NGN, GHS, ZAR and USD. Defaults to NGN"
								},
								{
									"key": "due_date",
									"value": "2013-03-04T08:13:19.504Z",
									"description": "ISO 8601 representation of request due date"
								},
								{
									"key": "description",
									"value": "in proident irure amet",
									"description": "A short description of the payment request"
								},
								{
									"key": "send_notification",
									"value": "false",
									"description": "Indicates whether Paystack sends an email notification to customer. Defaults to true"
								},
								{
									"key": "draft",
									"value": "false",
									"description": "Indicate if request should be saved as draft. Defaults to false and overrides send_notification"
								},
								{
									"key": "has_invoice",
									"value": "true",
									"description": "Set to true to create a draft invoice (adds an auto incrementing invoice number if none is provided) \neven if there are no line_items or tax passed"
								},
								{
									"key": "invoice_number",
									"value": "-3307817",
									"description": "Numeric value of invoice. Invoice will start from 1 and auto increment from there. This field is to help \noverride whatever value Paystack decides. Auto increment for subsequent invoices continue from this point."
								},
								{
									"key": "split_code",
									"value": "voluptate elit",
									"description": "The split code of the transaction split."
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/paymentrequest",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"paymentrequest"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "customer",
											"value": "ipsum aute dolor consequat",
											"description": "(Required) Customer id or code"
										},
										{
											"key": "amount",
											"value": "54914694",
											"description": "Payment request amount. Only useful if line items and tax values are ignored. \nThe endpoint will throw a friendly warning if neither is available."
										},
										{
											"key": "currency",
											"value": "dolore irure eu velit",
											"description": "Specify the currency of the invoice. Allowed values are NGN, GHS, ZAR and USD. Defaults to NGN"
										},
										{
											"key": "due_date",
											"value": "2004-09-13T18:16:53.624Z",
											"description": "ISO 8601 representation of request due date"
										},
										{
											"key": "description",
											"value": "c",
											"description": "A short description of the payment request"
										},
										{
											"key": "send_notification",
											"value": "false",
											"description": "Indicates whether Paystack sends an email notification to customer. Defaults to true"
										},
										{
											"key": "draft",
											"value": "true",
											"description": "Indicate if request should be saved as draft. Defaults to false and overrides send_notification"
										},
										{
											"key": "has_invoice",
											"value": "true",
											"description": "Set to true to create a draft invoice (adds an auto incrementing invoice number if none is provided) \neven if there are no line_items or tax passed"
										},
										{
											"key": "invoice_number",
											"value": "51091527",
											"description": "Numeric value of invoice. Invoice will start from 1 and auto increment from there. This field is to help \noverride whatever value Paystack decides. Auto increment for subsequent invoices continue from this point."
										},
										{
											"key": "split_code",
											"value": "ex ad magna dolor",
											"description": "The split code of the transaction split."
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/paymentrequest",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "customer",
											"value": "ipsum aute dolor consequat",
											"description": "(Required) Customer id or code"
										},
										{
											"key": "amount",
											"value": "54914694",
											"description": "Payment request amount. Only useful if line items and tax values are ignored. \nThe endpoint will throw a friendly warning if neither is available."
										},
										{
											"key": "currency",
											"value": "dolore irure eu velit",
											"description": "Specify the currency of the invoice. Allowed values are NGN, GHS, ZAR and USD. Defaults to NGN"
										},
										{
											"key": "due_date",
											"value": "2004-09-13T18:16:53.624Z",
											"description": "ISO 8601 representation of request due date"
										},
										{
											"key": "description",
											"value": "c",
											"description": "A short description of the payment request"
										},
										{
											"key": "send_notification",
											"value": "false",
											"description": "Indicates whether Paystack sends an email notification to customer. Defaults to true"
										},
										{
											"key": "draft",
											"value": "true",
											"description": "Indicate if request should be saved as draft. Defaults to false and overrides send_notification"
										},
										{
											"key": "has_invoice",
											"value": "true",
											"description": "Set to true to create a draft invoice (adds an auto incrementing invoice number if none is provided) \neven if there are no line_items or tax passed"
										},
										{
											"key": "invoice_number",
											"value": "51091527",
											"description": "Numeric value of invoice. Invoice will start from 1 and auto increment from there. This field is to help \noverride whatever value Paystack decides. Auto increment for subsequent invoices continue from this point."
										},
										{
											"key": "split_code",
											"value": "ex ad magna dolor",
											"description": "The split code of the transaction split."
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/paymentrequest",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "customer",
											"value": "ipsum aute dolor consequat",
											"description": "(Required) Customer id or code"
										},
										{
											"key": "amount",
											"value": "54914694",
											"description": "Payment request amount. Only useful if line items and tax values are ignored. \nThe endpoint will throw a friendly warning if neither is available."
										},
										{
											"key": "currency",
											"value": "dolore irure eu velit",
											"description": "Specify the currency of the invoice. Allowed values are NGN, GHS, ZAR and USD. Defaults to NGN"
										},
										{
											"key": "due_date",
											"value": "2004-09-13T18:16:53.624Z",
											"description": "ISO 8601 representation of request due date"
										},
										{
											"key": "description",
											"value": "c",
											"description": "A short description of the payment request"
										},
										{
											"key": "send_notification",
											"value": "false",
											"description": "Indicates whether Paystack sends an email notification to customer. Defaults to true"
										},
										{
											"key": "draft",
											"value": "true",
											"description": "Indicate if request should be saved as draft. Defaults to false and overrides send_notification"
										},
										{
											"key": "has_invoice",
											"value": "true",
											"description": "Set to true to create a draft invoice (adds an auto incrementing invoice number if none is provided) \neven if there are no line_items or tax passed"
										},
										{
											"key": "invoice_number",
											"value": "51091527",
											"description": "Numeric value of invoice. Invoice will start from 1 and auto increment from there. This field is to help \noverride whatever value Paystack decides. Auto increment for subsequent invoices continue from this point."
										},
										{
											"key": "split_code",
											"value": "ex ad magna dolor",
											"description": "The split code of the transaction split."
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/paymentrequest",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "List Payment Request",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/paymentrequest?perPage=61647984&page=61647984&customer=in ipsum qui&status=in ipsum qui&currency=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"paymentrequest"
							],
							"query": [
								{
									"key": "perPage",
									"value": "61647984",
									"description": "Number of records to fetch per page"
								},
								{
									"key": "page",
									"value": "61647984",
									"description": "The section to retrieve"
								},
								{
									"key": "customer",
									"value": "in ipsum qui",
									"description": "Customer ID"
								},
								{
									"key": "status",
									"value": "in ipsum qui",
									"description": "Invoice status to filter"
								},
								{
									"key": "currency",
									"value": "in ipsum qui",
									"description": "If your integration supports more than one currency, choose the one to filter"
								},
								{
									"key": "from",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The start date"
								},
								{
									"key": "to",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The end date"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest?perPage=61647984&page=61647984&customer=in ipsum qui&status=in ipsum qui&currency=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "customer",
											"value": "in ipsum qui"
										},
										{
											"key": "status",
											"value": "in ipsum qui"
										},
										{
											"key": "currency",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest?perPage=61647984&page=61647984&customer=in ipsum qui&status=in ipsum qui&currency=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "customer",
											"value": "in ipsum qui"
										},
										{
											"key": "status",
											"value": "in ipsum qui"
										},
										{
											"key": "currency",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest?perPage=61647984&page=61647984&customer=in ipsum qui&status=in ipsum qui&currency=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "customer",
											"value": "in ipsum qui"
										},
										{
											"key": "status",
											"value": "in ipsum qui"
										},
										{
											"key": "currency",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest?perPage=61647984&page=61647984&customer=in ipsum qui&status=in ipsum qui&currency=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "customer",
											"value": "in ipsum qui"
										},
										{
											"key": "status",
											"value": "in ipsum qui"
										},
										{
											"key": "currency",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Verify Payment Request",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/paymentrequest/verify/:id",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"paymentrequest",
								"verify",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "in ipsum qui",
									"description": "(Required) "
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest/verify/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest",
										"verify",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest/verify/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest",
										"verify",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest/verify/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest",
										"verify",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest/verify/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest",
										"verify",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Send Notification",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/paymentrequest/notify/:id",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"paymentrequest",
								"notify",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "in ipsum qui",
									"description": "(Required) "
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest/notify/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest",
										"notify",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest/notify/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest",
										"notify",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest/notify/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest",
										"notify",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Payment Request Total",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/paymentrequest/totals",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"paymentrequest",
								"totals"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest/totals",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest",
										"totals"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest/totals",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest",
										"totals"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest/totals",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest",
										"totals"
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest/totals",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest",
										"totals"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Finalize Payment Request",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/paymentrequest/finalize/:id",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"paymentrequest",
								"finalize",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "in ipsum qui",
									"description": "(Required) "
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest/finalize/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest",
										"finalize",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest/finalize/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest",
										"finalize",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest/finalize/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest",
										"finalize",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Archive Payment Request",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/paymentrequest/archive/:id",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"paymentrequest",
								"archive",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "in ipsum qui",
									"description": "(Required) "
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest/archive/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest",
										"archive",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest/archive/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest",
										"archive",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/paymentrequest/archive/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"paymentrequest",
										"archive",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				}
			]
		},
		{
			"name": "settlement",
			"item": [
				{
					"name": "Fetch Settlements",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/settlement?perPage=92885756&page=82085264",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"settlement"
							],
							"query": [
								{
									"key": "perPage",
									"value": "92885756"
								},
								{
									"key": "page",
									"value": "82085264"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/settlement?perPage=92885756&page=82085264",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"settlement"
									],
									"query": [
										{
											"key": "perPage",
											"value": "92885756"
										},
										{
											"key": "page",
											"value": "82085264"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/settlement?perPage=92885756&page=82085264",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"settlement"
									],
									"query": [
										{
											"key": "perPage",
											"value": "92885756"
										},
										{
											"key": "page",
											"value": "82085264"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/settlement?perPage=92885756&page=82085264",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"settlement"
									],
									"query": [
										{
											"key": "perPage",
											"value": "92885756"
										},
										{
											"key": "page",
											"value": "82085264"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/settlement?perPage=92885756&page=82085264",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"settlement"
									],
									"query": [
										{
											"key": "perPage",
											"value": "92885756"
										},
										{
											"key": "page",
											"value": "82085264"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Settlement Transactions",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/settlement/:id/transaction?perPage=92885756&page=82085264",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"settlement",
								":id",
								"transaction"
							],
							"query": [
								{
									"key": "perPage",
									"value": "92885756"
								},
								{
									"key": "page",
									"value": "82085264"
								}
							],
							"variable": [
								{
									"key": "id"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/settlement/:id/transaction?perPage=92885756&page=82085264",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"settlement",
										":id",
										"transaction"
									],
									"query": [
										{
											"key": "perPage",
											"value": "92885756"
										},
										{
											"key": "page",
											"value": "82085264"
										}
									],
									"variable": [
										{
											"key": "id"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/settlement/:id/transaction?perPage=92885756&page=82085264",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"settlement",
										":id",
										"transaction"
									],
									"query": [
										{
											"key": "perPage",
											"value": "92885756"
										},
										{
											"key": "page",
											"value": "82085264"
										}
									],
									"variable": [
										{
											"key": "id"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/settlement/:id/transaction?perPage=92885756&page=82085264",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"settlement",
										":id",
										"transaction"
									],
									"query": [
										{
											"key": "perPage",
											"value": "92885756"
										},
										{
											"key": "page",
											"value": "82085264"
										}
									],
									"variable": [
										{
											"key": "id"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/settlement/:id/transaction?perPage=92885756&page=82085264",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"settlement",
										":id",
										"transaction"
									],
									"query": [
										{
											"key": "perPage",
											"value": "92885756"
										},
										{
											"key": "page",
											"value": "82085264"
										}
									],
									"variable": [
										{
											"key": "id"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				}
			]
		},
		{
			"name": "transferrecipient",
			"item": [
				{
					"name": "{code}",
					"item": [
						{
							"name": "Fetch Transfer recipient",
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transferrecipient/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transferrecipient",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) Transfer recipient code"
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/transferrecipient/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transferrecipient",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) Transfer recipient code"
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/transferrecipient/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transferrecipient",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) Transfer recipient code"
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/transferrecipient/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transferrecipient",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) Transfer recipient code"
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/transferrecipient/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transferrecipient",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) Transfer recipient code"
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						},
						{
							"name": "Update Transfer recipient",
							"request": {
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/x-www-form-urlencoded"
									},
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "name",
											"value": "ut dolor qui sunt",
											"description": "Recipient's name"
										},
										{
											"key": "email",
											"value": "reprehenderit id minim",
											"description": "Recipient's email address"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transferrecipient/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transferrecipient",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) Transfer recipient code"
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "name",
													"value": "ut dolor qui sunt",
													"description": "Recipient's name"
												},
												{
													"key": "email",
													"value": "reprehenderit id minim",
													"description": "Recipient's email address"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/transferrecipient/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transferrecipient",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) Transfer recipient code"
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "name",
													"value": "ut dolor qui sunt",
													"description": "Recipient's name"
												},
												{
													"key": "email",
													"value": "reprehenderit id minim",
													"description": "Recipient's email address"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/transferrecipient/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transferrecipient",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) Transfer recipient code"
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "name",
													"value": "ut dolor qui sunt",
													"description": "Recipient's name"
												},
												{
													"key": "email",
													"value": "reprehenderit id minim",
													"description": "Recipient's email address"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/transferrecipient/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transferrecipient",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) Transfer recipient code"
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "name",
													"value": "ut dolor qui sunt",
													"description": "Recipient's name"
												},
												{
													"key": "email",
													"value": "reprehenderit id minim",
													"description": "Recipient's email address"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/transferrecipient/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transferrecipient",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) Transfer recipient code"
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						},
						{
							"name": "Delete Transfer Recipient",
							"request": {
								"method": "DELETE",
								"header": [
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transferrecipient/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transferrecipient",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) Transfer recipient code"
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "DELETE",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/transferrecipient/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transferrecipient",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) Transfer recipient code"
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "DELETE",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/transferrecipient/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transferrecipient",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) Transfer recipient code"
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "DELETE",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/transferrecipient/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transferrecipient",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) Transfer recipient code"
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "DELETE",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/transferrecipient/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"transferrecipient",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) Transfer recipient code"
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						}
					]
				},
				{
					"name": "Create Transfer Recipient",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "type",
									"value": "Lorem eiusmod amet minim ",
									"description": "(Required) Recipient Type (Only nuban at this time)"
								},
								{
									"key": "name",
									"value": "sint sed sunt in",
									"description": "(Required) Recipient's name"
								},
								{
									"key": "account_number",
									"value": "reprehenderit eiusmod Excepteur eu aliqua",
									"description": "(Required) Recipient's bank account number"
								},
								{
									"key": "bank_code",
									"value": "et aliquip",
									"description": "(Required) Recipient's bank code. You can get the list of Bank Codes by calling the List Banks endpoint"
								},
								{
									"key": "description",
									"value": "aliqu",
									"description": "A description for this recipient"
								},
								{
									"key": "currency",
									"value": "mollit laboris eu ullam",
									"description": "Currency for the account receiving the transfer"
								},
								{
									"key": "authorization_code",
									"value": "velit ex",
									"description": "An authorization code from a previous transaction"
								},
								{
									"key": "metadata",
									"value": "proident nisi reprehenderit fugiat adipisicing",
									"description": "Stringified JSON object of custom data"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/transferrecipient",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transferrecipient"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "type",
											"value": "Lorem eiusmod amet minim ",
											"description": "(Required) Recipient Type (Only nuban at this time)"
										},
										{
											"key": "name",
											"value": "sint sed sunt in",
											"description": "(Required) Recipient's name"
										},
										{
											"key": "account_number",
											"value": "reprehenderit eiusmod Excepteur eu aliqua",
											"description": "(Required) Recipient's bank account number"
										},
										{
											"key": "bank_code",
											"value": "et aliquip",
											"description": "(Required) Recipient's bank code. You can get the list of Bank Codes by calling the List Banks endpoint"
										},
										{
											"key": "description",
											"value": "aliqu",
											"description": "A description for this recipient"
										},
										{
											"key": "currency",
											"value": "mollit laboris eu ullam",
											"description": "Currency for the account receiving the transfer"
										},
										{
											"key": "authorization_code",
											"value": "velit ex",
											"description": "An authorization code from a previous transaction"
										},
										{
											"key": "metadata",
											"value": "proident nisi reprehenderit fugiat adipisicing",
											"description": "Stringified JSON object of custom data"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transferrecipient",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transferrecipient"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "type",
											"value": "Lorem eiusmod amet minim ",
											"description": "(Required) Recipient Type (Only nuban at this time)"
										},
										{
											"key": "name",
											"value": "sint sed sunt in",
											"description": "(Required) Recipient's name"
										},
										{
											"key": "account_number",
											"value": "reprehenderit eiusmod Excepteur eu aliqua",
											"description": "(Required) Recipient's bank account number"
										},
										{
											"key": "bank_code",
											"value": "et aliquip",
											"description": "(Required) Recipient's bank code. You can get the list of Bank Codes by calling the List Banks endpoint"
										},
										{
											"key": "description",
											"value": "aliqu",
											"description": "A description for this recipient"
										},
										{
											"key": "currency",
											"value": "mollit laboris eu ullam",
											"description": "Currency for the account receiving the transfer"
										},
										{
											"key": "authorization_code",
											"value": "velit ex",
											"description": "An authorization code from a previous transaction"
										},
										{
											"key": "metadata",
											"value": "proident nisi reprehenderit fugiat adipisicing",
											"description": "Stringified JSON object of custom data"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transferrecipient",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transferrecipient"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "type",
											"value": "Lorem eiusmod amet minim ",
											"description": "(Required) Recipient Type (Only nuban at this time)"
										},
										{
											"key": "name",
											"value": "sint sed sunt in",
											"description": "(Required) Recipient's name"
										},
										{
											"key": "account_number",
											"value": "reprehenderit eiusmod Excepteur eu aliqua",
											"description": "(Required) Recipient's bank account number"
										},
										{
											"key": "bank_code",
											"value": "et aliquip",
											"description": "(Required) Recipient's bank code. You can get the list of Bank Codes by calling the List Banks endpoint"
										},
										{
											"key": "description",
											"value": "aliqu",
											"description": "A description for this recipient"
										},
										{
											"key": "currency",
											"value": "mollit laboris eu ullam",
											"description": "Currency for the account receiving the transfer"
										},
										{
											"key": "authorization_code",
											"value": "velit ex",
											"description": "An authorization code from a previous transaction"
										},
										{
											"key": "metadata",
											"value": "proident nisi reprehenderit fugiat adipisicing",
											"description": "Stringified JSON object of custom data"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transferrecipient",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transferrecipient"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "List Transfer Recipients",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/transferrecipient?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transferrecipient"
							],
							"query": [
								{
									"key": "perPage",
									"value": "61647984",
									"description": "Number of records to fetch per page"
								},
								{
									"key": "page",
									"value": "61647984",
									"description": "The section to retrieve"
								},
								{
									"key": "from",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The start date"
								},
								{
									"key": "to",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The end date"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transferrecipient?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transferrecipient"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transferrecipient?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transferrecipient"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transferrecipient?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transferrecipient"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transferrecipient?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transferrecipient"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Bulk Create Transfer Recipient",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "batch",
									"value": "{\"type\":\"labore\",\"name\":\"Excepteur\",\"account_number\":\"quis mollit \",\"bank_code\":\"officia dolor\",\"description\":\"in id sit ci\",\"currency\":\"officia ex ipsum\",\"authorization_code\":\"occaecat minim consequat\",\"metadata\":\"fugiat irure sunt tempor\"}",
									"description": "(Required) A list of transfer recipient object. Each object should contain type, name, and bank_code. \nAny Create Transfer Recipient param can also be passed."
								},
								{
									"key": "batch",
									"value": "{\"type\":\"ut proident fugiat\",\"name\":\"exercitation cupidatat esse\",\"account_number\":\"Lorem nisi commodo\",\"bank_code\":\"officia elit enim irure\",\"description\":\"ea nisi pariatur\",\"currency\":\"in ex aliquip id\",\"authorization_code\":\"officia\",\"metadata\":\"labore esse adipisicing incididunt\"}",
									"description": "(Required) A list of transfer recipient object. Each object should contain type, name, and bank_code. \nAny Create Transfer Recipient param can also be passed."
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/transferrecipient/bulk",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transferrecipient",
								"bulk"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "batch",
											"value": "{\"type\":\"culpa nostrud\",\"name\":\"in exercitation voluptate veniam\",\"account_number\":\"ut\",\"bank_code\":\"non pariatur nostrud do\",\"description\":\"tempor laboris\",\"currency\":\"magna pariatur\",\"authorization_code\":\"nisi cupidatat proident eni\",\"metadata\":\"culpa\"}",
											"description": "(Required) A list of transfer recipient object. Each object should contain type, name, and bank_code. \nAny Create Transfer Recipient param can also be passed."
										},
										{
											"key": "batch",
											"value": "{\"type\":\"magna eiusmod\",\"name\":\"cupidatat\",\"account_number\":\"irure veniam\",\"bank_code\":\"elit veniam dolore minim\",\"description\":\"qui anim ex\",\"currency\":\"cillum Ut\",\"authorization_code\":\"anim veniam\",\"metadata\":\"consequat nulla enim\"}",
											"description": "(Required) A list of transfer recipient object. Each object should contain type, name, and bank_code. \nAny Create Transfer Recipient param can also be passed."
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transferrecipient/bulk",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transferrecipient",
										"bulk"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "batch",
											"value": "{\"type\":\"culpa nostrud\",\"name\":\"in exercitation voluptate veniam\",\"account_number\":\"ut\",\"bank_code\":\"non pariatur nostrud do\",\"description\":\"tempor laboris\",\"currency\":\"magna pariatur\",\"authorization_code\":\"nisi cupidatat proident eni\",\"metadata\":\"culpa\"}",
											"description": "(Required) A list of transfer recipient object. Each object should contain type, name, and bank_code. \nAny Create Transfer Recipient param can also be passed."
										},
										{
											"key": "batch",
											"value": "{\"type\":\"magna eiusmod\",\"name\":\"cupidatat\",\"account_number\":\"irure veniam\",\"bank_code\":\"elit veniam dolore minim\",\"description\":\"qui anim ex\",\"currency\":\"cillum Ut\",\"authorization_code\":\"anim veniam\",\"metadata\":\"consequat nulla enim\"}",
											"description": "(Required) A list of transfer recipient object. Each object should contain type, name, and bank_code. \nAny Create Transfer Recipient param can also be passed."
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transferrecipient/bulk",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transferrecipient",
										"bulk"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "batch",
											"value": "{\"type\":\"culpa nostrud\",\"name\":\"in exercitation voluptate veniam\",\"account_number\":\"ut\",\"bank_code\":\"non pariatur nostrud do\",\"description\":\"tempor laboris\",\"currency\":\"magna pariatur\",\"authorization_code\":\"nisi cupidatat proident eni\",\"metadata\":\"culpa\"}",
											"description": "(Required) A list of transfer recipient object. Each object should contain type, name, and bank_code. \nAny Create Transfer Recipient param can also be passed."
										},
										{
											"key": "batch",
											"value": "{\"type\":\"magna eiusmod\",\"name\":\"cupidatat\",\"account_number\":\"irure veniam\",\"bank_code\":\"elit veniam dolore minim\",\"description\":\"qui anim ex\",\"currency\":\"cillum Ut\",\"authorization_code\":\"anim veniam\",\"metadata\":\"consequat nulla enim\"}",
											"description": "(Required) A list of transfer recipient object. Each object should contain type, name, and bank_code. \nAny Create Transfer Recipient param can also be passed."
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transferrecipient/bulk",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transferrecipient",
										"bulk"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				}
			]
		},
		{
			"name": "transfer",
			"item": [
				{
					"name": "Initiate Transfer",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "source",
									"value": "Ut et adipisici",
									"description": "(Required) Where should we transfer from? Only balance is allowed for now"
								},
								{
									"key": "amount",
									"value": "esse ut au",
									"description": "(Required) Amount to transfer in kobo if currency is NGN and pesewas if currency is GHS."
								},
								{
									"key": "recipient",
									"value": "tempor et Excepteur",
									"description": "(Required) The transfer recipient's code"
								},
								{
									"key": "reason",
									"value": "voluptate",
									"description": "The reason or narration for the transfer."
								},
								{
									"key": "currency",
									"value": "sed in esse dolor reprehenderit",
									"description": "Specify the currency of the transfer. Defaults to NGN."
								},
								{
									"key": "reference",
									"value": "nisi amet enim",
									"description": "If specified, the field should be a unique identifier (in lowercase) for the object. \nOnly -,_ and alphanumeric characters are allowed."
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/transfer",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transfer"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "source",
											"value": "Ut et adipisici",
											"description": "(Required) Where should we transfer from? Only balance is allowed for now"
										},
										{
											"key": "amount",
											"value": "esse ut au",
											"description": "(Required) Amount to transfer in kobo if currency is NGN and pesewas if currency is GHS."
										},
										{
											"key": "recipient",
											"value": "tempor et Excepteur",
											"description": "(Required) The transfer recipient's code"
										},
										{
											"key": "reason",
											"value": "voluptate",
											"description": "The reason or narration for the transfer."
										},
										{
											"key": "currency",
											"value": "sed in esse dolor reprehenderit",
											"description": "Specify the currency of the transfer. Defaults to NGN."
										},
										{
											"key": "reference",
											"value": "nisi amet enim",
											"description": "If specified, the field should be a unique identifier (in lowercase) for the object. \nOnly -,_ and alphanumeric characters are allowed."
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transfer",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "source",
											"value": "Ut et adipisici",
											"description": "(Required) Where should we transfer from? Only balance is allowed for now"
										},
										{
											"key": "amount",
											"value": "esse ut au",
											"description": "(Required) Amount to transfer in kobo if currency is NGN and pesewas if currency is GHS."
										},
										{
											"key": "recipient",
											"value": "tempor et Excepteur",
											"description": "(Required) The transfer recipient's code"
										},
										{
											"key": "reason",
											"value": "voluptate",
											"description": "The reason or narration for the transfer."
										},
										{
											"key": "currency",
											"value": "sed in esse dolor reprehenderit",
											"description": "Specify the currency of the transfer. Defaults to NGN."
										},
										{
											"key": "reference",
											"value": "nisi amet enim",
											"description": "If specified, the field should be a unique identifier (in lowercase) for the object. \nOnly -,_ and alphanumeric characters are allowed."
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transfer",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "source",
											"value": "Ut et adipisici",
											"description": "(Required) Where should we transfer from? Only balance is allowed for now"
										},
										{
											"key": "amount",
											"value": "esse ut au",
											"description": "(Required) Amount to transfer in kobo if currency is NGN and pesewas if currency is GHS."
										},
										{
											"key": "recipient",
											"value": "tempor et Excepteur",
											"description": "(Required) The transfer recipient's code"
										},
										{
											"key": "reason",
											"value": "voluptate",
											"description": "The reason or narration for the transfer."
										},
										{
											"key": "currency",
											"value": "sed in esse dolor reprehenderit",
											"description": "Specify the currency of the transfer. Defaults to NGN."
										},
										{
											"key": "reference",
											"value": "nisi amet enim",
											"description": "If specified, the field should be a unique identifier (in lowercase) for the object. \nOnly -,_ and alphanumeric characters are allowed."
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transfer",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "List Transfers",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/transfer?perPage=61647984&page=61647984&status=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transfer"
							],
							"query": [
								{
									"key": "perPage",
									"value": "61647984",
									"description": "Number of records to fetch per page"
								},
								{
									"key": "page",
									"value": "61647984",
									"description": "The section to retrieve"
								},
								{
									"key": "status",
									"value": "in ipsum qui"
								},
								{
									"key": "from",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The start date"
								},
								{
									"key": "to",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The end date"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer?perPage=61647984&page=61647984&status=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "status",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer?perPage=61647984&page=61647984&status=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "status",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer?perPage=61647984&page=61647984&status=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "status",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer?perPage=61647984&page=61647984&status=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "status",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Finalize Transfer",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "transfer_code",
									"value": "ea deserunt non Excepteur",
									"description": "(Required) The transfer code you want to finalize"
								},
								{
									"key": "otp",
									"value": "adipisicing ",
									"description": "(Required) OTP sent to business phone to verify transfer"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/transfer/finalize_transfer",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transfer",
								"finalize_transfer"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "transfer_code",
											"value": "ea deserunt non Excepteur",
											"description": "(Required) The transfer code you want to finalize"
										},
										{
											"key": "otp",
											"value": "adipisicing ",
											"description": "(Required) OTP sent to business phone to verify transfer"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transfer/finalize_transfer",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"finalize_transfer"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "transfer_code",
											"value": "ea deserunt non Excepteur",
											"description": "(Required) The transfer code you want to finalize"
										},
										{
											"key": "otp",
											"value": "adipisicing ",
											"description": "(Required) OTP sent to business phone to verify transfer"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transfer/finalize_transfer",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"finalize_transfer"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "transfer_code",
											"value": "ea deserunt non Excepteur",
											"description": "(Required) The transfer code you want to finalize"
										},
										{
											"key": "otp",
											"value": "adipisicing ",
											"description": "(Required) OTP sent to business phone to verify transfer"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transfer/finalize_transfer",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"finalize_transfer"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Initiate Bulk Transfer",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "source",
									"value": "Excepteur cillum occaecat",
									"description": "Where should we transfer from? Only balance is allowed for now"
								},
								{
									"key": "transfers",
									"value": "{\"source\":\"id ipsum enim adipisicing \",\"amount\":\"in laboru\",\"recipient\":\"sint\",\"reason\":\"o\",\"currency\":\"est dolor Lorem\",\"reference\":\"veniam est\"}",
									"description": "A list of transfer object. Each object should contain amount, recipient, and reference"
								},
								{
									"key": "transfers",
									"value": "{\"source\":\"deserunt\",\"amount\":\"ut officia laborum\",\"recipient\":\"eu laborum\",\"reason\":\"in dolor\",\"currency\":\"fugiat eu cupidatat dolore\",\"reference\":\"Excepteur reprehenderit labore ipsum\"}",
									"description": "A list of transfer object. Each object should contain amount, recipient, and reference"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/transfer/bulk",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transfer",
								"bulk"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "source",
											"value": "irure ipsum dolor ullamco",
											"description": "Where should we transfer from? Only balance is allowed for now"
										},
										{
											"key": "transfers",
											"value": "{\"source\":\"dolor sed qui fugiat\",\"amount\":\"amet non esse\",\"recipient\":\"ea dolore adipisicing consequat nu\",\"reason\":\"velit quis\",\"currency\":\"Lorem consectetur\",\"reference\":\"ut in\"}",
											"description": "A list of transfer object. Each object should contain amount, recipient, and reference"
										},
										{
											"key": "transfers",
											"value": "{\"source\":\"ut est\",\"amount\":\"amet ullamco officia\",\"recipient\":\"ut voluptate\",\"reason\":\"labore in incididunt elit fugiat\",\"currency\":\"fugiat\",\"reference\":\"nisi est sit ex\"}",
											"description": "A list of transfer object. Each object should contain amount, recipient, and reference"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transfer/bulk",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"bulk"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "source",
											"value": "irure ipsum dolor ullamco",
											"description": "Where should we transfer from? Only balance is allowed for now"
										},
										{
											"key": "transfers",
											"value": "{\"source\":\"dolor sed qui fugiat\",\"amount\":\"amet non esse\",\"recipient\":\"ea dolore adipisicing consequat nu\",\"reason\":\"velit quis\",\"currency\":\"Lorem consectetur\",\"reference\":\"ut in\"}",
											"description": "A list of transfer object. Each object should contain amount, recipient, and reference"
										},
										{
											"key": "transfers",
											"value": "{\"source\":\"ut est\",\"amount\":\"amet ullamco officia\",\"recipient\":\"ut voluptate\",\"reason\":\"labore in incididunt elit fugiat\",\"currency\":\"fugiat\",\"reference\":\"nisi est sit ex\"}",
											"description": "A list of transfer object. Each object should contain amount, recipient, and reference"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transfer/bulk",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"bulk"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "source",
											"value": "irure ipsum dolor ullamco",
											"description": "Where should we transfer from? Only balance is allowed for now"
										},
										{
											"key": "transfers",
											"value": "{\"source\":\"dolor sed qui fugiat\",\"amount\":\"amet non esse\",\"recipient\":\"ea dolore adipisicing consequat nu\",\"reason\":\"velit quis\",\"currency\":\"Lorem consectetur\",\"reference\":\"ut in\"}",
											"description": "A list of transfer object. Each object should contain amount, recipient, and reference"
										},
										{
											"key": "transfers",
											"value": "{\"source\":\"ut est\",\"amount\":\"amet ullamco officia\",\"recipient\":\"ut voluptate\",\"reason\":\"labore in incididunt elit fugiat\",\"currency\":\"fugiat\",\"reference\":\"nisi est sit ex\"}",
											"description": "A list of transfer object. Each object should contain amount, recipient, and reference"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transfer/bulk",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"bulk"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Fetch Transfer",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/transfer/:code",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transfer",
								":code"
							],
							"variable": [
								{
									"key": "code",
									"value": "in ipsum qui",
									"description": "(Required) Transfer code"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) Transfer code"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) Transfer code"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) Transfer code"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) Transfer code"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Verify Transfer",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/transfer/verify/:reference",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transfer",
								"verify",
								":reference"
							],
							"variable": [
								{
									"key": "reference",
									"value": "in ipsum qui",
									"description": "(Required) "
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer/verify/:reference",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"verify",
										":reference"
									],
									"variable": [
										{
											"key": "reference",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer/verify/:reference",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"verify",
										":reference"
									],
									"variable": [
										{
											"key": "reference",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer/verify/:reference",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"verify",
										":reference"
									],
									"variable": [
										{
											"key": "reference",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer/verify/:reference",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"verify",
										":reference"
									],
									"variable": [
										{
											"key": "reference",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Export Transfers",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/transfer/export?perPage=61647984&page=61647984&status=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transfer",
								"export"
							],
							"query": [
								{
									"key": "perPage",
									"value": "61647984",
									"description": "Number of records to fetch per page"
								},
								{
									"key": "page",
									"value": "61647984",
									"description": "The section to retrieve"
								},
								{
									"key": "status",
									"value": "in ipsum qui"
								},
								{
									"key": "from",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The start date"
								},
								{
									"key": "to",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The end date"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer/export?perPage=61647984&page=61647984&status=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"export"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "status",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer/export?perPage=61647984&page=61647984&status=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"export"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "status",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer/export?perPage=61647984&page=61647984&status=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"export"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "status",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer/export?perPage=61647984&page=61647984&status=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"export"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "status",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Resend OTP for Transfer",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "transfer_code",
									"value": "aliqua laboris dolore",
									"description": "(Required) The transfer code that requires an OTP validation"
								},
								{
									"key": "reason",
									"value": "consequat cillum",
									"description": "(Required) Either resend_otp or transfer"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/transfer/resend_otp",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transfer",
								"resend_otp"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "transfer_code",
											"value": "aliqua laboris dolore",
											"description": "(Required) The transfer code that requires an OTP validation"
										},
										{
											"key": "reason",
											"value": "consequat cillum",
											"description": "(Required) Either resend_otp or transfer"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transfer/resend_otp",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"resend_otp"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "transfer_code",
											"value": "aliqua laboris dolore",
											"description": "(Required) The transfer code that requires an OTP validation"
										},
										{
											"key": "reason",
											"value": "consequat cillum",
											"description": "(Required) Either resend_otp or transfer"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transfer/resend_otp",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"resend_otp"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "transfer_code",
											"value": "aliqua laboris dolore",
											"description": "(Required) The transfer code that requires an OTP validation"
										},
										{
											"key": "reason",
											"value": "consequat cillum",
											"description": "(Required) Either resend_otp or transfer"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transfer/resend_otp",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"resend_otp"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Disable OTP requirement for Transfers",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/transfer/disable_otp",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transfer",
								"disable_otp"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer/disable_otp",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"disable_otp"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer/disable_otp",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"disable_otp"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer/disable_otp",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"disable_otp"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Finalize Disabling of OTP requirement for Transfers",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "otp",
									"value": "aute ad",
									"description": "(Required) OTP sent to business phone to verify disabling OTP requirement"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/transfer/disable_otp_finalize",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transfer",
								"disable_otp_finalize"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "otp",
											"value": "aute ad",
											"description": "(Required) OTP sent to business phone to verify disabling OTP requirement"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transfer/disable_otp_finalize",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"disable_otp_finalize"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "otp",
											"value": "aute ad",
											"description": "(Required) OTP sent to business phone to verify disabling OTP requirement"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transfer/disable_otp_finalize",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"disable_otp_finalize"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "otp",
											"value": "aute ad",
											"description": "(Required) OTP sent to business phone to verify disabling OTP requirement"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/transfer/disable_otp_finalize",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"disable_otp_finalize"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Enable OTP requirement for Transfers",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/transfer/enable_otp",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"transfer",
								"enable_otp"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer/enable_otp",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"enable_otp"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer/enable_otp",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"enable_otp"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/transfer/enable_otp",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"transfer",
										"enable_otp"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				}
			]
		},
		{
			"name": "balance",
			"item": [
				{
					"name": "Fetch Balance",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/balance",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"balance"
							]
						},
						"description": "Check your Paystack account balance"
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/balance",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"balance"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/balance",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"balance"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/balance",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"balance"
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/balance",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"balance"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Balance Ledger",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/balance/ledger?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"balance",
								"ledger"
							],
							"query": [
								{
									"key": "perPage",
									"value": "61647984",
									"description": "Number of records to fetch per page"
								},
								{
									"key": "page",
									"value": "61647984",
									"description": "The section to retrieve"
								},
								{
									"key": "from",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The start date"
								},
								{
									"key": "to",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The end date"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/balance/ledger?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"balance",
										"ledger"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/balance/ledger?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"balance",
										"ledger"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/balance/ledger?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"balance",
										"ledger"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/balance/ledger?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"balance",
										"ledger"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				}
			]
		},
		{
			"name": "charge",
			"item": [
				{
					"name": "Create Charge",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "email",
									"value": "sint commodo aliqua"
								},
								{
									"key": "amount",
									"value": "nisi anim cillum aliqua"
								},
								{
									"key": "authorization_code",
									"value": "reprehenderit ullamco"
								},
								{
									"key": "pin",
									"value": "magna ea in"
								},
								{
									"key": "reference",
									"value": "minim officia fugiat culpa commodo"
								},
								{
									"key": "birthday",
									"value": "2012-05-25T05:51:48.309Z"
								},
								{
									"key": "device_id",
									"value": "est consequat"
								},
								{
									"key": "metadata",
									"value": "dolor irure ut proident commodo"
								},
								{
									"key": "code",
									"value": "velit deserunt sunt in"
								},
								{
									"key": "account_number",
									"value": "et ea pariatur velit"
								},
								{
									"key": "phone",
									"value": "est nisi eu"
								},
								{
									"key": "provider",
									"value": "consectetur"
								},
								{
									"key": "type",
									"value": "919"
								},
								{
									"key": "provider",
									"value": "ozow"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/charge",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"charge"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "email",
											"value": "sint commodo aliqua"
										},
										{
											"key": "amount",
											"value": "nisi anim cillum aliqua"
										},
										{
											"key": "authorization_code",
											"value": "reprehenderit ullamco"
										},
										{
											"key": "pin",
											"value": "magna ea in"
										},
										{
											"key": "reference",
											"value": "minim officia fugiat culpa commodo"
										},
										{
											"key": "birthday",
											"value": "2012-05-25T05:51:48.309Z"
										},
										{
											"key": "device_id",
											"value": "est consequat"
										},
										{
											"key": "metadata",
											"value": "dolor irure ut proident commodo"
										},
										{
											"key": "code",
											"value": "velit deserunt sunt in"
										},
										{
											"key": "account_number",
											"value": "et ea pariatur velit"
										},
										{
											"key": "phone",
											"value": "est nisi eu"
										},
										{
											"key": "provider",
											"value": "consectetur"
										},
										{
											"key": "type",
											"value": "919"
										},
										{
											"key": "provider",
											"value": "ozow"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/charge",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "email",
											"value": "sint commodo aliqua"
										},
										{
											"key": "amount",
											"value": "nisi anim cillum aliqua"
										},
										{
											"key": "authorization_code",
											"value": "reprehenderit ullamco"
										},
										{
											"key": "pin",
											"value": "magna ea in"
										},
										{
											"key": "reference",
											"value": "minim officia fugiat culpa commodo"
										},
										{
											"key": "birthday",
											"value": "2012-05-25T05:51:48.309Z"
										},
										{
											"key": "device_id",
											"value": "est consequat"
										},
										{
											"key": "metadata",
											"value": "dolor irure ut proident commodo"
										},
										{
											"key": "code",
											"value": "velit deserunt sunt in"
										},
										{
											"key": "account_number",
											"value": "et ea pariatur velit"
										},
										{
											"key": "phone",
											"value": "est nisi eu"
										},
										{
											"key": "provider",
											"value": "consectetur"
										},
										{
											"key": "type",
											"value": "919"
										},
										{
											"key": "provider",
											"value": "ozow"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/charge",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "email",
											"value": "sint commodo aliqua"
										},
										{
											"key": "amount",
											"value": "nisi anim cillum aliqua"
										},
										{
											"key": "authorization_code",
											"value": "reprehenderit ullamco"
										},
										{
											"key": "pin",
											"value": "magna ea in"
										},
										{
											"key": "reference",
											"value": "minim officia fugiat culpa commodo"
										},
										{
											"key": "birthday",
											"value": "2012-05-25T05:51:48.309Z"
										},
										{
											"key": "device_id",
											"value": "est consequat"
										},
										{
											"key": "metadata",
											"value": "dolor irure ut proident commodo"
										},
										{
											"key": "code",
											"value": "velit deserunt sunt in"
										},
										{
											"key": "account_number",
											"value": "et ea pariatur velit"
										},
										{
											"key": "phone",
											"value": "est nisi eu"
										},
										{
											"key": "provider",
											"value": "consectetur"
										},
										{
											"key": "type",
											"value": "919"
										},
										{
											"key": "provider",
											"value": "ozow"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/charge",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Submit PIN",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "pin",
									"value": "aliqu",
									"description": "(Required) Customer's PIN"
								},
								{
									"key": "reference",
									"value": "dolore",
									"description": "(Required) Transaction reference that requires the PIN"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/charge/submit_pin",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"charge",
								"submit_pin"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "pin",
											"value": "aliqu",
											"description": "(Required) Customer's PIN"
										},
										{
											"key": "reference",
											"value": "dolore",
											"description": "(Required) Transaction reference that requires the PIN"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/charge/submit_pin",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge",
										"submit_pin"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "pin",
											"value": "aliqu",
											"description": "(Required) Customer's PIN"
										},
										{
											"key": "reference",
											"value": "dolore",
											"description": "(Required) Transaction reference that requires the PIN"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/charge/submit_pin",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge",
										"submit_pin"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "pin",
											"value": "aliqu",
											"description": "(Required) Customer's PIN"
										},
										{
											"key": "reference",
											"value": "dolore",
											"description": "(Required) Transaction reference that requires the PIN"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/charge/submit_pin",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge",
										"submit_pin"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Submit OTP",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "otp",
									"value": "elit eu nostrud",
									"description": "(Required) Customer's OTP"
								},
								{
									"key": "reference",
									"value": "fugiat culpa consectetur sit aliqua",
									"description": "(Required) The reference of the ongoing transaction"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/charge/submit_otp",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"charge",
								"submit_otp"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "otp",
											"value": "elit eu nostrud",
											"description": "(Required) Customer's OTP"
										},
										{
											"key": "reference",
											"value": "fugiat culpa consectetur sit aliqua",
											"description": "(Required) The reference of the ongoing transaction"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/charge/submit_otp",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge",
										"submit_otp"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "otp",
											"value": "elit eu nostrud",
											"description": "(Required) Customer's OTP"
										},
										{
											"key": "reference",
											"value": "fugiat culpa consectetur sit aliqua",
											"description": "(Required) The reference of the ongoing transaction"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/charge/submit_otp",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge",
										"submit_otp"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "otp",
											"value": "elit eu nostrud",
											"description": "(Required) Customer's OTP"
										},
										{
											"key": "reference",
											"value": "fugiat culpa consectetur sit aliqua",
											"description": "(Required) The reference of the ongoing transaction"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/charge/submit_otp",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge",
										"submit_otp"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Submit Phone",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "phone",
									"value": "est nostrud",
									"description": "(Required) Customer's mobile number"
								},
								{
									"key": "reference",
									"value": "ea minim quis adipisicing anim",
									"description": "(Required) The reference of the ongoing transaction"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/charge/submit_phone",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"charge",
								"submit_phone"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "phone",
											"value": "est nostrud",
											"description": "(Required) Customer's mobile number"
										},
										{
											"key": "reference",
											"value": "ea minim quis adipisicing anim",
											"description": "(Required) The reference of the ongoing transaction"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/charge/submit_phone",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge",
										"submit_phone"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "phone",
											"value": "est nostrud",
											"description": "(Required) Customer's mobile number"
										},
										{
											"key": "reference",
											"value": "ea minim quis adipisicing anim",
											"description": "(Required) The reference of the ongoing transaction"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/charge/submit_phone",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge",
										"submit_phone"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "phone",
											"value": "est nostrud",
											"description": "(Required) Customer's mobile number"
										},
										{
											"key": "reference",
											"value": "ea minim quis adipisicing anim",
											"description": "(Required) The reference of the ongoing transaction"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/charge/submit_phone",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge",
										"submit_phone"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Submit Birthday",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "birthday",
									"value": "sunt mollit",
									"description": "(Required) Customer's birthday in the format YYYY-MM-DD e.g 2016-09-21"
								},
								{
									"key": "reference",
									"value": "Ut Duis dolore sit",
									"description": "(Required) The reference of the ongoing transaction"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/charge/submit_birthday",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"charge",
								"submit_birthday"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "birthday",
											"value": "sunt mollit",
											"description": "(Required) Customer's birthday in the format YYYY-MM-DD e.g 2016-09-21"
										},
										{
											"key": "reference",
											"value": "Ut Duis dolore sit",
											"description": "(Required) The reference of the ongoing transaction"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/charge/submit_birthday",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge",
										"submit_birthday"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "birthday",
											"value": "sunt mollit",
											"description": "(Required) Customer's birthday in the format YYYY-MM-DD e.g 2016-09-21"
										},
										{
											"key": "reference",
											"value": "Ut Duis dolore sit",
											"description": "(Required) The reference of the ongoing transaction"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/charge/submit_birthday",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge",
										"submit_birthday"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "birthday",
											"value": "sunt mollit",
											"description": "(Required) Customer's birthday in the format YYYY-MM-DD e.g 2016-09-21"
										},
										{
											"key": "reference",
											"value": "Ut Duis dolore sit",
											"description": "(Required) The reference of the ongoing transaction"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/charge/submit_birthday",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge",
										"submit_birthday"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Submit Address",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "address",
									"value": "incididunt pariatur veniam cupidatat",
									"description": "(Required) Customer's address"
								},
								{
									"key": "reference",
									"value": "dolor",
									"description": "(Required) The reference of the ongoing transaction"
								},
								{
									"key": "city",
									"value": "occaecat laborum id qui",
									"description": "(Required) Customer's city"
								},
								{
									"key": "state",
									"value": "eu dolore in",
									"description": "(Required) Customer's state"
								},
								{
									"key": "zipcode",
									"value": "dolor",
									"description": "(Required) Customer's zipcode"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/charge/submit_address",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"charge",
								"submit_address"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "address",
											"value": "incididunt pariatur veniam cupidatat",
											"description": "(Required) Customer's address"
										},
										{
											"key": "reference",
											"value": "dolor",
											"description": "(Required) The reference of the ongoing transaction"
										},
										{
											"key": "city",
											"value": "occaecat laborum id qui",
											"description": "(Required) Customer's city"
										},
										{
											"key": "state",
											"value": "eu dolore in",
											"description": "(Required) Customer's state"
										},
										{
											"key": "zipcode",
											"value": "dolor",
											"description": "(Required) Customer's zipcode"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/charge/submit_address",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge",
										"submit_address"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "address",
											"value": "incididunt pariatur veniam cupidatat",
											"description": "(Required) Customer's address"
										},
										{
											"key": "reference",
											"value": "dolor",
											"description": "(Required) The reference of the ongoing transaction"
										},
										{
											"key": "city",
											"value": "occaecat laborum id qui",
											"description": "(Required) Customer's city"
										},
										{
											"key": "state",
											"value": "eu dolore in",
											"description": "(Required) Customer's state"
										},
										{
											"key": "zipcode",
											"value": "dolor",
											"description": "(Required) Customer's zipcode"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/charge/submit_address",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge",
										"submit_address"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "address",
											"value": "incididunt pariatur veniam cupidatat",
											"description": "(Required) Customer's address"
										},
										{
											"key": "reference",
											"value": "dolor",
											"description": "(Required) The reference of the ongoing transaction"
										},
										{
											"key": "city",
											"value": "occaecat laborum id qui",
											"description": "(Required) Customer's city"
										},
										{
											"key": "state",
											"value": "eu dolore in",
											"description": "(Required) Customer's state"
										},
										{
											"key": "zipcode",
											"value": "dolor",
											"description": "(Required) Customer's zipcode"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/charge/submit_address",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge",
										"submit_address"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Check pending charge",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/charge/:reference",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"charge",
								":reference"
							],
							"variable": [
								{
									"key": "reference",
									"value": "in ipsum qui",
									"description": "(Required) "
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/charge/:reference",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge",
										":reference"
									],
									"variable": [
										{
											"key": "reference",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/charge/:reference",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge",
										":reference"
									],
									"variable": [
										{
											"key": "reference",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/charge/:reference",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge",
										":reference"
									],
									"variable": [
										{
											"key": "reference",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/charge/:reference",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"charge",
										":reference"
									],
									"variable": [
										{
											"key": "reference",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				}
			]
		},
		{
			"name": "bulkcharge",
			"item": [
				{
					"name": "{code}",
					"item": [
						{
							"name": "Fetch Bulk Charge Batch",
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bulkcharge/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bulkcharge",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) Batch code"
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/bulkcharge/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"bulkcharge",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) Batch code"
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/bulkcharge/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"bulkcharge",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) Batch code"
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/bulkcharge/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"bulkcharge",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) Batch code"
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/bulkcharge/:code",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"bulkcharge",
												":code"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) Batch code"
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						},
						{
							"name": "Fetch Charges in a Batch",
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bulkcharge/:code/charges",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bulkcharge",
										":code",
										"charges"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) Batch code"
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/bulkcharge/:code/charges",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"bulkcharge",
												":code",
												"charges"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) Batch code"
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/bulkcharge/:code/charges",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"bulkcharge",
												":code",
												"charges"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) Batch code"
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/bulkcharge/:code/charges",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"bulkcharge",
												":code",
												"charges"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) Batch code"
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/bulkcharge/:code/charges",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"bulkcharge",
												":code",
												"charges"
											],
											"variable": [
												{
													"key": "code",
													"value": "in ipsum qui",
													"description": "(Required) Batch code"
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						}
					]
				},
				{
					"name": "Initiate Bulk Charge",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "authorization",
									"value": "quis ut eiusmod"
								},
								{
									"key": "amount",
									"value": "fugiat culpa tempor labore"
								},
								{
									"key": "reference",
									"value": "commodo sed incididunt enim"
								},
								{
									"key": "authorization",
									"value": "qui nulla sit"
								},
								{
									"key": "amount",
									"value": "reprehenderit ullamco ut exercitation fugiat"
								},
								{
									"key": "reference",
									"value": "et"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/bulkcharge",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"bulkcharge"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "authorization",
											"value": "ullamco nostrud"
										},
										{
											"key": "amount",
											"value": "pariatur nulla"
										},
										{
											"key": "reference",
											"value": "dolor ut"
										},
										{
											"key": "authorization",
											"value": "ullamco"
										},
										{
											"key": "amount",
											"value": "culpa aute"
										},
										{
											"key": "reference",
											"value": "proident dolore"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/bulkcharge",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bulkcharge"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "authorization",
											"value": "ullamco nostrud"
										},
										{
											"key": "amount",
											"value": "pariatur nulla"
										},
										{
											"key": "reference",
											"value": "dolor ut"
										},
										{
											"key": "authorization",
											"value": "ullamco"
										},
										{
											"key": "amount",
											"value": "culpa aute"
										},
										{
											"key": "reference",
											"value": "proident dolore"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/bulkcharge",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bulkcharge"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "authorization",
											"value": "ullamco nostrud"
										},
										{
											"key": "amount",
											"value": "pariatur nulla"
										},
										{
											"key": "reference",
											"value": "dolor ut"
										},
										{
											"key": "authorization",
											"value": "ullamco"
										},
										{
											"key": "amount",
											"value": "culpa aute"
										},
										{
											"key": "reference",
											"value": "proident dolore"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/bulkcharge",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bulkcharge"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "List Bulk Charge Batches",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/bulkcharge?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"bulkcharge"
							],
							"query": [
								{
									"key": "perPage",
									"value": "61647984",
									"description": "Number of records to fetch per page"
								},
								{
									"key": "page",
									"value": "61647984",
									"description": "The section to retrieve"
								},
								{
									"key": "from",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The start date"
								},
								{
									"key": "to",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The end date"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bulkcharge?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bulkcharge"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bulkcharge?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bulkcharge"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bulkcharge?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bulkcharge"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bulkcharge?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bulkcharge"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Pause Bulk Charge Batch",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/bulkcharge/pause/:code",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"bulkcharge",
								"pause",
								":code"
							],
							"variable": [
								{
									"key": "code",
									"value": "in ipsum qui",
									"description": "(Required) Batch code"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bulkcharge/pause/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bulkcharge",
										"pause",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) Batch code"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bulkcharge/pause/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bulkcharge",
										"pause",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) Batch code"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bulkcharge/pause/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bulkcharge",
										"pause",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) Batch code"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bulkcharge/pause/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bulkcharge",
										"pause",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) Batch code"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Resume Bulk Charge Batch",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/bulkcharge/resume/:code",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"bulkcharge",
								"resume",
								":code"
							],
							"variable": [
								{
									"key": "code",
									"value": "in ipsum qui",
									"description": "(Required) Batch code"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bulkcharge/resume/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bulkcharge",
										"resume",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) Batch code"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bulkcharge/resume/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bulkcharge",
										"resume",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) Batch code"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bulkcharge/resume/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bulkcharge",
										"resume",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) Batch code"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bulkcharge/resume/:code",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bulkcharge",
										"resume",
										":code"
									],
									"variable": [
										{
											"key": "code",
											"value": "in ipsum qui",
											"description": "(Required) Batch code"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				}
			]
		},
		{
			"name": "integration/payment session timeout",
			"item": [
				{
					"name": "Fetch Payment Session Timeout",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/integration/payment_session_timeout",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"integration",
								"payment_session_timeout"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/integration/payment_session_timeout",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"integration",
										"payment_session_timeout"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/integration/payment_session_timeout",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"integration",
										"payment_session_timeout"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/integration/payment_session_timeout",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"integration",
										"payment_session_timeout"
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/integration/payment_session_timeout",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"integration",
										"payment_session_timeout"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Update Payment Session Timeout",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "timeout",
									"value": "elit id dolore",
									"description": "(Required) Time in seconds before a transaction becomes invalid"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/integration/payment_session_timeout",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"integration",
								"payment_session_timeout"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "PUT",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "timeout",
											"value": "elit id dolore",
											"description": "(Required) Time in seconds before a transaction becomes invalid"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/integration/payment_session_timeout",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"integration",
										"payment_session_timeout"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "PUT",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "timeout",
											"value": "elit id dolore",
											"description": "(Required) Time in seconds before a transaction becomes invalid"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/integration/payment_session_timeout",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"integration",
										"payment_session_timeout"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "PUT",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "timeout",
											"value": "elit id dolore",
											"description": "(Required) Time in seconds before a transaction becomes invalid"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/integration/payment_session_timeout",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"integration",
										"payment_session_timeout"
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "PUT",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "timeout",
											"value": "elit id dolore",
											"description": "(Required) Time in seconds before a transaction becomes invalid"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/integration/payment_session_timeout",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"integration",
										"payment_session_timeout"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				}
			]
		},
		{
			"name": "refund",
			"item": [
				{
					"name": "Create Refund",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							},
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "transaction",
									"value": "inc",
									"description": "(Required) Transaction reference or id"
								},
								{
									"key": "amount",
									"value": "95612481",
									"description": "Amount ( in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR ) to be refunded to the customer. \nAmount cannot be more than the original transaction amount"
								},
								{
									"key": "currency",
									"value": "USD",
									"description": "Three-letter ISO currency"
								},
								{
									"key": "customer_note",
									"value": "amet culpa labore",
									"description": "Customer reason"
								},
								{
									"key": "merchant_note",
									"value": "ea consect",
									"description": "Merchant reason"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/refund",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"refund"
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "transaction",
											"value": "inc",
											"description": "(Required) Transaction reference or id"
										},
										{
											"key": "amount",
											"value": "95612481",
											"description": "Amount ( in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR ) to be refunded to the customer. \nAmount cannot be more than the original transaction amount"
										},
										{
											"key": "currency",
											"value": "USD",
											"description": "Three-letter ISO currency"
										},
										{
											"key": "customer_note",
											"value": "amet culpa labore",
											"description": "Customer reason"
										},
										{
											"key": "merchant_note",
											"value": "ea consect",
											"description": "Merchant reason"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/refund",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"refund"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "transaction",
											"value": "inc",
											"description": "(Required) Transaction reference or id"
										},
										{
											"key": "amount",
											"value": "95612481",
											"description": "Amount ( in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR ) to be refunded to the customer. \nAmount cannot be more than the original transaction amount"
										},
										{
											"key": "currency",
											"value": "USD",
											"description": "Three-letter ISO currency"
										},
										{
											"key": "customer_note",
											"value": "amet culpa labore",
											"description": "Customer reason"
										},
										{
											"key": "merchant_note",
											"value": "ea consect",
											"description": "Merchant reason"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/refund",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"refund"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "transaction",
											"value": "inc",
											"description": "(Required) Transaction reference or id"
										},
										{
											"key": "amount",
											"value": "95612481",
											"description": "Amount ( in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR ) to be refunded to the customer. \nAmount cannot be more than the original transaction amount"
										},
										{
											"key": "currency",
											"value": "USD",
											"description": "Three-letter ISO currency"
										},
										{
											"key": "customer_note",
											"value": "amet culpa labore",
											"description": "Customer reason"
										},
										{
											"key": "merchant_note",
											"value": "ea consect",
											"description": "Merchant reason"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/refund",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"refund"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "List Refunds",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/refund?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"refund"
							],
							"query": [
								{
									"key": "perPage",
									"value": "61647984",
									"description": "Number of records to fetch per page"
								},
								{
									"key": "page",
									"value": "61647984",
									"description": "The section to retrieve"
								},
								{
									"key": "from",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The start date"
								},
								{
									"key": "to",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The end date"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/refund?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"refund"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/refund?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"refund"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/refund?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"refund"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/refund?perPage=61647984&page=61647984&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"refund"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Fetch Refund",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/refund/:id",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"refund",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "in ipsum qui",
									"description": "(Required) "
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/refund/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"refund",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/refund/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"refund",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/refund/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"refund",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/refund/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"refund",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				}
			]
		},
		{
			"name": "dispute",
			"item": [
				{
					"name": "{id}",
					"item": [
						{
							"name": "Fetch Dispute",
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dispute/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dispute",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) Dispute ID"
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/dispute/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dispute",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) Dispute ID"
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/dispute/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dispute",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) Dispute ID"
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/dispute/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dispute",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) Dispute ID"
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/dispute/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dispute",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) Dispute ID"
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						},
						{
							"name": "Update Dispute",
							"request": {
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/x-www-form-urlencoded"
									},
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "refund_amount",
											"value": "et pariatur ullamco",
											"description": "(Required) The amount to refund, in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "uploaded_filename",
											"value": "eu magna cupidatat",
											"description": "Filename of attachment returned via response from the Dispute upload URL"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/dispute/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dispute",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) Dispute ID"
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "refund_amount",
													"value": "et pariatur ullamco",
													"description": "(Required) The amount to refund, in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
												},
												{
													"key": "uploaded_filename",
													"value": "eu magna cupidatat",
													"description": "Filename of attachment returned via response from the Dispute upload URL"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/dispute/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dispute",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) Dispute ID"
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "refund_amount",
													"value": "et pariatur ullamco",
													"description": "(Required) The amount to refund, in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
												},
												{
													"key": "uploaded_filename",
													"value": "eu magna cupidatat",
													"description": "Filename of attachment returned via response from the Dispute upload URL"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/dispute/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dispute",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) Dispute ID"
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "refund_amount",
													"value": "et pariatur ullamco",
													"description": "(Required) The amount to refund, in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
												},
												{
													"key": "uploaded_filename",
													"value": "eu magna cupidatat",
													"description": "Filename of attachment returned via response from the Dispute upload URL"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/dispute/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dispute",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) Dispute ID"
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "refund_amount",
													"value": "et pariatur ullamco",
													"description": "(Required) The amount to refund, in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
												},
												{
													"key": "uploaded_filename",
													"value": "eu magna cupidatat",
													"description": "Filename of attachment returned via response from the Dispute upload URL"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/dispute/:id",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dispute",
												":id"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) Dispute ID"
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						},
						{
							"name": "Get Upload URL",
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dispute/:id/upload_url",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dispute",
										":id",
										"upload_url"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) Dispute ID"
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/dispute/:id/upload_url",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dispute",
												":id",
												"upload_url"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) Dispute ID"
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/dispute/:id/upload_url",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dispute",
												":id",
												"upload_url"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) Dispute ID"
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/dispute/:id/upload_url",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dispute",
												":id",
												"upload_url"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) Dispute ID"
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"url": {
											"raw": "{{baseUrl}}/dispute/:id/upload_url",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dispute",
												":id",
												"upload_url"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) Dispute ID"
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						},
						{
							"name": "Resolve a Dispute",
							"request": {
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/x-www-form-urlencoded"
									},
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "resolution",
											"value": "merchant-accepted",
											"description": "(Required) Dispute resolution."
										},
										{
											"key": "message",
											"value": "eu dolore",
											"description": "(Required) Reason for resolving"
										},
										{
											"key": "refund_amount",
											"value": "consequat aliqua commodo cupidatat",
											"description": "(Required) The amount to refund, in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
										},
										{
											"key": "uploaded_filename",
											"value": "sint",
											"description": "(Required) Filename of attachment returned via response from the Dispute upload URL"
										},
										{
											"key": "evidence",
											"value": "-79597503",
											"description": "Evidence Id for fraud claims"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/dispute/:id/resolve",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dispute",
										":id",
										"resolve"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) Dispute ID"
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "resolution",
													"value": "merchant-accepted",
													"description": "(Required) Dispute resolution."
												},
												{
													"key": "message",
													"value": "eu dolore",
													"description": "(Required) Reason for resolving"
												},
												{
													"key": "refund_amount",
													"value": "consequat aliqua commodo cupidatat",
													"description": "(Required) The amount to refund, in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
												},
												{
													"key": "uploaded_filename",
													"value": "sint",
													"description": "(Required) Filename of attachment returned via response from the Dispute upload URL"
												},
												{
													"key": "evidence",
													"value": "-79597503",
													"description": "Evidence Id for fraud claims"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/dispute/:id/resolve",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dispute",
												":id",
												"resolve"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) Dispute ID"
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "resolution",
													"value": "merchant-accepted",
													"description": "(Required) Dispute resolution."
												},
												{
													"key": "message",
													"value": "eu dolore",
													"description": "(Required) Reason for resolving"
												},
												{
													"key": "refund_amount",
													"value": "consequat aliqua commodo cupidatat",
													"description": "(Required) The amount to refund, in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
												},
												{
													"key": "uploaded_filename",
													"value": "sint",
													"description": "(Required) Filename of attachment returned via response from the Dispute upload URL"
												},
												{
													"key": "evidence",
													"value": "-79597503",
													"description": "Evidence Id for fraud claims"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/dispute/:id/resolve",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dispute",
												":id",
												"resolve"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) Dispute ID"
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "resolution",
													"value": "merchant-accepted",
													"description": "(Required) Dispute resolution."
												},
												{
													"key": "message",
													"value": "eu dolore",
													"description": "(Required) Reason for resolving"
												},
												{
													"key": "refund_amount",
													"value": "consequat aliqua commodo cupidatat",
													"description": "(Required) The amount to refund, in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
												},
												{
													"key": "uploaded_filename",
													"value": "sint",
													"description": "(Required) Filename of attachment returned via response from the Dispute upload URL"
												},
												{
													"key": "evidence",
													"value": "-79597503",
													"description": "Evidence Id for fraud claims"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/dispute/:id/resolve",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dispute",
												":id",
												"resolve"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) Dispute ID"
												}
											]
										}
									},
									"status": "Not Found",
									"code": 404,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "PUT",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "resolution",
													"value": "merchant-accepted",
													"description": "(Required) Dispute resolution."
												},
												{
													"key": "message",
													"value": "eu dolore",
													"description": "(Required) Reason for resolving"
												},
												{
													"key": "refund_amount",
													"value": "consequat aliqua commodo cupidatat",
													"description": "(Required) The amount to refund, in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR"
												},
												{
													"key": "uploaded_filename",
													"value": "sint",
													"description": "(Required) Filename of attachment returned via response from the Dispute upload URL"
												},
												{
													"key": "evidence",
													"value": "-79597503",
													"description": "Evidence Id for fraud claims"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/dispute/:id/resolve",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dispute",
												":id",
												"resolve"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) Dispute ID"
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						},
						{
							"name": "Add Evidence",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/x-www-form-urlencoded"
									},
									{
										"key": "Accept",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "customer_email",
											"value": "do",
											"description": "(Required) Customer email"
										},
										{
											"key": "customer_name",
											"value": "aute fugiat aliqua",
											"description": "(Required) Customer name"
										},
										{
											"key": "customer_phone",
											"value": "Duis incididunt reprehenderit amet",
											"description": "(Required) Customer mobile number"
										},
										{
											"key": "service_details",
											"value": "velit est id nisi",
											"description": "(Required) Details of service offered"
										},
										{
											"key": "delivery_address",
											"value": "dolor laborum",
											"description": "Delivery address"
										},
										{
											"key": "delivery_date",
											"value": "2001-04-04T22:20:31.699Z",
											"description": "ISO 8601 representation of delivery date (YYYY-MM-DD)"
										}
									]
								},
								"url": {
									"raw": "{{baseUrl}}/dispute/:id/evidence",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dispute",
										":id",
										"evidence"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) Dispute ID"
										}
									]
								}
							},
							"response": [
								{
									"name": "Resource created",
									"originalRequest": {
										"method": "POST",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "customer_email",
													"value": "do",
													"description": "(Required) Customer email"
												},
												{
													"key": "customer_name",
													"value": "aute fugiat aliqua",
													"description": "(Required) Customer name"
												},
												{
													"key": "customer_phone",
													"value": "Duis incididunt reprehenderit amet",
													"description": "(Required) Customer mobile number"
												},
												{
													"key": "service_details",
													"value": "velit est id nisi",
													"description": "(Required) Details of service offered"
												},
												{
													"key": "delivery_address",
													"value": "dolor laborum",
													"description": "Delivery address"
												},
												{
													"key": "delivery_date",
													"value": "2001-04-04T22:20:31.699Z",
													"description": "ISO 8601 representation of delivery date (YYYY-MM-DD)"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/dispute/:id/evidence",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dispute",
												":id",
												"evidence"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) Dispute ID"
												}
											]
										}
									},
									"status": "Created",
									"code": 201,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
								},
								{
									"name": "Unauthorized operation",
									"originalRequest": {
										"method": "POST",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "customer_email",
													"value": "do",
													"description": "(Required) Customer email"
												},
												{
													"key": "customer_name",
													"value": "aute fugiat aliqua",
													"description": "(Required) Customer name"
												},
												{
													"key": "customer_phone",
													"value": "Duis incididunt reprehenderit amet",
													"description": "(Required) Customer mobile number"
												},
												{
													"key": "service_details",
													"value": "velit est id nisi",
													"description": "(Required) Details of service offered"
												},
												{
													"key": "delivery_address",
													"value": "dolor laborum",
													"description": "Delivery address"
												},
												{
													"key": "delivery_date",
													"value": "2001-04-04T22:20:31.699Z",
													"description": "ISO 8601 representation of delivery date (YYYY-MM-DD)"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/dispute/:id/evidence",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dispute",
												":id",
												"evidence"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) Dispute ID"
												}
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Content-Type",
											"value": "application/json"
										}
									],
									"cookie": [],
									"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
								},
								{
									"name": "Server error",
									"originalRequest": {
										"method": "POST",
										"header": [
											{
												"description": "Added as a part of security scheme: bearer",
												"key": "Authorization",
												"value": "Bearer <token>"
											}
										],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "customer_email",
													"value": "do",
													"description": "(Required) Customer email"
												},
												{
													"key": "customer_name",
													"value": "aute fugiat aliqua",
													"description": "(Required) Customer name"
												},
												{
													"key": "customer_phone",
													"value": "Duis incididunt reprehenderit amet",
													"description": "(Required) Customer mobile number"
												},
												{
													"key": "service_details",
													"value": "velit est id nisi",
													"description": "(Required) Details of service offered"
												},
												{
													"key": "delivery_address",
													"value": "dolor laborum",
													"description": "Delivery address"
												},
												{
													"key": "delivery_date",
													"value": "2001-04-04T22:20:31.699Z",
													"description": "ISO 8601 representation of delivery date (YYYY-MM-DD)"
												}
											]
										},
										"url": {
											"raw": "{{baseUrl}}/dispute/:id/evidence",
											"host": [
												"{{baseUrl}}"
											],
											"path": [
												"dispute",
												":id",
												"evidence"
											],
											"variable": [
												{
													"key": "id",
													"value": "in ipsum qui",
													"description": "(Required) Dispute ID"
												}
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "text",
									"header": [
										{
											"key": "Content-Type",
											"value": "text/plain"
										}
									],
									"cookie": [],
									"body": ""
								}
							]
						}
					]
				},
				{
					"name": "List Disputes",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/dispute?perPage=61647984&page=61647984&status=awaiting-merchant-feedback&transaction=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"dispute"
							],
							"query": [
								{
									"key": "perPage",
									"value": "61647984",
									"description": "Number of records to fetch per page"
								},
								{
									"key": "page",
									"value": "61647984",
									"description": "The section to retrieve"
								},
								{
									"key": "status",
									"value": "awaiting-merchant-feedback",
									"description": "Dispute Status."
								},
								{
									"key": "transaction",
									"value": "in ipsum qui",
									"description": "Transaction ID"
								},
								{
									"key": "from",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The start date"
								},
								{
									"key": "to",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The end date"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dispute?perPage=61647984&page=61647984&status=awaiting-merchant-feedback&transaction=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dispute"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "status",
											"value": "awaiting-merchant-feedback"
										},
										{
											"key": "transaction",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dispute?perPage=61647984&page=61647984&status=awaiting-merchant-feedback&transaction=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dispute"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "status",
											"value": "awaiting-merchant-feedback"
										},
										{
											"key": "transaction",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dispute?perPage=61647984&page=61647984&status=awaiting-merchant-feedback&transaction=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dispute"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "status",
											"value": "awaiting-merchant-feedback"
										},
										{
											"key": "transaction",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dispute?perPage=61647984&page=61647984&status=awaiting-merchant-feedback&transaction=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dispute"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "status",
											"value": "awaiting-merchant-feedback"
										},
										{
											"key": "transaction",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Export Disputes",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/dispute/export?perPage=61647984&page=61647984&status=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"dispute",
								"export"
							],
							"query": [
								{
									"key": "perPage",
									"value": "61647984",
									"description": "Number of records to fetch per page"
								},
								{
									"key": "page",
									"value": "61647984",
									"description": "The section to retrieve"
								},
								{
									"key": "status",
									"value": "in ipsum qui"
								},
								{
									"key": "from",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The start date"
								},
								{
									"key": "to",
									"value": "1982-09-25T01:26:20.052Z",
									"description": "The end date"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dispute/export?perPage=61647984&page=61647984&status=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dispute",
										"export"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "status",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dispute/export?perPage=61647984&page=61647984&status=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dispute",
										"export"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "status",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dispute/export?perPage=61647984&page=61647984&status=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dispute",
										"export"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "status",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dispute/export?perPage=61647984&page=61647984&status=in ipsum qui&from=1982-09-25T01:26:20.052Z&to=1982-09-25T01:26:20.052Z",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dispute",
										"export"
									],
									"query": [
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "page",
											"value": "61647984"
										},
										{
											"key": "status",
											"value": "in ipsum qui"
										},
										{
											"key": "from",
											"value": "1982-09-25T01:26:20.052Z"
										},
										{
											"key": "to",
											"value": "1982-09-25T01:26:20.052Z"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "List Transaction Disputes",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/dispute/transaction/:id",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"dispute",
								"transaction",
								":id"
							],
							"variable": [
								{
									"key": "id",
									"value": "in ipsum qui",
									"description": "(Required) Transaction ID"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dispute/transaction/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dispute",
										"transaction",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) Transaction ID"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dispute/transaction/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dispute",
										"transaction",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) Transaction ID"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dispute/transaction/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dispute",
										"transaction",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) Transaction ID"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/dispute/transaction/:id",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"dispute",
										"transaction",
										":id"
									],
									"variable": [
										{
											"key": "id",
											"value": "in ipsum qui",
											"description": "(Required) Transaction ID"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				}
			]
		},
		{
			"name": "bank",
			"item": [
				{
					"name": "Fetch Banks",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/bank?country=in ipsum qui&pay_with_bank_transfer=true&use_cursor=true&perPage=61647984&next=in ipsum qui&previous=in ipsum qui&gateway=in ipsum qui",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"bank"
							],
							"query": [
								{
									"key": "country",
									"value": "in ipsum qui"
								},
								{
									"key": "pay_with_bank_transfer",
									"value": "true"
								},
								{
									"key": "use_cursor",
									"value": "true"
								},
								{
									"key": "perPage",
									"value": "61647984"
								},
								{
									"key": "next",
									"value": "in ipsum qui"
								},
								{
									"key": "previous",
									"value": "in ipsum qui"
								},
								{
									"key": "gateway",
									"value": "in ipsum qui"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bank?country=in ipsum qui&pay_with_bank_transfer=true&use_cursor=true&perPage=61647984&next=in ipsum qui&previous=in ipsum qui&gateway=in ipsum qui",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bank"
									],
									"query": [
										{
											"key": "country",
											"value": "in ipsum qui"
										},
										{
											"key": "pay_with_bank_transfer",
											"value": "true"
										},
										{
											"key": "use_cursor",
											"value": "true"
										},
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "next",
											"value": "in ipsum qui"
										},
										{
											"key": "previous",
											"value": "in ipsum qui"
										},
										{
											"key": "gateway",
											"value": "in ipsum qui"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bank?country=in ipsum qui&pay_with_bank_transfer=true&use_cursor=true&perPage=61647984&next=in ipsum qui&previous=in ipsum qui&gateway=in ipsum qui",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bank"
									],
									"query": [
										{
											"key": "country",
											"value": "in ipsum qui"
										},
										{
											"key": "pay_with_bank_transfer",
											"value": "true"
										},
										{
											"key": "use_cursor",
											"value": "true"
										},
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "next",
											"value": "in ipsum qui"
										},
										{
											"key": "previous",
											"value": "in ipsum qui"
										},
										{
											"key": "gateway",
											"value": "in ipsum qui"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bank?country=in ipsum qui&pay_with_bank_transfer=true&use_cursor=true&perPage=61647984&next=in ipsum qui&previous=in ipsum qui&gateway=in ipsum qui",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bank"
									],
									"query": [
										{
											"key": "country",
											"value": "in ipsum qui"
										},
										{
											"key": "pay_with_bank_transfer",
											"value": "true"
										},
										{
											"key": "use_cursor",
											"value": "true"
										},
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "next",
											"value": "in ipsum qui"
										},
										{
											"key": "previous",
											"value": "in ipsum qui"
										},
										{
											"key": "gateway",
											"value": "in ipsum qui"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bank?country=in ipsum qui&pay_with_bank_transfer=true&use_cursor=true&perPage=61647984&next=in ipsum qui&previous=in ipsum qui&gateway=in ipsum qui",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bank"
									],
									"query": [
										{
											"key": "country",
											"value": "in ipsum qui"
										},
										{
											"key": "pay_with_bank_transfer",
											"value": "true"
										},
										{
											"key": "use_cursor",
											"value": "true"
										},
										{
											"key": "perPage",
											"value": "61647984"
										},
										{
											"key": "next",
											"value": "in ipsum qui"
										},
										{
											"key": "previous",
											"value": "in ipsum qui"
										},
										{
											"key": "gateway",
											"value": "in ipsum qui"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Resolve BVN",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/bank/resolve_bvn/:bvn",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"bank",
								"resolve_bvn",
								":bvn"
							],
							"variable": [
								{
									"key": "bvn",
									"value": "in ipsum qui",
									"description": "(Required) "
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bank/resolve_bvn/:bvn",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bank",
										"resolve_bvn",
										":bvn"
									],
									"variable": [
										{
											"key": "bvn",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bank/resolve_bvn/:bvn",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bank",
										"resolve_bvn",
										":bvn"
									],
									"variable": [
										{
											"key": "bvn",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bank/resolve_bvn/:bvn",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bank",
										"resolve_bvn",
										":bvn"
									],
									"variable": [
										{
											"key": "bvn",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bank/resolve_bvn/:bvn",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bank",
										"resolve_bvn",
										":bvn"
									],
									"variable": [
										{
											"key": "bvn",
											"value": "in ipsum qui",
											"description": "(Required) "
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				},
				{
					"name": "Resolve Account Number",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Accept",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/bank/resolve?account_number=-6567378&bank_code=98890055",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"bank",
								"resolve"
							],
							"query": [
								{
									"key": "account_number",
									"value": "-6567378"
								},
								{
									"key": "bank_code",
									"value": "98890055"
								}
							]
						}
					},
					"response": [
						{
							"name": "Resource created",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bank/resolve?account_number=-6567378&bank_code=98890055",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bank",
										"resolve"
									],
									"query": [
										{
											"key": "account_number",
											"value": "-6567378"
										},
										{
											"key": "bank_code",
											"value": "98890055"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bank/resolve?account_number=-6567378&bank_code=98890055",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bank",
										"resolve"
									],
									"query": [
										{
											"key": "account_number",
											"value": "-6567378"
										},
										{
											"key": "bank_code",
											"value": "98890055"
										}
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Unauthorized operation",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bank/resolve?account_number=-6567378&bank_code=98890055",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bank",
										"resolve"
									],
									"query": [
										{
											"key": "account_number",
											"value": "-6567378"
										},
										{
											"key": "bank_code",
											"value": "98890055"
										}
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
						},
						{
							"name": "Server error",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"description": "Added as a part of security scheme: bearer",
										"key": "Authorization",
										"value": "Bearer <token>"
									}
								],
								"url": {
									"raw": "{{baseUrl}}/bank/resolve?account_number=-6567378&bank_code=98890055",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"bank",
										"resolve"
									],
									"query": [
										{
											"key": "account_number",
											"value": "-6567378"
										},
										{
											"key": "bank_code",
											"value": "98890055"
										}
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "text",
							"header": [
								{
									"key": "Content-Type",
									"value": "text/plain"
								}
							],
							"cookie": [],
							"body": ""
						}
					]
				}
			]
		},
		{
			"name": "Match Service",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/x-www-form-urlencoded"
					},
					{
						"key": "Accept",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "account_number",
							"value": "cillum",
							"description": "(Required) Bank Account Number"
						},
						{
							"key": "bank_code",
							"value": "-14901734",
							"description": "(Required) You can get the list of banks codes by calling the List Bank endpoint"
						},
						{
							"key": "bvn",
							"value": "anim cillum",
							"description": "(Required) 11 digits Bank Verification Number"
						},
						{
							"key": "first_name",
							"value": "dolore velit",
							"description": "Customer's first name"
						},
						{
							"key": "middle_name",
							"value": "eu do",
							"description": "Customer's middle name"
						},
						{
							"key": "last_name",
							"value": "fugiat",
							"description": "Customer's last name"
						}
					]
				},
				"url": {
					"raw": "{{baseUrl}}/bvn/match",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"bvn",
						"match"
					]
				}
			},
			"response": [
				{
					"name": "Resource created",
					"originalRequest": {
						"method": "POST",
						"header": [
							{
								"description": "Added as a part of security scheme: bearer",
								"key": "Authorization",
								"value": "Bearer <token>"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "account_number",
									"value": "cillum",
									"description": "(Required) Bank Account Number"
								},
								{
									"key": "bank_code",
									"value": "-14901734",
									"description": "(Required) You can get the list of banks codes by calling the List Bank endpoint"
								},
								{
									"key": "bvn",
									"value": "anim cillum",
									"description": "(Required) 11 digits Bank Verification Number"
								},
								{
									"key": "first_name",
									"value": "dolore velit",
									"description": "Customer's first name"
								},
								{
									"key": "middle_name",
									"value": "eu do",
									"description": "Customer's middle name"
								},
								{
									"key": "last_name",
									"value": "fugiat",
									"description": "Customer's last name"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/bvn/match",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"bvn",
								"match"
							]
						}
					},
					"status": "Created",
					"code": 201,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Content-Type",
							"value": "application/json"
						}
					],
					"cookie": [],
					"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
				},
				{
					"name": "Unauthorized operation",
					"originalRequest": {
						"method": "POST",
						"header": [
							{
								"description": "Added as a part of security scheme: bearer",
								"key": "Authorization",
								"value": "Bearer <token>"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "account_number",
									"value": "cillum",
									"description": "(Required) Bank Account Number"
								},
								{
									"key": "bank_code",
									"value": "-14901734",
									"description": "(Required) You can get the list of banks codes by calling the List Bank endpoint"
								},
								{
									"key": "bvn",
									"value": "anim cillum",
									"description": "(Required) 11 digits Bank Verification Number"
								},
								{
									"key": "first_name",
									"value": "dolore velit",
									"description": "Customer's first name"
								},
								{
									"key": "middle_name",
									"value": "eu do",
									"description": "Customer's middle name"
								},
								{
									"key": "last_name",
									"value": "fugiat",
									"description": "Customer's last name"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/bvn/match",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"bvn",
								"match"
							]
						}
					},
					"status": "Unauthorized",
					"code": 401,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Content-Type",
							"value": "application/json"
						}
					],
					"cookie": [],
					"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
				},
				{
					"name": "Server error",
					"originalRequest": {
						"method": "POST",
						"header": [
							{
								"description": "Added as a part of security scheme: bearer",
								"key": "Authorization",
								"value": "Bearer <token>"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "account_number",
									"value": "cillum",
									"description": "(Required) Bank Account Number"
								},
								{
									"key": "bank_code",
									"value": "-14901734",
									"description": "(Required) You can get the list of banks codes by calling the List Bank endpoint"
								},
								{
									"key": "bvn",
									"value": "anim cillum",
									"description": "(Required) 11 digits Bank Verification Number"
								},
								{
									"key": "first_name",
									"value": "dolore velit",
									"description": "Customer's first name"
								},
								{
									"key": "middle_name",
									"value": "eu do",
									"description": "Customer's middle name"
								},
								{
									"key": "last_name",
									"value": "fugiat",
									"description": "Customer's last name"
								}
							]
						},
						"url": {
							"raw": "{{baseUrl}}/bvn/match",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"bvn",
								"match"
							]
						}
					},
					"status": "Internal Server Error",
					"code": 500,
					"_postman_previewlanguage": "text",
					"header": [
						{
							"key": "Content-Type",
							"value": "text/plain"
						}
					],
					"cookie": [],
					"body": ""
				}
			]
		},
		{
			"name": "Resolve Card BIN",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Accept",
						"value": "application/json"
					}
				],
				"url": {
					"raw": "{{baseUrl}}/decision/bin/:bin",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"decision",
						"bin",
						":bin"
					],
					"variable": [
						{
							"key": "bin",
							"value": "in ipsum qui",
							"description": "(Required) "
						}
					]
				}
			},
			"response": [
				{
					"name": "Resource created",
					"originalRequest": {
						"method": "GET",
						"header": [
							{
								"description": "Added as a part of security scheme: bearer",
								"key": "Authorization",
								"value": "Bearer <token>"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/decision/bin/:bin",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"decision",
								"bin",
								":bin"
							],
							"variable": [
								{
									"key": "bin",
									"value": "in ipsum qui",
									"description": "(Required) "
								}
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Content-Type",
							"value": "application/json"
						}
					],
					"cookie": [],
					"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
				},
				{
					"name": "Unauthorized operation",
					"originalRequest": {
						"method": "GET",
						"header": [
							{
								"description": "Added as a part of security scheme: bearer",
								"key": "Authorization",
								"value": "Bearer <token>"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/decision/bin/:bin",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"decision",
								"bin",
								":bin"
							],
							"variable": [
								{
									"key": "bin",
									"value": "in ipsum qui",
									"description": "(Required) "
								}
							]
						}
					},
					"status": "Unauthorized",
					"code": 401,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Content-Type",
							"value": "application/json"
						}
					],
					"cookie": [],
					"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
				},
				{
					"name": "Unauthorized operation",
					"originalRequest": {
						"method": "GET",
						"header": [
							{
								"description": "Added as a part of security scheme: bearer",
								"key": "Authorization",
								"value": "Bearer <token>"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/decision/bin/:bin",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"decision",
								"bin",
								":bin"
							],
							"variable": [
								{
									"key": "bin",
									"value": "in ipsum qui",
									"description": "(Required) "
								}
							]
						}
					},
					"status": "Not Found",
					"code": 404,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Content-Type",
							"value": "application/json"
						}
					],
					"cookie": [],
					"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
				},
				{
					"name": "Server error",
					"originalRequest": {
						"method": "GET",
						"header": [
							{
								"description": "Added as a part of security scheme: bearer",
								"key": "Authorization",
								"value": "Bearer <token>"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/decision/bin/:bin",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"decision",
								"bin",
								":bin"
							],
							"variable": [
								{
									"key": "bin",
									"value": "in ipsum qui",
									"description": "(Required) "
								}
							]
						}
					},
					"status": "Internal Server Error",
					"code": 500,
					"_postman_previewlanguage": "text",
					"header": [
						{
							"key": "Content-Type",
							"value": "text/plain"
						}
					],
					"cookie": [],
					"body": ""
				}
			]
		},
		{
			"name": "List Countries",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Accept",
						"value": "application/json"
					}
				],
				"url": {
					"raw": "{{baseUrl}}/country",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"country"
					]
				}
			},
			"response": [
				{
					"name": "Resource created",
					"originalRequest": {
						"method": "GET",
						"header": [
							{
								"description": "Added as a part of security scheme: bearer",
								"key": "Authorization",
								"value": "Bearer <token>"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/country",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"country"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Content-Type",
							"value": "application/json"
						}
					],
					"cookie": [],
					"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
				},
				{
					"name": "Unauthorized operation",
					"originalRequest": {
						"method": "GET",
						"header": [
							{
								"description": "Added as a part of security scheme: bearer",
								"key": "Authorization",
								"value": "Bearer <token>"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/country",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"country"
							]
						}
					},
					"status": "Unauthorized",
					"code": 401,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Content-Type",
							"value": "application/json"
						}
					],
					"cookie": [],
					"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
				},
				{
					"name": "Unauthorized operation",
					"originalRequest": {
						"method": "GET",
						"header": [
							{
								"description": "Added as a part of security scheme: bearer",
								"key": "Authorization",
								"value": "Bearer <token>"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/country",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"country"
							]
						}
					},
					"status": "Not Found",
					"code": 404,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Content-Type",
							"value": "application/json"
						}
					],
					"cookie": [],
					"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
				},
				{
					"name": "Server error",
					"originalRequest": {
						"method": "GET",
						"header": [
							{
								"description": "Added as a part of security scheme: bearer",
								"key": "Authorization",
								"value": "Bearer <token>"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/country",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"country"
							]
						}
					},
					"status": "Internal Server Error",
					"code": 500,
					"_postman_previewlanguage": "text",
					"header": [
						{
							"key": "Content-Type",
							"value": "text/plain"
						}
					],
					"cookie": [],
					"body": ""
				}
			]
		},
		{
			"name": "List States (AVS)",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Accept",
						"value": "application/json"
					}
				],
				"url": {
					"raw": "{{baseUrl}}/address_verification/states?type=in ipsum qui&country=in ipsum qui&currency=in ipsum qui",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"address_verification",
						"states"
					],
					"query": [
						{
							"key": "type",
							"value": "in ipsum qui"
						},
						{
							"key": "country",
							"value": "in ipsum qui"
						},
						{
							"key": "currency",
							"value": "in ipsum qui"
						}
					]
				}
			},
			"response": [
				{
					"name": "Resource created",
					"originalRequest": {
						"method": "GET",
						"header": [
							{
								"description": "Added as a part of security scheme: bearer",
								"key": "Authorization",
								"value": "Bearer <token>"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/address_verification/states?type=in ipsum qui&country=in ipsum qui&currency=in ipsum qui",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"address_verification",
								"states"
							],
							"query": [
								{
									"key": "type",
									"value": "in ipsum qui"
								},
								{
									"key": "country",
									"value": "in ipsum qui"
								},
								{
									"key": "currency",
									"value": "in ipsum qui"
								}
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Content-Type",
							"value": "application/json"
						}
					],
					"cookie": [],
					"body": "{\n  \"status\": false,\n  \"message\": \"eiusmod aliquip culpa id\",\n  \"data\": {}\n}"
				},
				{
					"name": "Unauthorized operation",
					"originalRequest": {
						"method": "GET",
						"header": [
							{
								"description": "Added as a part of security scheme: bearer",
								"key": "Authorization",
								"value": "Bearer <token>"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/address_verification/states?type=in ipsum qui&country=in ipsum qui&currency=in ipsum qui",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"address_verification",
								"states"
							],
							"query": [
								{
									"key": "type",
									"value": "in ipsum qui"
								},
								{
									"key": "country",
									"value": "in ipsum qui"
								},
								{
									"key": "currency",
									"value": "in ipsum qui"
								}
							]
						}
					},
					"status": "Unauthorized",
					"code": 401,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Content-Type",
							"value": "application/json"
						}
					],
					"cookie": [],
					"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
				},
				{
					"name": "Unauthorized operation",
					"originalRequest": {
						"method": "GET",
						"header": [
							{
								"description": "Added as a part of security scheme: bearer",
								"key": "Authorization",
								"value": "Bearer <token>"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/address_verification/states?type=in ipsum qui&country=in ipsum qui&currency=in ipsum qui",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"address_verification",
								"states"
							],
							"query": [
								{
									"key": "type",
									"value": "in ipsum qui"
								},
								{
									"key": "country",
									"value": "in ipsum qui"
								},
								{
									"key": "currency",
									"value": "in ipsum qui"
								}
							]
						}
					},
					"status": "Not Found",
					"code": 404,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "Content-Type",
							"value": "application/json"
						}
					],
					"cookie": [],
					"body": "{\n  \"status\": true,\n  \"message\": \"ipsum et eiusmod magna\"\n}"
				},
				{
					"name": "Server error",
					"originalRequest": {
						"method": "GET",
						"header": [
							{
								"description": "Added as a part of security scheme: bearer",
								"key": "Authorization",
								"value": "Bearer <token>"
							}
						],
						"url": {
							"raw": "{{baseUrl}}/address_verification/states?type=in ipsum qui&country=in ipsum qui&currency=in ipsum qui",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"address_verification",
								"states"
							],
							"query": [
								{
									"key": "type",
									"value": "in ipsum qui"
								},
								{
									"key": "country",
									"value": "in ipsum qui"
								},
								{
									"key": "currency",
									"value": "in ipsum qui"
								}
							]
						}
					},
					"status": "Internal Server Error",
					"code": 500,
					"_postman_previewlanguage": "text",
					"header": [
						{
							"key": "Content-Type",
							"value": "text/plain"
						}
					],
					"cookie": [],
					"body": ""
				}
			]
		}
	],
	"auth": {
		"type": "bearer",
		"bearer": [
			{
				"key": "token",
				"value": "<Bearer Token>",
				"type": "string"
			}
		]
	},
	"variable": [
		{
			"key": "baseUrl",
			"value": "https://api.paystack.co",
			"type": "string"
		}
	]
}