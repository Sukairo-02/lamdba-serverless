import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway'
import { formatJSONResponse } from '@libs/apiGateway'
import { middyfy } from '@libs/lambda'

import schema from './schema'

const objSort: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
	event
) => {
	try {
		const { data } = event.body

		const sorted = data.sort(
			(a, b) =>
				a.firstName.localeCompare(b.firstName) ||
				a.lastName.localeCompare(b.lastName) ||
				new Date(b.birthDate).getTime() -
					new Date(a.birthDate).getTime()
		)

		return formatJSONResponse({ msg: 'Success!', sorted })
	} catch (e) {
		console.log(e)
		return formatJSONResponse({ msg: 'Something went wrong...' }, 500)
	}
}

export const main = middyfy(objSort)
