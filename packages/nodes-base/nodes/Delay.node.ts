import {
	IExecuteSingleFunctions,
} from 'n8n-core';
import {
	IDataObject,
	INodeTypeDescription,
	INodeExecutionData,
	INodeType,
} from 'n8n-workflow';



export class Delay implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Delay execution',
		name: 'Delay',
		icon: 'fa:hourglass',
		group: ['transform'],
		version: 1,
		description: 'Delay execution',
		defaults: {
			name: 'Delay execution',
			color: '#CC2233',
		},
		inputs: ['main'],
		outputs: ['main'],
		properties: [
			{
				displayName: 'Delay in minutes',
				name: 'interval',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 1,
				description: 'Interval value.',
			},
		]
	};

	private delay(ms: number)
	{
	  return new Promise(resolve => setTimeout(resolve, ms));
	}

	async executeSingle(this: IExecuteSingleFunctions): Promise<INodeExecutionData> {
		const item = this.getInputData();

		const val = this.getNodeParameter('interval') as number;
		if (val <= 0) {
			throw new Error('The interval has to be set to at least 1 or higher!');
		}

		const newItem: INodeExecutionData = {
			json : {interval:val}
		};


		return newItem;
	}
}
