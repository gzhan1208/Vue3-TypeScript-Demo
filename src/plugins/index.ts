export function loadAllPlugins(app: any) {
  const files = import.meta.glob('./*.ts', { eager: true })
  const keys = Object.keys(files);
  keys.forEach(async key => {
    const file: any = await files[key]
    if (typeof file.default === 'function') {
      (file.default)(app)
    }
  })
}
