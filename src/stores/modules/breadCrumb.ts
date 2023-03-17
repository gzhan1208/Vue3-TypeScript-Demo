import { defineStore } from 'pinia'
import type { StoreDefinition } from 'pinia'

const initialState: Array<string> = ['首页']
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
