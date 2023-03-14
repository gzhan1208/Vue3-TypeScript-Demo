export function loadAllPlugins(app: any) {
  const files = import.meta.glob('./.ts')
//   files.keys().forEach(key => {
    // if (typeof files(key).default === 'function') {
    //   if (key !== './index.ts') files(key).default(app)
    // }
//   })
}