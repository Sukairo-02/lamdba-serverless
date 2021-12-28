import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway'
import { formatJSONResponse } from '@libs/apiGateway'
import { middyfy } from '@libs/lambda'

import schema from './schema'

const objSort: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
	event
) => {
	try {
		const { data } = event.body

		let sum = 0
		data.forEach((e) => (sum += e > 0 ? e : 0))
		return formatJSONResponse({
			msg: 'Success!',
			sum,
		})
	} catch (e) {
		console.log(e)
		return formatJSONResponse({ msg: 'Something went wrong...' }, 500)
	}
}

export const main = middyfy(objSort)
