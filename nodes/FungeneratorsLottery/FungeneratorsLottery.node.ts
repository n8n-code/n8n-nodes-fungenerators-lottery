import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { lotteryDescription } from './resources/lottery';

export class FungeneratorsLottery implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Fungenerators Lottery',
                name: 'N8nDevFungeneratorsLottery',
                icon: { light: 'file:./fungenerators-lottery.svg', dark: 'file:./fungenerators-lottery.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'API documentation with interactive testing.',
                defaults: { name: 'Fungenerators Lottery' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevFungeneratorsLotteryApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Lottery",
					"value": "Lottery",
					"description": "Random Lottery number generation API"
				}
			],
			"default": ""
		},
		...lotteryDescription
                ],
        };
}
