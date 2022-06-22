const createConfig = require('@titicaca/eslint-config-triple/create-config')

const config = createConfig({
  type: 'frontend',
  project: './tsconfig.json',
})

module.exports = {
  ...config,
  extends: [...config.extends, 'standard', 'standard-jsx', 'prettier'],
  plugins: ['prettier'],
  rules: { ...config.rules },
}
