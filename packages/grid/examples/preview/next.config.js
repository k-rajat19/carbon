const { PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    return {
        basePath: '/grid/examples/preview',
        output: 'export',
        distDir: 'build',
    }
  }

  return defaultConfig;
}
