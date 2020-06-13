const { NODE_ENV, BABEL_ENV } = process.env
const loose = true

module.exports = {
  presets: [['@babel/env', { loose, modules: false }]],
  plugins: [
    ['@babel/proposal-decorators', { legacy: true }],
    ['@babel/proposal-object-rest-spread', { loose }],
    '@babel/transform-react-jsx',
    ['@babel/transform-modules-commonjs', { loose }],
    [
      '@babel/transform-runtime',
    ]
  ].filter(Boolean)
}