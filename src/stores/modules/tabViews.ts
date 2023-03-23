import type {StoreDefinition} from 'pinia'
import {defineStore} from 'pinia'
import type {RouteRecordRaw} from 'vue-router';

interface TabArr {
    name: string,
    path: string,
    tabs: Array<RouteRecordRaw>,
    closable: boolean
}
const initialTabsValue: TabArr[] = [
    { name: '首页', path: '/Layout', tabs: [], closable: true }
]
export const tabViewsStore: StoreDefinition = defineStore({
    id: 'tabViews',
    state: () => ({
        tabsValue: initialTabsValue,
        selectedValue: initialTabsValue[0].path
    }),
    actions: {
        addTab(tab, tabs) {
            this.selectedValue = tab.path
            const isExist = this.tabsValue.findIndex(v => v.path === this.selectedValue) !== -1
            !isExist && this.tabsValue.push({...tab, tabs})
        },
        removeTab(index) {
            this.tabsValue.splice(index, 1)
            this.selectedValue = this.tabsValue[index -1].path
        },
    }
})
