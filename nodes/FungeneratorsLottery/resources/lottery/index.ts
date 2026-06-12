import type { INodeProperties } from 'n8n-workflow';

export const lotteryDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Lottery"
					]
				}
			},
			"options": [
				{
					"name": "GET Lottery Countries",
					"value": "GET Lottery Countries",
					"action": "GET Lottery Countries",
					"description": "Get the complete list of countries supported in the number generation API.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lottery/countries"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /lottery/countries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lottery"
					],
					"operation": [
						"GET Lottery Countries"
					]
				}
			}
		},
];
