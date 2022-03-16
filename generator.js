module.exports = api => {
  if (options.fxLogger) {
    api.render('./template', {
      doesCompile: api.hasPlugin('babel') || api.hasPlugin('typescript')
    })
  }
}
