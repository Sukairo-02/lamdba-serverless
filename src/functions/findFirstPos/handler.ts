import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway'
import { formatJSONResponse } from '@libs/apiGateway'
import { middyfy } from '@libs/lambda'

import schema from './schema'

const findFirstPos: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
	event
) => {
	try {
		const { data } = event.body

		let pos, val
		if (
			data.some((e, a) => {
				if (e > 0) {
					val = e
					pos = a
					return true
				}
				return false
			})
		) {
			return formatJSONResponse({ msg: 'Success!', val, pos })
		} else {
			return formatJSONResponse(
				{ msg: 'No positive values found in input array!' },
				404
			)
		}
	} catch (e) {
		console.log(e)
		return formatJSONResponse({ msg: 'Something went wrong...' }, 500)
	}
}

export const main = middyfy(findFirstPos)
