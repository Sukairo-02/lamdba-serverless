export default {
	type: 'object',
	properties: {
		data: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					firstName: {
						type: 'string',
					},
					lastName: {
						type: 'string',
					},
					birthDate: {
						type: 'string',
						format: 'date-time',
					},
				},
			},
			required: ['firstName, lastName, birthDate'],
		},
	},
	required: ['data'],
} as const
