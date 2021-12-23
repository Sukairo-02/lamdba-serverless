import type { AWS } from '@serverless/typescript'

import hello from '@functions/hello'
import objSort from '@functions/objSort'

const serverlessConfiguration: AWS = {
	service: 'lambda-serverless',
	frameworkVersion: '2',
	plugins: ['serverless-esbuild'],
	provider: {
		name: 'aws',
		runtime: 'nodejs14.x',
		apiGateway: {
			minimumCompressionSize: 1024,
			shouldStartNameWithService: true,
		},
		environment: {
			AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
			NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
		},
		lambdaHashingVersion: '20201221',
		region: 'eu-north-1',
	},
	// import the function via paths
	functions: { hello, objSort },
	package: { individually: true },
	custom: {
		esbuild: {
			bundle: true,
			minify: false,
			sourcemap: true,
			exclude: ['aws-sdk'],
			target: 'node14',
			define: { 'require.resolve': undefined },
			platform: 'node',
			concurrency: 10,
		},
	},
}

module.exports = serverlessConfiguration
