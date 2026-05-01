import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon,
} from 'n8n-workflow';

export class OpenMercatoRestApi implements ICredentialType {
	name = 'openMercatoRestApi';
	displayName = 'OpenMercato REST API';
	documentationUrl = 'https://github.com/open-mercato/n8n-nodes';
	icon: Icon = 'file:openmercato.svg';
	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://docs.openmercato.com',
			placeholder: 'https://docs.openmercato.com',
			description: 'The base URL of the OpenMercato API',
			required: true,
		},
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			description: 'Bearer token for authentication with the OpenMercato API',
			required: true,
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/api/api_keys/keys',
			method: 'GET',
		},
	};
}
