import { defineStore } from 'pinia'
import type { StoreDefinition } from 'pinia'

const initialState: Array<object> = [
    { name: '首页', path: '/Layout' }
]
export const breadCrumb: StoreDefinition = defineStore({
    id: 'breadCrumb',
    state: () => ({
        breads: initialState,
    }),
    getters: {
        // getBreads: (state: any) => state.breads,
    },
    actions: {
        updateBread(path) {
            this.breads = [...initialState, ...path]
        }
    }
})
