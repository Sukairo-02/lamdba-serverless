export default {
	type: 'object',
	properties: {
		data: {
			type: 'array',
			items: {
				type: 'number',
			},
		},
	},
	required: ['data'],
} as const
