export function loadAllPlugins(app: any) {
  const files = import.meta.glob('./*.ts')
  const keys = Object.keys(files);
  keys.forEach(async key => {
    const file: any = await files[key]()
    console.log('====> files', file.default)
    if (typeof file.default === 'function') {
      if (key !== './index.ts') file.default(app)
    }
  })
}