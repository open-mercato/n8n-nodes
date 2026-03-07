import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';

import generatedProperties from './properties';
import { patchUploadProperties } from './uploadPreSend';

const properties = patchUploadProperties(generatedProperties);

export class OpenMercatoRestApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OpenMercato REST API',
		name: 'openMercatoRestApi',
		icon: 'file:openmercato.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the OpenMercato REST API',
		defaults: {
			name: 'OpenMercato REST API',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'openMercatoRestApi',
				required: true,
			},
		],
		requestDefaults: {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			baseURL: '={{$credentials.baseUrl}}/api',
		},
		properties,
	};
}
