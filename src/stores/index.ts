import { acceptHMRUpdate } from 'pinia'

const storesFiles = import.meta.glob('./modules/*.ts', { eager: true })

const getStores = (files: any = {}, routesModules: any = {}) => {
    for (const key in files) {
        if (!key) continue
        const storeModule = files[key]
        const storeKey = Object.keys(storeModule)[0]
        const store = { [storeKey]: storeModule[storeKey] }
        routesModules = {...routesModules, ...store}
    }
    return routesModules
}

const stores = getStores(storesFiles)

// hot load
if (import.meta.hot) {

    // stores.forEach((v: any) => {
    //     import.meta.hot!.accept(acceptHMRUpdate(v, import.meta.hot))
    // })
    // import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}

export default stores
