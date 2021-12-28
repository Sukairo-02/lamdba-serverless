import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway'
import { formatJSONResponse } from '@libs/apiGateway'

const objSort: ValidatedEventAPIGatewayProxyEvent<unknown> = async () => {
	try {
		const today = new Date()
		const yearDayZero = new Date(`01.01.${today.getFullYear()}, 00:00:00`)
		const dayNum = Math.ceil(
			(today.getTime() - yearDayZero.getTime()) / 86400000
		)
		return formatJSONResponse({ msg: 'Success!', dayNum })
	} catch (e) {
		console.log(e)
		return formatJSONResponse({ msg: 'Something went wrong...' }, 500)
	}
}

export const main = objSort
