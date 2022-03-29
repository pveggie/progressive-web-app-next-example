const appEnv = process.env.APP_ENV

export const appUrl = process.env.APP_URL
export const appTitle = 'Test'
export const appTitleAbbr = 'test'
export const hasMsSqlDatabase = true
export const isRedisEnabled = true
export const isDevEnv = ['dev', 'testing'].includes(appEnv)
export const isStaging = ['staging'].includes(appEnv)
export const isProduction = appEnv === 'production'
export const devAdmins = []
