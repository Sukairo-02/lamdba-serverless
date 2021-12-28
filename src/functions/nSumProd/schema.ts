export default {
	type: 'object',
	properties: {
		data: {
			type: 'array',
			items: {
				type: 'number',
			},
		},
		n: {
			type: 'integer',
		},
	},
	required: ['data', 'n'],
} as const
