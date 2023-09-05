module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'chatapp'),
			user: env('DATABASE_USERNAME', 'chatapp'),
			password: env('DATABASE_PASSWORD', 'chatapp'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
