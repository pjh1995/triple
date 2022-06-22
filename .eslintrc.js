const createConfig = require('@titicaca/eslint-config-triple/create-config')
const f = createConfig({ type: 'frontend', project: './tsconfig.json' })
module.exports = f
