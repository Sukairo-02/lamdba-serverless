import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway'
import { formatJSONResponse } from '@libs/apiGateway'
import { middyfy } from '@libs/lambda'

import schema from './schema'

const nSumProd: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
	event
) => {
	try {
		const { n, data } = event.body
		let [sum, prod] = [0, 1]
		for (let i = 0; i < data.length && i < n; ++i) {
			sum += data[i]
			prod *= data[i]
		}

		return formatJSONResponse({ msg: 'Success!', sum, prod })
	} catch (e) {
		console.log(e)
		return formatJSONResponse({ msg: 'Something went wrong...' }, 500)
	}
}

export const main = middyfy(nSumProd)
