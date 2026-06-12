import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class FungeneratorsLotteryApi implements ICredentialType {
        name = 'N8nDevFungeneratorsLotteryApi';

        displayName = 'Fungenerators Lottery API';

        icon: Icon = { light: 'file:../nodes/FungeneratorsLottery/fungenerators-lottery.svg', dark: 'file:../nodes/FungeneratorsLottery/fungenerators-lottery.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Fungenerators Lottery API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
